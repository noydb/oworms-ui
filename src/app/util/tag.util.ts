import { SelectOption } from '../model/select-option.interface';
import { Tag } from '../model/tag.interface';

export class TagUtil {

    static mapTagsToOptions(tags: Tag[], selected = false): SelectOption[] {
        if (!tags) {
            return [];
        }

        return tags.map((tag: Tag) => TagUtil.mapTagToOption(tag, selected));
    }

    static mapTagNamesToOptions(tags: string[]): SelectOption[] {
        if (!tags) {
            return [];
        }

        return tags.map((name: string) => ({ value: name, label: name, titleLabel: name, selected: true } as SelectOption));
    }

    static mapTagToOption({ id, name, words }: Tag, selected = false): SelectOption {
        return {
            selected,
            value: id,
            titleLabel: name,
            label: `${name} (${words?.length ?? 0})`
        };
    }
}
