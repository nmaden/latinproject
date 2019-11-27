import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,FlatList,AsyncStorage,
    Alert

} from "react-native";
import { NavigationEvents } from 'react-navigation';
import { withNavigation } from 'react-navigation';

class Level extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      
      data: {
      "word_0_0":[{"id":"1","kazakh":"Жасөспiрiм ","latin":"Jasóspirim"},{"id":"2","kazakh":"Сәлем","latin":"Sálem"},{"id":"3","kazakh":"Рақмет ","latin":"Raqmet"},{"id":"4","kazakh":"Жаңалық ","latin":"Jańalyq"},{"id":"5","kazakh":"Әрине ","latin":"Árıne"},{"id":"6","kazakh":"Кешiрiңiз ","latin":"Keshirińiz"},{"id":"7","kazakh":"Әрiптес ","latin":"Áriptes"},{"id":"8","kazakh":"Ұлты ","latin":"Ulty"},{"id":"9","kazakh":"Әже ","latin":"Áje"},{"id":"10","kazakh":"Әке ","latin":"Áke"}],"word_0_1":[{"id":"11","kazakh":"Аға ","latin":"Aǵa"},{"id":"12","kazakh":"Тайғақ","latin":"taıǵaq"},{"id":"13","kazakh":"Күйеу ","latin":"Kúıeý"},{"id":"14","kazakh":"Әйел ","latin":"Áıel"},{"id":"15","kazakh":"Құрбы ","latin":"Qurby"},{"id":"16","kazakh":"Құрдас","latin":"Qurdas"},{"id":"17","kazakh":"Көршi","latin":"Kórshi"},{"id":"18","kazakh":"Үйлену","latin":"Úılený"},{"id":"19","kazakh":"Жүз","latin":"Júz"},{"id":"20","kazakh":"Мың","latin":"Myń"}],"word_0_2":[{"id":"21","kazakh":"Қала","latin":"Qala"},{"id":"22","kazakh":"Ықшамаудан","latin":"Yqshamaýdan"},{"id":"23","kazakh":"Көше","latin":"Kóshe"},{"id":"24","kazakh":"Ақтөбе","latin":"Aqtóbe"},{"id":"25","kazakh":"Саябақ","latin":"Saıabaq"},{"id":"26","kazakh":"Дәрiхана","latin":"Dárihana"},{"id":"27","kazakh":"Балабақша ","latin":"Balabaqsha"},{"id":"28","kazakh":"Басшы","latin":"Basshy"},{"id":"29","kazakh":"Өмiрбаян ","latin":"Ómirbaıan"},{"id":"30","kazakh":"Түйiндеме ","latin":"Túıindeme"}],"word_0_3":[{"id":"31","kazakh":"Кәсiпкер ","latin":"Kásipker"},{"id":"32","kazakh":"Жаңалық ","latin":"jańalyq"},{"id":"33","kazakh":"Қуырдақ","latin":"Qýyrdaq "},{"id":"34","kazakh":"Тәттi ","latin":"Tátti"},{"id":"35","kazakh":"Балмұздақ ","latin":"Balmuzdaq"},{"id":"36","kazakh":"Оңтүстiк ","latin":"Ońtústik"},{"id":"37","kazakh":"Солтүстiк ","latin":"Soltústik"},{"id":"38","kazakh":"Шығыс","latin":"Shyǵys"},{"id":"39","kazakh":"Бүркiт ","latin":"Búrkit"},{"id":"40","kazakh":"Қыс","latin":"Qys"}],"word_0_4":[{"id":"41","kazakh":"Қаңтар ","latin":"Qańtar"},{"id":"42","kazakh":"Ақпан","latin":"Aqpan"},{"id":"43","kazakh":"Сәуiр ","latin":"Sáýir"},{"id":"44","kazakh":"Желтоқсан","latin":"Jeltoqsan"},{"id":"45","kazakh":"Тәулiк","latin":"Táýlik"},{"id":"46","kazakh":"Жаңбыр ","latin":"Jańbyr"},{"id":"47","kazakh":"Саяхат ","latin":"Saıahat"},{"id":"48","kazakh":"Ғаламтор ","latin":"Ǵalamtor"},{"id":"49","kazakh":"Әуежай ","latin":"Áýejaı"},{"id":"50","kazakh":"Төлқұжат ","latin":"Tólqujat"}],"word_1_5":[{"id":"51","kazakh":"Отбасы ","latin":"Otbasy"},{"id":"52","kazakh":"Ағайынды ","latin":"Aǵaıyndy"},{"id":"53","kazakh":"Келiн","latin":"Kelin"},{"id":"54","kazakh":"Нағашы","latin":"Naǵashy"},{"id":"55","kazakh":"Жеңге","latin":"Jeńge"},{"id":"56","kazakh":"Жасөспiрiм ","latin":"Jasóspirim"},{"id":"57","kazakh":"Еңбекқор","latin":"Eńbekqor"},{"id":"58","kazakh":"Қанша?","latin":"Qansha?"},{"id":"59","kazakh":"Нешiншi?","latin":"Neshinshi?"},{"id":"60","kazakh":"Нөмiр","latin":"Nómir"}],"word_1_6":[{"id":"61","kazakh":"Әуесқойлық","latin":"Áýesqoılyq"},{"id":"62","kazakh":"Серуендеу","latin":"Serýendeý"},{"id":"63","kazakh":"Жағажай","latin":"Jaǵajaı"},{"id":"64","kazakh":"Шипажай","latin":"Shıpajaı"},{"id":"65","kazakh":"Шiлдехана","latin":"Shildehana"},{"id":"66","kazakh":"Құттықтау","latin":"Quttyqtaý"},{"id":"67","kazakh":"Салт-дәстүр","latin":"Salt-dástúr"},{"id":"68","kazakh":"Мұрын","latin":"Muryn"},{"id":"69","kazakh":"Әдемi","latin":"Ádemi"},{"id":"70","kazakh":"Сұлу","latin":"Sulý"}],"word_1_7":[{"id":"71","kazakh":"Үй","latin":"Úı"},{"id":"72","kazakh":"Баспалдақ","latin":"Baspaldaq"},{"id":"73","kazakh":"Шаңсорғыш","latin":"Shańsorǵysh"},{"id":"74","kazakh":"Тоңазытқыш","latin":"Tońazytqysh"},{"id":"75","kazakh":"Түсқағаз","latin":"Túsqaǵaz"},{"id":"76","kazakh":"Үкiмет","latin":"Úkimet"},{"id":"77","kazakh":"Рәмiз","latin":"Rámiz"},{"id":"78","kazakh":"Елтаңба","latin":"Eltańba"},{"id":"79","kazakh":"Халық","latin":"Halyq"},{"id":"80","kazakh":"Азаматтық","latin":"Azamattyq"}],"word_1_8":[{"id":"81","kazakh":"Шекара","latin":"Shekara"},{"id":"82","kazakh":"Елшiлiк","latin":"Elshilik"},{"id":"83","kazakh":"Жауынгер","latin":"Jaýynger"},{"id":"84","kazakh":"Дүкен","latin":"Dúken"},{"id":"85","kazakh":"Азық-түлiк","latin":"Azyq-túlik"},{"id":"86","kazakh":"Ас мәзiрi","latin":"As máziri"},{"id":"87","kazakh":"Сатылым","latin":"Satylym"},{"id":"88","kazakh":"Жеңiлдiк","latin":"Jeńildik"},{"id":"89","kazakh":"Жанкүйер","latin":"Jankúıer"},{"id":"90","kazakh":"Демеушi","latin":"Demeýshi"}],"word_1_9":[{"id":"91","kazakh":"Жиналыс","latin":"Jınalys"},{"id":"92","kazakh":"Күнтiзбе","latin":"Kúntizbe"},{"id":"93","kazakh":"Ғарышкер","latin":"Ǵaryshker"},{"id":"94","kazakh":"Даяшы","latin":"Daıashy"},{"id":"95","kazakh":"Негiздеме","latin":"Negizdeme"},{"id":"96","kazakh":"Көзқарас","latin":"Kózqaras"},{"id":"97","kazakh":"Келiсiмшарт","latin":"Kelisimshart"},{"id":"98","kazakh":"Сыйақы","latin":"Syıaqy"},{"id":"99","kazakh":"iссапар","latin":"İssapar"},{"id":"100","kazakh":"Басқарма","latin":"Basqarma"}],"word_2_10":[{"id":"101","kazakh":"Қалыңыз қалай?","latin":"Qalyńyz qalaı?"},{"id":"102","kazakh":"Жаман емес, жақсы","latin":"- Jaman emes, jaqsy"},{"id":"103","kazakh":"Бәрi ойдағыдай","latin":"Bári oıdaǵydaı"},{"id":"104","kazakh":"Не жаңалық?","latin":"Ne jańalyq?"},{"id":"105","kazakh":"Кездескенiмiз қандай жақсы болды!","latin":"Kezdeskenimiz qandaı jaqsy\r\nboldy!"},{"id":"106","kazakh":"Танысуға рұқсат етiңiзшi","latin":"Tanysýǵa ruqsat etińizshi"},{"id":"107","kazakh":"Алғысымды бiлдiремiн","latin":"Alǵysymdy bildiremin"},{"id":"108","kazakh":"Мен сiзге өте ризамын","latin":"Men sizge óte rızamyn"},{"id":"109","kazakh":"Кешiрiм өтiнемiн","latin":"Keshirim ótinemin"},{"id":"110","kazakh":"Маған газет берiңiзшi","latin":"Maǵan gazet berińizshi"}],"word_2_11":[{"id":"111","kazakh":"Кiруге рұқсат етiңiзшi","latin":"Kirýge ruqsat etińizshi"},{"id":"112","kazakh":"Әрине, рұқсат","latin":"Árıne, ruqsat"},{"id":"113","kazakh":"Кешiрiңiз, уақытым болмай тұр","latin":"Keshirińiz, ýaqytym bolmaı tur"},{"id":"114","kazakh":"Сау болыңыз!","latin":"Saý bolyńyz!"},{"id":"115","kazakh":"Кездескенше!","latin":"Kezdeskenshe!"},{"id":"116","kazakh":"Бәрi сәттi болсын!","latin":"Bári sátti bolsyn!"},{"id":"117","kazakh":"Жолыңыз болсын!","latin":"Jolyńyz bolsyn!"},{"id":"118","kazakh":"Бiз әлi кездесемiз!","latin":"Biz áli kezdesemiz!"},{"id":"119","kazakh":"Ұмытпаңыздар!","latin":"Umytpańyzdar!"},{"id":"120","kazakh":"Шын жүректен","latin":"Shyn júrekten"}],"word_2_12":[{"id":"121","kazakh":"Отау иесi","latin":"Otaý ıesi"},{"id":"122","kazakh":"Жасөспiрiм ","latin":"Jasóspirim"},{"id":"123","kazakh":"Баспасөз","latin":"Baspasóz"},{"id":"124","kazakh":"Өнер жұлдыздары","latin":"Óner juldyzdary"},{"id":"125","kazakh":"Тiкелей эфир","latin":"Tikeleı efır"},{"id":"126","kazakh":"Мақала","latin":"Maqala"},{"id":"127","kazakh":"Тележүргiзушi","latin":"Telejúrgizýshi"},{"id":"128","kazakh":"Баспа үйi","latin":"Baspa úıi"},{"id":"129","kazakh":"Бөлiм бастығы","latin":"Bólim bastyǵy"},{"id":"130","kazakh":"Мерзiмдi баспасөз","latin":"Merzimdi baspasóz"}],"word_2_13":[{"id":"131","kazakh":"Меншiктi тiлшi","latin":"Menshikti tilshi"},{"id":"132","kazakh":"Кiтап баспадан шықты","latin":"Kitap baspadan shyqty"},{"id":"133","kazakh":"Мәдени ескерткiш","latin":"Mádenı eskertkish"},{"id":"134","kazakh":"Сауда үйi","latin":"Saýda úıi"},{"id":"135","kazakh":"Ойын-сауық орталығы","latin":"Oıyn-saýyq ortalyǵy"},{"id":"136","kazakh":"Анықтама бюросы","latin":"Anyqtama búrosy"},{"id":"137","kazakh":"Сұлулық салоны","latin":"Sulýlyq salony"},{"id":"138","kazakh":"Жауын-шашын","latin":"Jaýyn-shashyn"},{"id":"139","kazakh":"Өмiрге құштар","latin":"Ómirge qushtar"},{"id":"140","kazakh":"Бiлiктi маман","latin":"Bilikti maman"}],"word_2_14":[{"id":"141","kazakh":"Тiл үйренушi","latin":"Til úırenýshi"},{"id":"142","kazakh":"Ғимараттар құрылысы","latin":"Ǵımarattar qurylysy"},{"id":"143","kazakh":"Сүт өнiмдерi","latin":"Sút ónimderi"},{"id":"144","kazakh":"Қазақ жазуы","latin":"Qazaq jazýy"},{"id":"145","kazakh":"Жаңашыл педагог","latin":"Jańashyl pedagog"},{"id":"146","kazakh":"Жарқын болашақ","latin":"Jarqyn bolashaq"},{"id":"147","kazakh":"Шешендiк өнер","latin":"Sheshendik óner"},{"id":"148","kazakh":"Үй тапсырмасы","latin":"Úı tapsyrmasy"},{"id":"149","kazakh":"Ұстаздық ету","latin":"Ustazdyq etý"},{"id":"150","kazakh":"Мектеп бiтiру","latin":"Mektep bitirý"}],"word_3_15":[{"id":"151","kazakh":"Швейцария","latin":"Shveısarıa"},{"id":"152","kazakh":"Эпицентр","latin":"Epısentr"},{"id":"153","kazakh":"Сантиметр","latin":"Santımetr"},{"id":"154","kazakh":"Қоршаған ортаны қорғау","latin":"Qorshaǵan ortany qorǵaý"},{"id":"155","kazakh":"Компьютерде жұмыс iстеу","latin":"Kompúterde jumys isteý"},{"id":"156","kazakh":"Жоғары нәтиже көрсету","latin":"Joǵary nátıje kórsetý"},{"id":"157","kazakh":"Шығармашылықпен айналысу","latin":"Shyǵarmashylyqpen aınalysý"},{"id":"158","kazakh":"Қарақыпшақ Қобыланды","latin":"Qaraqypshaq Qobylandy"},{"id":"159","kazakh":"Әбунасыр әл-Фараби","latin":"Ábýnasyr ál-Farabı"},{"id":"160","kazakh":"Леонардо да Винчи","latin":"Leonardo da Vınchı"}],"word_3_16":[{"id":"161","kazakh":"Юля","latin":"iýlıa"},{"id":"162","kazakh":"Өз үйiм - өлең төсегiм","latin":"Óz úıim - óleń tósegim"},{"id":"163","kazakh":"Жаны сұлудың тәнi сұлу","latin":"Jany sulýdyń táni sulý"},{"id":"164","kazakh":"Жақсы сөз жарым ырыс","latin":"Jaqsy sóz jarym yrys"},{"id":"165","kazakh":"Өмiр - үлкен мектеп","latin":"Ómir - úlken mektep"},{"id":"166","kazakh":"Ештен кеш жақсы","latin":"Eshten kesh jaqsy"},{"id":"167","kazakh":"Өткен iске өкiнбе","latin":"Ótken iske ókinbe"},{"id":"168","kazakh":"Сақтықта қорлық жоқ","latin":"Saqtyqta qorlyq joq"},{"id":"169","kazakh":"Бес саусақ бiрдей емес","latin":"Bes saýsaq birdeı emes"},{"id":"170","kazakh":"Денсаулық - зор байлық","latin":"Densaýlyq - zor baılyq"}],"word_3_17":[{"id":"171","kazakh":"ЮНЕСКО","latin":"UNESСO"},{"id":"172","kazakh":"ЭКСПО","latin":"EXPO"},{"id":"173","kazakh":"Актёр","latin":"Аktór"},{"id":"174","kazakh":"Дирижёр","latin":"Dırıjо́r"},{"id":"175","kazakh":"Цирк","latin":"Sırk"},{"id":"176","kazakh":"Корпорация","latin":"Korporasıa"},{"id":"177","kazakh":"Училище","latin":"Ýchılıshe"},{"id":"178","kazakh":"Борщ","latin":"Borsh"},{"id":"179","kazakh":"Элемент","latin":"Element"},{"id":"180","kazakh":"Парашют","latin":"Parashút"}],"word_3_18":[{"id":"181","kazakh":"Бюджет","latin":"Búdjet"},{"id":"182","kazakh":"Компьютер","latin":"Kompúter"},{"id":"183","kazakh":"Заряд","latin":"Zarа́d"},{"id":"184","kazakh":"Князь","latin":"Knáz"},{"id":"185","kazakh":"Акция","latin":"Aksıa"},{"id":"186","kazakh":"Химия","latin":"Hımıa"},{"id":"187","kazakh":"Гимназия","latin":"Gımnazıa"},{"id":"188","kazakh":"Альбом","latin":"Álbom"},{"id":"189","kazakh":"Фольклор","latin":"Fólklor"},{"id":"190","kazakh":"Мультфильм","latin":"Múltfılm"}],"word_3_19":[{"id":"191","kazakh":"Класс","latin":"Klas"},{"id":"192","kazakh":"Холл","latin":"Hol"},{"id":"193","kazakh":"Калий","latin":"Kalı"},{"id":"194","kazakh":"Экономист","latin":"Ekonomıs"},{"id":"195","kazakh":"Педагог","latin":"Pedagog"},{"id":"196","kazakh":"Боулинг","latin":"Boýlıń"},{"id":"197","kazakh":"Брифинг","latin":"Brıfıń"},{"id":"198","kazakh":"Веб-сайт","latin":"Ýeb-saıt"},{"id":"199","kazakh":"Филолог","latin":"Fılolog"},{"id":"200","kazakh":"Рейтинг","latin":"Reıtıń"}]
      },
      color: '#d83681',
      _isMounted: false
    }
  }
  componentDidMount() {

    this.setState({
      _isMounted: true
  });
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
     
    });
  } 

 
  componentWillUnMount() {
   
    this.setState({
      _isMounted: false
    });
  }
  render() {
        return (
            <ScrollView style={styles.container}>
            <View style={styles.helpContainer}>
            <FlatList
                  data={this.props.navigation.getParam('array')}
                  renderItem={({item,index}) => 
                    <TouchableOpacity  style={{backgroundColor: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    padding: 20,
                    borderRadius: 4,
                    height: 100,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    zIndex: 1,
                    marginBottom: 10}}  onPress={
                      () => this.onPress(item.color,item.tour,item.level)
                    } >
                    <View style={styles.words}>
                        <Text style={styles.helpLinkText}>
                        {item.bolim} бөлім
                        </Text>
                        <Text style={styles.helpLinkText}>
                        {item.point}/10
                        </Text>
                        {/* <Text style={styles.helpLinkText}>
                        {item.point/10*100}%
                        </Text> */}
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
                  }
                  keyExtractor={item => item.id.toString()}
              />
                
                 
          </View>
        </ScrollView>
        );
    }
    onPress($color,$tour,$level) {
      if($color=='#54d28b') {
          Alert.alert("Хабарлама","Бұл деңгей тапсырылды");
      }
      else {
        this.props.navigation.navigate('Question',{data: this.state.data["word_"+this.props.navigation.getParam('kezen')+"_"+$tour],kezen: this.props.navigation.getParam('kezen'),tour:$tour, level:$level,start: this.props.navigation.getParam('start'),end:this.props.navigation.getParam('end')})
      }
    }
}
Level.navigationOptions = {
  title: 'Байқау сынағы',         
  headerTitleStyle: { alignSelf: 'center' },
  headerTintColor: '#8c51d9'
};

export default withNavigation(Level);
const styles = StyleSheet.create({
   words: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
   },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
       width: "250",
       borderRadius: 3 
    }
    ,
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    helpLink: {
        backgroundColor: "#8252c1",
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        borderRadius: 3

    },
    welcomeImage: {
        width: 20,
        height: 20
      },
    helpLink_1: {
  
      },
    helpContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20
    },
    helpLinkText: {
      fontSize: 20,
      color: 'white'
    }
});