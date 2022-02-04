import React from 'react';
import DefaultView from '../../Layouts/DefaultView';
import { Image, View } from 'react-native';
import SearchBar from '../../Components/Home/SearchBar';
import styles from './styles';
import PlantCards from '../../Components/SearchPage/PlantCards';

const search = require('../../assets/images/Home/search.png')

const SearchPage = () => {
    return (
        <DefaultView>
            <View style={styles.searchview}>
                <SearchBar img={search}/>
            </View>
            <PlantCards/>
            <PlantCards/>
            <PlantCards/>
        </DefaultView>
    )
}

export default SearchPage;