import { HttpErrorResponse } from '@angular/common/http';

export class ErrorUtil {

    static getMessage(e: HttpErrorResponse) {
        switch (e.status) {
            case 400:
                return e.error.error;
            case 401:
                return e.error.error_description ?? e.error.message ?? e.statusText;
            case 404:
                return e.error.error ?? e.error.message;
            case 504:
                return e.statusText;
            default:
                return e.error.message;
        }
    }
}
