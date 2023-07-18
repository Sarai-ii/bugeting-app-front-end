import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

export default function TransactionsEditForm() {

  const navigate = useNavigate()
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from:"",
    isDeposit: false,
    category: ""
});

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((e) => console.warn("catch", e));
  }


  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isDeposit: !transaction.isDeposit });
  };

  useEffect(() => {
    axios
      .get(`${URL}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
        // console.log(transaction)
      })
      .catch((e) => console.error(e));
  }, [transaction, index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };
  
  return (
    <div className="Edit">
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
            id="item_name"
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
      <Link to={`/transactions/${index}`}>
        <button>Back To Transactions</button>
      </Link>
    </div>
  );
}