import moment from "moment";

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

export default expenses