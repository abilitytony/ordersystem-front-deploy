<template>
<v-container>
    <v-row justify="center">
        <v-col class="text-center text h5">
            장바구니 목록
        </v-col>
    </v-row>
    <v-row justify="space-between">
        <v-col cols="auto">
            <v-btn color="secondary" @click="clearCart()">장바구니 비우기</v-btn>
        </v-col>
        <v-col cols="auto">
            <v-btn color="primary " @click="createOrder()">주문하기</v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-table>
                <thead>
                    <tr>
                        <th>제품ID</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>주문수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in getProductsInCart" :key="product.productId">
                        <td>{{ product.productId }}</td>
                        <td>{{ product.productName }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.productCount }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { cartStore } from '@/store/cart';
import axios from 'axios';

export default{
    data(){
        return{
            store : null
        }
    },
    created(){
        this.store = cartStore()
    },
    computed:{
        getProductsInCart(){
            return this.store.getProductsInCart;
        }
    },
    methods:{
        clearCart(){
            this.store.clearCart();

        },
        async createOrder(){
            try{
                const data = this.store.getProductsInCart.map(p=>({productId:p.productId, productCount: p.productCount}));
            if(data.length > 0) {
                await axios.post(`${process.env.VUE_APP_API_BASE_URL}/ordering/create`, data);
                alert("주문이 완료 되었습니다.");
                this.store.clearCart();
            }
        }catch(e){
            console.log(e);
            alert("주문이 실패됐습니다.");
        }
        }
    }
}
</script>
