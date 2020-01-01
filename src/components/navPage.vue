<template>
	<div class="navPageContainer">			
		<router-link to="/max/aboutMe">
			<div class="flip-card" @mouseover="aboutHover = true" @mouseleave="aboutHover = false">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<div>
							<font-awesome-icon class="mainNavIco" icon="user-tie" />
						</div>
					</div>
					<div class="flip-card-back">
						<p v-if="aboutHover" class="flip-card-back-txt" ><strong><VScrollin  :speed="70" :misses="2">{{lang==='EN'?'About':'À propos'}} </VScrollin></strong></p>		      
					</div>
				</div>
			</div>
		</router-link>
		<router-link to="/max/mySkills">
			<div class="flip-card" @mouseover="aboutHover = true" @mouseleave="aboutHover = false">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<div>
							<font-awesome-icon class="mainNavIco" icon="laptop-code" />
						</div>
					</div>
					<div class="flip-card-back">
						<p v-if="aboutHover" :class="lang==='EN'?'flip-card-back-txt':'flip-card-back-txt-fr'"><strong><VScrollin  :speed="70" :misses="2">{{lang==='EN'?'My Skills':'Mes Compétences'}}</VScrollin></strong></p>		      
					</div>
				</div>
			</div>
		</router-link>
		<router-link to="/max/cv">
			<div class="flip-card" @mouseover="aboutHover = true" @mouseleave="aboutHover = false">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<div>
							<font-awesome-icon class="mainNavIco" icon="file-invoice" />
						</div>
					</div>
					<div class="flip-card-back">
						<p v-if="aboutHover" class="flip-card-back-txt"><strong><VScrollin  :speed="70" :misses="2">{{lang==='EN'?'My CV':'Mon CV'}}</VScrollin></strong></p>		      
					</div>
				</div>
			</div>
		</router-link>
		<router-link to="/max/myWorks">
			<div class="flip-card" @mouseover="aboutHover = true" @mouseleave="aboutHover = false">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<div>
							<font-awesome-icon class="mainNavIco" icon="palette" />
						</div>
					</div>
					<div class="flip-card-back">
						<p v-if="aboutHover" :class="lang==='EN'?'flip-card-back-txt':'flip-card-back-txt-fr2'"><strong><VScrollin  :speed="70" :misses="2">{{lang==='EN'?'My Works':'Mes Travaux'}}</VScrollin></strong></p>		      
					</div>
				</div>
			</div>
		</router-link>
		<router-link to="/max/contact">
			<div class="flip-card" @mouseover="aboutHover = true" @mouseleave="aboutHover = false">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<div>
							<font-awesome-icon class="mainNavIco" icon="envelope" />
						</div>
					</div>
					<div class="flip-card-back">
						<p v-if="aboutHover" class="flip-card-back-txt"><strong><VScrollin  :speed="70" :misses="2">Contact</VScrollin></strong></p>		      
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>
<script>	
	export default{
		data(){
			return {
				aboutHover:false
			}
		},
		props:['lang']     
}

</script>
<style scoped>
	

.navPageContainer{
	display: flex;  		
	justify-content:center;
	flex-wrap:wrap;
	align-items:center;
	background-color: #2F3945;
	min-height: 100%;
	perspective: 1000px;
	transform-style: preserve-3d;
	z-index: 2;
	position: relative;

}

.mainNavIco{		
	color: #2F3945;
}


.flip-card {
  background-color: transparent;
  width: 130px;
  height: 130px;  
  border-radius: 100px;
  perspective: 1000px; /*  3D effect */
  margin: 5px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: white;
  color: black;
  font-size: 5em;
}

/* Style the back side */
.flip-card-back {
  background-color: white;
  color: #2F3945;
  transform: rotateY(180deg);  
}

.flip-card-back-txt{
	margin-top: 50px;
}

.flip-card-back-txt-fr{
	margin-top: 45px;
	font-size: 0.7em;		
}

.flip-card-back-txt-fr2{
	margin-top: 50px;
	font-size: 0.9em;
}


</style>
