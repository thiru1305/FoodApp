import React from "react";
import AppTextInput from "./AppTextInput";

import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldValue, errors, touched, values, handleBlur } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={handleBlur(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        error={touched[name] && errors[name]}
        {...otherProps}
      />
    </>
  );
}

export default AppFormField;
