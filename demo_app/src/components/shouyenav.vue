<template>

      <div class="nav" @click="fun(arr.id)">
            <span>
                <h3>{{arr.title}}</h3>
                <span class="firstp">{{arr.content}}</span>
                <span class="bot">讲座</span>
            </span>
            
            <div class="imgs">
                 <img :src="arr.image">
            </div>
            
        </div>
   
</template>

<script>

export default {
    props:["arr"],
    methods:{
        fun(id){
            this.$router.push("/movepage/"+id)
            
        }
    }
    
}
</script>
<style scoped>
   .bot{
    font-size: 0.12rem;
}
h3{
    overflow: hidden;
    height: 0.22rem;
}
.firstp{
    margin-top: 0.1rem;
    clear: both;
    font-size: 0.13rem;
    display: block;
    height: 0.54rem;
    overflow: hidden;
}
.nav{
       width: 3rem;
       height: 1.2rem;
       margin: 0 auto;
       padding-bottom: 0.1rem;
       border-bottom: 1px solid gray;
       margin-top: 0.1rem;
      
   }
.nav>span{
    float: left;
    width: 2.0rem;
    
}
.imgs{
   float: right;
   
   margin-top: 0.05rem;
   
}
.imgs>img{
       width: 0.8rem;
       height: 1.1rem;
}
     
</style>