import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;

  margin: 15px auto;
  border-radius: 5px;

  background-color: #ffffff;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  overflow: hidden;
`;

export const Description = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #cfcfd0;

  text-align: center;
`;

export const Avatar = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border-radius: 50%;
  background-color: #d8e0e7;
`;

export const Username = styled.p`
  margin: 0 0 10px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin: 0 0 10px;
  color: #768696;
`;

export const UserLocation = styled.p`
  margin: 0;
  color: #768696;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;

  text-align: center;

  background-color: #f3f6f9;
`;
export const StatsItem = styled.li`
  width: 33.3%;
  padding: 15px;
  &:not(:last-child) {
    border-right: 1px solid #cfcfd0;
  }
`;

export const StatsItemTitle = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #768696;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
`;
