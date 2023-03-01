import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => (
    <li className={styles.item}>

        <span className={isOnline === true ? `${styles.true}` : `${styles.false}`}></span>
        <img className={styles.avatar} src={avatar} alt={name} width='48' />
        <p className={styles.name}>{name}</p>
    </li>
    );

const FriendList = ({friends}) => (
    <ul className={styles.friend_list}>
        {friends.map(friend => (
            <FriendListItem  key={friend.id} avatar={friend.avatar}
            name={friend.name} isOnline={friend.isOnline}
           />
        ))}
    </ul>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}

FriendList.prototype = {
    friends: PropTypes.array.isRequired,
}

export default FriendList;

/*
const ListFriends = ((friends) => friends.map(friend =>
    <li className='item' key={friend.id}>
        <span className='status'></span>
        <img className='avatar' src={friend.avatar} alt={friend.name} width='48' />
        <p className='name'>{friend.name}</p>
    </li>
    ));

const FriendList = ({
    friends,
}) => (
    <ul className='friend_list'>
        {ListFriends(friends)}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}*/

