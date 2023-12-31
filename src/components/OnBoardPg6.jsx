import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import {Circle, Defs, Path, Pattern, Svg, Use} from 'react-native-svg';

const OnBoardPg6 = ({setOnBoardDataPage}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          margin:10
        }}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            color: '#000000',
            width: 300,
            padding: 10,
            paddingBottom: 0,
          }}>
          Are you a cizien of Portugal?
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            color: '#000000',
            width: 300,
            padding: 10,
            paddingBottom: 0,
          }}>
          We need this information to open your account.
        </Text>
      </View>
      <View
        style={{flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.container}>
          <View style={styles.preview}>
            <Image
              style={{height: 120, width: 120}}
              source={require('../assets/images/portugalFlag.png')}
            />
          </View>

          <View style={{margin: 10, marginTop: 150, flexDirection: 'row',justifyContent:"space-between"}}>
            <TouchableOpacity
            style={{width:"48%"}}
              onPress={() => {
                setOnBoardDataPage(6);
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#B1A2ED',
                  padding: 11,
                  borderRadius: 20,
                  fontFamily: 'Inter-Regular',
                  fontSize: 14,
                  textAlign: 'center',

                }}>
                No
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{width:"48%"}}
              onPress={() => {
                setOnBoardDataPage(7);
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#6C4EE3',
                  padding: 11,
                  borderRadius: 20,
                  fontFamily: 'Inter-Regular',
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                Yes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  logo: {height: 50, width: 50},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 50,
    color:"#26292D",
    borderRadius: 17,
    padding: 10,
    paddingHorizontal: 10,
    backgroundColor: '#EBEBEB',
    marginHorizontal: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdownContainer: {
    flexDirection: 'row',
  },
  checkboxContainer: {
    justifyContent: 'center',

    marginRight: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  preview: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  camera: {
    height: 240,
    width: 240,
    overflow: 'hidden',
    borderRadius: 300,
  },
});

export default OnBoardPg6;
