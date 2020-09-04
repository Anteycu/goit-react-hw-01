import React from "react";
import { StatisticsItem } from "./StatisticsItem";
import PropTypes from "prop-types";

export function StatisticsList({ title, stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
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
