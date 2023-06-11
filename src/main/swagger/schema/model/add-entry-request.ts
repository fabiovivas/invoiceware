import { EntryTypeEnum } from '@/domain/enum'

const addEntryModelRequest = {
  type: 'object',
  properties: {
    type: {
      schema: {
        $ref: '#/schemas/entryType'
      }
    },
    value: {
      type: 'number'
    }
  },
  example: {
    type: EntryTypeEnum.Credit,
    value: 12
  },
  required: ['type', 'name']
}

export { addEntryModelRequest }
