
<template>

  <div class="hello">
    <div class="left-hand"></div> 
    <div class="person">
      <router-link :to="{name:'q1' , query:{type:1},params:{step:1}}"><div class="f-like"></div></router-link>
      <router-link :to="{name:'q1' , query:{type:0},params:{step:1}}"><div class="f-wenke"></div></router-link>
    </div>
    <div class="right-hand"></div>
    <div class="gk"></div>
    <div class="question"></div>
    <div class="t"></div>
    <div class="f"></div>
  </div>
</template>
<script>
export default {
  

}
</script>

<style>
.hello{
  width:100%;
  height:100%;
  position: relative;
  display:flex;
  }
  .person{
    width:80%;
    height:11rem;
    margin:0 auto;
    background:pink;
    background: url(../../static/imgs/home-pepole.png) no-repeat;
    background-size: 100%;
    display: flex;
  }
  .person a{
    display: block;
    width:100%;
    height:40%;
    margin-top:60%;
    position: relative;
  }
  .person .f-like{
    width:100%;
    height:40%;
    background:url(../../static/imgs/f-like.png) no-repeat;
    background-size:100px;
    position:absolute;
    top:30%;
    left:20%;
  }
  .person .f-wenke{
    width:100%;
    height:40%;
    background:url(../../static/imgs/f-wenke.png) no-repeat;
    background-size:90px;
    position:absolute;
    top:25%;
    left:20%;
  }
  .left-hand{
    width:10%;
    height:70%;
    background: url(../../static/imgs/home-left-hand.png) no-repeat;
    background-position: 0 90%;
    background-size:100%;
    
  }
  .right-hand{
    width:10%;
    height:70%;
    background: url(../../static/imgs/home-right-hand.png) no-repeat;
    background-position: 0 90%;
    background-size:100%;
    
  }
  .gk{
      width: 50%;
      height: 70px;
      margin-left: 30%;
      background: url(../../static/imgs/home-title.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 40px;


  }
  .question{
    width: 60%;
    height: 30px;
    margin-left: 20%;
    background: url(../../static/imgs/f-select.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 180px;

  }
  .t{
    width: 30px;
    height: 50px;
    background: url(../../static/imgs/home-icon-1.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 400px;
    left: 20%;
}
.f{
    width: 30px;
    height: 30px;
    background: url(../../static/imgs/home-icon-2.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 380px;
    right: 20%;

}
</style>
