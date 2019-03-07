import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CREDIT CARD MAIN COMPONENT
function CreditCard() {
    return (
        <div className="creditCard">
            <BankName />
            <CardNum />
            <ExpDate />
            <CustName />
        </div>
    )
}

const BankName = () => {
    return (
        <div className="bankName">
            Big Bank, Inc.
        </div>
    )
}

const CardNum = () => {
    return (
        <div className="cardNum">
            1234 5678 9876 5432
        </div>
    )
}

const ExpDate = () => {
    return (
        <div className="expDate">
            08/19
        </div>
    )
}

const CustName = () => {
    return (
        <div className="custName">
            CARDHOLDER NAME
        </div>
    )
}

ReactDOM.render(<CreditCard />, document.getElementById('root'))