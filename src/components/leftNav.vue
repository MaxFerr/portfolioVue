<template>
	<div id="leftNavContainer">
		<div v-if="lang==='EN'" id="leftNavSubContainer">
	<router-link class="removeUnderline" to="/max/aboutMe">	
	<div class="leftNavBtn" @mouseover="change('firstIcone')" @mouseleave="hoverIone = false">
		<font-awesome-icon v-if="!hoverIone" icon="user-tie" />
		<p v-else class="hoverItext" ><VScrollin v-if="hoverIone" :speed="90" :misses="1">About</VScrollin></p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/mySkills">	
	<div class="leftNavBtn"  @mouseover="change('secondIcone')" @mouseleave="hoverItwo = false">		
		<font-awesome-icon v-if="!hoverItwo" icon="laptop-code" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverItwo" :speed="90" :misses="1">Skills </VScrollin> </p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/cv">
	<div class="leftNavBtn" @mouseover="change('thirdIcone')" @mouseleave="hoverIthree = false">
		<font-awesome-icon v-if="!hoverIthree" icon="file-invoice" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverIthree" :speed="90" :misses="1">CV</VScrollin></p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/myWorks">
	<div class="leftNavBtn" @mouseover="change('fourthIcone')" @mouseleave="hoverIfour = false">
		<font-awesome-icon v-if="!hoverIfour" icon="palette" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverIfour" :speed="90" :misses="1">Works</VScrollin></p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/contact">
	<div class="leftNavBtn" @mouseover="change('fithIcone')" @mouseleave="hoverIfive = false">
		<font-awesome-icon v-if="!hoverIfive" icon="envelope" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverIfive" :speed="90" :misses="1">Contact</VScrollin></p>
	</div>
	</router-link>
		</div>
			<div v-if="lang==='FR'" id="leftNavSubContainer">
	<router-link class="removeUnderline" to="/max/aboutMe">	
	<div class="leftNavBtn" @mouseover="change('firstIcone')" @mouseleave="hoverIone = false">
		<font-awesome-icon v-if="!hoverIone" icon="user-tie" />
		<p v-else class="hoverItext" ><VScrollin v-if="hoverIone" :speed="90" :misses="1">Apropos</VScrollin></p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/mySkills">	
	<div class="leftNavBtn"  @mouseover="change('secondIcone')" @mouseleave="hoverItwo = false">		
		<font-awesome-icon v-if="!hoverItwo" icon="laptop-code" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverItwo" :speed="90" :misses="1">Compé. </VScrollin> </p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/cv">
	<div class="leftNavBtn" @mouseover="change('thirdIcone')" @mouseleave="hoverIthree = false">
		<font-awesome-icon v-if="!hoverIthree" icon="file-invoice" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverIthree" :speed="90" :misses="1">CV</VScrollin></p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/myWorks">
	<div class="leftNavBtn" @mouseover="change('fourthIcone')" @mouseleave="hoverIfour = false">
		<font-awesome-icon v-if="!hoverIfour" icon="palette" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverIfour" :speed="90" :misses="1">Travaux</VScrollin></p>
	</div>
	</router-link>
	<router-link class="removeUnderline" to="/max/contact">
	<div class="leftNavBtn" @mouseover="change('fithIcone')" @mouseleave="hoverIfive = false">
		<font-awesome-icon v-if="!hoverIfive" icon="envelope" />
		<p v-else class="hoverItext"><VScrollin v-if="hoverIfive" :speed="90" :misses="1">Contact</VScrollin></p>
	</div>
	</router-link>
		</div>		
	</div>
</template>
<script >	
	export default {
  data() {
    return {      
      hoverIone:false,
      hoverItwo:false,
      hoverIthree:false,
      hoverIfour:false,
      hoverIfive:false,
    };
  },
  props:["lang"],
  methods:{  	
  	change : function(key) {
      if(key==="firstIcone"){
      	this.hoverIone=true
      }else if(key==="secondIcone"){
      	this.hoverItwo=true
      }else if(key==="thirdIcone"){
      	this.hoverIthree=true
      }else if(key==="fourthIcone"){
      	this.hoverIfour=true
      }else if(key==="fithIcone"){
      	this.hoverIfive=true
      }
    }
  }  
}
</script>

<style>		
	.removeUnderline{
		text-decoration: none;
	}
	.hoverItext{
		font-size: 0.5em;				
		
	}
	#leftNavSubContainer{
		background: none;
		height: 100%;		
	}

	#leftNavContainer{		
		color: white;		
		font-size: 1em;
		padding: 15px;
		border: none;
		background: none;
		height: 100%;
		-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	    box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57); 		
	}

	.leftNavBtn{		
		padding: 10px 5px 10px;
		color: white;		
		cursor: pointer;
		margin-left: -5px;
	}

	

	.btnHr{
		width:70%;
		border-radius: 15px;
		margin-top: 10px;
	}

	@media screen and (max-width: 700px) {
	  #leftNavSubContainer{
		  display: flex;
		  flex-direction: row;	  
		  justify-content: center;			
		}
		.leftNavBtn{		
			padding: 10px 5px 10px;
			color: white;		
			cursor: pointer;
			margin-left: 0px;
			margin-right: 20px;
			height: 35px;
			width: 35px;
			}
		}

		div.router-link-active {
	  color: purple;
		}
		a.router-link-active div {
		  color: purple;
		}


</style>