const getAllEntry = {
  get: {
    tags: ['Entry'],
    sumary: 'Manage lifecyle of customer entry',
    parameters: [{
      name: 'type',
      in: 'query',
      schema: {
        type: 'number'
      },
      required: false
    }],
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/getAllEntryModelResponse'
            }
          }
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export { getAllEntry }
