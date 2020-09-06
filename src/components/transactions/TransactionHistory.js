import React from "react";
import styles from "./transactionHistory.module.css";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import PropTypes from "prop-types";

export function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
