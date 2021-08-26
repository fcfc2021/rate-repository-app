import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: theme.textInput.margin,
    color:theme.colors.error,
  },
  textInput:{
    marginTop:theme.textInput.margin,
    marginBottom:theme.textInput.margin,
    fontSize:theme.fontSizes.body,
  }
});

const FormikNumberInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput style={styles.textInput}
        onChangeText={value => helpers.setValue(Number(value))}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikNumberInput;