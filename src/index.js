import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CREDIT CARD MAIN COMPONENT
function CreditCard() {
    return (
        <div className="creditCard">
            <div className="bankName">
                <BankName />
            </div>
        </div>
    )
}

const BankName = () => {
    return (
        <div>
            Big Bank, Inc.
        </div>
    )
}

ReactDOM.render(<CreditCard />, document.getElementById('root'))