import moment from "moment";
import getVisibleExpense from "../../selectors/expensesSelector";


const expenses = [{
    id: '1',
    description: 'Chewing Gum',
    note: '',
    amount: 150,
    createdAt: moment(0)
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 125000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 5000,
    createdAt: moment(0).add(6, 'days').valueOf()
}]
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