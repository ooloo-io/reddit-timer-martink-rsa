import React from 'react';
import PropTypes from 'prop-types';
import InfoSectionWrapper from './InfoSection.style';

function InfoSection({ name, title, children }) {
  return (
    <InfoSectionWrapper name={name} id={name}>
      <h2>{title}</h2>
      {children}
    </InfoSectionWrapper>
  );
}

InfoSection.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoSection;
