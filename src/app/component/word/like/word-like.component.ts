import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

import { AlertService } from '../../../service/alert.service';
import { UserService } from '../../../service/user.service';

import { Unsubscribes } from '../../../util/auto-unsubscribe.directive';

import { User } from '../../../model/user.interface';
import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-like',
    templateUrl: './word-like.component.html',
    styleUrls: ['./word-like.component.scss']
})
@Unsubscribes()
export class WordLikeComponent {

    @Input()
    word: Word;

    private likedWordUUIDs: string[] = [];

    constructor(private readonly alertService: AlertService,
                private readonly userService: UserService) {
        this
            .getLikedWords()
            .pipe(take(1))
            .subscribe({
                next: (likedWordUUIDs: string[]) => {
                    this.likedWordUUIDs = likedWordUUIDs;
                }
            });
    }

    get isLiked(): boolean {
        return this.likedWordUUIDs?.includes(this.word.uuid);
    }

    likeWord($event: Event, word: Word): void {
        $event.preventDefault();
        $event.stopPropagation();

        this.userService
            .likeWord(word.uuid)
            .pipe(
                take(1),
                switchMap(() => this.getLikedWords()),
                take(1)
            )
            .subscribe({
                next: (likedWordUUIDs: string[]) => {
                    this.likedWordUUIDs = likedWordUUIDs;
                    if (this.isLiked) {
                        this.alertService.add('liked word successfully');
                    } else {
                        this.alertService.add('unliked word successfully');
                    }
                },
                error: (e: HttpErrorResponse) => {
                    this.alertService.add(e.error.message, true);
                }
            });
    }

    private getLikedWords(): Observable<string[]> {
        return this.userService
            .getLoggedInUser()
            .pipe(
                filter((user: User) => !!user),
                map(({ likedWords }: User) => likedWords.map((word: Word) => word.uuid)),
                take(1)
            );
    }
}
