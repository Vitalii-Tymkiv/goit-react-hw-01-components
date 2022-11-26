import styled from 'styled-components';

function generateRandomColor() {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

export const StatSection = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;

  background-color: #ffffff;

  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  padding: 25px 0;

  color: #4f585e;

  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 60px;
  height: 60px;
  padding: 5px;

  text-align: center;
  color: #ffffff;
  background-color: ${generateRandomColor};
`;

export const StatItemTitle = styled.span`
  margin-bottom: 5px;

  font-size: 0.7rem;
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
`;
