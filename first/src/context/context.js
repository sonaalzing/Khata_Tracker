import React, {useReducer,createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) ||[{"amount":50000,"category":"House","type":"Expense","date":"2022-07-21","id":"f04d399a-fad4-4831-8d3b-aaac02b9be18"},{"amount":5000,"category":"Travel","type":"Expense","date":"2022-07-27","id":"d8a09f7f-4b0e-4cc4-9ad6-373f37d112de"},{"amount":10000,"category":"Business","type":"Income","date":"2022-07-26","id":"3ae0204a-6063-4334-9580-39dcef9c24ab"},{"amount":1000,"category":"Salary","type":"Income","date":"2022-07-25","id":"ddcc84c6-8274-4209-bdfe-0e7a3ad0a1cd"}];

export const KhataTrackerContext = createContext(initialState);

export const Provider = ({ children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    //Action Creators 
    const deleteTransaction =(id) => dispatch({type: 'DELETE_TRANSACTION',payload: id});
    const addTransaction = (transaction)=> dispatch({type: 'ADD_TRANSACTION',payload:transaction});

    const balance = transactions.reduce((acc, currVal) => currVal.type ==='Expense' ? acc - currVal.amount : acc + currVal.amount,0);
 
    return (
        <KhataTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </KhataTrackerContext.Provider>
    );
}
