<template>
    <div>
        <div class="top">
                <span class="left"><router-link to="/index" style="color:greenyellow">豆瓣</router-link></span>
            <span class="right">
                <router-link to="/movei" class="movei">电影</router-link> 
                <router-link to="/book" class="book">图书</router-link> 
                <router-link to="/guangbo" class="guangbo">广播</router-link> 
                <router-link to="/group" class="group">小组</router-link> 
                <router-link to="/tab" class="tab">三</router-link> 
            </span>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    div{
        font-size: 0.16rem;
     }
     .top{
         border-bottom: 1px solid rgb(230, 208, 208);
         height: 0.5rem;
         line-height: 0.5rem;
         margin-bottom: 0.1rem;
     }
     .right{
         float: right;
         margin-right: 0.1rem;
         width: 50%;
         display: flex;
         justify-content: space-around;
     }
     .left{
         font-size: 0.30rem;
         font-weight: 900;
         
         margin-left: 0.2rem;
     }
     .group{
         color: blue;
     }
     .guangbo{
         color: yellow;
     }
     .book{
         color: red;
     }
     .movei{
         color:gray;
     }
     .chose{
         width: 80%;
         padding-left: 10%;
         padding-right: 10%;
         display: flex;
         justify-content: space-between;
     }
     
     </style>