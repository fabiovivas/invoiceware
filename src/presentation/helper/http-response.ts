import { ServerError } from '@/presentation/error'
import { type IHttpResponse } from '@/presentation/protocols'

export const ok = <T = any>(data: T): IHttpResponse<T> => ({
  statusCode: 200,
  data
})

export const badRequest = (error: Error): IHttpResponse<Error> => ({
  statusCode: 400,
  data: error
})

export const serverError = (error: any): IHttpResponse<Error> => ({
  statusCode: 500,
  data: new ServerError(error instanceof Error ? error : undefined)
})
