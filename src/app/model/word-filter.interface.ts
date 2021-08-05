export type filterType = string | undefined | null;

export interface WordFilter {
    theWord?: filterType;
    definition?: filterType;
    partsOfSpeech?: string[];
    createdBy?: filterType;
    haveLearnt?: filterType;
}
