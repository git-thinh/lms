import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const useCustomTextFieldStyles = makeStyles((theme) => ({
  formHelperText: {
    marginLeft: 0,
    color: theme.palette.error.main
  }
}));

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  const customTextFieldClasses = useCustomTextFieldStyles();

  return <TextField {...props} FormHelperTextProps={{ className: customTextFieldClasses.formHelperText }} />;
};

export default CustomTextField;
