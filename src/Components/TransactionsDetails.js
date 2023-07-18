import { useState, useEffect } from "react";
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

export default function TransactionsDetails() {
  const [transaction, setTransaction] = useState([]);

  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios.delete(`${API}/transactions/${index}`)
    .then(() => navigate(`/transactions`))
    .catch((e) => console.log("catch", e))
  }; 
//UPPERCASE
//   let item = transaction.item_name.toUpperCase()
  
  return (
    <article>
      <h3>
        {transaction.isDeposit ? (
        <span>{transaction.amount}</span>
      ) : (
        <span>-{transaction.amount}</span>
      )}
      </h3>
      <h3>{transaction.item_name}</h3> 
      <p>{transaction.amount}</p>
      <h5>{transaction.category}</h5>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}