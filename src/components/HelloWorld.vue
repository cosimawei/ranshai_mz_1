<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-carousel
      indicator-position="none"
      arrow="never"
      :autoplay="true"
      @change="change"
      ref="customeCarousel"
    >
      <el-carousel-item>
        <el-table
          :data="tableData"
          border
          height="200"
          :summary-method="getSummaries"
          show-summary
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="id" label="ID" width="180"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="amount1" label="数值 1（元）">
          </el-table-column>
          <el-table-column prop="amount2" label="数值 2（元）">
          </el-table-column>
          <el-table-column prop="amount3" label="数值 3（元）">
          </el-table-column>
        </el-table>
      </el-carousel-item>
      <el-carousel-item> 321</el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tableBox',
  data () {
    return {
      tableData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        },
        {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        },
        {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }
      ]
    }
  },
  props: {
    tableList: { type: Array },
    msg: { type: String }
  },
  setup () {
    const change = () => {
      console.log(123)
    }
    return { change }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
