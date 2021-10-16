import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLE = {
  small: {
    '--paddingLeft': '20px',
    '--borderWidth': '1px',
    '--fontSize': (14 / 16) + 'rem',
    iconSize: 18,
    iconStrokeWidth: 1,
  },
  large: {
    '--paddingLeft': '24px',
    '--borderWidth': '2px',
    '--fontSize': (18 / 16) + 'rem',
    iconSize: 19,
    iconStrokeWidth: 2,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = STYLE[size];
  if (!style)
    throw new Error('Unexpected size is passed to IconInput');
  return (
    <Wrapper style={{'--width': width + 'px', ...style}}>
      <VisuallyHidden>${label}</VisuallyHidden>
      <NativeInput type="text" placeholder={placeholder}></NativeInput>
      <IconWrapper>
        <Icon size={style.iconSize} id={icon} strokeWidth={style.iconStrokeWidth}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  width: var(--width);
  color: ${COLORS.gray500};
  &:hover {
    color: black;
  }
`;

const NativeInput = styled.input`
  border: none;
  padding-left: var(--paddingLeft);
  width: 100%;
  border-bottom: solid black var(--borderWidth);
  font-family: Roboto,sans-serif;
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray700};
  };
  &:focus {
    outline-offset: 2px;
  }
  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

export default IconInput;
