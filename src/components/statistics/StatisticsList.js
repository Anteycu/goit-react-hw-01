import React from "react";
import { StatisticsItem } from "./StatisticsItem";

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
