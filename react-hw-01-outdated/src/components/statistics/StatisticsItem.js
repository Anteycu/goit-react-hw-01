import React from "react";
import styles from "./statisticsItem.module.css";
import PropTypes from "prop-types";

function randomColorRgbValues() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
}

export function StatisticsItem({ statEl }) {
  return (
    <li
      style={{ backgroundColor: randomColorRgbValues() }}
      className={styles.item}
    >
      <span className={styles.label}>{statEl.label}</span>
      <span className={styles.percentage}>{statEl.percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  statEl: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
