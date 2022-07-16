import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/Feather'

export default class BackScreen extends Component {
    constructor(){
        super()
      }
      render() {
        const { navigation } = this.props;
  
  
  return (
    <View style={styles.container}>
     <View style={styles.switch}> 
         <Icon name="calculate" size={28} onPress={()=>navigation.navigate("Home")}/>
         <Icon name="calculate" size={28} />
      </View>
      <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate("NumeralScreen")}> 
          <View style={styles.box}>
            <Icon1 name='user-plus' size={35} color={'orange'} paddingBottom={10}/>
            <Text style={styles.iconText}>Numeral</Text>
            <Text style={styles.iconText}>System</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.box}>
            <Icon1 name='user-x' size={35} color={'orange'} />
            <Text style={styles.iconText}>Numeral</Text>
            <Text style={styles.iconText}></Text>
          </View>
          </TouchableOpacity>
      </View>
    </View>
  )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
      },
      switch:{
        justifyContent:'space-around',
        paddingLeft:130,
        paddingRight:130,
       paddingTop:60,
       backgroundColor: 'white',
       flexDirection:'row'
     },
     bottomContainer:{
      flex:1,
      justifyContent:'space-between',
      paddingTop:135,
      paddingBottom:135,
      alignItems:'center'
     },
     box:{
      // flex:1,
      padding: 50,
      // justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#636363',
      borderRadius:18,
     },
     iconText:{
      padding:1,
      paddingTop:2,
      fontSize:18,
      color:'white'
     }
    
})