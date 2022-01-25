import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LocalStorageService } from '../../../service/local-storage.service';

@Component({
    selector: 'ow-credentials',
    templateUrl: 'credentials.component.html',
    styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {

    form: FormGroup;

    constructor(private readonly lsService: LocalStorageService) {
        this.form = new FormGroup({
            u: new FormControl(lsService.get('u'), [Validators.required]),
            p: new FormControl(lsService.get('p'), [Validators.required])
        });
    }

    get buttonDisabled(): boolean {
        return this.form?.invalid;
    }

    submit(): void {
        this.lsService.set('u', this.form.get('u')?.value);
        this.lsService.set('p', this.form.get('p')?.value);

        alert('saved credentials');
    }

    cancel(): void {
        this.form.reset();
    }
}
