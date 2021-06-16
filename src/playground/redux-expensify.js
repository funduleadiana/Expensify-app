import { createStore, combineReducers } from "redux";


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