<template>
    <div>
        <span class="back"><router-link to="/index" class="four" style="color:greenyellow;">首页&lt;</router-link></span>
       <p>欢迎加入豆瓣</p>
    <div class="inputs"><input type="text" v-model="email" placeholder="邮箱"></div>
    <div class="inputs inputst"><input type="password" placeholder="密码"></div>
    <div class="inputs"><input type="text" placeholder="用户名"></div>
       
        
        
        <br>
       <button @click="fun()">注册</button>
       <br>
      <span>

            点击「注册」代表你已阅读并同意用户使用协议
      </span> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:""
        }
    },
    methods: {
        fun(){
            var param=new URLSearchParams;
            param.append("email",this.email);
             this.axios({
                        method:'post',
                        url:'http://localhost:8888/reg',
                        data:param
                    }).then((data)=>{
                        // this.demo=data.data.shouye;
                        console.log(data)
                        //  console.log(data.data.shouye)
           })
        }
       
    }
}
</script>
<style scoped>
.back{
    position: absolute;
    left: 0.05rem;
    top: 0.05rem;
    font-size: 0.16rem;
    font-weight: 900;
   
}
div{
    font-size: 0;
    text-align: center;
}
div>p{
    font-size:0.32rem;   
    margin: 0.5rem 0; 
    color: greenyellow
}

    div>input{
        width: 100%;
        height: 0.4rem;
        margin: 0 auto;
        outline: none;
        text-indent: 0.1rem;
        border: none;
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
div>span{
    font-size:.12rem;
}
.inputs{
    border:1px solid gray; 
    width: 70%;
    margin: 0 auto;

}
.inputst{
    border-bottom: none;
    border-top: none;
}
</style>    