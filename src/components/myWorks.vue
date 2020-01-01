<template>
	<div>    
    <h3>{{lang==='EN'?'MY WORKS':'MES TRAVAUX'}}</h3>   
    <hr class="hrWorksS"/>
    <p v-if="loadingWorks">{{lang==='EN'?'Loading...':'Chargement...' }}</p>
    <div v-else class="workContainer">
        <div class="imgCont" v-for="(work,i) in works" :key="work.m_sites_id" @mouseover="imgHover=work.m_sites_id" @mouseleave="imgHover=null" >
            <router-link :to="`/photo/${work.m_sites_id}`">
                    <div v-if="imgHover===work.m_sites_id" :class="lang==='EN'?'imageTxt':'imageTxtFR'" >
                        <p><strong><VScrollin  :speed="70" :misses="2">{{lang==='EN'?'View':'Voir' }}</VScrollin>
                        </strong></p> 
                        <p v-if="lang==='FR' " ><strong><VScrollin  :speed="70" :misses="2">le</VScrollin>
                        </strong></p>
                        <p><strong><VScrollin  :speed="70" :misses="2">{{lang==='EN'?'Project':'Projet'}}</VScrollin></strong></p>        
                    </div>
            <img class="imgStyle" :src="getImgUrl(work.img)">
            </router-link>
        </div>        
    </div>    
</div>
</template>
<script>
    export default{
    data (){
        return{
            works:[],           
            loadingWorks:true,
            imgHover:null
        }
    },
    props:["lang"],
    methods:{
        getImgUrl(imgLink) {
            return require('../assets'+imgLink)           
          }, 
    },
    beforeCreate(){
        this.loadingWorks=true;
        fetch('https://maxferr-api.herokuapp.com/')
        .then(response=>{
              return response.json()
            })
            .then(site=>{          
              this.works=site
              this.loadingWorks=false;                        
            })
    },    
}
</script>

<style>

.imageTxtFR{
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 0.7em;
    border-radius: 100px;
    width: 100px;
    height: 100px;    
    text-decoration: none;
    position: absolute;         
    z-index: 2;
    margin-left: 13.5em;
    margin-top: 2em;
}

.imageTxt{    
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 0.7em;
    border-radius: 100px;
    width: 75px;
    height: 75px;    
    text-decoration: none;
    position: absolute;         
    z-index: 2;
    margin-left: 14.7em;
    margin-top: 2em;
    
}

.workContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;    
    justify-content:center;
    position: relative;
      text-align: center;
      color: white;    
    padding: 0;
}

.imgCont{
  
}

.hrWorksS{
    width: 70%;
}

.imgStyle{
width:400px;
height:auto;
transition: all 1s;
padding: 5px;
z-index: 1;
}
.imgStyle:hover{
    transform: scale(1.1);
}

@media all and (max-width: 600px) {
  .imgStyle{
    width:90%;
    height: auto;
    margin-left: 0px;
    padding: 0px;
    border-radius: 0px;
  } 

  .imageTxt{    
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 0.7em;
    border-radius: 100px;
    width: 75px;
    height: 75px;    
    text-decoration: none;
    position: absolute;         
    z-index: 2;
    margin-left: 17.5em;
    margin-top: 2em;
    
    }

    .imageTxtFR{
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 0.7em;
    border-radius: 100px;
    width: 100px;
    height: 100px;    
    text-decoration: none;
    position: absolute;         
    z-index: 2;
    margin-left: 20.5em;
    margin-top: 2em;
}
  
}

</style>