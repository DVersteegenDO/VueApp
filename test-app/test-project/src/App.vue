<template>
  <div id="topBar">
    <h1>{{greeting}}</h1>
  </div>

  <div id="components_container">
    <artist-item></artist-item>
    <timer-item></timer-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#topBar {
  background-color: rgb(64, 64, 64, 0.8);
  color: whitesmoke;
  margin: 10px;
  padding: 10px;
}

body {
  background-color: rgb(170, 170, 170);
}

#components_container {
  display: flex;
  flex-direction: row;
}

.container {
  border: solid 3px black;
  width: 540px;
  margin: 10px;
  padding: 10px;
}

button {
  border: solid 3px black;
  padding: 3px 5px;
  font-size: 14px;
  font-weight: bolder;
}
</style>