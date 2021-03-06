import moment from "moment";
import getVisibleExpense from "../../selectors/expensesSelector";
import expenses from '../fixtures/expensesArray';


test('should filter by text value', ()=> {
    const filters = {
        text: 'c',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});


test('should filter by StartDate', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('should filter by end date', ()=> {
    const filters={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleExpense(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('should sort by date', ()=> {
    const filters={
        text: '',
        sortBy: 'date',
        startDate: undefined, 
        endDate: undefined
    }
    const result = getVisibleExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', ()=> {
    const filters={
        text: '',
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    }
    const result = getVisibleExpense(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})