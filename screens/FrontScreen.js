import { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class FrontScreen extends Component {
  
  
    constructor(){
        super()
        this.state ={
          resultText: "",
          calculationText: ""
        }
        this.operations =["AC","DEL",'+','-','*','/']
      }
      calculateResult(){
        const text = this.state.resultText
        this.setState({
          calculationText: eval(text)
        })
      }
    
      validate(){
        const text = this.state.resultText
        switch(text.slice(-1)){
            case '+':
            case '-':
            case '*':
            case '/':
              return false
        }
        return true
      }
    
      buttonPressed(text){
        if(text == '='){
          return this.validate() && this.calculateResult()
        }
    
        this.setState({
          resultText: this.state.resultText+text
        }) 
      }
    
      operate(operations){
        switch(operations){
          case 'DEL':
            let text = this.state.resultText.split('')
            text.pop()
            this.setState({
              resultText: text.join('')
            })
            break
          case 'AC': 
            this.state.calculationText =""
            let text1 = this.state.calculationText
            text = ""
            let txt = text+text1
            this.setState({
              resultText: txt,
              calculationText: txt
            })
            break
          case '+':
          case '-':
          case '*':
          case '/':
    
          const lastChar = this.state.resultText.split('').pop()
          if(this.operations.indexOf(lastChar)>0) return
            if (this.state.text == "")
              return
              this.setState({
                resultText: this.state.resultText + operations 
              })
            
        }
      }
    
      render(){
        const { navigation } = this.props;

        let rows = []
        let nums = [[7,8,9],[4,5,6],[1,2,3],['.',0,'=']]
    
        for (let i=0; i<4; i++){
          let row = []
          for (let j=0; j<3; j++){
            row.push(<TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={()=> this.buttonPressed(nums[i][j])}>
              <Text style = {styles.btnText}>{nums[i][j]}</Text>
            </TouchableOpacity>)
          }
          rows.push(<View key={i} style = {styles.row}>{row}</View>)
        }
        
    
      
      let ops =[]
      for (let i=0; i<6; i++){
        ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={()=>this.operate(this.operations[i])}>
          <Text style = {[styles.btnText,{color:'#eda532'}]}>{this.operations[i]}</Text>
        </TouchableOpacity>)
      }
      
      
  return (
    <View style={styles.container}>
      <View style={styles.switch}> 
         <Icon name="calculate" size={28} />
         <Icon name="calculate" size={28} onPress={()=>navigation.navigate("BackScreen")}/>
      </View>
      <View style = {styles.result}>
        <Text style = {styles.resultText}>{this.state.resultText}</Text>
      </View>
      <View style = {styles.calculation}>
        <Text style ={styles.calculationText}>{this.state.calculationText}</Text>
      </View>
      <View style = {styles.buttons}>
          <View style = {styles.numbers}>
            {rows}
          </View>
          <View style = {styles.operations}>
          {ops}
          </View>
      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText:{
    fontSize: 70,
    color: 'black',
    flexWrap: 'wrap'
  },
  calculationText:{
    fontSize: 50,
    color:'#4f4b4b'
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  operations: {
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#636363'
  },
  btn: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnText: {
    fontSize: 30,
    color: 'white'
  },
  switch:{
     justifyContent:'space-around',
     paddingLeft:130,
     paddingRight:130,
    paddingTop:60,
    backgroundColor: 'white',
    flexDirection:'row'
  }
});
