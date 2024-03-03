import tableSelf from './src/table-slef'

tableSelf.install = function(Vue) {
  Vue.component(tableSelf.name, tableSelf)
}

export default tableSelf