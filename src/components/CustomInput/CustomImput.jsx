import { useField } from "formik";
import { FormLabel, Text } from '@chakra-ui/react'
import { chakra, Box } from '@chakra-ui/react'
const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Box
      w='100%'>

        <FormLabel>{label}</FormLabel>
        <chakra.input {...field} {...props}
          _focus={{ border: "2px solid #7743DB" }}
          outline='none'
          borderRadius={5}
          w='100%'
          border = {meta.touched && meta.error ? '1px solid #eb0f0f' : '1px solid #e2e8f0'}
        />
      </Box>
      <Text
        height="18px"
        color="#eb0f0f"
        fontSize={11}
        visibility={meta.touched && meta.error ? "visible" : "hidden"}
        fontStyle='italic'
      >{meta.error}</Text>
    </>
  );
}

export default CustomInput;