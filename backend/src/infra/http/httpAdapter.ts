export interface HttpRequest {
    body?: any;
    headers?: any;
    params?: any;
    query?: any;
}

export interface HttpResponse {
    message: string;
    status: number;
    data?: any; 
}