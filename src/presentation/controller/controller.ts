import { badRequest, serverError } from '@/presentation/helper'
import { type IHttpRequest, type IHttpResponse } from '@/presentation/protocols'

export abstract class Controller {
  abstract perform (httpRequest: IHttpRequest): Promise<IHttpResponse>

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validate(httpRequest)
    if (error) return badRequest(error)

    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return serverError(error)
    }
  }

  abstract validate (httpRequest: IHttpRequest): Error | undefined
}
