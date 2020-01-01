<template>
	<div id="aboutStyle" >    
    <img alt='img' src='../assets/love.jpg' id='imgLove'></img>
    <div class='alignLeft'>
            <p> {{lang==='EN'?'Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.':`Construire des sites Web et des applications de pointe, faciles à utiliser et intuitif est vraiment une de mes passions et je suis convaincu que je serais un excellent ajout à votre organisation. En plus de mes connaissances, je recherche activement de nouvelles technologies et reste à jour sur les tendances et les progrès de l'industrie.`}}</p>            
            <p>{{lang==='EN'?'I possess excellent communication skills and can liaise effectively with both clients and work colleagues. Other strong points include an ability to work as part of a team or individually.':`Je possède d'excellentes compétences en communication et je peux assurer une liaison efficace avec les clients et les collègues de travail. Mes autres points forts sont la capacité de travailler en équipe ou individuellement.`}}</p>
            <p>{{lang==='EN'?`I'm a well-organised person, problem solver, independent employee with high attention to detail.`:`Je suis une personne bien organisée, capable de résoudre des problèmes,  indépendante avec une grande attention aux détails.`}}</p>
            <br>
            <p v-if="lang==='EN'" >Visit my <a href="https://www.linkedin.com/in/max-ferr-5b3441187/">LinkedIn </a>profile for more details or just <router-link to="/max/contact">contact me</router-link>.</p>
            <p v-else>Visitez mon profil <a href="https://www.linkedin.com/in/max-ferr-5b3441187/">LinkedIn </a>pour plus de détails ou <router-link to="/max/contact">contactez-moi</router-link>.</p>
    </div>
</div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  props:["lang"]  
}
</script>
<style>
#imgLove{
  border-radius: 50%;
  width:150px;
  height:auto;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2); 
}

#aboutStyle{
    width: 60%;
    margin: auto;    
  }

.alignLeft{
    text-align: left;
}
</style>
