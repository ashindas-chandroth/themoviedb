import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { AppDispatch, RootState } from '../redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovDetails } from '../redux/actions/tvActions'
import { colors, fonts } from '../constants'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native-elements'


interface Props {
    'id': number
}

const MovieDetails: React.FC = () => {
    const route = useRoute<RouteProp<{ params: { id: number } }, 'params'>>();
    const { id } = route.params;
    const dispatch: AppDispatch = useDispatch();
    const navigation = useNavigation();
    const { loadingMovDetails, movDetails, movDetailsError } = useSelector((state: RootState) => state.tv);
    useEffect(() => {
        dispatch(fetchMovDetails(id))
    }, [id])



    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>





            {
                loadingMovDetails ? (
                    <ActivityIndicator color={colors.primaryColor} size={'large'} />
                ) :
                    movDetailsError ? (
                        <Text>{movDetailsError}</Text>
                    ) :
                        (
                            <View style={styles.imageContainer}>
                                <View style={{ height: 320 }}>
                                    {/* <Image style={styles.img} source={require('../assets/images/power.jpg')} />
            <Image style={styles.imgSmall} source={require('../assets/images/power.jpg')} /> */}
                                    <Image source={require('../assets/images/power.jpg')} style={{ width: '100%', height: 200 }} />
                                    <View style={{ width: '100%', height: 200, position: 'absolute', left: 20, top: 100, flexDirection: 'row' }}>
                                        <Image style={styles.imgSmall} source={require('../assets/images/power.jpg')} />
                                        <View style={{ justifyContent: 'flex-end', bottom: 20, left: 10 }}>
                                            <Text style={{ color: colors.white, fontSize: 18, fontFamily: fonts.Bold }}>{movDetails?.original_title}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                {
                                                    // movDetails?.genres.map((genres) => (


                                                    //     <Text key={genres.id} style={{ color: colors.white, fontSize: 10, margin: 5 }}>
                                                    //         <View style={{ height: 10, width: 1, backgroundColor: colors.primaryColor }}></View>
                                                    //         {genres.name}
                                                    //     </Text>

                                                    // ))
                                                    movDetails?.genres.map((genre, index) => (
                                                        <React.Fragment key={genre.id}>
                                                            {index > 0 && (
                                                                <View style={{ height: 10, width: 1, backgroundColor: colors.primaryColor, marginHorizontal: 5 }} />
                                                            )}
                                                            <Text style={{ color: colors.white, fontSize: 10 }}>
                                                                {genre.name}
                                                            </Text>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <MaterialIcons name='poll' size={20} color={colors.primaryColor}></MaterialIcons>
                                                <Text style={{ color: colors.white }}>{movDetails?.vote_count} votes</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <Text style={{ color: colors.white, padding: 12 }}>{movDetails?.overview}</Text>



                            </View>
                        )

            }
            <TouchableOpacity style={styles.backButtonWraper} onPress={handleGoBack}>
                <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25} />
            </TouchableOpacity>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor
    },
    backButtonWraper: {
        backgroundColor: colors.primaryColor,
        height: 40,
        width: 40,
        borderRadius: 20,
        left: 10,
        top: 10,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    img: {
        height: 300,
        width: '100%',
        objectFit: 'fill',
    },
    imgSmall: {
        width: 150,
        height: 200,
        borderRadius: 20,
        borderColor: colors.primary,
        elevation: 5,
    },
})