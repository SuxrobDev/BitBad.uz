import {FETCH_FLOWS} from '../types'
const initialState = {
    flows: {
        data: [],
        isFetched: false
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FLOWS:
            return {...state , flows: {data:action.payload , isFetched: true}};
        default:
            return state;
    }
}