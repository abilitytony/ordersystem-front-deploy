import { defineStore } from "pinia";


export const cartStore = defineStore('cart', {

    state: () => ({
        // 전역상태관리의 변수 값은 화면 새로고침 시 전체 리셋 -> 로컬스토리지(모든 값이 문자열로 저장)에 저장
        totalQuantity: parseInt(localStorage.getItem("totalQuantity"))   || 0,
        productsInCart: JSON.parse(localStorage.getItem("productsInCart"))||[]
    }),
    actions:{
        addCart(product){
            this.totalQuantity += product.productCount;
            localStorage.setItem("totalQuantity", this.totalQuantity);
            const existProduct = this.productsInCart.find(p=>p.productId === product.productId);
            if(existProduct){
                existProduct.productCount += product.productCount;
            } else{
            this.productsInCart.push(product);
            }
            localStorage.setItem("productsInCart", JSON.stringify(this.productsInCart));
        },
        clearCart(){
            localStorage.removeItem("productsInCart");
            localStorage.removeItem("totalQuantity");
            this.productsInCart = [];
            this.totalQuantity = 0;
        }
    },
    getters:{
        getTotalQuantity:state => state.totalQuantity,
        getProductsInCart: state => state.productsInCart,
    }


}





)