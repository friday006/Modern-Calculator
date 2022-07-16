import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import DropdownMenu from 'react-native-dropdown-menu';
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NumeralScreen extends Component{
  constructor(){
    super()
    this.state={
      cal:"",
      cal_Text:"",


    }
  }

  buttonPressed(text){
    this.setState({
      cal:this.state.cal+text
    })
  }

  render(){
    const { navigation } = this.props;

    let rows=[]
    let nums=[["AC","D","F","E"],[7,8,9,"D"],[4,5,6,"C"],[1,2,3,"B"],["",0,".","A"]]
    for(let i=0;i<5;i++){
      let row=[]
        for(let j=0;j<4;j++){
          row.push(<TouchableOpacity style={styles.btn} onPress={()=>this.buttonPressed(nums[i][j])}><Text style={styles.numText}>{nums[i][j]}</Text></TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
    }

    var data =["BIN","DEC","OCT","HEX"]

    // let ops=[]
    // let lets=["A","B","C","D","E",'F']
    //   for(let i=0;i<6;i++){
    //     ops.push(<TouchableOpacity><Text style={styles.numText}>{lets[i]}</Text></TouchableOpacity>)
    //   }""

  return (
    <View style={styles.container}>
    <View style={styles.switch}> 
        <Icon name="calculate" size={28} onPress={()=>navigation.navigate("Home")}/>
        <Icon name="calculate" size={28} />
     </View>
     <View style={styles.cal}>
      <View style={styles.numsystem}>
      <DropdownMenu 
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}>

      </DropdownMenu>
      </View>
        <Text style={styles.cal_Text}>{this.state.cal}</Text>     
     </View>
     <View style={styles.cal_result}>
      <Text>3.4</Text>
     </View>
     <View style={styles.nopad}>
        <View style={styles.number}>
        {rows}
        </View>
        {/* <View style={styles.letters}>
        
        </View> */}
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
     cal:{
      flex:1.5,
      alignItems:'flex-end',
      justifyContent:'center',
      backgroundColor:"blue"
     },
     cal_Text:{
      fontSize: 50,
      color: 'black',
      flexWrap: 'wrap'
     }
     ,
     cal_result:{
      flex:1.5,
      alignItems:'flex-end',
      justifyContent:'center',
      backgroundColor:"yellow"
     },
     numsystem:{
      backgroundColor:"green",
      // flex:1,
      // padding:30,
      marginRight:315,
      marginTop:30
     },
     nopad:{
      // flex:1,
      flexGrow:7,
      backgroundColor: '#434343',
      flexDirection:'row'
     },
     numText:{
      color:"white",
      fontSize:30
     },
     number:{
      flex:3,
     },
     row:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:'center'
     },
    //  letters:{
    //   // backgroundColor:'white',
    //   flex:1,
    //   alignItems:'center',
    //   justifyContent:'space-around'
    //  },
    btn:{
      flex:1,
      alignItems:'center',
      alignSelf:'stretch',
      justifyContent:'center',
    }
     
})