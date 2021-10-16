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
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  padding: 12px 16px;
  color: currentColor;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  font-family: Roboto,sans-serif;
  font-weight: 400;

  padding-right: 52px;
  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
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
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id='chevron-down' size={24} strokeWidth={2}></Icon>
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
