import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Container, Title} from './style';

type Props = {
  type: 'primary' | 'secondary' | 'deny',
  title: string,
  disabled: boolean,
  loading: boolean,
  small: boolean,
  medium: boolean,
  onPress: () => void,
};

const Button = ({
  title,
  disabled = false,
  loading = false,
  small = false,
  medium = false,
  onPress,
  type,
}: Props) => {
  return loading ? (
    <Container type="primary" small={small}>
      <ActivityIndicator color={type === 'primary' ? '#fff' : '#0087fa'} />
    </Container>
  ) : (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Container type={type} disabled={disabled} small={small} medium={medium}>
        <Title
          disabled={disabled}
          small={small}
          medium={medium}
          type={type}
          numberOfLines={2}>
          {title}
        </Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
