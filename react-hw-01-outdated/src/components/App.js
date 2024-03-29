import React from "react";
import { Fragment } from "react";
import { Profile } from "./Profile/Profile";
import { StatisticsList } from "./statistics/StatisticsList";
import { FriendList } from "./friends/FriendList";
import { TransactionHistory } from "./transactions/TransactionHistory";
import user from "../assets/user.json";
import statisticalData from "../assets/statistical-data.json";
import friends from "../assets/friends.json";
import transactions from "../assets/transactions.json";

export function App() {
  return (
    <Fragment>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Fragment>
  );
}
