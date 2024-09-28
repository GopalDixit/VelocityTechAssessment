import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as workersData from '../data/workersData.json'
import { getFlag, getFont, getPersonImage } from '../helpers';
import { AntDesign, Entypo } from '../global/MyIcon';
import menuImage from '../assets/images/menu.png';
import bellImage from '../assets/images/bell.png'; 
import searchImage from '../assets/images/searchicon.png'; 
import filterImage from '../assets/images/filter.png';
const categories = [
  {
    id: '1',
    name: "Astrologer",
    image: require('../assets/images/astrology.jpeg')
  },
  {
    id: '2',
    name: "Assistant",
    image: require('../assets/images/assessment.jpg')
  },
  {
    id: '3',
    name: "Makeup",
    image: require('../assets/images/mup.jpeg')
  },
  {
    id: '4',
    name: "Mehndi",
    image: require('../assets/images/mehandi.webp')
  },
  {
    id: '5',
    name: "Photographer",
    image: require('../assets/images/camera.jpg')
  },
]

export default function Categories() {
  const { height, width } = useWindowDimensions();
  const [originalAllWorkersData, setoriginalAllWorkersData] = useState(workersData.default)
  const [allWorkersData, setAllWorkersData] = useState(workersData.default)
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filterDataByCategory = (name) => {
    setSearchText('')
    if (selectedCategory === name) {
      setSelectedCategory('')
      setAllWorkersData([...originalAllWorkersData])
    } else {
      setSelectedCategory(name)
      let allWorkersDataCopy = [...originalAllWorkersData]
      allWorkersDataCopy = allWorkersDataCopy?.filter(work => work?.Worker_Role === name)
      setAllWorkersData([...allWorkersDataCopy])
    }
  }
  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { filterDataByCategory(item?.name) }} style={[{ marginRight: 10, alignItems: 'center',paddingBottom:8 }, selectedCategory === item?.name ? { borderWidth: 0.5, borderColor: 'blue',borderRadius:8 } : null]} >
        <Image source={item?.image} style={{ width: width / 4 - 20, height: width / 4 - 20, borderRadius: (width / 4 - 20) / 2 }} />
        <Text style={{ color: 'black', marginTop: 8, fontSize: 12,paddingBottom:5 }} >{item?.name}</Text>
      </TouchableOpacity>
    )
  }
  const renderWorker = ({ item, index }) => {
    return (
      <View style={{ marginHorizontal: 5 }} >
        <Image source={getFlag(item?.country)} style={[styles.flag, { width: width / 5 - 60, height: width / 5 - 60, borderRadius: (width / 5 - 60) / 2 }]} />
        <View style={{ alignItems: 'center' }} >
          <Image source={getPersonImage(item?.profileImage)} style={{ width: width / 4 - 20, height: width / 4 - 20, borderRadius: (width / 4 - 20) / 2 }} />
          <Text key={index?.toString()} style={{ color: 'black', marginVertical: 10, fontFamily: getFont('Medium') }} >{item?.name}</Text>
        </View>
      </View>
    )
  }
  const SearchBar = ({ allWorkersData, originalAllWorkersData, setAllWorkersData, setSearchText, searchText, setSelectedCategory }) => {
    return (
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBarRow}>
                <Image source={searchImage} style={styles.Srchicon} />
                <TextInput
                    style={styles.input}
                    onChangeText={(txt) => {
                        setSelectedCategory('');
                        setSearchText(txt);
                        if (txt.trim() !== '') {
                            const filteredData = originalAllWorkersData.filter(work => 
                                work.name.toLowerCase().includes(txt.trim().toLowerCase())
                            );
                            setAllWorkersData(filteredData);
                        } else {
                            setAllWorkersData(originalAllWorkersData);
                        }
                    }}
                    value={searchText}
                    placeholder="Search"
                    placeholderTextColor={'grey'}
                />
            </View>
            <TouchableOpacity style={styles.filterContainer}>
                <Image source={filterImage} style={styles.Srchicon} />
            </TouchableOpacity>
        </View>
    );
};

  
  const Header = () => {
    return (
        <View style={styles.headerContainer}>
        <View style={styles.headerLeftRow}>
          <Image source={menuImage} style={styles.icon} />
          <Text style={styles.headerText}>Velocity Tech</Text>
        </View>
        <Image source={bellImage} style={styles.icon} />
      </View>
    )
  }
  return (
      <View style={styles.container}>
        <Header />
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={{ backgroundColor: '#e6e3e3', marginBottom: 20, padding: 10}}
        keyExtractor={item => item.id}
        renderItem={renderCategory}
        showsHorizontalScrollIndicator={false}
      />
      <View></View>
      <SearchBar 
    allWorkersData={allWorkersData} 
    originalAllWorkersData={originalAllWorkersData} 
    setAllWorkersData={setAllWorkersData} 
    setSearchText={setSearchText} 
    searchText={searchText} 
    setSelectedCategory={setSelectedCategory} // Ensure this is passed correctly
/>

      {allWorkersData?.length > 0 ?
        <FlatList
          data={allWorkersData}
          numColumns={4}
          contentContainerStyle={{ paddingHorizontal: 20, }}
          keyExtractor={item => item.id}
          renderItem={renderWorker}
        />
        : <Text style={{ color: 'black', marginVertical: 10, alignSelf: 'center' }} >No workers data</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20
    paddingBottom:70
  },
  mainView: {
    padding: 20
  },
  flag: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 100
  },
  searchBarContainer: {
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e3e3',
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 10,
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e3e3',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '15%',
    borderRadius: 10,
    height: 50
  },
  input: {
    height: 50,
    color: 'black',
    fontSize: 20,
    width: '85%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    height:85
  },
  headerLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 30,  
    height: 30, 
    resizeMode: 'contain', 
  },
  Srchicon: {
    width: 20,  
    height: 20, 
    resizeMode: 'contain', 
  },
});