import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';


const ExpenseDashboardPage=()=>(
    <div>
        This is my dashboard component
    </div>
);

const AddExpensePage =()=>(
    <div>
        This is my add expense page
    </div>
);

const EditPage = ()=>(
    <div>
        This is the page I edit on
    </div>
);

const HelpPage=()=>(
    <div>
        This is the page you will find help for all your queries.
    </div>
);

const NotFoundPage=()=>(
    <div>
        404 Error Page not found! <Link to="/">Go Home</Link>
    </div>
)

const Header =()=>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expenses</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)
const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'))