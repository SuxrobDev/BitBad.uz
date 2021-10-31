import {FETCH_FLOWS, FETCH_PRODUCTS, GET_ME} from "../types";
import ApiServices from "../../services/ApiServices";

export const fetchProducts = () => {
    return (dispatch) => {
        ApiServices.getProducts({}).then((res) => {
            if (res && res.data) {
                dispatch({type: FETCH_PRODUCTS, payload: res.data})
            }
        }).catch((e) => {
            dispatch({type: FETCH_PRODUCTS, payload: []});
        })
    }
}
export const fetchProductsByCategory = (id) => {
    return (dispatch) => {
        ApiServices.getProductsByCategory(id).then((res) => {
            if (res && res.data) {
                dispatch({type: FETCH_PRODUCTS, payload: res.data})
            }
        }).catch((e) => {
            dispatch({type: FETCH_PRODUCTS, payload: []});
        })
    }
}
export const fetchUser = (token = null) => {
    return (dispatch) => {
        ApiServices.getMe(token).then((res) => {
            if (res && res.data) {
                dispatch({type: GET_ME, payload: {data: res.data, isFetched: true, isAuth: true}})
            }
        }).catch((e) => {
            dispatch({type: GET_ME, payload: {isFetched: true, isAuth: false}});
        })
    }
}
