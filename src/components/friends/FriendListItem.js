import React from "react";
import styles from "./friendListItem.module.css";
import PropTypes from "prop-types";

export function FriendListItem({ friend }) {
  return (
    <li className={styles.friendListItem}>
      <span className={friend.isOnline ? styles.statusOn : styles.statusOff}>
        {friend.isOnline}
      </span>
      <img
        className={styles.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }),
};
