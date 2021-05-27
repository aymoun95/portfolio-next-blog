import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";

export const InputField = ({
  label,
  textarea,
  isRequired,
  mt,
  id,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  let InputOrTextarea = Input;
  if (textarea) {
    InputOrTextarea = Textarea;
  }
  return (
    <FormControl id={id} isRequired={isRequired} mt={mt}>
      <FormLabel>{label}</FormLabel>
      <InputOrTextarea
        color={textColor[colorMode]}
        focusBorderColor="red.500"
        {...props}
      />
    </FormControl>
  );
};
