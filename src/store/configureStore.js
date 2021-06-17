import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';


// Store creation 

export default () => {
    const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        })
    );
return store
};