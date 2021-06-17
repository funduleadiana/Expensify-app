import React from 'react';
import { connect} from 'react-redux';


const ExpenseList = (props)=> (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}



export default connect(mapStateToProps)(ExpenseList); //HOC
// Higher order component - a component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state