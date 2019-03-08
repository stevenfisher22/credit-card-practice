import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// CREDIT CARD MAIN COMPONENT
function CreditCard({cardInfo, bank}) {
    // const cardInfo = props.cardInfo;
    // const bank = props.bank;
    return (
        <div className="creditCard">
            <BankName bank={bank.bankName}/>
            <CardNum cardNum={cardInfo.cardNum}/>
            <ExpDate expDate={cardInfo.expDate}/>
            <CustName name={cardInfo.name}/>
        </div>
    )
}

const BankName = (props) => {
    return (
        <div className="bankName">
            {props.bank}
        </div>
    )
}

const CardNum = (props) => {
    return (
        <div className="cardNum">
            {props.cardNum}
        </div>
    )
}

const ExpDate = (props) => {
    return (
        <div className="expDate">
            {props.expDate}
        </div>
    )
}

const CustName = (props) => {
    return (
        <div className="custName">
            {props.name}
        </div>
    )
}

var cardInfo = {
    name: 'Steven M Fisher',
    cardNum: '1234 5678 9876 5432',
    expDate: '08/19',
}

var bank = {
    bankName: 'Big Bank, Inc.'
}

ReactDOM.render(<CreditCard cardInfo={cardInfo} bank={bank}/>, document.getElementById('root'))