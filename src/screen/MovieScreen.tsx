import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Dimensions, TouchableOpacity, ScrollView, FlatList, Text, ActivityIndicator, Image } from 'react-native';
import { BASE_URL, colors, TOKEN } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RootState, AppDispatch } from '../redux/store/store';
import { fetchMovData, fetchTrendData, fetchTrendMovData, fetchTvData, searchData } from '../redux/actions/tvActions';
import { useDispatch, useSelector } from 'react-redux';
import { Tv, TvData, TvState } from '../redux/types/TvTypes';
import FastImage from 'react-native-fast-image';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TodayScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { trendLoadingMov, trendMov, trendErrorMov } = useSelector((state: RootState) => state.tv);

  useEffect(() => {
    dispatch(fetchTrendMovData('day'));
  }, [dispatch]);

  const renderItem = ({ item }: { item: Tv }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <FastImage source={require('../assets/images/panther.jpg')} style={styles.img} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: colors.bgColor, flex: 1, padding: 12 }}>
      {trendLoadingMov ? (
        <ActivityIndicator size={'large'} color={colors.primaryColor} />
      ) : trendErrorMov ? (
        <Text>Error: {trendErrorMov}</Text>
      ) : (
        <FlatList
          nestedScrollEnabled
          data={trendMov?.results}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

    </View>
  );
};

const WeeklyScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { trendLoadingMov, trendMov, trendErrorMov } = useSelector((state: RootState) => state.tv);

  useEffect(() => {
    dispatch(fetchTrendMovData('week'));
  }, [dispatch]);

  const renderItem = ({ item }: { item: Tv }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <FastImage source={require('../assets/images/panther.jpg')} style={styles.img} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ backgroundColor: colors.bgColor, flex: 1, padding: 12 }}>
      {trendLoadingMov ? (
        <ActivityIndicator size={'large'} color={colors.primaryColor} />
      ) : trendErrorMov ? (
        <Text>Error: {trendErrorMov}</Text>
      ) : (
        <FlatList
          nestedScrollEnabled
          data={trendMov?.results}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

    </View>
  );
};

const MovieScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const { loading_mov, data_mov, error_mov, currentPage_mov } = useSelector((state: RootState) => state.tv);
  const [numColumns, setNumColumns] = useState(2);

  const navigation = useNavigation<NavigationProp<any>>();
  const handleSearch = (text: string): void => {
    dispatch(searchData(text))
  };

  useEffect(() => {
    dispatch(fetchMovData(1));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!loading_mov) {
      console.log(currentPage_mov)
      dispatch(fetchMovData(currentPage_mov + 1));
    }
  };



  const renderItem = ({ item }: { item: Tv }) => {
    const url = `${BASE_URL}${item.backdrop_path}`;
    return (
      <TouchableOpacity style={styles.ItemView} onPress={() => {
        navigation.navigate('MovieDetails', { id: item.id });
      }}>
        {/* <Image style={styles.img} source={{ uri:url,headers:{
                Authorization:`Bearer ${TOKEN}`,
                // priority: FastImage.priority.normal,
            }}} 
            // resizeMode={FastImage.resizeMode.contain}
            </> */}
        <Image style={styles.img} source={require('../assets/images/power.jpg')} />
        <View style={styles.titleContainer}></View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{ }</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer} >
        <TextInput
          placeholder="Search here..."
          style={styles.input}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholderTextColor="gray"

        />
        <TouchableOpacity onPress={() => {
          handleSearch(searchQuery)
        }} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons style={styles.searchIcon} name='search' size={20} color={colors.primaryColor} />
        </TouchableOpacity>


      </View>
      {
        loading_mov ? (<ActivityIndicator size='large' color={colors.primaryColor} />) : error_mov ? (<Text>{error_mov}</Text>) :
          (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
              <View style={{ flex: 1 }}>
                <View style={{ height: 400 }}>
                  <FlatList
                    nestedScrollEnabled
                    data={data_mov?.results}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loading_mov ? <ActivityIndicator size="small" color={colors.primaryColor} /> : null}
                    numColumns={numColumns}
                    key={numColumns}
                  />
                </View>
                <Tab.Navigator screenOptions={{
                  tabBarActiveTintColor: colors.primaryColor,
                  tabBarInactiveTintColor: colors.bgColor
                }} style={{ flex: 1, height: 300 }} >
                  <Tab.Screen name='Today' component={TodayScreen} />
                  <Tab.Screen name='Weekly' component={WeeklyScreen} />
                </Tab.Navigator>
              </View>

            </ScrollView>
          )
      }



    </View>
  );
};


export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 10,
  },
  searchContainer: {
    borderRadius: 20,
    borderColor: colors.primaryColor,
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    color: colors.white
  },
  searchIcon: {

    position: 'absolute',
    right: 10
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  tvSection: {
    height: 100
  },
  ItemView: {
    height: 200,
    width: Dimensions.get('window').width / 2,
    flex: 0.5,
    margin: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 20,

  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  title: {
    color: colors.primaryColor,
    fontSize: 15,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute'
  },
  titleContainer: {
    backgroundColor: colors.bgColor,
    fontSize: 15,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 50,
    opacity: 0.7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute'
  },
  itemContainer: {
    width: 200,
    height: 150,
    margin: 10,
    backgroundColor: colors.bgColor
  }


});
