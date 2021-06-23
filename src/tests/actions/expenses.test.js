import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should remove expense', ()=> {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should edit expense',()=> {
    const editAction = editExpense('789jkl', {note: 'New note'});
    expect(editAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '789jkl',
        updates: {
            note: 'New note'
        }
    });
});

test('should setup add expense action object with provided values', ()=> {
    const expenseData = {
        description: 'Rent',
        amount: 58962,
        createdAt: 56465465,
        note: 'This was the rent for 39th street'
    }

    const addingExpense = addExpense(expenseData);
    expect(addingExpense).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('should setup add expense action object with default values', ()=> {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const anonymous = addExpense(expenseData);
    expect(anonymous).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    }) 
})