import React from "react";
import styles from "./friendList.module.css";
import { FriendListItem } from "./FriendListItem";
import PropTypes from "prop-types";

export function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
