import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, TextInputProps, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors, fonts } from '../constants';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface LoginScreenProps { }

const LoginScreen: React.FC<LoginScreenProps> = () => {
    const [secureEntry, setSecureEntry] = useState<boolean>(true);
    const navigation = useNavigation<NavigationProp<any>>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Image style={{ flex: 1, position: 'absolute' }} source={require('../assets/images/bg.png')} />

            {/* <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25} />
      </TouchableOpacity> */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>Hey,</Text>
                    <Text style={styles.headingText}>Welcome</Text>
                    <Text style={styles.headingText}>Back</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Ionicons name={'mail-outline'} size={25} color={colors.primaryColor} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your email"
                            placeholderTextColor={colors.secondary}
                        />
                    </View>

                    <View style={[styles.inputContainer, { marginTop: 20 }]}>
                        <SimpleLineIcons name={'lock'} size={25} color={colors.primaryColor} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your password"
                            placeholderTextColor={colors.secondary}
                            secureTextEntry={secureEntry}
                        />
                        <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
                            <SimpleLineIcons name={secureEntry ? 'eye' : 'eye-off'} size={15} color={colors.primaryColor} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginWrapper}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={styles.continueText}>or continue with</Text>

                    <TouchableOpacity style={styles.googleContainer}>
                        <Image source={require('../assets/images/google.png')} style={styles.google} />
                        <Text style={styles.googleText}>Google</Text>
                    </TouchableOpacity>

                    <View style={styles.dontHaveAccountContainer}>
                        <Text style={styles.dontText}>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('SignUpScreen')
                        }}>
                            <Text style={styles.signupText}>Sign up</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 20,
    },
    textContainer: {
        marginVertical: 20,
    },
    headingText: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.SemiBold,
    },
    formContainer: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 100,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        color: colors.primaryColor,
    },
    forgotPasswordText: {
        fontSize: 14,
        fontFamily: fonts.SemiBold,
        color: colors.white,
        textAlign: 'right',
        marginTop: 10,
    },
    loginWrapper: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 50,
        backgroundColor: colors.primaryColor,
    },
    loginText: {
        color: colors.bgColor,
        fontSize: 16,
        fontFamily: fonts.SemiBold,
    },
    continueText: {
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: fonts.Regular,
        fontSize: 12,
        color: colors.white,
    },
    google: {
        height: 18,
        width: 18,
    },
    googleContainer: {
        flexDirection: 'row',
        height: 30,
        width: 100,
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: colors.white,
    },
    googleText: {
        fontSize: 15,
        marginLeft: 5,
        color: colors.primaryColor,
        fontFamily: fonts.SemiBold,
    },
    dontHaveAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 5,
    },
    dontText: {
        fontSize: 13,
        color: colors.white,
    },
    signupText: {
        fontSize: 13,
        color: colors.primaryColor,
        fontFamily: fonts.SemiBold,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: 20,
    },
});
