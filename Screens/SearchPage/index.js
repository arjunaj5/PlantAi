import React, { useEffect, useState } from 'react';
import DefaultView from '../../Layouts/DefaultView';
import { Text, View, ActivityIndicator } from 'react-native';
import SearchBar from '../../Components/Home/SearchBar';
import styles from './styles';
import PlantCards from '../../Components/SearchPage/PlantCards';
import { API_ROOT } from '../../apiroot';

const search = require('../../assets/images/Home/search.png')

const findPlants = async (query) => {

  const body = {
    searchQuery: query
  }

  const response =  await fetch( API_ROOT + '/plants-view/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await response.json()
  return data
}

const SearchPage = ({ navigation, route }) => {
  const [plants, setPlants] = useState([])
  const params = route.params
  const [query, setQuery] = useState(params.query)
  const [loading, setLoading] = useState(false)

  const homeRoute = route.params.homeNavigationRoute
  const userDetails = homeRoute.params && homeRoute.params.userDetails

  useEffect( () => {
    if(query !== '')
      getPlants()
  }, [])

  const getPlants = () => {
    setLoading(true)
    findPlants(query).then( (result) => {
      setPlants(result)
      setLoading(false)
    })
  }
  const noResult = (
    plants.length === 0 &&   <Text> No Results </Text>
  )



    return (
        <DefaultView navigation={navigation} userDetails={userDetails}>
            <View style={styles.searchview}>
                <SearchBar img={search} query={query} setQuery={setQuery} onSearch={getPlants} />
            </View>
            {loading && <ActivityIndicator size='large' color="#3BA776" />}
            {! loading && plants.map( (plant, index) => {
              return (
                <PlantCards 
                  key={index}
                  name={plant.name}
                  description={plant.description}
                  image_url={plant.image_url}
                  navigation={navigation}
                  userDetails={userDetails}
                  />
              )
            } ) }
            {
             ! loading && noResult
            }
        </DefaultView>
    )
}

export default SearchPage;