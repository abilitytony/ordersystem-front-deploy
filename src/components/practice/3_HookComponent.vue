<template>
    <div>hook함수 테스트</div>
    <button @click="moveScreen()">다른 화면으로 이동(라우트 방식)</button>
    <div>{{ count1 }}</div>
    <button @click="incrementCount1()">count1 값 증가</button>
    <div>computed된 값 : {{ doubleCount }}</div>
</template>
<script>

export default{
    data(){
        return {
            count1:0,
        }
    },
    // 화면이 열리기 전(vue인스턴스가 생성되기 전) 실행되는 함수
    // 예시) 목록조회, 상세조회
    created(){
        console.log("created 테스트");
    },

    // 컴포넌트가 화면 상에서 제거(이동)될 때, 실행되는 함수.
    // 예시) 채팅(알림)화면을 벗어나 다른 화면으로 이동 시에 실시간 연결 종료 요청.(물리적 화면을 종료시키는 경우는 제외)
    beforeUnmount(){
        console.log("beforeUnmount 테스트");
    },
    
    // 특정 변수 값의 변경사항을 인지하여 함수를 자동 실행하는 hook함수
    // 예시) 검색어 입력 시 자동완성 api 호출
    watch:{
        // 인지하고자 하는 변수 값과 일치되는 함수 명 사용
        count1(){
            console.log("count1값이 변했습니다.");
        }
    },

    // 화면 전체의 변경사항을 인지하는 hook함수
    updated(){
        console.log("update함수 테스트");
    },

    // 종속된 데이터가 변경될 때, 함수를 실행하여 값을 재계산해서 리턴하는 함수
    // 예시) 장바구니 수량 보여줄 때
    computed:{
        // this.count1이 변경되면, doubleCount함수가 실행되고, doubleCount를 변수처럼 사용 가능
        doubleCount(){
            return this.count1 * 2;
        }
    },
    methods:{
        moveScreen(){
            this.$router.push("/practice/conditional")
        },
        incrementCount1(){
            this.count1++;
        }
    }
}
</script>