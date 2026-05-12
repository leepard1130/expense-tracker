import { GlobalStyles } from '../../constants/styles';
import { View, TextInput, StyleSheet, Text } from 'react-native';

function Input({label, textInputConfig, invalid}) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {  
    inputStyles.push(styles.inputMultiline);
  }

  if(invalid){
    inputStyles.push(styles.invalidInput);
  }

  return(
    <View style={styles.inputContainer}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput 
        style={inputStyles}
        {...textInputConfig}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700
  },
  inputMultiline: {    
    minHeight: 100,
    textAlignVertical: 'top'
  },
  invalidLabel:{
    color: GlobalStyles.colors.error500
  },
  invalidInput:{
    borderColor: GlobalStyles.colors.error500
  }
});

export default Input;