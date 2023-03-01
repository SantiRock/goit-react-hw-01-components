import Proptypes from 'prop-types';
import styles from './TransactionHistory.module.css';


const TransactionsList = ((items) => items.map(item =>
        <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
)); 


const TransactionHistory = ({ items }) => (
    <table className={styles.th}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
           {TransactionsList(items)}
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: Proptypes.array,
}

export default TransactionHistory;