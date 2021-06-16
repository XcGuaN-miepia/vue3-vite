import CommonStore, { key as commonKey } from './common'
import TestStore, { key as testKey } from './test'

const modules = [{
  module: CommonStore,
  key: commonKey
}, {
  module: TestStore,
  key: testKey
}]

export default modules
