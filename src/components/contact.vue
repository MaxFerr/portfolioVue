<template>
	   <div class="contactCont" >      
          <div class='typoStyle' variant="h5" component="h3">
            <div style="marginTop: '10px'">
                <h3 data-aos="fade-right" data-aos-delay="350" data-aos-offset="0" data-aos-duration="800"><VScrollin v-if="delay" :speed="90" :misses="2">CONTACT</VScrollin> </h3>
                <hr data-aos="fade-left" data-aos-delay="350" data-aos-offset="0" data-aos-duration="800"/>
                <p data-aos="fade-right" data-aos-delay="350" data-aos-offset="0" data-aos-duration="800">
                {{lang==='EN'?'Have a question or want to work together?'
                :`Une question ? Vous voulez que l'on travaille ensemble ?`}} 
                </p> 
                  <div data-aos="fade-left" data-aos-delay="350" data-aos-offset="0" data-aos-duration="800">                
                    <input class='iptStyle' type="text" name="name" :placeholder="lang==='EN'?'Name':'Nom'"
                      v-model='name'
                    /><br/>
                    <input style="marginTop:'-30px'" class='iptStyle' type="text" name="mail" placeholder='Email'
                      v-model='email'
                    /><br/>
                    <textarea
                    v-model='message'                
                    id="myText" 
                    :placeholder="lang==='EN'?'Your Message':'Votre message'"
                    rows="5" 
                    cols="45" 
                    style="height:'70px',marginTop:'-30px'"              
                    >
                    </textarea>                
                    <input class='iptStyle2' type="submit" :value="lang==='EN'?'Send':'Envoyer'"
                      @click='onSubmit()'
                    />                  
                  </div>
                  <span id='sendMaillErr'></span>              
                </div>                  
          </div>       
      </div>
</template>
<script>
export default{
	data(){
		return{
			name:'',
			email:'',
			message:'',
      delay:false

		}
	},
  props:["lang"],
	methods:{
		onSubmit(){
    const sendMaillErr=document.getElementById('sendMaillErr');
    this.lang==='EN'?sendMaillErr.innerHTML="Sending email...":sendMaillErr.innerHTML=`Envoi d'un e-mail ...`    
      if(this.email==='' || this.message==='' || this.name==='' ){
         sendMaillErr.style.color="red"
         this.lang==='EN'?sendMaillErr.innerHTML="You must complete all the fields !":sendMaillErr.innerHTML="Vous devez remplir tous les champs !"                
      }else{                
        fetch('https://maxferr-api.herokuapp.com/sendmail',{
          method:'post',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            email:this.email,
            message:this.message,
            name:this.name
          })
        })
        .then(response=>{       
          return response.json()
        })
        .then(resp=>{          
          if(resp==='email sent'){
            sendMaillErr.style.color="green"
            this.lang==='EN'?sendMaillErr.innerHTML="Email sent !":sendMaillErr.innerHTML="Email envoyé!"      
            
          }else {
            sendMaillErr.style.color="red"
            this.lang==='EN'?sendMaillErr.innerHTML="Email could not be sent."
            :sendMaillErr.innerHTML=`Le mail n'a pas pu être envoyé.`            
          }        
        })      
      }
    },
    delayVscrollin(){
      let em=this;
      setTimeout(function(){
        em.delay=true
      },500)
    }
	},
  created(){   
    this.delayVscrollin()    
  }
}

</script>

<style>

.contactCont{
	width: 70%;
  margin: auto;
}

.iptStyle{
	display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #1E242C;
  font-size: 12pt;
  margin-bottom: 3px;
  color: #fff;
}

textarea{
	display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #1E242C;
  font-size: 12pt;
  margin-bottom: 3px;
  color: #fff;
}

form{
	margin-left: 5%;
	margin-right: 5%;
}

.iptStyle2{ 
  cursor: pointer;
  margin-top:10px;    
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

.iptStyle2:hover{
  color: #ffffff !important;
  font-weight: 700 !important;
  letter-spacing: 3px;
  background: #404040;
  transition: all 0.3s ease 0s;  
}

#paperStyle{
  margin-left: 4%;
  margin-right: 4%;
}

@media all and (max-width: 600px){
  #paperStyle{
    margin-left: 1%;
    margin-right: 1%;
  }
}
</style>