<template>
    <div>
    <sheader></sheader>
          <!-- 详情页面
          {{this.$route.params.data}} -->
    <xiangqingye :v='demo'></xiangqingye>
        
    </div>
</template>

<script>
import sheader from '../components/sheader'
import xiangqingye from '../components/xiangqingye'
export default {
    data(){
        return{
            demo:[]
        }
    },
    components:{
        sheader,
        xiangqingye
    },created() {
        console.log(this.$route.params.data);
         this.axios({
                        method:'get',
                        url:'/index'
                    }).then((data)=>{
                        this.demo = data.data.shouye.filter((v,i)=>{
                            if(v.id==this.$route.params.data){
                                return v
                            }
                        })
                        console.log(this.demo)
                        
                    })
       
 
    }
}
</script>
<style scoped>

</style>