import React from 'react';
import { SpinnerWrapper, SpinnerMain } from './Spinner.style';

function Spinner() {
  return (
    <SpinnerWrapper data-testid="loading-spinner"><SpinnerMain /></SpinnerWrapper>
  );
}

export default Spinner;
