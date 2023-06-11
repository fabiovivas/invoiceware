import { addEntry, getAllEntry } from '@/main/swagger/path/entry'

const paths = {
  '/entry/add': addEntry,
  '/entry/get-all': getAllEntry
}

export { paths }
