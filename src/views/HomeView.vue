<template>
  <div class="home">
  
   <navbar></navbar>

    <div class="headline">
    <div class="headtextbox">
    <div class="headtext1"><h1>Immer schnell bei dir</h1></div> <div class="headtext2"><h1 id="h1"></h1></div>
    </div>
    
  </div>
  <kategorien></kategorien>
  </div>
</template>

<script>
// @ is an alias to /src
import Kategorien from '@/components/Kategorien.vue';
import Navbar from '@/components/Navbar.vue'


export default {

  name: 'HomeView',
  
  components: {
    
   
    Kategorien,
    Navbar,
   
  }
}
</script>

<style scoped>
#Logo {
    width: 200px;
    height: 100px;
}


h1{
  color:white;
}

.headline{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.headtextbox{
  display: flex;
}

.headtext1{
display: flex;
margin-right:10px
}
.headtext2{
display: flex;
}

@media (max-width: 825px) {

  h1{
    font-size:35px
  }

.headtextbox{
  flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 525px) {

  h1{
    font-size:30px;
    text-align:center
  }
  
}

@media (max-width: 405px) {

  #h1{
    font-size:28px;
  text-align:center;
  margin-top:0px;
  }
 
}
  

</style>
