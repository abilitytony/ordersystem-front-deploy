import ProductCreate from "@/views/product/ProductCreate.vue";
import ProductrList from "@/views/product/ProductrList.vue";


export const productRouter= [
    {
         path: "/product/create",
                name: "ProductCreate",
                component : ProductCreate
    },
     {
         path: "/product/list",
                name: "ProductList",
                component : ProductrList,
                props: {isAdmin : false, pageTitle: "상품목록"}
    },
    {
         path: "/product/manage",
                name: "ProductManage",
                component : ProductrList,
                props: {isAdmin : true, pageTitle: "상품관리"}
    },
    
]