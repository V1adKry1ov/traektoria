<template>
  <div class="card-body">
    <h1 class="card-body__title">{{ card.title }}123</h1>
    <p class="card-body__text">{{ card.body }}123</p>
  </div>
</template>
<script>
export default {
  props: {
    card: Object
  }
};
</script>
<style>
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-body__title {
  color: #4343aa;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.card-body__text {
  color: #333333;
  font-size: 20px;
}
</style>
