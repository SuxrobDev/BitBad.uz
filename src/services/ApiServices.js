import {request} from "./api";
import {isEmpty} from "lodash";
class ApiServices {

    static loginOrSignUp({phone_number, to_register}) {
        return request.post('accounts/send-code/', {phone_number, to_register})
    }

    static login({phone_number, code}) {
        return request.post('accounts/login/', {phone_number, code})
    }

    static signUp(params) {
        return request.post('accounts/register/', {...params})
    }

    static getMe(token = null) {
        if (token && !isEmpty(token)) {
            return request.get('accounts/profile/', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`
                }
            })
        }
        return request.get('accounts/profile/')
    }

    static getStatistics() {
        return request.get('products/statistics')
    }

    static getProducts({limit = 10, offset = 0}) {
        return request.get('products/', {params: {limit, offset}})
    }

    static getProductsByCategory(id) {
        return request.get(`products/?categoryId=${id}`)
    }
}

export default ApiServices;