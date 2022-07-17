import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import DropdownMenu from 'react-native-dropdown-menu';
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NumeralScreen extends Component {
  constructor() {
    super()
    this.state = {
      cal: "",
      cal_Text: "",
      selectedLanguage: ""

    }
  }


  buttonPressed(text) {
    this.setState({
      cal: this.state.cal + text
    })
  }

  render() {
    const { navigation } = this.props;
    // const [selectedLanguage, setSelectedLanguage] = useState();
    let rows = []
    let nums = [["AC", "D", "F", "E"], [7, 8, 9, "D"], [4, 5, 6, "C"], [1, 2, 3, "B"], ["", 0, ".", "A"]]
    for (let i = 0; i < 5; i++) {
      let row = []
      for (let j = 0; j < 4; j++) {
        row.push(<TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={() => this.buttonPressed(nums[i][j])}><Text style={styles.numText}>{nums[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    // var data =["BIN","DEC","OCT","HEX"]

    // let ops=[]
    // let lets=["A","B","C","D","E",'F']
    //   for(let i=0;i<6;i++){
    //     ops.push(<TouchableOpacity><Text style={styles.numText}>{lets[i]}</Text></TouchableOpacity>)
    //   }""

    return (
      <View style={styles.container}>
        <View style={styles.switch}>
          <Icon name="calculate" size={28} onPress={() => navigation.navigate("Home")} />
          <Icon name="calculate" size={28} />
        </View>
        <View style={styles.cal}>
          <View style={styles.numsystem}>
            <Picker
              mode='dropdown'
              style={styles.Picker}
              selectedValue={this.state.selectedLanguage}
              onValueChange={(itemValue, itemIndex) => this.setState({ selectedLanguage: itemValue })
              }>
              <Picker.Item label="BIN" value="Binary" />
              <Picker.Item label="DEC" value="Decimal" />
              <Picker.Item label="OCT" value="Octal" />
              <Picker.Item label="HEX" value="Hexadecimal" />
            </Picker>
          </View>
          <View style={styles.cal_Text_win}>
            <Text style={styles.cal_Text}>{this.state.cal}</Text>
          </View>
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
    backgroundColor: 'white'
  },
  switch: {
    justifyContent: 'space-around',
    paddingLeft: 130,
    paddingRight: 130,
    paddingTop: 60,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  cal: {
    flex: 1.5,
    // alignItems:"flex-end",
    justifyContent: 'space-between',
    // backgroundColor:"blue",
    flexDirection: 'row',
    // flexGrow:1.5
  },
  numsystem: {
    //  backgroundColor:"green",
    //  flex:1,
    // margin:30,
    // marginRight:315,
    // marginTop:30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Picker: {
    // marginLeft:20,
    width: 100,
    height: 20,
    flex: 1
  },
  cal_Text_win: {
    // flexGrow:2,
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // marginLeft:30,
    backgroundColor: 'pink'
  },
  cal_Text: {
    fontSize: 25,
    color: 'black',
    // justifyContent:'flex-end'
    // flexWrap: 'wrap',
    // justifyContent:'center',
    // alignItems:'center'
  }
  ,
  cal_result: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: "yellow"
  },

  nopad: {
    // flex:1,
    flexGrow: 7,
    backgroundColor: '#434343',
    flexDirection: 'row'
  },
  numText: {
    color: "white",
    fontSize: 30
  },
  number: {
    flex: 3,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },



})