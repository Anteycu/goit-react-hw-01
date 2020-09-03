import React from "react";

export function StatisticsItem({ statEl }) {
  return (
    <li className="item">
      <span className="label">{statEl.label}</span>
      <span className="percentage">{statEl.percentage}</span>
    </li>
  );
}
