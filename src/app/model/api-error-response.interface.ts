import { HttpStatusCode } from '@angular/common/http';

import { APIFieldError } from './api-field-error.interface';

export class ApiErrorResponse {
    timestamp: Date;
    status: HttpStatusCode;
    message: string;
    uuid: string;
    fieldErrors: APIFieldError[];
    path: string;
    httpMethod: string;
}
