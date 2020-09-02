import React from "react";
import { Fragment } from "react";
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import user from "../assets/user.json";
import statisticalData from "../assets/statistical-data.json";

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
      <Statistics title="Upload stats" stats={statisticalData} />
    </Fragment>
  );
}
