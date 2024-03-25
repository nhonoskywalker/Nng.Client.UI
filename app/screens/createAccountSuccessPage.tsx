import { View, Image, Text,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'


const CreateAccountSuccessPage = () => {
  return (
    <View style={styles.background}>
      <ImageBackground 
        style={styles.background}
        source={require('../../assets/successBg.jpg')}
      >
        <View style={styles.successContainer}>
          <Image 
          style={styles.successIcon}
          source={require('../../assets/successIcon.png')}/>

          <View>
            <Text style={styles.successText}>You have successfully created your account</Text>
          </View>

          <View style={styles.btn}>
            <Text style={styles.btnText}> SIGN IN</Text>
          </View>

        </View>

      </ImageBackground>


    </View>
    
  )
}


export default CreateAccountSuccessPage

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'royalblue',
    width: "50%",
    height: 35,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    textAlign:"center"
  },
  successIcon:{
    width: 100,
    height: 100,
  },
  successContainer: {
    position: 'absolute',
    top: 150,
    alignSelf:"center",
    alignItems:'center'
  },
  successText: {
    color: "white",
    lineHeight: 60,
    fontSize: 17,
    fontWeight: "400"
  }
  
})
