import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts =[
        {
            uid:1,
            name:'Nabin Dhamala',
            status:'Entrepreneur and Computer Programmar.',
            imageUrl:'https://media.licdn.com/dms/image/v2/D5616AQE5BXatDkUXhg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1695285198402?e=1730937600&v=beta&t=AUuuFfMHWEnTc6fQHgaC7cn8edNuAZy2rWLDAfzoYRA',
        },
        {
            uid:2,
            name:'Khakendra Baduwal',
            status:'Software engineer who love to build new things.',
            imageUrl:'https://media.licdn.com/dms/image/v2/D5603AQG8R-ZYb4UHyw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683529536185?e=1730937600&v=beta&t=xano631YsSZLpVhY0VLdoMEbdWSlYDrLTNR9f2CVg7M'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                    source={{
                        uri:imageUrl
                    }}
                    style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ) )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom: 4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage:{
        width:60,
        height:60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'

    },
    userStatus:{
        fontSize: 12,

    }
})

