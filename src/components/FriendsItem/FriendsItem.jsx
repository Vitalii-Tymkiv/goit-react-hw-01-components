import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendsItem.styled';

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
