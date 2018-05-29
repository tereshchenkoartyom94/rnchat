import React from 'react';
import {
  Text, View,
  Button
} from 'react-native';

const MessageDetails = ({ navigation }) => <View>
  <Text>FeedDetails</Text>
  <Button
    onPress={() => {
      navigation.navigate('FeedDetails');
    }}

    title="Navigate to FeedDetails"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  />
</View>;

export default MessageDetails;
