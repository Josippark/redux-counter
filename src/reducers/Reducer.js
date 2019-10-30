import {INCREMENT, DECREMENT} from '../actions/ActionType'

const initialState= {
    counter:5
}

const rootReducer = (state= initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
            ...state,
            counter: state.counter+1
            }
        case DECREMENT:
            return {
            ...state,
            counter: state.counter-1
            }
        default:
            return state
      }
   
}

export default rootReducer;