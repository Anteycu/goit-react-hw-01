// import styles from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = () => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

export default FriendList;
