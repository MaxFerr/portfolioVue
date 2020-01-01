<template>
  <div id="app">
    <Language :langChange="onLangChange" />    
    <transition :name="transitionName" :mode="transitionMode">    
      <router-view :lang="lang"></router-view> 
    </transition>   
  </div>
</template>

<script> 
export default {
  data () {
    return {
      transitionName: 'slide',
      transitionMode:'out-in',
      lang:'EN'
    }
  },
  methods:{
    onLangChange(lang){
      this.lang=lang      
    }
  },
  watch: {
  '$route' (to, from) {
    const toDepth = to.name
    const fromDepth = from.name   
     if(toDepth==='infoWork' && fromDepth==='works' || toDepth==='works' && fromDepth=='infoWork'){
      this.transitionName='fade'
      this.transitionMode='in-out'
     }else{
      this.transitionName='slide'
      this.transitionMode='out-in'
     }    
  }
}
}
</script>

<style>
#app {
   height: 100%;
    font-family: 'Michroma', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
}
html, body {
    height: 100%;
  }

body {
    margin: 0;
    background-color: #2F3945;    
  }

.fade-enter-active{
 animation:fade-in 600ms ease-out forwards;
}

.fade-leave-active{
  animation:fade-out 0ms ease-out forwards;
}

.slide-enter-active{
  animation:slide-in 600ms ease-out forwards;
}

.slide-leave-active{
  animation:slide-out 600ms ease-out forwards;
}

@keyframes slide-in{
  from{
    transform:translateY(-1000px);
    opacity: 0;
  }
  to{
    transform:translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out{
  from{
    transform:translateY(0);
    opacity: 1;
  }
  to{
    transform:translateY(-1000px);
    opacity: 0;
  }
}

@keyframes fade-in{
  from{    
    opacity: 0;
  }
  to{    
    opacity: 1;
  }
}

@keyframes fade-out{
  from{    
    opacity: 1;
  }
  to{    
    opacity: 0.8;
  }
}

</style>
