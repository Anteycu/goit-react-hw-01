import React from "react";
import styles from "./statisticsList.module.css";
import { StatisticsItem } from "./StatisticsItem";
import PropTypes from "prop-types";

export function StatisticsList({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat_list}>
        {stats.map((statEl) => (
          <StatisticsItem key={statEl.id} statEl={statEl} />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
