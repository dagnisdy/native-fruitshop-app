import React from 'react';
import { Image } from 'react-native';

const CustomImage = () => {
  return (
    <Image
      source={props.path}
      imageStyle={{ borderRadius: 4 }}
      style={{ height: 50, width: 50 }}
    />
  );
};

export default CustomImage;
