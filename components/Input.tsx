import { EyeOffSvg, EyeSvg } from "@/assets/svgs/onboarding";
import { InputProps, InputSize } from "@/assets/types/inputTypes";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { useEffect, useMemo, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEvent,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

const SIZE_STYLES: Record<
  InputSize,
  { paddingVertical: number; paddingHorizontal: number }
> = {
  sm: {
    paddingVertical: moderateScale(4),
    paddingHorizontal: moderateScale(8),
  },
  md: {
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(12),
  },
  lg: {
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(16),
  },
};
const Input = ({
  label,
  containerClassName = "",
  containerStyle = {},
  inputContainerClassName = "",
  inputContainerStyle = {},
  size = "md",
  secureTextEntry,
  value,
  rightIcon,
  leftIcon,
  editable = true,
  style = {},
  focusedStyle = {},
  error,
  onBlur,
  onFocus,
  onChange,
  placeholder,
  placeholderTextColor,
  onSubmitEditing,
  multiline,
  leftIconStyle,
  rightIconPress,
  rightIconStyle,
  isPassword = false,
  ...props
}: InputProps) => {
  const [password, setPassword] = useState(secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);
  const colorScheme = useColorScheme();

  const resolvedValue =
    value === undefined || value === null
      ? ""
      : typeof value === "string"
        ? value
        : String(value);

  useEffect(() => {
    setPassword(secureTextEntry);
  }, [secureTextEntry]);

  const sizeStyle = useMemo(
    () => ({
      paddingVertical: SIZE_STYLES[size].paddingVertical,
      paddingHorizontal: SIZE_STYLES[size].paddingHorizontal,
      height:
        size === "sm"
          ? moderateScale(40)
          : size === "md"
            ? moderateScale(48)
            : moderateScale(55),
    }),
    [size]
  );

  const inputStyles = useMemo(
    () => [
      {
        ...styles.input,
        fontSize: size === "sm" ? 12 : size === "md" ? 14 : 16,
        color: colorScheme === "dark" ? "white" : "black",
        backgroundColor: colorScheme === "dark" ? "#333333" : "#ffffff",
      },
      sizeStyle,
      !!leftIcon && { paddingLeft: moderateScale(38) },
      !!rightIcon && { paddingRight: moderateScale(40) },
      style,
      !editable && styles.disabledInput,
      isFocused && {
        borderColor: error ? "#CF3333" : "#4392F9",
        borderWidth: 1.3,
        ...focusedStyle,
      },
      error && styles.errorInput,
    ],
    [
      sizeStyle,
      style,
      editable,
      isFocused,
      error,
      focusedStyle,
      leftIcon,
      rightIcon,
    ]
  );

  const handleSubmitEditing = (e: TextInputSubmitEditingEvent) => {
    if (onSubmitEditing) {
      onSubmitEditing(e);
    }
    Keyboard.dismiss();
  };
  return (
    <View
      className={`${containerClassName} w-full`}
      style={[{ marginBottom: moderateScale(16) }, containerStyle]}
    >
      {label ? (
        <Text className="text-black dark:text-white font-normal text-sm mb-3.5">
          {label}
        </Text>
      ) : null}

      <View
        className={`relative ${inputContainerClassName}`}
        style={inputContainerStyle}
      >
        {leftIcon ? (
          <View
            style={[
              styles.leftIcon,
              {
                top:
                  size === "sm"
                    ? moderateScale(10)
                    : size === "md"
                      ? moderateScale(14)
                      : moderateScale(16),
              },
              leftIconStyle,
            ]}
          >
            {leftIcon}
          </View>
        ) : null}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={inputStyles}
          onFocus={(event) => {
            setIsFocused(true);
            if (onFocus) {
              onFocus(event);
            }
          }}
          onChange={onChange}
          onBlur={(event) => {
            setIsFocused(false);
            if (onBlur) {
              onBlur(event);
            }
          }}
          value={resolvedValue}
          onSubmitEditing={handleSubmitEditing}
          secureTextEntry={password}
          multiline={multiline}
          selectionColor={colorScheme === "dark" ? "white" : "black"}
          editable={editable}
          autoCapitalize="none"
          {...props}
        />
        {rightIcon && isPassword ? (
          <TouchableOpacity
            style={[
              styles.rightIcon,
              {
                top:
                  size === "sm"
                    ? moderateScale(10)
                    : size === "md"
                      ? moderateScale(14)
                      : moderateScale(16),
              },
              rightIconStyle,
            ]}
            onPress={() => {
              if (rightIconPress) {
                rightIconPress();
              } else {
                setPassword(!password);
              }
            }}
            disabled={!editable}
            accessible
            accessibilityLabel="Toggle password visibility"
            accessibilityHint="Toggles the password visibility"
            accessibilityRole="button"
          >
            {password ? (
              <EyeSvg stroke={colorScheme === "dark" ? "#F3F3F3" : "#626262"} />
            ) : (
              <EyeOffSvg
                stroke={colorScheme === "dark" ? "#F3F3F3" : "#626262"}
              />
            )}
          </TouchableOpacity>
        ) : rightIcon && !password ? (
          <TouchableOpacity
            style={[
              styles.rightIcon,
              {
                top:
                  size === "sm"
                    ? moderateScale(10)
                    : size === "md"
                      ? moderateScale(14)
                      : moderateScale(16),
              },
              rightIconStyle,
            ]}
            onPress={() => {
              if (rightIconPress) {
                rightIconPress();
              }
            }}
            disabled={!editable}
          ></TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#A8A8A9",
    backgroundColor: "#ffffff",
    borderRadius: moderateScale(10),
    fontSize: moderateScale(14),
  },
  disabledInput: {
    backgroundColor: "#f0f2f5",
    color: "#727A86",
  },
  errorInput: {
    borderColor: "#CF3333",
  },
  leftIcon: {
    position: "absolute",
    left: moderateScale(12),
    height: verticalScale(20),
    width: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 6,
  },
  rightIcon: {
    position: "absolute",
    right: moderateScale(12),
    height: verticalScale(20),
    width: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
