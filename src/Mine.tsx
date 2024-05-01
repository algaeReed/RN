import React from 'react';

import { Button, StyleSheet, View } from 'react-native';

function Mine({ navigation }: { navigation: any }): React.JSX.Element {
  return (
    <View>
      <Button
        title="Go to Mine Tab"
        onPress={() => navigation.navigate('Mine')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Mine;
