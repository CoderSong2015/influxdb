import {range} from 'lodash'
import {Row, LoadRows} from 'src/eventViewer/types'

export const fakeLoadRows: LoadRows = async ({
  offset,
  limit,
  now,
}): Promise<Row[]> => {
  await new Promise(res => setTimeout(res, 1000))

  return range(offset, offset + limit).map(i => {
    return {
      time: now - 1000 * 30 * i,
      message: `hello from row ${i}`,
      status: 'OK',
      tags: {
        host: 'pt2ph8',
        environment: 'dev',
      },
    }
  })
}
