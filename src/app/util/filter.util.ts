import { DropdownItem } from '../model/dropdown-item.interface';
import { FilterProp } from '../model/filter-prop.interface';
import { PartOfSpeech } from '../model/part-of-speech.enum';

export class FilterUtil {
    static getPartOfSpeechDropdownItems(): DropdownItem<PartOfSpeech>[] {
        const partsOfSpeech: PartOfSpeech[] = Object.values(PartOfSpeech);

        return partsOfSpeech.map((partOfSpeech: PartOfSpeech) => ({
            value: partOfSpeech,
            selected: false
        }));
    }

    static getFreshProps(): FilterProp[] {
        return [
            { key: 'theWord', pHolder: 'word', value: undefined, filterBy: false },
            { key: 'definition', pHolder: 'definition', value: undefined, filterBy: false },
            { key: 'createdBy', pHolder: 'created by', value: undefined, filterBy: false }
            // make learnt a checkbox.
            // { key: 'learnt', pHolder: 'learnt', value: undefined, filterBy: false }
        ];
    }
}
