import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import DefaultView from '../../Layouts/DefaultView';

const newsPic = require('../../assets/images/NewsPage/Newspic.png')

const NewsPage = () => {
  return(

    <DefaultView>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={newsPic} style={styles.newsPic}/>
            </View>

            <View style={styles.text}>

                <Text style={styles.heading}>News topic</Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a, ultrices adipiscing magna venenatis. Purus amet, in est orci. Vitae cursus volutpat nec arcu nibh. Ante ullamcorper arcu, felis odio arcu.</Text> 

            </View>
        </View>



    </DefaultView>

  ) 
}

export default NewsPage;
