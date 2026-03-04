<template>
    <div>라우트3화면</div>
</template>

<script>
// import axios from 'axios';

export default{
    data(){
        return{
            id:null,
        }    
    },
    created() {
        this.id = this.$route.params.productId;
        console.log(this.id);
        // 아래와 같이 라우터를 통해 전달된 id 값을 꺼내어 서버로 데이터 요청
        // const result = axios.get("heep://localhost:8080/product/detail/" +this.id);
        // console.log(result);
    }
}
</script>