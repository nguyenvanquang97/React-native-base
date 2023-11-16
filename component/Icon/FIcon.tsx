import React from 'react';
import {SvgXml} from 'react-native-svg';
import { COLORS } from '../../assets/styles/color';

interface FIconProps {
  icon: string;
  iconColor?: string;
  size?: number;
}

const FIcon: React.FC<FIconProps> = ({
  icon,
  iconColor = COLORS.PrimaryColor,
  size,
}) => {
  const modifiedColor = icon.replaceAll(
    'fill="black"',
    'fill="' + iconColor + '"',
  );

  return <SvgXml xml={modifiedColor} width={size} height={size} />;
};

export default FIcon;
