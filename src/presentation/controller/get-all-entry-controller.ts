import { EntryTypeEnum } from '@/domain/enum'
import { type IGetAllEntry, type GetAllEntryNamespace } from '@/domain/usecase'
import { Controller } from '@/presentation/controller'
import { ok } from '@/presentation/helper'
import { type IHttpResponse, type IHttpRequest } from '@/presentation/protocols'

export class GetAllEntryController extends Controller {
  constructor (private readonly entry: IGetAllEntry) { super() }

  async perform (httpRequest: IHttpRequest): Promise<IHttpResponse<GetAllEntryNamespace.Result>> {
    const type = (<any>Object).values(EntryTypeEnum).includes(Number(httpRequest?.query.type))
      ? httpRequest?.query.type
      : undefined
    const result = await this.entry.get({ type })
    return ok(result)
  }

  validate (httpRequest: IHttpRequest): Error | undefined {
    return undefined
  }
}
