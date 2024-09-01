import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri:'https://cdn.britannica.com/25/242225-050-72142DF7/Front-facade-of-Palace-of-the-Winds-Hawa-Mahal-Jaipur-Rajasthan-India.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>React Logo</Text>
            <Text style={styles.cardLabel}>React Native Dosc</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a
                 palace in the city of Jaipur, Rajasthan, India. </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:390,
        height:350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#2C3335',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLabel:{
        color:'#01CBC6',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#A3CB37',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:'#8B78E6'
    }
})