import {useState, useEffect} from "react"
// import { Link, useParams, withRouter, useNavigate } from "react-router-dom";
import Transaction from "./Transaction"
import axios from "axios"

const API = process.env.REACT_APP_API_URL


export default function Transactions() {
    const [transactions, setTransactions] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        axios
          .get(`${API}/transactions`)
          .then((response) => {
            // console.log(response.data)
            setTransactions(response.data)})
          .catch((e) => console.error("catch", e));
      }, []);

    
        useEffect(() => {
            transactions.map(ele => console.log(ele.amount))
            setTotal(transactions.reduce((i,a) => Number(i) + Number(a.amount),0))
        }, [transactions])

        /*
        * Problem: Even w/ Number the keys are concatenating opposed to adding in value, how can I fix this?
        * Solution: 
        * Problem: Using state variable for this mapping will pass down the changes within props to other components
        * Solution: Changed (transaction, index) to (item, index) --could be called anything 
        */
        // })
    
    
      return (
        <div className="Transactions">
            <h1>Bank Account Total: ${total}</h1>
            <section>
                <table>
                <thead>
                    <tr>
                        <th>Transaction Date</th>
                        <th>Transaction</th>
                        <th>Transaction Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => {
                    return <Transaction key={index} transaction={transaction} index={index} />;
                    })}
                </tbody>
                </table>
            </section>
        </div>
    );
}
