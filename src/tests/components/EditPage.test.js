import { EditPage } from "../../components/EditPage";
import React from 'react';
import { shallow } from "enzyme";
import expenses from '../fixtures/expensesArray'

let editExpense, removeExpense, history, wrapper;
beforeEach(()=> {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditPage 
        editExpense={editExpense} 
        removeExpense ={removeExpense} 
        history={history}
        expense={expenses[1]}
        />)
})
test('should render edit ExpensePage correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
});

test('should handle removeExpense', ()=> {
    wrapper.find('button').prop('onClick')(expenses[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id})

})