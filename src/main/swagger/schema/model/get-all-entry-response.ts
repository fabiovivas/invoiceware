const getAllEntryModelResponse = {
  type: 'array',
  items: {
    id: {
      type: 'string'
    },
    value: {
      type: 'number'
    }
  },
  example: [{
    id: 'uuid',
    value: 12
  }]
}

export { getAllEntryModelResponse }
