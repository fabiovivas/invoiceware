import { type AddEntryNamespace, type IAddEntry } from '@/domain/usecase'
import { Controller } from '@/presentation/controller'
import { RequiredFieldError } from '@/presentation/error'
import { ok } from '@/presentation/helper'
import { type IHttpResponse, type IHttpRequest } from '@/presentation/protocols'

export class AddEntryController extends Controller {
  constructor (private readonly entry: IAddEntry) { super() }

  async perform (httpRequest: IHttpRequest): Promise<IHttpResponse<AddEntryNamespace.Result>> {
    const { type, value } = httpRequest.body
    const result = await this.entry.add({ type, value })
    return ok(result)
  }

  validate (httpRequest: IHttpRequest): Error | undefined {
    const requiredFields = ['type', 'value']

    for (const field of requiredFields) {
      if (!Object.prototype.hasOwnProperty.call(httpRequest.body, field)) {
        return new RequiredFieldError(field)
      }
    }
  }
}
