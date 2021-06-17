import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import getVisibleExpense from './selectors/expensesSelector';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 200, createdAt: 5264}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 124, createdAt: 58962}));
// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'))

const state = store.getState();
const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
console.log(visibleExpenses)


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'))

