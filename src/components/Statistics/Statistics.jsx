import PropTypes from 'prop-types';

import {
  StatSection,
  SectionTitle,
  StatList,
  StatItem,
  StatItemTitle,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => (
  <StatSection>
    {title && <SectionTitle>{title}</SectionTitle>}

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <StatItem key={id}>
          <StatItemTitle>{label}</StatItemTitle>
          <Percentage>{percentage}%</Percentage>
        </StatItem>
      ))}
    </StatList>
  </StatSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
