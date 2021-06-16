import {createStore} from 'redux';

//Action generators - functions that return action objects

const incrementCount = (payload = {}) => ({ 
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 2
});
// //Same as : 
// const incrementCount = ({incrementBy = 2} = {}) => ({ 
//     type: 'INCREMENT',
//     incrementBy
// });


const decrementCount =({decrementBy = 2} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count} = {})=>({
    type: 'SET',
    count
})

const resetCount = ()=>({
    type: 'RESET'
})

// Reducers
// 1 are pure functions - the output is only determined by the input
// 2. Never change state or action - 


const countReducer = (state={count : 0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            }

        case 'SET':
            return{
                count: action.count
            };

        case 'RESET':
            return{
                count: 0
            };

        default: 
            return state;
    }
}
const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState()); 
});

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(incrementCount())

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch({
    type: 'RESET'
});

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({count: 101}))
store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());
