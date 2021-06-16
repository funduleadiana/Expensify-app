import { createStore, combineReducers } from "redux";
import uuid from 'uuid';
//ADD_expense
const addExpense = ({
    description = '', 
    note= '', 
    amount = 0, 
    createdAt = 0
    } = {}
    )=> ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SET_START_DATE
//SET_END_DATE

// Expenses reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }

}

// Filters reducer
const filtersReducerDefaultState = { 
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action)=> {
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
console.log(store.getState());


const demoState = {
    expenses: [{
        id: 'kdjdjndv',
        description: 'January Rent',
        note: 'This was the final payment for that month',
        amount: 100000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};