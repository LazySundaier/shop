<template>
  <div class="count-box">
    <button @click="HandleSub" class="minus">-</button>
    <input type="text" class="input" :value="value" @change="handleChange">
    <button @click="HandleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'countBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    HandleSub () {
      if (this.value < 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    HandleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.count-box{
  width: 110px;
  display: flex;
  .minus,.add {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .input {
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
