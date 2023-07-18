import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL

export default function TransactionsNewForm() {
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        id: 0,
        item_name: "",
        amount: 0,
        date: "",
        from:"",
        isDeposit: false,
        category: ""
    });
    
    const addTransaction = (newTransaction) => {
        axios
        .post(`${API}/transactions`, newTransaction)
        .then((res) => { navigate(`/transactions`) })
        .catch((e) => console.error("catch", e));
      };
    
    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
        // console.log(setTransaction)
    }
    const handleCheckboxChange = () => {
        setTransaction({ ...transaction, isDeposit: !transaction.isDeposit });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label>
                <input
                id="id"
                value={transaction.id}
                type="number"
                onChange={handleTextChange}
                placeholder="Input the transaction ID number"
                required
                />
                <label htmlFor="item_name">Transaction:</label>
                <input
                id="name"
                value={transaction.item_name}
                type="text"
                onChange={handleTextChange}
                placeholder="Input the transaction name"
                required
                />
                <label htmlFor="amount">Amount:</label>
                <input
                id="amount"
                value={transaction.amount}
                type="text"
                onChange={handleTextChange}
                placeholder="Amount"
                required
                />
                <label htmlFor="date">Date:</label>
                <input
                id="date"
                value={transaction.date}
                type="date"
                onChange={handleTextChange}
                placeholder="Transaction date"
                required
                />
                <label htmlFor="from">From:</label>
                <input
                id="from"
                value={transaction.from}
                type="text"
                onChange={handleTextChange}
                placeholder="Transaction location"
                required
                />
                <label htmlFor="isDeposit">Deposit:</label>
                <input
                id="isDeposit"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={transaction.isDeposit}
                />
                <label htmlFor="category">Category:</label>
                <input
                id="category"
                value={transaction.category}
                type="text"
                onChange={handleTextChange}
                placeholder="Category type"
                required
                />
                <br />
                <input type="submit" />
            </form>
            
        </div>
    )
}