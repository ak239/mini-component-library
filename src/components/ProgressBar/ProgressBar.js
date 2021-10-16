/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--height': '24px',
    '--borderRadius': '4px',
    '--padding': '4px'
  },
  medium: {
    '--height': '12px',
    '--borderRadius': '4px',
  },
  small: {
    '--height': '8px',
    '--borderRadius': '4px',
  }
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: calc(var(--borderRadius) + var(--padding, 0px));
  height: var(--height);
  padding: var(--padding);
`;

const ProgressWrapper = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value + '%'};
  height: 100%;
  border-top-left-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);
  border-top-right-radius: ${props => props.value === 100 && 'var(--borderRadius)'};
  border-bottom-right-radius: ${props => props.value === 100 && 'var(--borderRadius)'};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role={'progressbar'}
      aria-valuenow={value}
      aria-valuemax={100}
      aria-valuemin={0}
      style={SIZES[size]}>
      <ProgressWrapper value={value}></ProgressWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

export default ProgressBar;
