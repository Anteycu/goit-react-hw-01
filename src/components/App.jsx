// import styles from "./App.module.css";
import Profile from "./Profile/Profile";
import FriendsList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

function App() {
  console.log(userData);
  console.log(friends);
  console.log(transactions);
  return (
    <>
      <h1>Vite + React</h1>
      <Profile />
      <FriendsList />
      <TransactionHistory />
    </>
  );
}

export default App;
