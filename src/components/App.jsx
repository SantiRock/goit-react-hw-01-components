import Profile from "./profile/profile";
import Statistics from "./statistics/statistics";
import FriendList from "./friendlist/friendlist";
import TransactionHistory from "./transactionhistory/transactionhistory";

import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendlist/friends.json'; 
import transactions from './transactionhistory/transactions.json';

function typeUp(arr) {
  for (let item of arr) {
    let type = item.type;
    let typeUpper = type.charAt(0).toUpperCase() + type.slice(1);
    item.type= typeUpper
  }
  return arr;
}

typeUp(transactions);

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title='Upload stats' stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
