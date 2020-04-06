<template>
  <div class="box">Hiii {{num}}</div>
</template>

<script>
export default {
  props: ["num"]
};
</script>

<style>
.box {
  width: 500px;
  background-color: red;
  padding-bottom: 500px;

  margin: 100px auto;
}
</style>