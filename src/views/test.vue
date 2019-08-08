<template>
  <div>
    <div class="home">我是test</div>
    <button @click="navigationFunc">跳转首页</button>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {}
  },
  methods: {
    navigationFunc() {
      this.$router.push({path: '/'})
    }
  }
}
</script>