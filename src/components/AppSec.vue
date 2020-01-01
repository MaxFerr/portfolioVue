<template>
  <div>
    <div class="row">
        <div class="side">
         <leftNav :lang="lang"></leftNav>
        </div>
      <div class="main">
        <transition name="slide" mode="out-in" >    
          <router-view :lang="lang" ></router-view> 
        </transition>
      </div>
    </div>
</div>
</template>

<script>
  import leftNav from './leftNav.vue'
export default {
  components:{
    leftNav
  },
  data(){
    return{      
    }
  },
  props:["lang"],
}
</script>

<style>

* {
  box-sizing: border-box;
}
body{
  height: 100%;
}
/* Column container */
.row {  
  display: flex;
  flex-wrap: wrap;  
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  width:70px;
  border: none;
  background: none;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  z-index: 1;     
}

/* Main column */
.main {
  flex: 3;
  background-color: #2F3945;
  padding: 10px;
  color: white;
  min-height:100vh;
}

.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}


@media screen and (max-width: 700px) {
  .row{   
    flex-direction: column;
  }
  .side {
    width: 100%;
    background-color: #2F3945;  
  }
}

</style>
