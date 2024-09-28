import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const WorkerProfile = ({ profileImage, name, countryFlag }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Image source={{ uri: countryFlag }} style={styles.countryFlag} />
      </View>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    margin: 10,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
  },
  countryFlag: {
    width: 20,
    height: 20,
    borderRadius: 10, 
    position: 'absolute',
    top: 0,
    right: 0,
  },
  nameText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WorkerProfile;
