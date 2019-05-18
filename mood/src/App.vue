<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin:0;
  padding:0;
  text-align: center;
}
p, h1{
  margin:0
}
h1 {
  margin:1rem 0;
}
label{
  font-family:sans-serif
}
#app{
  height:100vh
}
#app.low{
  background-color:lightgreen;
}
#app.medium{
  background-color:yellow;
}
#app.high{
  background-color:red;
}
#app.worst{
  background-color:darkred;
  color:#FFF
}
button{
  position:fixed;
  bottom:0;
}
</style>