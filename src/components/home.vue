<template>
	<div id="homeStyle">
		<img class="homeImg" src="../assets/webdev.jpg">
	<div class="wrap-banner">
      <div v-if="lang==='EN'" class="main-title">
        <div class="textHeight">
      	<p class="mainIntroS">
      		<strong> <vue-typer
            :text='["Hi,"]'            
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :repeat='0'
            caret-animation='expand'
          ></vue-typer></strong>            
        </p> 
        <p class="mainIntroS">
          <strong> <vue-typer
            :text='["i am Max."]'            
            initial-action='typing'
            :pre-type-delay='1000'
            :type-delay='70'
            :repeat='0'
            caret-animation='expand'
          ></vue-typer></strong>            
        </p>               
        <p class="mainIntroS">
        	<strong><vue-typer
            :text='["Full stack web developer."]'            
            initial-action='typing'
            :pre-type-delay='1500'
            :type-delay='70'
            :repeat='0'
            caret-animation='solid'
          ></vue-typer></strong>
        </p>
        <p>
          <em><vue-typer
            :text='["Do you want to know more about me ?"]'            
            initial-action='typing'
            :pre-type-delay='3500'
            :type-delay='70'
            :repeat='0'
            caret-animation='solid'
          ></vue-typer></em>
        </p>
          </div>    
	    <div  v-if="!doneProg" id="mainProgressBarS">
	    	<div id="progressBarS" :style="{width:progressWidth} " >	    		
	    	</div>
	    </div>
	    <div class="loadContainer">
	    <p class="loadS">{{load()}}</p>
	    </div>      
	    <transition name="fade">
    		<router-link v-if="doneProg" to="/navPage">
    			<div  class="mainBtnS">Click here !</div>
    		</router-link> 
    	</transition>     	
      </div>
            <div v-if="lang==='FR'" class="main-title">
        <div class="textHeight">
        <p class="mainIntroS">
          <strong> <vue-typer
            :text='["Salut,"]'            
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :repeat='0'
            caret-animation='expand'
          ></vue-typer></strong>            
        </p> 
        <p class="mainIntroS">
          <strong> <vue-typer
            :text='[`Je suis Max.`]'            
            initial-action='typing'
            :pre-type-delay='1000'
            :type-delay='70'
            :repeat='0'
            caret-animation='expand'
          ></vue-typer></strong>            
        </p>               
        <p class="mainIntroS">
          <strong><vue-typer
            :text='["Développeur web Full stack."]'            
            initial-action='typing'
            :pre-type-delay='2000'
            :type-delay='70'
            :repeat='0'
            caret-animation='solid'
          ></vue-typer></strong>
        </p>
        <p>
          <em><vue-typer
            :text='["Voulez-vous en savoir plus sur moi ?"]'            
            initial-action='typing'
            :pre-type-delay='4000'
            :type-delay='70'
            :repeat='0'
            caret-animation='solid'
          ></vue-typer></em>
        </p>
          </div>    
      <div  v-if="!doneProg" id="mainProgressBarS">
        <div id="progressBarS" :style="{width:progressWidth} " >          
        </div>
      </div>
      <div class="loadContainer">
      <p class="loadS">{{load()}}</p>
      </div>      
      <transition name="fade">
        <router-link v-if="doneProg" to="/navPage">
          <div  class="mainBtnS">Cliquez ici !</div>
        </router-link> 
      </transition>       
      </div>      	
		 <vue-particles
        color="#ffffff"
        :particleOpacity="0.5"
        linesColor="#ffffff"
        :particlesNumber="70"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="200"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="repulse"
      >
      </vue-particles>
		 </div>		
	</div>
</template>
<script>
import { VueTyper } from 'vue-typer'  
	export default{
		data(){
			return {
				progressWidth:0,
				doneProg:false,
				widthNum:0,
        counter:0,
        msg:''
			}
		},
    props:["lang"],
    components:{
      VueTyper
    },     
		methods:{
			progress(){
				let em=this;				
				let interId=setInterval(function(){
					if (em.widthNum >= 100) {
					clearInterval(interId)
					em.doneProg=true
					}else{
						em.widthNum=em.widthNum+0.5
					em.progressWidth=em.widthNum+'%'					
					}					
				},20 )								
			},
			load(){
				if (this.widthNum<20) {
					return 'Loading assets ...'
				}else if(this.widthNum>20 && this.widthNum<50){
					return 'Loading skills ...'
				}else if(this.widthNum>50 && this.widthNum<80){
					return 'Loading works ...'
				}else if(this.widthNum>80 && this.widthNum<99){
					return 'Loading CV ...'
				}else if(this.widthNum===100){
					return ''
				}
			},      
		},
		created(){
			this.progress()                   
		},      
	}
</script>

<style>

.textHeight{
  min-height: 17vh;  
  min-width: 15vw;
  margin: auto; 
  text-align: left; 
}

.vue-typer .custom.caret.pre-type {
  display: none;
}

.vue-typer .custom.caret.typing {
  background-color: white;
  width: 2px;
}

.custom.char {
  color: white;
}

.vue-typer {
  color: white;
}
#homeStyle{	
	height:100%;
}
#mainProgressBarS{
	width: 300px;
	height: 3px;
	background-color: white;
	border-radius: 15px;
  margin: auto;
  margin-top: 10px;
}

#progressBarS{
	width: 0;	
	height: 3px;
	background-color: lightblue;
	border-radius: 15px;
}

.loadS{
	font-size: 0.5em;
}
.loadContainer{
	height: 20px;
}
.mainIntroS{
	font-size: 1.5em;
}

.homeImg{
	background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.wrap-banner {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  justify-content: center;
}
.main-section {
  max-width: 650px;
  margin: auto;
  padding: 0 1rem;
}  

.particles-js-canvas-el{
  position: absolute;
  top: 0;
  left: 0;    
}
.main-title {
 margin-top:30%;  	
 color: #fff;
 z-index: 999;    
 max-width:50%;    
}

@media (max-width: 1000px){
  .main-title{
   margin-top:25%;
   text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
 }
 
}
@media (max-width: 800px){
    .main-title{
     margin-top:0%;
     text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
   }

   #mainProgressBarS{
    width: 250px;
    height: 3px;
    background-color: white;
    border-radius: 15px;
    margin: auto;
    margin-top: 10px;
  }

}

.mainBtnS {

	border: none;
	background: none;
	color: #ffffff !important;
	font-weight: 55;
	padding: 15px;
	text-transform: uppercase;
	border-radius: 6px;
	display: inline-block;
	transition: all 0.3s ease 0s;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
}

.mainBtnS:hover {
  color: #ffffff !important;
  font-weight: 700 !important;
  letter-spacing: 3px;
  background: #404040;
  transition: all 0.3s ease 0s;
}

.fade-enter-active {
  transition: opacity .8s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

  
</style>