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

<style>
    .greeting {
        font-size: 20px;
    }
</style>
