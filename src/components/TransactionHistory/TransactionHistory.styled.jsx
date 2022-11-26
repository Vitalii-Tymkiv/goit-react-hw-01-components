import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;

  text-align: center;

  background-color: #ffffff;
  color: #808184;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  overflow: hidden;
`;

export const TransactionHead = styled.thead`
  border: 0px solid #b5b5b5;

  background-color: #00bcd5;
  color: #ffffff;

  text-transform: uppercase;
`;

export const TransactionTitle = styled.th`
  width: 33.3%;
  padding: 15px 5px;
`;

export const TransactionCell = styled.td`
  padding: 15px 5px;

  text-transform: capitalize;

  transition: background-color 250ms linear;

  cursor: pointer;
  border: 1px solid #c9dcdf;

  &:hover,
  &:focus {
    background-color: #c9dcdf;
    transition: background-color 250ms linear;
  }
  color: ${props => {
    if (props.type === 'invoice') {
      return '#1403fc';
    } else if (props.type === 'payment') {
      return '#4caf50';
    } else if (props.type === 'withdrawal') {
      return '#f44336';
    } else if (props.type === 'deposit') {
      return '#ed9511';
    }
  }};
`;

export const TransactionRow = styled.tr`
  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;
