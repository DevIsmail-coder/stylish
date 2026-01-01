import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  containerClassName?: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputContainerClassName?: string;
  style?: StyleProp<TextStyle>;
  focusedStyle?: StyleProp<TextStyle>;
  rightIcon?: any;
  rightIconPress?: any;
  rightIconStyle?: StyleProp<ViewStyle>;
  leftIcon?: any;
  leftIconStyle?: StyleProp<ViewStyle>;
  size?: InputSize;
  isPassword?: boolean;
}
