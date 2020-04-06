<template>
  <div class="box" :style="{color:input}">
    <h1>hi</h1>
    <h1>{{input}}</h1>
    <button v-if="!isLog">Log in</button>
    <button v-else>Log Out</button>
    <ul>
      <!-- <li v-for="number in numbers" : key="number">  {{number}}</li> -->
      <li v-for="i in items" :key="i.message">{{ i.message }}</li>
      <li v-for="i in box" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "John",
      age: 20,
      isMale: true,
      input: "red",
      box: [1, 2, 3, 4, 5, 6],
      items: [{ message: "Foo" }, { message: "Bar" }],
      isLog: false
    };
  }
};
</script>
<style>
.box {
  width: 500px;
  background-color: wheat;
  padding-bottom: 500px;
  margin: 0 auto;
}
</style>