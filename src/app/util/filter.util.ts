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
}
