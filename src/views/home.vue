<template>
  <div>
    <div class="home">我是首页</div>
    <button @click="navigationFunc">跳转test页面</button>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
      navigationFunc() {
          this.$router.push({path: '/test'})
      }
  }
}
</script>