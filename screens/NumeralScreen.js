import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default class NumeralScreen extends Component {
  constructor() {
    super()
    this.state = {
      cal: "",
      cal_result: "",
      selectednum: "",
      selectednum2: "0",
      valueofnum:"",
      nums: [["AC", "Del", "F", "E"], [7, 8, 9, "D"], [4, 5, 6, "C"], [1, 2, 3, "B"], [".", 0, "=", "A"]]
    }

  }

  calculate(){
    
  let numsys_text = this.state.selectednum
  switch(numsys_text){
    case "Binary":
      switch(this.state.selectednum2){
        case "Decimal":
          const text = this.state.cal
          let Text = parseInt(text,2)
          this.setState({
            cal_result: Text
          })
          break
        case "Octal":
          const text1 = this.state.cal
          var Text1 = parseInt(text1,2).toString(8)
          this.setState({
            cal_result: Text1
          })
          break
        
        case "Hexadecimal":
          const text2 = this.state.cal
          var Text2 = parseInt(text2,2).toString(16).toUpperCase()
          console.log(Text2)
          this.setState({
            cal_result: Text2
          })
          break
        
        case "0":
    
          break
      }
      break
    case "Decimal":
      switch(this.state.selectednum2){
        case "Binary":
          const text_bin = this.state.cal
          var Text_bin = parseInt(text_bin).toString(2)
          this.setState({
            cal_result: Text_bin
          })
          break
        case "Octal":
          const text_oct = this.state.cal
          var Text_oct = parseInt(text_oct).toString(8)
          this.setState({
            cal_result: Text_oct
          })
          break
        case "Hexadecimal":
          const text_hex = this.state.cal
          var Text_hex = parseInt(text_hex).toString(16).toUpperCase()
          this.setState({
            cal_result: Text_hex
          })
          break
      }
      break
    case "Octal":
      switch(this.state.selectednum2){
        case "Binary":
          const text_bin1 = this.state.cal
          console.log("hi"+text_bin1)
          var Text_bin1 = parseInt(text_bin1,8).toString(2)
          console.log("bye"+Text_bin1)
          this.setState({
            cal_result: Text_bin1
          })
          break
        case "Decimal":
          const text_dec1 = this.state.cal
          var Text_dec1 = parseInt(text_dec1,8).toString(10)
          this.setState({
            cal_result: Text_dec1
          })
          break
        case "Hexadecimal":
          const text_hex1 = this.state.cal
          var Text_hex1 = parseInt(text_hex1,8).toString(16).toUpperCase()
          this.setState({
            cal_result: Text_hex1
          })
          break
      }
      break
    case "Hexadecimal" :
      switch(this.state.selectednum2){
        case "Binary":
          const text_bin2 = this.state.cal
          var Text_bin2 = parseInt(text_bin2,16).toString(2)
          this.setState({
            cal_result: Text_bin2
          })
          break
        case "Decimal":
          const text_dec2 = this.state.cal
          var Text_dec2 = parseInt(text_dec2,16).toString(10)
          this.setState({
            cal_result: Text_dec2
          })
          break
        case "Octal":
          const text_oct2 = this.state.cal
          var Text_oct2 = parseInt(text_oct2,16).toString(8)
          this.setState({
            cal_result: Text_oct2
          })
          break
      }
      break

    
  }
 
  }

  opration(text){
    switch(text){
      case "Del":
        const text = this.state.cal.split('')
        text.pop()
        this.setState({
        cal: text.join('')
          })
        break
      case "AC":
        let text1= ""
          
        this.setState({
          cal:text1,
          cal_result: text1
        })
        break 
    }
    
  }

  buttonPressed(text) {

    if(text== "="){            
      return  this.calculate()
    }
    else if(text == "Del"){
     return this.opration(text)
    }
    else if(text == "AC"){
      return this.opration(text)
    }
    this.setState({
      cal: this.state.cal+text
    }
    )
    
  }
  numsys(value) {
    switch (value) {
      case "Binary":
        for (let k = 0; k < 5; k++) {
          for (let l = 0; l < 4; l++) {
            if (this.state.nums[k][l] == 1 || this.state.nums[k][l] == 0 || this.state.nums[k][l] == "AC" || this.state.nums[k][l] == "Del" || this.state.nums[k][l] == "=") {
            }
            else {
              this.setState([this.state.nums[k][l] = "x"])
            }
          }
        }
        break
      case "Decimal":
        this.setState([this.state.nums = [["AC", "Del", "F", "E"], [7, 8, 9, "D"], [4, 5, 6, "C"], [1, 2, 3, "B"], [".", 0, "=", "A"]]])

        for (let k = 0; k < 5; k++) {
          for (let l = 0; l < 4; l++) {
            if (this.state.nums[k][l] == 0 || this.state.nums[k][l] == 1 || this.state.nums[k][l] == 2 || this.state.nums[k][l] == 3 || this.state.nums[k][l] == 4 || this.state.nums[k][l] == 5 || this.state.nums[k][l] == 6 || this.state.nums[k][l] == 7 || this.state.nums[k][l] == 8 || this.state.nums[k][l] == 9 || this.state.nums[k][l] == "AC" || this.state.nums[k][l] == "Del" || this.state.nums[k][l] == "=") {

            }
            else {
              this.setState([this.state.nums[k][l] = "x"])
            }


          }
        }

        break
      case "Octal":
        this.setState([this.state.nums = [["AC", "Del", "F", "E"], [7, 8, 9, "D"], [4, 5, 6, "C"], [1, 2, 3, "B"], [".", 0, "=", "A"]]])

        for (let k = 0; k < 5; k++) {
          for (let l = 0; l < 4; l++) {
            if (this.state.nums[k][l] == 0 || this.state.nums[k][l] == 1 || this.state.nums[k][l] == 2 || this.state.nums[k][l] == 3 || this.state.nums[k][l] == 4 || this.state.nums[k][l] == 5 || this.state.nums[k][l] == 6 || this.state.nums[k][l] == 7 || this.state.nums[k][l] == "AC" || this.state.nums[k][l] == "Del" || this.state.nums[k][l] == "=") {
            }
            else {
              this.setState([this.state.nums[k][l] = "x"])
            }
          }
        }

        break
      case "Hexadecimal":
        this.setState([this.state.nums = [["AC", "Del", "F", "E"], [7, 8, 9, "D"], [4, 5, 6, "C"], [1, 2, 3, "B"], [".", 0, "=", "A"]]])

        break
      default:
        // console.log(value)

    }
  }
 

  render() {
    const { navigation } = this.props;

    let rows = []
    
    for (let i = 0; i < 5; i++) {
      let row = []
      for (let j = 0; j < 4; j++) {
        if (this.state.nums[i][j] == "x") {
          row.push(<View key={i - j} style={styles.btn}><Text style={styles.numText_Bin}>{this.state.nums[i][j]}</Text></View>)
        }
        else {
          row.push(<TouchableOpacity key={i + j} style={styles.btn} onPress={() => this.buttonPressed(this.state.nums[i][j])}><Text style={styles.numText}>{this.state.nums[i][j]}</Text></TouchableOpacity>)
        }
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }
   


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
              selectedValue={this.state.selectednum}
              onValueChange={(itemValue, itemIndex) => this.setState({ selectednum: itemValue }, () => { this.numsys(itemValue) })
              }>
              <Picker.Item label="Select" value="0" />
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
        <View style={styles.cal}>
          <View style={styles.numsystem}>
            <Picker
              mode='dropdown'
              style={styles.Picker}
              selectedValue={this.state.selectednum2}
              onValueChange={(itemValue, itemIndex) => this.setState({ selectednum2: itemValue })
              }>
              <Picker.Item label="Select" value="0" />
              <Picker.Item label="BIN" value="Binary" />
              <Picker.Item label="DEC" value="Decimal" />
              <Picker.Item label="OCT" value="Octal" />
              <Picker.Item label="HEX" value="Hexadecimal" />
            </Picker>
          </View>
          <View style={styles.cal_Text_win}>
            <Text style={styles.cal_Text}>{this.state.cal_result}</Text>
          </View>
        </View>
        <View style={styles.nopad}>
          <View style={styles.number}>
            {rows}
          </View>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white'
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
    height: 50,
    flex: 1,
    color: "orange"
  },
  cal_Text_win: {
    // flexGrow:2,
    flex: 4,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // marginLeft:30,

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
  numText_Bin: {
    color: "gray",
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