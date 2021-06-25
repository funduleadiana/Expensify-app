import expensesReducer from "../../reducers/expensesReducer";
import expenses from '../fixtures/expensesArray';


test('should set default state', ()=> {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add expenses', ()=> {
    const expense = {
        id: '4',
        description: 'shopping',
        amount: 50000,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
       expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit expense', ()=> {
    const description = 'make-up'
    const action = {
        type: 'EDIT_EXPENSE', 
        id: expenses[0].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe(description)
})

test('should not edit an expense if id not found', ()=> {
    const description = 'make-up'
    const action = {
        type: 'EDIT_EXPENSE', 
        id: '-5',
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
