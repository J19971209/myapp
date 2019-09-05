<template>
<div>
     
        <span class="quxiao" @click="fun()">取消</span>
        <span class="tit">登录豆瓣</span>
        <div id="xian">___________________________________</div>
        <div id="inputs" >
            <div class="inputs inputst"><input type="text" placeholder="邮箱"></div>
            <div class="inputs"><input type="password" placeholder="Token"></div>
        <button @click="fun()">登录</button>
        <br>
        <a href="#">使用其他方式  </a><a href="#">  &  找回密码</a>
        
        <div class="bot">
            <a href="#">注册豆瓣账号</a><a href="#">下载豆瓣App</a>
        </div>
        
        </div>
        
</div>
   
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
       fun(){
           this.$router.go(-1)
       }
    }
}
</script>
<style scoped>
    #xian{
        width: 80%;
        height: 0.1rem;
        border-bottom: 1px solid gray;
        margin: 0 auto;
    }
    div{
       font-size: 0px;
       
    }
    
    .quxiao{
        font-size: 0.16rem;
        font-weight: 100;
        color:green;
        display: inline-block;
        position: relative;
        top:0.1rem;
        left: 0.1rem;
    }
    .tit{
        font-size: 0.18rem;
        font-weight: 700;
        display: inline-block;
        width: 100%;
        text-align: center;
    }
    input{
        width: 100%;
        height: 0.4rem;
        text-indent: 0.1rem;
        border: none;
        outline: none;
    }
    #inputs{
        width: 100%;
        text-align: center; 
        margin-top: 0.3rem;
    }
   div>button{
        width: 70%;
        height: 0.4rem;
        margin-top:0.2rem; 
        border: none;
        border-radius: 0.03rem;
        background: greenyellow;
        margin-bottom: 0.2rem;
        outline: none;
   }
   div>a{
       font-size: 0.14rem;
   }
   .inputs{
    border:1px solid gray; 
    width: 70%;
    margin: 0 auto;
    
}
.inputst{
       border-bottom: none;
    }
    .bot{
        margin-top:0.2rem;
     }
    .bot>a{
            color: greenyellow;
    }
    .bot :last-child{
        margin-left: 0.2rem;
    }
</style> 