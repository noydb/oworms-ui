import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'chunkPipe'
})
export class ChunkPipe implements PipeTransform {
    transform(value: any, numberOfElements: number): any {
        if (!value || !Array.isArray(value)) {
            return [];
        }

        return value.slice(0, numberOfElements - 1);
    }
}
