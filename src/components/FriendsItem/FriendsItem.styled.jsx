import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;

  background-color: #ffffff;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &:hover {
    opacity: 0.8;

    transition: opacity 250ms linear;
  }

  &:focus {
    opacity: 0.8;

    transition: opacity 250ms linear;
  }
`;

export const FriendStatus = styled.span`
  margin: 0 15px;

  display: inline-block;

  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? '#4caf50' : '#f44336')};
`;

export const FriendAvatar = styled.img`
  width: 60px;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-weight: 500;
`;
