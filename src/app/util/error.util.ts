import { HttpErrorResponse } from '@angular/common/http';

export class ErrorUtil {

    static getMessage(e: HttpErrorResponse): string {
        const status: number = e.status;

        switch (status) {
            case 400:
                return status + ' ' + e.error.message;
            case 401:
                return status + ' ' + (e.error.error_description ?? e.error.message ?? e.statusText);
            case 404:
                return status + ' ' + (e.error.error ?? e.error.message);
            case 409:
                return e.error.message;
            case 504:
                return status + ' ' + e.statusText;
            default:
                return '(this is a default message) ' + status + ' ' + e.error.message;
        }
    }
}
