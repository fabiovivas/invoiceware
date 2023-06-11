export type IHttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type IHttpRequest = {
  body?: any
  headers?: any
  params?: any
  query?: any
  files?: any
}
