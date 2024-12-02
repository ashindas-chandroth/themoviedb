import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { colors, fonts } from '../constants';

const SignUpScreen: React.FC = () => {
    const [secureEntery, setSecureEntery] = useState<boolean>(true);
    const navigation = useNavigation<NavigationProp<any>>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Image style={{ flex: 1, position: 'absolute' }} source={require('../assets/images/bg.png')} />
            <TouchableOpacity style={styles.backButtonWraper} onPress={handleGoBack}>
                <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Let's get</Text>
                <Text style={styles.headingText}>started</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={25} color={colors.primaryColor} />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your email'
                        placeholderTextColor={colors.secondary}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 20 }]}>
                    <AntDesign name={"mobile"} size={25} color={colors.primaryColor
                    } />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your mobile number'
                        placeholderTextColor={colors.secondary}
                    />
                </View>
                <View style={[styles.inputContainer, { marginTop: 20 }]}>
                    <SimpleLineIcons name={"lock"} size={25} color={colors.primaryColor} />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your password'
                        placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntery}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntery((prev) => !prev);
                    }}>
                        <SimpleLineIcons name={"eye"} size={15} color={colors.primaryColor} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassWordText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginWrapper} onPress={() => {
                    navigation.navigate('Home')
                }}>
                    <Text style={styles.loginText}>SignUp</Text>
                </TouchableOpacity>
                <Text style={styles.continueText}>or continue with</Text>
                <TouchableOpacity style={styles.googleContainer}>
                    <Image source={require("../assets/images/google.png")} style={styles.google} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.dontHaveAccountContainer}>
                    <Text style={styles.dontText}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={styles.signupText}>Login</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        padding: 20
    },
    backButtonWraper: {
        backgroundColor: colors.primaryColor,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        marginVertical: 20
    },
    headingText: {
        fontSize: 32,
        color: colors.white,
        fontFamily: fonts.SemiBold
    },
    formContainer: {
        marginTop: 20
    },
    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.primaryColor,
        borderRadius: 100,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: fonts.Light,
        color: colors.primaryColor
    },
    forgotPassWordText: {
        fontSize: 14,
        fontFamily: fonts.SemiBold,
        color: colors.primaryColor,
        textAlign: "right",
        marginTop: 10
    },
    loginWrapper: {
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 50,
        backgroundColor: colors.primaryColor
    },
    loginText: {
        color: colors.bgColor,
        fontSize: 16,
        fontFamily: fonts.SemiBold
    },
    continueText: {
        textAlign: "center",
        marginVertical: 20,
        fontFamily: fonts.Regular,
        fontSize: 12,
        color: colors.white
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
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        gap: 5
    },
    dontText: {
        fontSize: 13,
        color: colors.white
    },
    signupText: {
        fontSize: 13,
        color: colors.primaryColor,
        fontFamily: fonts.SemiBold
    }
});
