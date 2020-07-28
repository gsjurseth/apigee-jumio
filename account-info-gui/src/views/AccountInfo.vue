<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p><AccountInfo msg="So you'd like to check your balance"/></p>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountInfo from '@/components/AccountInfo.vue'

export default {
  name: 'AccountInfo',
  components: {
    AccountInfo
  }
}
</script>
