<template>
    <div>
        <div class="top">
                <span class="left">豆瓣</span>
            <span class="right">
                <router-link to="/movei" class="movei">电影</router-link> 
                <router-link to="/book" class="book">图书</router-link> 
                <router-link to="/guangbo" class="guangbo">广播</router-link> 
                <router-link to="/group" class="group">小组</router-link> 
                <router-link to="/tab" class="tab">三</router-link> 
            </span>
        </div>
        <p class="chose">
            <router-link to="/login" class="four">影院热映</router-link>
            <router-link to="/login" class="four">欧美新碟榜</router-link>
        </p>
        <p class="chose">
            <router-link to="/reg" class="four">注册账号</router-link>
            <router-link to="/login" class="four">登录豆瓣</router-link> 
        </p>
            <div class="foot" v-if="demo.length<=0">
                <img  class="lodingimg" src="../../static/timg.gif">
            </div>
            <div v-else><shouyenav e  v-for="(v,i) in demo" :key="i" :arr="v"></shouyenav>
            </div>
             
    </div>  
</template>

<script>
import sheader from '../components/sheader'
import shouyenav from '../components/shouyenav'
export default {
    
    components:{
        sheader,
        shouyenav,
        
    },
    
    data(){
        return {
            demo:[]
        }
    },
    created() {
        setTimeout(()=>{
            this.axios({
                        method:'get',
                        url:'/index'
                    }).then((data)=>{
                        this.demo=data.data.shouye;
                    })
        },2000)
         
    }
}
</script>
<style scoped>
     div{
        font-size: 0.16rem;
     }
     .lodingimg{
        width: 1rem;
        height: 1rem;
        
     }
     .foot{
         text-align: center;
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
         color: greenyellow;
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
     .four{
         width: 1.4rem;
         height: 0.4rem;
         background: #f5eaea;;
         margin: 0.05rem;
         line-height: 0.4rem;
         text-align: center;
     }
     </style>