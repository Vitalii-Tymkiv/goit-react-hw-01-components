import PropTypes from 'prop-types';
import noAvatar from 'images/noavatar.svg';

import {
  Wrapper,
  Description,
  Avatar,
  Username,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  StatsItemTitle,
  StatsQuantity,
} from './Profile.styled';

const Profile = ({ avatar = noAvatar, username, tag, location, stats }) => (
  <Wrapper>
    <Description>
      <Avatar src={avatar} alt="users avatar" />
      <Username>{username}</Username>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Description>

    <StatsList>
      <StatsItem>
        <StatsItemTitle>Followers</StatsItemTitle>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsItemTitle>Views</StatsItemTitle>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsItemTitle>Likes</StatsItemTitle>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </StatsList>
  </Wrapper>
);

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
