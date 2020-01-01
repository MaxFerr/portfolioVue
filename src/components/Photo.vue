<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="photoUrl(singleSite.img)">
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <h1>{{singleSite.title}}</h1>
        <p>{{lang==='EN'?singleSite.descritpion:singleSite.description_fr}}</p>
        <a v-bind:style="{ 'display': 'inline-block' }" :href="singleSite.link">Demo</a><br>
        <a :href="singleSite.link_git">Front-end Code</a><br>
        <a v-if='!(singleSite.link_server===null)' :href="singleSite.link_server">Back-end Code</a>
      </div>
    </div>
  </div>
</template>
<script>

export default {  
  data() {
    return {
      photos:[],
      singleSite:null
    };
  },
  props:["lang"],
  computed: {
    photo() {
      return this.photos.find((photo) => {
        if(photo.m_sites_id === Number(this.$route.params.id)){
          return this.singleSite={
                    id:photo.m_sites_id,
                    descritpion:photo.descritpion,
                    description_fr:photo.description_fr,
                    link:photo.link,
                    link_server:photo.link_server,
                    title:photo.title,
                    link_git:photo.link_git,
                    img:photo.img
                  }
        }        
      });
    },
  },
  methods: {
    photoUrl(filename) {
      return require(`../assets${filename}`);
    },
    closeLightbox() {
	  this.$router.push('/max/myWorks');
	}
  },
  created(){
        fetch('https://maxferr-api.herokuapp.com/')
        .then(response=>{
              return response.json()
            })
            .then(site=>{          
              this.photos=site
              this.photo;                                   
            })
        
    }
};
</script>
<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .lightbox img {
    margin: auto;
    width: 100%;
    grid-column-start: 2;    
  }
  .lightbox-info {
  	width: 100%;
    margin: auto 2rem auto 0; 
    grid-column-start: 2;  
  }
  .lightbox-info-inner {
    background-color: #2F3945;
    display: inline-block;
    padding: 2rem;
    color: white;
  }

  @media all and (max-width: 750px) {
 .lightbox img {
    display: none;
  }
  .lightbox-info {  	
    margin-left: 0;  
  }

   .lightbox-info-inner {
    background-color: #2F3945;    
    display: inline-block;
    padding: 2rem;
    color: white;
    font-size: 0.7em;
  }

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0rem;
  }
  
}
</style>