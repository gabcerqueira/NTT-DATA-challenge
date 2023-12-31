export type HttpMethod = "post" | "get" | "put" | "delete";

export type HttpRequest = {
  url?: string;
  method: HttpMethod;
  body?: Object;
  headers?: any;
};

export enum HttpStatusCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};
