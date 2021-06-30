import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';


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

