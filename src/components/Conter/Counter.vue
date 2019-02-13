<template>
  <div>
    <h2>Counter</h2>
    <div>{{ counter.index }}</div>
    <button @click="decrement()">
      -
    </button>
    <button @click="increment()">
      +
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    counter: state => state.counter,
  }),
  methods: {
    ...mapActions('counter', [
      'increment',
      'decrement',
    ]),
  },
};
</script>

<style scoped>

</style>
