import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setEndDate={setEndDate}
            setStartDate={setStartDate}
        />)
});


test('should render ExpenseList Filters correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
})


test('should render ExpenseList Filters with altData correctly', ()=> {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot();
})


test('should handle textChange', ()=> {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', ()=> {
    const value = 'date'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()

})

test('should sort by amount', ()=>{
    const value = 'amount'
   
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', ()=> {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(10, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle date focus changes', ()=> {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)

})