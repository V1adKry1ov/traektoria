<template>
  <div class="card">
    <router-link
      :to="{
        name: 'CardBody',
        params: {
          card,
          id: card.id
        }
      }"
    >
      <h2 class="cards__title">{{ card.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  width: 400px;
  min-height: 150px;
  padding: 5px 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
  background-color: #fff;
  box-shadow: 0 30px 30px rgb(0, 0, 0, 0.1);
  transition: all 0.25s;
  border-radius: 20px;
}
.card:hover {
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
  transform: translate(0, -6px);
  transition-delay: 0s !important;
}
.cards__title {
  color: #333333;
  transition: all 0.4s;
  font-size: 20px;
  font-weight: 700;
  border: none;
}
.cards__title:hover {
  color: #4343aa;
}
</style>
