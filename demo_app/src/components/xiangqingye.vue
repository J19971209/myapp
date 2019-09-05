<template>
    <div>
     
          <!-- 详情页面
          {{this.$route.params.data}} -->

         <div class="head">
            <span class="left">聊聊你的感受</span>
            <span class="right">
                <span class="rightone">极速下载</span>
                <span class="righttwo">打开</span>
            </span>
           
        </div>
        <div class="nav">
            <h3>{{v[0].title}}</h3>
            <img :src="v[0].image" >
           <p>时间：{{v[0].begin_time}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{v[0].end_time}}</p>
           <p>地点：{{v[0].address}}</p>
           <p>费用：{{v[0].fee_str}}</p>
           <p>类型：{{v[0].category_name}}</p>
           <p>起始时间：{{v[0].time_str}}</p>
           <div style="margin:0.1rem 0"></div>
           <span class="leix">{{v[0].tags}}</span>
           <h4>活动详情</h4>
           <div class="topnav"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{v[0].content}}</div>
            <div class="foot">
                <div class="foottop">
                    <img src="../../static/logo.png" alt="">
                </div>
                
                <div class="footbot">
                    <p>豆瓣</p>
                    <p>我们的精神角落</p>
                </div>
            </div>
            <p id="xiazai">去 App Story 免费下载 iOS 客户端</p>
            
        </div>
    </div>
</template>

<script>

export default {
     props:["v"]
}
</script>
<style scoped>
   #xiazai{
    color: green;
    margin-bottom: 0.5rem;
    font-size: 0.18rem;
    text-align: center;
}
.foot{
    display: flex;
    padding:0.2rem 0; 
}
.foottop>img{
    width: 0.7rem;
   margin-left: 0.5rem;
   margin-right: 0.1rem;
}
.footbot :first-child{
    color: #000000;
    font-size: 0.30rem;
}
.topnav{
    font-size: 0.14rem;
    line-height: 0.2rem;
}
.nav>h4{
    color: #0a8f0a;
    margin: 0.2rem 0;
}
.leix{
    border-radius: 0.15rem;
    background: #d7e0d7;
    font-size: 0.12rem;
    text-align: center;

}
.nav>p{
    font-size: 0.14rem;
    color: #776f6f;
    margin-top: 0.05rem;
}
.nav>img{
    width: 1.8rem;
    height: 2.5rem;
    display: block;
    margin: 0 auto;
    margin-top: 0.1rem;
}
.nav>h3{
    text-align: center;
}
.nav{
    width: 80%;
    margin: 0 auto;
    margin-top: 0.1rem;
}
.head{
       width: 80%;
       height: 0.8rem;
       background: url(../../static/promotion_bg.b7abee9.jpg);
       background-size: cover;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
   }
.left{
    width: 45%;
    font-size: 0.14rem;
    color: green;
    margin: auto 0;
    text-align: center;
    line-height: 0.8rem;
    margin-top:0.02rem; 
}
.right{
    width: 50%;
    margin: auto 0;
}
.rightone{
    width: 60%;
    background: #00ff00;
    display: inline-block;
    border-radius: 0.05rem;
    color: white;
    background: green;
    font-size: 0.12rem;
    text-align: center;
    border: 1px solid green;
}
.righttwo{
    width: 30%;
    border-radius: 0.05rem;
    display: inline-block;
    color: green;
    border: 1px solid green;
    font-size: 0.12rem;
    text-align: center;
}
div{
    font-size: 0.18rem;
}

</style>