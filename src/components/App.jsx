import Profile from "./Profile/Profile";
import FriendsList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

function App() {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        tag={userData.tag}
        stats={userData.stats}
        location={userData.location}
        name={userData.username}
      />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
