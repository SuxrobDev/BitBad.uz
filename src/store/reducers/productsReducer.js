import {FETCH_PRODUCTS} from '../types'
const initialState = {
    products: {
        data: [],
        isFetched: false,
        errors:{}
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state , products: {data:action.payload , isFetched: true}};
        default:
            return state;
    }
}