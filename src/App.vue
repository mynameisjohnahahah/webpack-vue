<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
import './styles/index.css'
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>