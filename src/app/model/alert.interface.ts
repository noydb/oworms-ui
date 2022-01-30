export interface Alert {
    id: number | string;
    message: string;
    timeout: number;
    path?: string;
    error?: boolean;
}
