export interface Alert {
    id: number | string;
    message: string;
    path?: string;
    error?: boolean;
}
