<template>
    <div class="kategorien">   
      
       <img  id="logo" alt="logopizza" src="../assets/test2.gif">
   <!---->
<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
       <img  id="pizza1" alt="pizza" class="kategorieImg" src="../assets/pizza.png">
       
       
       <router-link to="/pizzen">Pizzen</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
        <img  id="flasche" alt="flasche" class="kategorieImg" src="../assets/flasche.png">
      
       
      
        <router-link to="/getraenke">Getränke</router-link>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="box">
      <div class="content">
        <img  id="nachspeise" alt="nachspeise" class="kategorieImg" src="../assets/kuchen.png">
      
        
      
        <router-link to="/kuchen">Kuchen</router-link>
      </div>
    </div>
  </div>
  
</div>
        
      </div>
   
</template>

<script>

export default {
name: "Kategorien",
methods:{
   
},

}

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #232427;
}

body .container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}

body .container .card {
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
}

body .container .card:nth-child(1) .box .content a {
  background: #2196f3;
}

body .container .card:nth-child(2) .box .content a {
  background: #e91e63;
}

body .container .card:nth-child(3) .box .content a {
  background: #23c186;
}

body .container .card .box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}

body .container .card .box:hover {
  transform: translateY(-50px);
}



body .container .card .box .content {
    display: flex;
    flex-direction: column;
  padding: 20px;
  text-align: center;
}

body .container .card .box .content h2 {
  position: absolute;
  top: -10px;
  right: 30px;
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.1);
}

body .container .card .box .content h3 {
  font-size: 1.8rem;
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
}

body .container .card .box .content p {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;
  transition: 0.5s;
}

body .container .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: rgb(240, 231, 231);
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
body .container .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}

.kategorien{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.kategorieImg{
    width:150px
}

#logo {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
}


</style>
  