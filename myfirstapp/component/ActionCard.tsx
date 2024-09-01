import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in the JavaScript 21 -ES12
            </Text>
        </View>
        <Image 
        source={{
            uri:'https://images.pexels.com/photos/6929741/pexels-photo-6929741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
         style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            As someone who transitioned from working 
            in a corporate office to solo programming,
             the toughest lesson I’ve learned is that success isn’t just
              about coding, it’s about continuously learning and adapting to new
               challenges. This video really resonated with my journey.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <Text >
                <TouchableOpacity
                onPress={()=>openWebsite('https://www.youtube.com/watch?v=vtOLgyHJOc0')}>
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>openWebsite('https://seanprashad.com/leetcode-patterns')} >
                    <Text style={styles.socialLinks}>DSA Pattern</Text>
                </TouchableOpacity>
            </Text>
           
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
        width:350,
        height:360,
        borderRadius:8,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#516e47',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
   
    socialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFFFFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})