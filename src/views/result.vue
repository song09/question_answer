<template>
	<div class="data">
		<h1>{{one.name}}</h1>
		<p>恭喜！{{one.character}}</p>
    <div class="pic"></div>
    <div class="box"></div>
    <div class="box1"></div>
	</div>
	
</template>

<script>
  export default {
   	data:function(){
   		return {
   			data:"",
        one:""
   		}
   	},
   	created:function(){
   		this.$http.get("../static/service/school_list.json")
   			.then((data)=>{
   				this.data=Object.values(data.data) 
          this.one=this.ran() 				
   			})
   	},
   	methods:{
   		ran:function(){
   			return this.data[Math.floor(Math.random()*this.data.length)]
   		}
   	}
    
  }
</script>

<style>
  .data{
      width: 90%;
      height: 400px;
      margin-left: 5%;
      background: url(../../static/imgs/bg-matriculate.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 30px;
  }
  .pic{
      width: 100px;
      height: 100px;
      background: url(../../static/imgs/seal.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: -20px;
      right: -10px;
      transform:rotate(40deg);
  }
	h1{
		font-size: .4rem;
		text-align: center;
    color:#22C485;
    font-family: "Microsoft YaHei";
    font-weight: normal;
    line-height: 150px;
	}
  p{
    width: 90%;
    margin-left: 5%;
    font-size: 15px;
    text-indent: 30px;
  }
  .box1{
      width: 40%;
      height: 50px;
      background: url(../../static/imgs/btn-intr.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 250px;
      left: 5%;

  }
  .box{
      width: 40%;
      height: 50px;
      background: url(../../static/imgs/btn-share.png) no-repeat;
      background-size: contain;
      position: absolute;
      top: 250px;
      left: 55%;

  }
</style>