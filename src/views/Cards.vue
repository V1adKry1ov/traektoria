<template>
  <div class="cards">
    <Card v-for="el in arr" :key="el.id" :card="el" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => (this.arr = response.json()))
      .then((json) => (this.arr = json));
  }
};
</script>
<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
