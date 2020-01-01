<template>
  <div id="skillsStyle">
    <div class="skillIconeContainer">
        <div class="subContainer">
          <div class='dot flipper fadeIco '>
            <font-awesome-icon class="skillsIconeS"  icon="laptop" />
          </div>
          <div class=' fade-in fade-in1 fadeIco'>
            <h5>{{lang==='EN'?'Responsive':'Réactif'}} </h5>
            <p class='pStyle'>{{lang==='EN'?'My layouts will work on any device, big or small.'
          :'Mes applications fonctionnent sur tous les appareils, grands ou petits.'}}</p>
        </div>           
      </div>
      <div class="subContainer">
        <div class='dot flipper2 fadeIco'>
          <font-awesome-icon class="skillsIconeS" icon="wifi" />
        </div>
        <div class=' fade-in fade-in2 fadeIco'>
          <h5>{{lang==='EN'?'Fast':'Rapide'}}</h5>
          <p class='pStyle'>{{lang==='EN'?'Fast load times and lag free interaction, my highest priority.'
        :'Des temps de chargement rapides et une interaction sans délai, ma plus haute priorité.'}}</p> 
      </div>        
    </div>
    <div class="subContainer">
      <div class='dot flipper3 fadeIco'>
        <font-awesome-icon class="skillsIconeS" icon="server" />
      </div>
      <div class=' fade-in fade-in3 fadeIco'>
        <h5>{{lang==='EN'?'Dynamic':'Dynamique'}}</h5>
        <p class='pStyle'>{{lang==='EN'?'I love working with servers, it makes the website alive !'
      :`J'adore travailler avec des serveurs, ça rend le site vivant!`}}</p>
    </div>           
  </div>
  <div class="subContainer">
    <div class='dot flipper4 fadeIco'>
      <font-awesome-icon class="skillsIconeS" icon="compass" />
    </div>
    <div class='fade-in fade-in4 fadeIco'>
      <h5>{{lang==='EN'?'Intuitive':'Intuitif'}}</h5>
      <p class='pStyle'>{{lang==='EN'?'Always working on an easy to use UI.'
    :'Je travaille toujours sur une interface utilisateur facile à utiliser.'}}</p>
  </div> 
  </div>
</div>
<div class="skillTxtContainer">
  <div class="txtContFlex" data-aos="slide-right" data-aos-duration="1000" data-aos-offset="0">    
    <font-awesome-icon class="txtIcone" icon="code" />
    <div class="alignLeft">
      <p>{{lang==='EN'?'The main area of my expertise is full stack development (databases,servers and clients) in both web  and mobile applications.'
    :`Mon domaine principal est le développement full stack (bases de données, serveurs et front-end) d'applications web et mobiles.`}}</p>
    <p>{{lang==='EN'?'HTML, CSS, JS , building small and medium apps with React, React Native, Vue, Node, features, animations, and interactive layouts.'
  :'HTML, CSS, JS, création de petites et moyennes applications avec React, React Native, Vue, Node, fonctionnalités, animations et mises en page interactives.'}}</p>
</div>                     
</div>
<div class='skillsContFlex' data-aos="slide-left"  data-aos-duration="1000" data-aos-offset="0">                  
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200"  data-aos-offset="0"> 
      <div class='tag flex'>Html</div>             
    </div> 
    <span>80<span class="displayPer">%</span></span>            
  </div>
  <div class='bar flex'>
    <div class='bar fill'data-aos="fill-anim3" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0"> 
      <div class='tag flex'>Css</div>             
    </div> 
    <span>70<span class="displayPer">%</span></span>        
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0"> 
      <div class='tag flex'>Javascript</div>             
    </div> 
    <span>80<span class="displayPer">%</span></span>        
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim2" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0"> 
      <div class='tag flex'>jQuery</div>             
    </div> 
    <span>60<span class="displayPer">%</span></span>        
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0"> 
      <div class='tag flex'>Reactjs</div>             
    </div> 
    <span>80<span class="displayPer">%</span></span>        
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0"> 
      <div class='tag flex'>Nodejs</div>             
    </div> 
    <span>80<span class="displayPer">%</span></span>        
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0"> 
      <div class='tag flex'>SQL</div>             
    </div> 
    <span>80<span class="displayPer">%</span></span>        
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim1" data-aos-duration="3000" data-aos-delay="200"  data-aos-offset="0"> 
      <div class='tag flex size'>ReactNat</div>             
    </div> 
    <span>80<span class="displayPer">%</span></span>            
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim2" data-aos-duration="3000" data-aos-delay="200"  data-aos-offset="0"> 
      <div class='tag flex'>Scss/sass</div>             
    </div> 
    <span>60<span class="displayPer">%</span></span>            
  </div>
  <div class='bar flex'>
    <div class='bar fill' data-aos="fill-anim3" data-aos-duration="3000" data-aos-delay="200" data-aos-offset="0" > 
      <div class='tag flex'>Vue</div>             
    </div> 
    <span>70<span class="displayPer">%</span></span>            
  </div>
</div>              
</div>
</div>
</template>
<script>
  export default{
    props:['lang']
  }

</script>

<style>
.displayPer{
  font-family: sans-serif;
}

.progBarSkills{
  width: 500px;
  background-color: white;
}


.subContainer{
  width: 350px;
  padding: 10px;
  margin-right: 5px;
}

#skillsStyle{
  width: 100%;
  margin: auto;
  min-height: 97.5vh;
  height:100%;    
}

.skillsIconeS{
  font-size: 2em;
  margin-top: 35px;
}

.skillIconeContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;    
}

@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }



.fade-in1 {
  -webkit-animation-name: fadeIn ;
          animation-name: fadeIn ;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;   
}
.fade-in2 {
  -webkit-animation-name: fadeIn ;
          animation-name: fadeIn ;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;   
}
.fade-in3 {
  -webkit-animation-name: fadeIn ;
          animation-name: fadeIn ;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;   
}
.fade-in4 {
  -webkit-animation-name: fadeIn ;
          animation-name: fadeIn ;
  -webkit-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;   
}
.pStyle{
  margin-top:-25px;
}

.dot {
  height: 100px;
  width: 100px;
  background-color: #292628;
  border-radius: 50%;  
  margin: auto;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);    
}

@-webkit-keyframes flip {
  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); opacity: 0; }
  50% { -webkit-transform: rotateY(55deg); transform: rotateY(55deg);opacity: 0.5; }
  100% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg);opacity: 1; }
}

.fadeIco{
  opacity: 0;
}

.flipper {
  -webkit-animation-name: flip;
          animation-name: flip;
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;  
}

.flipper2 {
  -webkit-animation-name: flip;
          animation-name: flip;
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;    
}

.flipper3 {
  -webkit-animation-name: flip;
          animation-name: flip;
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;    
}

.flipper4 {
  -webkit-animation-name: flip;
          animation-name: flip;
  -webkit-animation-duration: 1.2s;
          animation-duration: 1.2s;
  -webkit-animation-fill-mode: forwards;
          animation-fill-mode: forwards;
  -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;    
}

.bar .tag {
    top: 0;
    left: 0;
    position: absolute;
    background-color: #292628;
    color: #fff;
    height: 100%;
    width: 110px;    
}
.bar span {
    display: initial;
    z-index: 1;
    padding: 0 15px 0 0;
}
.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.bar {
    color: #666;
     height: 28px;
    position: relative;
    background-color: #eee;
    margin: 0 0 15px 0;
    align-items: flex-end;
    font-size: 11pt;    
}

.bar.fill {
    top: 0;
    left: 0;
    position: absolute;
    background-color: #42313B; 
    padding: 0;
    opacity: 1;    
}

[data-aos="fill-anim1"] {  
  width: 0;  
  transition-property: width;
}

[data-aos="fill-anim1"].aos-animate {    
    width: 80%;
  
}

[data-aos="fill-anim2"] {  
  width: 0;  
  transition-property: width;
}

[data-aos="fill-anim2"].aos-animate {    
    width: 60%;
  
}

[data-aos="fill-anim3"] {  
  width: 0;  
  transition-property: width;
}

[data-aos="fill-anim3"].aos-animate {    
    width: 70%;
  
}

.skillTxtContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center; 
    margin-top: 25px;     
}


.txtContFlex{
max-width: 600px;
padding: 10px; 
}

.skillsContFlex{
    width: 40%; 
    padding: 10px;
}

@media screen and (max-width: 1200px) {
  .skillsContFlex{
    width: 90%; 
    padding: 10px;
    }
}

.txtIcone{
    font-size: 6em;
    margin-bottom: 10px;    
    text-align: center !important;
}


</style>