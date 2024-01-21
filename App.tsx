import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [form, setForm] = useState({
    email:'',
    password:'',
  })
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4'}}>
    <View style={styles.container}>
      <View style= {styles.header}>
        <Image
          source ={{uri:'https://th.bing.com/th/id/OIP.HtuTq1L0kf02zJtRCkpPSwHaHa?rs=1&pid=ImgDetMain'}}
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

const styles = StyleSheet.create({
    btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },
  container: {
    paddings: 24,
    flex: 1,
    margin: 20
  },
  form: {
    marginBottom: 24,
    flex: 1
  },
  formAction: {
    marginVertical: 24
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15
  },
  header: {
    marginVertical: 36,
  },
  headerImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36
  },
  input: {
    marginBottom: 16
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
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8
  },
  subtitle:{
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center'
  },
  title: {
    fontSize : 27,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center'
  }
})
