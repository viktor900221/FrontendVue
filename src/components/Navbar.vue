<template>
 <div class="navbar">   


<div class="dropdown">
 <img  id="profil" alt="profil" src="../assets/user1.png">
<div class="dropdown-content profil">
 <li>Meine Daten</li>
  <li>Bestellungen</li>
   <li>Punkte</li>
 </div>
 </div>
 

 <div class="dropdown">
 <!--<img  id="einkaufswagen" alt="einkaufswagen" src="../assets/einkaufswagen.png">-->
 <img src="../assets/shopcar3.gif" id="einkaufswagen" alt="image description">
 <h6 class="ArtikelSummeWarenkorb"></h6>
<div class="dropdown-content einkauf">
 <h6>Artikel im Korb:</h6>
<h6> Artikel</h6>

 <!--For schleife so viele Produkte die gerade reingemacht werden-->
 <ul>
  <li></li>   
  <li>€</li>
  <button class="warenkorbX" @click="deletePizza()">X</button>
 
 
 </ul>

 <h6>
 Summe:€</h6>
 <button class="warenkorbKaufen" @click="toBuy()">Kaufen</button>

 </div>
 </div>

<img  id="logout" alt="logout" @click="logout" class="logout" src="../assets/check-out.png">

</div>

</template>

<script>

export default {
name: "Navbar",

}
</script>

<style scoped>


.navbar{
    position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  min-height: 50px;
    background-color: #20183fb3;
    box-shadow: 1px 1px 1px 1px white;
    text-align: end;
}

.profil{
    height:60px;
}

.logout{
        margin:5px;
        margin-right:20px;
    cursor: pointer;
}

#einkaufswagen{
    margin:5px;
    margin-right:20px;
    cursor: pointer;
}

#profil{
    margin:5px;
    margin-right:20px;
    cursor: pointer;
    
}

img{
    width: 50px;

}

.ArtikelSummeWarenkorb{
  
  position: absolute;
  color: #ffffff;
    position: absolute;
    right: 20%;
    top: 60%;
    font-size: 18px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #20183fb3;
  min-width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  text-align:start;
  color: aliceblue;
  transition: all 0.2s ease;
}

ul{
  padding-left:5px;
}
li {
    font-size: 11px;
    list-style-type: none;
}

h6{
    margin: 0px;
}

.profil{
right:-10%;
}

.einkauf{
    right: -15%;
 
}

.dropdown:hover .dropdown-content {
  display: block;
   animation: opacity 700ms ease-in-out normal;
}

.warenkorbX{
  background-color: #d53f3f;
}
.warenkorbKaufen{
  background-color: #ffb700;
      padding: 4px 20px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
    transition: 0.5s;
}

@keyframes opacity { 
    from { opacity:0; } 
    to { opacity: 1; } 
}
@-moz-keyframes opacity { 
    from { opacity: 0; } 
    to { opacity: 1; } 
}
@-ms-keyframes opacity { 
    from {opacity:0; } 
    to { opacity: 1; } 
}
@-o-keyframes opacity { 
    from {opacity:0; } 
    to { opacity: 1; } 
}
@-webkit-keyframes opacity { 
    from { opacity:0; } 
    to { opacity: 1; } 
}
</style>