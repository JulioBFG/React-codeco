import {createStore} from 'redux';


const INITIAL_STATE = {
    tweets: []
}
const reducer = (state = INITIAL_STATE, action)  => {
    switch (action.type){
        case 'TWEETS_ADD':
            return { 
                ... state,
                tweets:[
                    ...state.tweets,action.payload
                ]
            }
    }
    return state
}

const store = createStore(reducer)

export { store }