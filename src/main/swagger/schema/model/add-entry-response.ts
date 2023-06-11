import { EntryTypeEnum } from '@/domain/enum'

const addEntryModelResponse = {
  type: 'object',
  properties: {
    type: {
      type: 'object',
      properties: {
        id: {
          schema: {
            $ref: '#/schemas/entryType'
          }
        }
      }
    },
    value: {
      type: 'number'
    }
  },
  example: {
    type: {
      id: EntryTypeEnum.Credit
    },
    value: 12
  }
}

export { addEntryModelResponse }
