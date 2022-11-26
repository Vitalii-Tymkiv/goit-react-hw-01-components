import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TransactionTitle,
  TransactionCell,
  TransactionRow,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <TransactionHead>
      <tr>
        <TransactionTitle>Type</TransactionTitle>
        <TransactionTitle>Amount</TransactionTitle>
        <TransactionTitle>Currency</TransactionTitle>
      </tr>
    </TransactionHead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionRow key={id}>
          <TransactionCell type={type}>{type}</TransactionCell>
          <TransactionCell>{amount}</TransactionCell>
          <TransactionCell>{currency}</TransactionCell>
        </TransactionRow>
      ))}
    </tbody>
  </TransactionTable>
);

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
