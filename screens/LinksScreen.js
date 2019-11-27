import React, {Component} from 'react';
import { ScrollView, StyleSheet,Button,View,TouchableOpacity,Text,Image,AsyncStorage,Alert} from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { withNavigation } from 'react-navigation';

class LinksScreen extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      data: '',
      user_id: '',
      amount_first: '',
      amount_second: '',
      amount_third: '',
      amount_fourth: '',
      first_color: '',
      second_color: '',
      third_color: '',
      fourth_color: '',
      objects: [],
      _isMounted: false
      
    };
  }

  algorithm($responseData,$start,$end) {

    var numbers = [];
    var counter = 0;
    var color = "";
    var result = [];
    for (var x = $start; x <=$end; x++) {
      numbers.push(parseInt($responseData[x].point));
      if($responseData[x].color=='#54d28b') {
        counter++;
      }
    }

    if(counter == 5) {
        color = "#54d28b";
    }
    else {
       color = "#e91e63";
    }
    
    const add = (a, b) =>a + b
    const sum = numbers.reduce(add);
    result.push(sum);
    result.push(color);
    return result;
  }
  
  componentDidMount() {
    this.setState({
      _isMounted: true
  });
  
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      
      AsyncStorage.getItem('UID123', (err, result) => {
        this.setState({ user_id:  JSON.parse(result).user_id }, () => {
          fetch('http://latinapi.herokuapp.com/v2/insert_data/gettestresults',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id:this.state.user_id
            })
          })
          .then((response) => response.json())
          .then((responseData) => {
             this.setState({
              objects: []
          });
          this.setState({
            amount_first : this.algorithm(responseData,0,4)[0],
            amount_second : this.algorithm(responseData,5,9)[0],
            amount_third : this.algorithm(responseData,10,14)[0],
            amount_fourth : this.algorithm(responseData,15,19)[0],
    
            first_color: this.algorithm(responseData,0,4)[1],
            second_color: this.algorithm(responseData,5,9)[1],
            third_color: this.algorithm(responseData,10,14)[1],
            fourth_color: this.algorithm(responseData,15,19)[1]
          });
    
            var filtered = this.state.objects.filter(function (el) {
              return el != null;
            });
    
          }).catch((error) => {
              console.error(error);
    
          }); 
        }); 

      });
       
    });

  }
  
  componentWillMount() {
    this._isMounted = false;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.helpContainer}>
                <TouchableOpacity  style={{  backgroundColor: this.state.first_color,
                        display: 'flex',
                        alignItems: 'center',
                        padding: 20,
                        borderRadius: 4,
                        height: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        zIndex: 1,
                        marginBottom: 10}
    }  onPress={() => this.onPress(null,null,0,4)}>
                    <View style={styles.words}>
                      <Text style={styles.helpLinkText}>
                          I кезең
                      </Text>
                      <Text style={styles.helpLinkText}>
                          {this.state.amount_first}/50
                      </Text>
                      <Text style={styles.helpLinkText}>
                        {Math.round(this.state.amount_first/50*100)}%
                        </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity  style={{ backgroundColor: this.state.second_color,
                        display: 'flex',
                        alignItems: 'center',
                        padding: 20,
                        borderRadius: 4,
                        height: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        zIndex: 1,
                        marginBottom: 10}} onPress={() => this.onPress(0,4,5,9)}>
                    <View style={styles.words}>
                        <Text style={styles.helpLinkText}>
                            II кезең
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {this.state.amount_second}/50
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {Math.round(this.state.amount_second/50*100)}%
                        </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity  style={{ backgroundColor: this.state.third_color,
                        display: 'flex',
                        alignItems: 'center',
                        padding: 20,
                        borderRadius: 4,
                        height: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        zIndex: 1,
                        marginBottom: 10}} onPress={() => this.onPress(5,9,10,14)}>
                    <View style={styles.words}>
                      <Text style={styles.helpLinkText}>
                          III кезең
                      </Text>
                      <Text style={styles.helpLinkText}>
                      {this.state.amount_third}/50
                      </Text>
                      <Text style={styles.helpLinkText}>
                        {Math.round(this.state.amount_third/50*100)}%
                        </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                     
                    
                      
                </TouchableOpacity>
                <TouchableOpacity  style={{ backgroundColor: this.state.fourth_color,
                        display: 'flex',
                        alignItems: 'center',
                        padding: 20,
                        borderRadius: 4,
                        height: 100,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        zIndex: 1,
                        marginBottom: 10}} onPress={() => this.onPress(10,14,15,19)}>
                    <View style={styles.words}>
                        <Text style={styles.helpLinkText}>
                            IV кезең
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {this.state.amount_fourth}/50
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {Math.round(this.state.amount_fourth/50*100)}%
                        </Text>
                    </View>
                    <Image
                      source={
                        __DEV__
                          ? require('../assets/images/arrow-right.png')
                          : require('../assets/images/arrow-right.png')
                      }
                      style={styles.welcomeImage}
                    />
                </TouchableOpacity>
        </View>
        {/* <ExpoLinksView /> */}
      </ScrollView>
    );
  }

  onPress ($previous_start,$previous_end,$start,$end)  {
        fetch('http://latinapi.herokuapp.com/v2/insert_data/gettestresults', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: this.state.user_id
          })  
        })
        .then((response) => response.json())
        .then((responseData) => {
           this.setState({
            objects: []
        });
          for (var x = $start; x <= $end; x++) {
              this.state.objects[x] = {  
                id: responseData[x].id,
                level: responseData[x].level,
                color: responseData[x].color,
                point: responseData[x].point,
                user_id:responseData[x].user_id,
                tour:responseData[x].tour,
                bolim: responseData[x].bolim
            }         
          }

          var previous_point = 0;
          var counter_color = 0;
          if($previous_start!=null) {
            for (var x = $previous_start; x <= $previous_end; x++) {
              if(responseData[x].color=='#54d28b') {
                  counter_color ++;
              }      
            }
          }

          var filtered = this.state.objects.filter(function (el) {
            return el != null;
          });
 
          if($start == 0) {
            this.props.navigation.navigate('Level', {array: filtered,kezen: 0,start: $start,end:$end}); 
          }
          else if ($start == 5 && counter_color==5) {
            this.props.navigation.navigate('Level', {array: filtered,kezen: 1,start: $start,end:$end});
          }
          else if($start == 10  && counter_color==5) {
            this.props.navigation.navigate('Level', {array: filtered,kezen:2,start: $start,end:$end});
          }
          else if($start ==15 && counter_color==5) {
            this.props.navigation.navigate('Level', {array: filtered,kezen:3,start: $start,end:$end});
          }
          else {
            Alert.alert("Хабарлама","Ұпай саны жеткіліксіз");
          }
        }).catch((error) => {
            console.error(error);

        });
 }
}
LinksScreen.navigationOptions = {
  title: 'Байқау сынағы',         
  headerTitleStyle: { alignSelf: 'center' },
  headerTintColor: '#8c51d9',
  headerRight:  () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />)
  
};

export default withNavigation(LinksScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeImage: {
    width: 20,
    height: 20
  },
  helpLink_1: {
    backgroundColor: "#31bc92",
    display: 'flex',
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    zIndex: 1,
    marginBottom: 10
  },
  words: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  helpLinkText: {
    fontSize: 20,
    color: 'white'
  
  }
});

