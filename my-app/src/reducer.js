import {createStore} from 'redux';


const INITIAL_STATE = {
    tweets: []
}
const reducer = (state = INITIAL_STATE, action)  => {
    // eslint-disable-next-line default-case
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