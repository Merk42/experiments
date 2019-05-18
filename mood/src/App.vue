<template>
  <div id="app">
    <router-view></router-view>
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
header{
  padding:1rem 0;
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

#menuButton{
  position: fixed;
  bottom: 0;
  left: 0;
}
aside{
    position:fixed;
    top:0;
    bottom:0;
    
    transform:translateX(-100%);
    transition:transform .5s;

    max-width: 80vw;
}

.menu~aside{
    transform:translateX(0);
}

#closeMenu{
    background-color:#000;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity:0;
    pointer-events:none;
    
    transition:opacity .5s;
}

.menu~#closeMenu{
    opacity:.5;
    pointer-events:auto;
}
</style>