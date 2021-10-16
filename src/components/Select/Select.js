import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;

const PresentationalBit = styled.div`
  padding: 12px 16px;
  color: currentColor;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: max-content;
  font-family: Roboto,sans-serif;
  font-weight: 400;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const Select = ({ label, value, onChange, children }) => {
  const text = getDisplayedValue(value, children);
  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {text}
        <IconWrapper>
          <Icon id='chevron-down' size={10} strokeWidth={4}></Icon>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
