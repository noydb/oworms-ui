import { ParamMap } from '@angular/router';

import { PartOfSpeech } from '../model/part-of-speech.enum';
import { SelectOption } from '../model/select-option.interface';

export class FilterUtil {
    static getPartOfSpeechDropdownItems(): SelectOption[] {
        const partsOfSpeech: PartOfSpeech[] = Object.values(PartOfSpeech);

        return partsOfSpeech.map((partOfSpeech: PartOfSpeech) => ({
            value: partOfSpeech,
            selected: false,
            label: partOfSpeech,
            titleLabel: partOfSpeech
        }));
    }

    static getChunksForSelect(): SelectOption[] {
        return [
            { value: 0, label: 'Show all', selected: false },
            { value: 6, label: 'Show 6', selected: false },
            { value: 12, label: 'Show 12', selected: false },
            { value: 24, label: 'Show 24', selected: false },
        ];
    };

    static getFilterLabels(qParamsMap: ParamMap): string[] {
        let filters: string[] = [];

        const word: string = qParamsMap.get('word');
        if (!!word?.trim()) {
            filters.push(`Word: ${word}`);
        }

        const partsOfSpeech: string[] = qParamsMap.getAll('pos');
        if (!!partsOfSpeech[0]?.trim()) {
            filters = [...filters, ...partsOfSpeech[0].split(',')];
        }

        const definition: string = qParamsMap.get('definition');
        if (!!definition?.trim()) {
            filters.push(`Definition: ${definition}`);
        }

        const origin: string = qParamsMap.get('origin');
        if (!!origin?.trim()) {
            filters.push(`Origin: ${origin}`);
        }

        const example: string = qParamsMap.get('exampleUsage');
        if (!!example?.trim()) {
            filters.push(`Example: ${example}`);
        }

        const note: string = qParamsMap.get('note');
        if (!!note?.trim()) {
            filters.push(`Note: ${note}`);
        }

        const tags: string[] = qParamsMap.getAll('tags');
        if (!!tags[0]?.trim()) {
            filters = [...filters, ...tags[0].split(',')];
        }

        return filters;
    }
}
