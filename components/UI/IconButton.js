import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, size, colour, onPress}){
    return(
        <Pressable 
          onPress={onPress} 
          style={({pressed}) => pressed && styles.pressed}
        >
          <View>
            <Ionicons name={icon} size={size} color={colour} />
          </View>
        </Pressable>
    );
}

export default IconButton

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  passed:{
    opacity: 0.75
  }
});