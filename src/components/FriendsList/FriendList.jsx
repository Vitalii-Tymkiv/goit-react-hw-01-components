import PropTypes from 'prop-types';
import { FriendsItemsList } from './FriendList.styled';
import FriendsItem from '../FriendsItem/FriendsItem';

const FriendList = ({ friends }) => (
  <FriendsItemsList>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </FriendsItemsList>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
