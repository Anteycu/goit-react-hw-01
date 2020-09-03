import React from "react";
import { TransactionHistoryItem } from "./TransactionHistoryItem";

export function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
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
