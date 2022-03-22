import {ACTION_STRING} from "../actions/actionString";

const initialState = {
    data: {},
};

const promoReducer = (prevState = initialState, action) => {
    const { setPromo, promoEmpty } = ACTION_STRING;
    switch (action.type) {
        case setPromo: 
        const data = action.payload;
        return{
            ...data,
        }

        case promoEmpty:
            return initialState;

        default: 
        return prevState
    }
};

export default promoReducer;