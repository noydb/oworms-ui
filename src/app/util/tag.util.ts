import { SelectOption } from '../model/select-option.interface';
import { Tag } from '../model/tag.interface';

export class TagUtil {

    static mapTagsToOptions(tags: Tag[], selected = false): SelectOption[] {
        if (!tags) {
            return [];
        }

        return tags.map((tag: Tag) => TagUtil.mapTagToOption(tag, selected));
    }

    static mapTagToOption({ id, name, wordCount }: Tag, selected = false): SelectOption {
        return {
            selected,
            value: id,
            titleLabel: name,
            label: `${name} (${wordCount ?? 0})`
        };
    }
}
