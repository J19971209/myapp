<template>
    <div>
        <div class="bigsousuo">
             <span @click="fun()">关闭</span>
            
             <div class="sousuo">
                 <input type="text" placeholder="搜索">
            </div>
        </div>
       
        <div class="navs">
            <div>
                <router-link to="/movei" style="color:#ff0000">电影</router-link>
                <br>
                <span>影院热线</span>
            </div>
            <div>
                <router-link to="/guangbo" style="color:#00ff00">广播</router-link>
                <br>
                <span>正在热播</span>
            </div>
            <div>
                <router-link to="/book" style="color:#0000ff">图书</router-link> 
                <br> 
                <span>畅销排行</span>
            </div>
        </div>
        <div class="navs">
            <div>
                <router-link to="/movei" style="color:#0f0f0f0">同城</router-link>
                <br>
                <span>周末活动</span>
            </div>
            <div>
                <router-link to="/guangbo" style="color:#0f0f0f">小组</router-link>
                <br>
                <span>志趣相投</span>
            </div>
            <div>
                <router-link to="/book" style="color:#fff000">音乐</router-link> 
                <br> 
                <span>新碟榜</span>
            </div>
        </div>
        <div class="navs">
            <div>
                <router-link to="/movei" style="color:#000fff">阅读</router-link>
                <br>
                <span>电子书</span>
            </div>
            <div>
                <router-link to="/guangbo" style="color:#f0ff0f">游戏</router-link>
                <br>
                <span>虚拟世界</span>
            </div>
            <div>
                <router-link to="/book" style="color:#f0000f">应用</router-link> 
                <br> 
                <span>玩手机</span>
            </div>
        </div>
        <div class="navs">
            <div>
                <router-link to="/movei" style="color:#4c4c4c">东西</router-link>
                <br>
                <span>心爱之物</span>
            </div>
            <div>
                <router-link to="/guangbo" style="color:#5e5e5e">FM</router-link>
                <br>
                <span>红心歌单</span>
            </div>
            <div>
                <router-link to="/book" style="color:#2d2d2d">市集</router-link> 
                <br> 
                <span>购买原创</span>
            </div>
        </div>
        <div style="margin-top:0.2rem;"></div>
        <div class="footer">
            <div>
            ————————————————————————
            <router-link to="/reg">注册账号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link>丨
            <router-link to="/login">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;登录豆瓣</router-link>
        </div>
        <div>
            ————————————————————————
            <router-link to="/index">使用桌面版&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</router-link>丨
        <router-link to="/index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用豆瓣App</router-link> 
        ————————————————————————           
         </div>
        </div>
        
           

    </div>
</template>

<script>
export default {
    methods: {
        fun(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.footer{
    text-align: center;
    color: #f0ebebf6;
}
.navs>div :nth-child(1){
    font-size: 0.25rem;
    margin-left: 0.06rem;
}
.navs>div :nth-child(3){
    font-size: 0.12rem;
    color: gray;
    text-align: center;
}
.navs{
    display: flex;
    justify-content: space-around;
    height: 0.55rem;
    text-align: center;
    padding-top:0.25rem; 
}

.bigsousuo{
    width: 100%;
    height: 0.4rem;
    border-bottom: 1px solid rgb(243, 243, 231);
    text-align: center;

}

.bigsousuo>span{
    line-height: 0.4rem;
    color: #69f069;
}
.sousuo{
    width: 80%;
     height: 0.3rem;
    background: #f0f0f8;
    float: right;
    border-radius: 0.05rem;
    margin-top: 0.05rem;
    margin-right: 0.15rem;
}
.sousuo>input{
    width: 95%;
    border: none;
    outline: none;
    height: 100%;
    text-align: center;
    background: #f0f0f8;
}
    div{
        font-size: 0.14rem;
    }
</style>