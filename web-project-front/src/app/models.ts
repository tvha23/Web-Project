export interface Product {
    id: number,
    name: string,
    price: number,
    img: string,
    description:string,
    category:[
        id:number,
        name:string
    ]
}

export interface Category {
    id: number,
    name: string
}

export interface Cart {

}

export interface LikedProducts {

}