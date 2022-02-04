import React from 'react';
import { Text, Image, View } from 'react-native';
import globalStyles from '../../../globalStyles';
import styles from './styles';

const searchimage= require('../../../assets/images/SearchPage/searchimage.png')

const PlantCards = () => {
    return (
        <View style={[styles.card, globalStyles.boxShadow]}>
            <View>
                <Image source={searchimage}/>
            </View>
            <View style={styles.cardtext}>
                <Text style={styles.heading}>Name of Plant</Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
            </View>
        </View> 
    )
}

export default PlantCards;