<template>
    <!-- 단방향 바인딩 : 변수 -> 화면 -->
    <h1>hello world {{}}</h1>
    <!-- 양방향 바인딩 : 변수 -> 화면, 화면 -> 변수, v-model 문법 사용 -->
    <input type="text" v-model="language2">
    <button @click="showValue()">변수 확인</button>
</template>
<script>
export default{
    data(){
        return{
            language: "java",
            language2: "java"
        }
    },
    methods:{
        showValue() {
            console.log(this.language2);
        }         
    }
}
</script>
<style>
</style>