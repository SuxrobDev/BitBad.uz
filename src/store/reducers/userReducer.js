import {GET_ME} from '../types'
const initialState = {
    user: {
        data: {},
        isFetched: false,
        isAuth: false
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ME:
            return {...state , user: {...action.payload}};
        default:
            return state;
    }
}