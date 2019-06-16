const initialState = {
    cart: [],
    detailedViewImg: '',
    detailViewImgName: '',
    totalCartCost: 0
}


const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PERSIST_REHYDRATE = 'persist/REHYDRATE';
const UPDATE_DETAIL_IMG = "UPDATE_DETAIL_IMG";
const UPDATE_TOTAL_PRICE = 'UPDATE_TOTAL_PRICE';

export default function reducer(state = initialState, action) {
    let grandTotal = 0;//
    let checkedCart = [];//
    switch (action.type) {

        case ADD_TO_CART:

            let flag = false;


            checkedCart = state.cart.map(product => {


                if (product.product_id === action.payload.product.product_id && product.productSize === action.payload.selectedSize && product.displayImgColor === action.payload.displayImgColor) {
                    flag = true;
                    product.quantity++;
                    product.totalPriceByQty = product.price * product.quantity;
                }
                return product;
            })

            if (!flag) {
                let newProductObj = Object.assign({}, action.payload.product)
                newProductObj.productSize = action.payload.selectedSize;
                newProductObj.quantity = 1;
                newProductObj.displayImg = action.payload.displayImg
                newProductObj.displayImgColor = action.payload.displayImgColor;
                newProductObj.totalPriceByQty = action.payload.product.price
                checkedCart.push(newProductObj);
            }

            grandTotal = checkedCart.reduce((total, nextVal) => {
                return total + parseInt(nextVal.totalPriceByQty, 10);
            }, 0)

            return Object.assign({}, state, { cart: [...checkedCart], totalCartCost: grandTotal })

        case REMOVE_FROM_CART:
            const newCartArr = state.cart.filter((product, index) => index !== action.payload1)
            const priceRemoved = state.totalCartCost - Number(action.payload2);

            return Object.assign({}, state, { cart: newCartArr, totalCartCost: priceRemoved })

        case UPDATE_DETAIL_IMG:
            return Object.assign({}, state, { detailedViewImg: action.payload1, detailViewImgName: action.payload2 })

        case UPDATE_TOTAL_PRICE:
            checkedCart = state.cart.map(product => {
                if (product.product_id === action.payload.id && product.productSize === action.payload.size && product.displayImgColor === action.payload.color) {
                    product.quantity = action.payload.newQty
                    product.totalPriceByQty = product.price * product.quantity;
                }
                return product;
            })

            grandTotal = checkedCart.reduce((total, nextVal) => {
                return total + parseInt(nextVal.totalPriceByQty, 10);
            }, 0)

            return Object.assign({}, state, { cart: checkedCart, totalCartCost: grandTotal })

        case PERSIST_REHYDRATE:
            return { ...state, persistedState: action.payload };


        default:
            return state;
    }

};



export function addToCart(productState) {
    return {
        type: ADD_TO_CART,
        payload: productState
    }
}

export function updateTotalPrice(productInfo) {
    return {
        type: UPDATE_TOTAL_PRICE,
        payload: productInfo
    }
}

export function removeFromCart(index, itemQtyPrice) {
    return {
        type: REMOVE_FROM_CART,
        payload1: index,
        payload2: itemQtyPrice
    }
}

export function updateDetailImg(imgUrl, imgName) {
    console.log(imgUrl, imgName)
    return {
        type: UPDATE_DETAIL_IMG,
        payload1: imgUrl,
        payload2: imgName
    }
}
