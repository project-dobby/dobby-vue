<template>
  <div id="app">
    <div class="greeting">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hi',
    };
  },
};
</script>

<style lang="scss" scoped>
  @import 'home.scss';
</style>
