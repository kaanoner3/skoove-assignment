import { StyleProp } from 'react-native'
import FastImage, { FastImageProps, ImageStyle, ResizeMode } from 'react-native-fast-image'

export interface ImageProps extends FastImageProps {
  uri?: string
  resizeMode?: ResizeMode
  style?: StyleProp<ImageStyle>
}

export function Image({
  uri,
  style,
  resizeMode = 'contain',
  testID = 'image',
  ...props
}: ImageProps) {
  return <FastImage testID="" style={style} source={{ uri }} resizeMode={resizeMode} {...props} />
}
