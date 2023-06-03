import { HttpErrorResponse } from '@angular/common/http';

import { ApiErrorResponse } from '../model/api-error-response.interface';

export class ErrorUtil {

    static getMessage(e: HttpErrorResponse): string {
        const status: number = e.status;
        const apiError: ApiErrorResponse = e.error;

        let message = '';
        switch (status) {
            case 400:
                message = apiError.message;
                break;
            case 401:
                message = e.error.error_description ?? apiError.message ?? e.statusText;
                break;
            case 403:
                message = apiError.message;
                break;
            case 404:
                message = (e.error.error ?? apiError.message);
                break;
            case 409:
                message = apiError.message;
                break;
            case 504:
                message = e.statusText;
                break;
            default:
                message = '(unexpected error) ' + apiError.message;
        }

        return status + ' | ' + message;
    }
}
