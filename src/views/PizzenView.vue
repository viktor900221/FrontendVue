<template>
    <div class="home">
     <navbar></navbar>
        <div class="headline">
            <HomeHeader></HomeHeader>
        </div>
        
        <GetPizzen></GetPizzen>
        <ButtonBack></ButtonBack>
    </div>
</template>
  
<script>
  // @ is an alias to /src
  
  import HomeHeader from '@/components/HomeHeader.vue';
  import GetPizzen from '@/components/GetPizzen.vue';
  import Navbar from '@/components/Navbar.vue';
  import ButtonBack from '@/components/ButtonBack.vue';

  
  export default {
    name: 'PizzenView',
    components: {
      
      HomeHeader,
      GetPizzen,
      Navbar,
      ButtonBack
     
    }
  }
</script>
  
<style scoped>
  #Logo {
      width: 200px;
      height: 100px;
    }
  
  #logopizza {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
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
</style>