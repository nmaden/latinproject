import React, {Component} from 'react';
import {  Dimensions,ScrollView, StyleSheet,View,ActivityIndicator,TouchableOpacity,Text,Image,AsyncStorage,Alert} from 'react-native';
import { withNavigation } from 'react-navigation';
import sortObjectList from 'sort-object-list'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { whileStatement } from '@babel/types';

 class SettingsScreen  extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        object: [],
        namecountry : [],
        color: [],
        percent: [],
        timePassed: false,
        first: [],
        second: [],
        size: ''
    };
    
  }


  foo(arr) {
    var a = [], b = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    return [a, b];
  }


  componentDidMount() {
    this._isMounted = true;
    
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {

      fetch('http://latinapi.herokuapp.com/v2/insert_data/getsize', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
   
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ size: responseData.message }, () => {
       
         }); 

      });
          fetch('http://latinapi.herokuapp.com/v2/insert_data/statisticslatin', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
       
          })
          .then((response) => response.json())
          .then((responseData) => {
            console.log("ttttt");
            console.log(responseData);
          responseData.sort((a, b) => parseInt(b.percent) - parseInt(a.percent));

       
      
            var arr1 = [];
            var arr2 = [];
            var arr = [];
       
            for (let index = 0; index <= 5; index++) {
              arr1.push(responseData[index].point);
              arr2.push(parseInt(responseData[index].percent)); 
            }
            
            for (let index = 0; index < responseData.length; index++) {
                  arr.push(responseData[index].name);  
            }
          
            var result = this.foo(arr);
            var obj = [];
            color = ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,"#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0","#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ];
            for(var i=0;i<result[0].length;i++) {
                obj.push( {
                    name: result[0][i],
                    freq: result[1][i],
                    color: color[i]
                })
            }
           
         
            this.setState({ namecountry:  arr1, percent:  arr2,first:  result[0],second:  result[1],object: obj  }, () => {
                console.log(this.state.namecountry);
            }); 
    
           
          }).catch((error) => {
              console.error(error);
          });      
    });

  }
    render() {
      let that = this;
      setTimeout(function(){that.setState({timePassed: true})}, 1000);
      if(!this.state.timePassed){
           return(
            <View style={{flex: 1, padding: 20,alignItems: 'center',justifyContent: 'center'}}>
              <ActivityIndicator/>
            </View>
          )
      }
      else {
      return (
       
      <ScrollView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',padding: 30}}>

      <View style={{padding: 10, borderRadius: 25, backgroundColor: '#8c51d9',display:'flex',flexDirection: 'row',justifyContent: 'center',}}>
          <Text style={{fontSize: 16, fontWeight: "bold", color: 'white',textAlign:'center'}}>Қосымшаны жүктеген адам саны -  {this.state.size}</Text>
      </View>

      <View style={{marginTop: 20,padding: 20, borderRadius: 25, backgroundColor: '#8c51d9',display:'flex',flexDirection: 'row',justifyContent: 'center'}}>
      <Text style={{color: 'white',fontWeight: 'bold', fontSize: 18,textAlign:'center'}}>Ең көп жүктеген облыстар тізімі</Text>
      </View>
      <PieChart
        data={this.state.object}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        accessor="freq"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      
      <View style={{padding: 10, borderRadius: 25, backgroundColor: '#8c51d9',display:'flex',flexDirection: 'row',justifyContent: 'center'}}>
      <Text style={{color: 'white',fontWeight: 'bold', fontSize: 18,textAlign:'center'}}>ТОП 5</Text>
      </View>
        <LineChart
          data={{
            labels: this.state.namecountry,
            datasets: [
              {
                data: this.state.percent
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          // yAxisLabel={"$"}
          // yAxisSuffix={"k"}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            padding: 20,
            fontSize: 5,
            marginLeft: 5,
            marginRight: 5

          }}
        />
      </View>
      </ScrollView>
  
        
      );
        }
    }
}

SettingsScreen.navigationOptions = {
  title: 'Статистика',
  headerTintColor: '#8c51d9',
  headerTitleStyle: { alignSelf: 'center' }
};
export default withNavigation(SettingsScreen);
const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  helpLink: {
    paddingVertical: 15,
    backgroundColor: "#8252c1",
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 3,
    margin: 5
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  helpLinkText: {
    color: 'white'
  }
});

