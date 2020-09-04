import React from "react";
import PropTypes from "prop-types";

export function StatisticsItem({ statEl }) {
  return (
    <li className="item">
      <span className="label">{statEl.label}</span>
      <span className="percentage">{statEl.percentage}</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  statEl: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
