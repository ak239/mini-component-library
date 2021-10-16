import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue, getTextWidth } from "./Select.helpers";

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;

const SelectWrapper = styled.select`
  margin-left: 16px;
  border-radius: 8px;
  border: none;
  appearance: none;
  background-color: ${COLORS.transparentGray15};

  font-family: Roboto,sans-serif;
  font-weight: 400;

  padding: 12px var(--horizontalPadding);
  padding-right: calc(var(--horizontalPadding) + var(--arrowWidth) + var(--horizontalPadding));
  color: currentColor;
  width: var(--selectWidth);
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: relative;
  right: calc(var(--horizontalPadding) + var(--arrowWidth));
  top: 8px;
  margin-right: calc(-(var(--horizontalPadding) + var(--arrowWidth)));
  pointer-events: none;
`;

const LabelWrapper = styled.label`
`;

const Select = ({ label, value, onChange, children }) => {
  const text = getDisplayedValue(value, children);
  const arrowWidth = 24;
  const horizontalPadding = 16;
  const width = getTextWidth(text, '400 1rem Roboto') + horizontalPadding * 3 + arrowWidth;
  return (
    <Wrapper style={{
      '--arrowWidth': arrowWidth + 'px',
      '--horizontalPadding': horizontalPadding + 'px',
      '--selectWidth': width + 'px',
    }}>
      <LabelWrapper>{label}
        <SelectWrapper value={value} onChange={onChange}>
          {children}
        </SelectWrapper>
        <IconWrapper>
          <Icon id='chevron-down' size={arrowWidth} strokeWidth={2}></Icon>
        </IconWrapper>
      </LabelWrapper>
    </Wrapper>
  );
};

export default Select;
