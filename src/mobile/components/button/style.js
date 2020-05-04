import styled from 'styled-components';

const backgroundColor = ({type, disabled}) => {
  switch (type) {
    case 'primary':
      return disabled ? '#EBECED' : '#0087fa';
    default:
      return disabled ? '#F8F9F9' : '#fff';
  }
};

const titleColor = ({type, disabled}) => {
  switch (type) {
    case 'primary':
      return disabled ? '#B5BABD' : '#fff';
    case 'deny':
      return '#FF7E8E';
    default:
      return '#0087fa';
  }
};

const borderColor = ({type}) => {
  switch (type) {
    case 'secondary':
      return '#0087FA';
    case 'deny':
      return 'rgba(240,240,240,10)';
    default:
      return '#0087fa';
  }
};

const size = (props, attribute) => {
  if (props.small) {
    return attribute.small;
  }
  if (props.medium) {
    return attribute.medium;
  }
  return attribute.default;
};

const borderRadius = {
  small: '14px',
  medium: '20px',
  default: '27px',
};

const fontSize = {
  small: '13px',
  medium: '14px',
  default: '16px',
};

const height = {
  small: '28px',
  medium: '40px',
  default: '54px',
};

const paddingHorizontal = {
  small: '12px',
  medium: '30px',
  default: '50px',
};

export const Container = styled.View`
  background: ${($props) => backgroundColor($props)}
  border-radius: ${($props) => size($props, borderRadius)};
  height: ${($props) => size($props, height)};
  padding-horizontal: ${($props) => size($props, paddingHorizontal)};
  justify-content: center;
  align-items: center;
  border-width: ${($props) => ($props.disabled ? 0 : '1px')};
  border-color: ${($props) => borderColor($props)};
  shadow-color: #cad4dc;
  shadow-opacity: ${({disabled}) => (disabled ? 0 : 0.5)};
  shadow-radius: 8px;
  shadow-offset: 0px 4px;
  elevation: 2;
`;

export const Title = styled.Text`
  color: ${($props) => titleColor($props)};
  font-size: ${($props) => size($props, fontSize)};
  font-weight: 600;
  text-align: center;
`;
