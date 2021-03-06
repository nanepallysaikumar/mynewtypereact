import {FETCH_POSTS,CREATE_POSTS} from '../actions/types';


const initialState = {
    items : [],
    item : {

    }
};

export default function(state = initialState, action: any) {
    switch(action.type) {
        case FETCH_POSTS :
        return {
            ...state,
            items: action.payload
        }
        case CREATE_POSTS : 
        return {
            ...state,
            item: action.payload
        }
        default:
        return state;
    }
}
