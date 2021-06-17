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

const removeExpense = ({id}={})=> ({
    type: 'REMOVE_EXPENSE',
    id
})
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SET_START_DATE
//SET_END_DATE

// Expenses reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE' :
            return [
                ...state,
                action.expense];

        case 'REMOVE_EXPENSE':
            return state.filter((expense)=> expense.id !== action.id)
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
store.subscribe(()=> {
    console.log(store.getState());

})

const expenseOne = store.dispatch(addExpense({description: 'Groceries', amount: 500}))
const expenseTwo = store.dispatch(addExpense({description: 'Rent', amount: 1000}))

store.dispatch(removeExpense({id: expenseOne.expense.id}))

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