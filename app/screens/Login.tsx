import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Alert,Image } from 'react-native'
import React, { useState } from 'react'



const Login = () => {
    const [form, setForm] = useState({
        email:'',
        password:'', 
      })
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>
          <View style= {styles.header}>
            <Image
              source ={require("../../assets/nonogo.png")}
              style={styles.headerImage}
              alt=""
            />
        
            <Text style={styles.title}> Sign in to NonoGo</Text>
            <Text style={styles.subtitle}> Get access to your daily servicing needs</Text>
          </View>
    
          <View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email Address</Text>
    
              <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputControl}
                placeholder='user@example.com'
                placeholderTextColor="#6b7280"
                value={form.email}
                onChangeText={email => setForm( {...form,email})}
              />
            </View>
    
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
    
              <TextInput
                secureTextEntry
                style={styles.inputControl}
                placeholder='**********'
                placeholderTextColor="#6b7280"
                value={form.password}
                onChangeText={password => setForm( {...form,password})}
              />
            </View>
    
            <View style={styles.formAction}>
              <TouchableOpacity onPress={()=>{
                // handle onPress
                Alert.alert('Successfully logged in!')
              }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>
                    Sign in
                  </Text>
                </View>
                
              </TouchableOpacity>
            </View>
    
            <TouchableOpacity
            style={{marginTop: 'auto'}}
            onPress={() => {
              //handle onPress
            }}>
              <Text style={styles.formFooter}>
                Don't have an account? {' '}
                <Text style={{textDecorationLine: 'underline'}}> Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
      );

}

export default Login


const styles = StyleSheet.create({
    btn: {
    backgroundColor: '#075eec',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff'
  },
  container: {
    paddings: 20,
    flex: 1,
    margin: 30
  },
  form: {
    marginBottom: 24,
    flex: 1
  },
  formAction: {
    marginVertical: 24
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.25
  },
  header: {
    marginVertical: 40,
  },
  headerImage: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginBottom: 30
  },
  input: {
    marginBottom: 10
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222'
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 9
  },
  subtitle:{
    fontSize: 16,
    fontWeight: '600',
    color: '#929292',
    textAlign: 'center'
  },
  title: {
    fontSize : 30,
    fontWeight: '800',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center'
  }
})
