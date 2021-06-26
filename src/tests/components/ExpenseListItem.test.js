import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expensesArray';

test('should render expense list item', ()=> {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})