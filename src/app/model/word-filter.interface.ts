export type filterType = string | undefined | null;

export interface WordFilter {
    theWord?: filterType;
    definition?: filterType;
    partOfSpeech?: filterType;
    createdBy?: filterType;
    haveLearnt?: filterType;
}
