<template>
	<div>
    <div class="row">
         <div class="side">
          <leftNav></leftNav>
          </div>
          <div class="main">
            <myWorks />
  			<Photo :lang="lang" />
        </div>
    </div>
</div>	
</template>
<script>
import Photo from './Photo.vue';
import myWorks from './myWorks.vue';
import leftNav from './leftNav.vue';
export default {  
  components: {
    Photo,
    myWorks,
    leftNav
  },
  props:["lang"]
};
</script>