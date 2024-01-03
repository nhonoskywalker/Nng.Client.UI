import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Logged in Successfully!')
        } catch (error: any) {
            console.log(error);
            alert('Login Failed' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Account created sucessfully ')
        } catch (error:any) {
            console.log(error);
            alert('Registration Failed' + error.message)
        } finally {
            setLoading(false)
        }
    }
    
    
  return (
    <View style={styles.container}>
      <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => {
        setEmail(text)
      }}>
      </TextInput>

      <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => {
        setPassword(text)
      }}>
      </TextInput>
      <Text> </Text>
      {loading ? <ActivityIndicator size="large" color="#000ff" />
      : <>
      <Button title="Login" onPress={signIn} />
      <Text> </Text>
      <Button title="Create Account" onPress={signUp} />
      </>
      }
    </View>
  )

}

export default Login


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    },
    button: {
        padding: 2
    }
})