export interface WordFilter {
    word?: string;
    partsOfSpeech?: string[];
    definition?: string;
    origin?: string;
    example?: string;
    tags?: string[];
    note?: string;
    uuids?: string[];
    createdBy?: string;
    size: number;
}
