<template>
	<div>
		<font-awesome-icon class="langIco" icon="language"  v-click-outside='closedrop' @click="isOpenMeth"/>
			<ul v-if="isOpen" class="dropDownMenuHeader" >
	              <li class='dropDownItem' @click="langChange('EN')">English</li>              
	              <li class='dropDownItem' @click="langChange('FR')">Français</li>
	        </ul>  
	</div>
</template>
<script>
	export default{
		data(){
			return{
				isOpen:false,				
			}
		},
		props:['langChange'],
		methods:{
			closedrop(){
				this.isOpen=false
			},
			isOpenMeth(){
				this.isOpen=!this.isOpen
			}
		},
		directives: {
	    'click-outside': {
	      bind: function(el, binding, vNode) {
	        // Provided expression must evaluate to a function.
	        if (typeof binding.value !== 'function') {
	          const compName = vNode.context.name
	          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
	          if (compName) { warn += `Found in component '${compName}'` }
	          
	          console.warn(warn)
	        }
	        // Define Handler and cache it on the element
	        const bubble = binding.modifiers.bubble
	        const handler = (e) => {
	          if (bubble || (!el.contains(e.target) && el !== e.target)) {
	            binding.value(e)
	          }
	        }
	        el.__vueClickOutside__ = handler

	        // add Event Listeners
	        document.addEventListener('click', handler)
	      },
	      
	      unbind: function(el, binding) {
	        // Remove Event Listeners
	        document.removeEventListener('click', el.__vueClickOutside__)
	        el.__vueClickOutside__ = null
      }
    }
  }
	}
</script>
<style>
.langIco{
  color: white;
  float: right;
  font-size: 1.5em;
  margin-right: 10px;
  position: absolute;
  z-index: 3;
  top: 26px;
  right: 25px;
  cursor: pointer;
}

.dropDownMenuHeader{
	list-style-type: none;  
	background-color: #2F3945;  
	color: white;  
	position: absolute;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57); 
	z-index: 3;
	top: 42px;
	right: 0px;
}

.dropDownItem{
  padding: 10px;
  text-align: left;
  cursor: pointer;
}

.dropDownItem:hover{
  background-color: grey;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}
</style>