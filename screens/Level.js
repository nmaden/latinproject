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
      "word_0_0":[{"background":"white","color":"#8c51d9","id":"1","kazakh":"Сәлем","latin":"Sálem"},{"background":"white","color":"#8c51d9","id":"2","kazakh":"Қалайсыз","latin":"Qalaısyz"},{"background":"white","color":"#8c51d9","id":"3","kazakh":"Рақмет ","latin":"Raqmet"},{"background":"white","color":"#8c51d9","id":"4","kazakh":"Жаңалық ","latin":"Jańalyq"},{"background":"white","color":"#8c51d9","id":"5","kazakh":"Әрине ","latin":"Árıne"},{"background":"white","color":"#8c51d9","id":"6","kazakh":"Кешiрiңiз ","latin":"Keshirińiz"},{"background":"white","color":"#8c51d9","id":"7","kazakh":"Әрiптес ","latin":"Áriptes"},{"background":"white","color":"#8c51d9","id":"8","kazakh":"Ұлты ","latin":"Ulty"},{"background":"white","color":"#8c51d9","id":"9","kazakh":"Әже ","latin":"Áje"},{"background":"white","color":"#8c51d9","id":"10","kazakh":"Әке ","latin":"Áke"}],"word_0_1":[{"background":"white","color":"#8c51d9","id":"11","kazakh":"Аға ","latin":"Aǵa"},{"background":"white","color":"#8c51d9","id":"12","kazakh":"Тайғақ","latin":"taıǵaq"},{"background":"white","color":"#8c51d9","id":"13","kazakh":"Күйеу ","latin":"Kúıeý"},{"background":"white","color":"#8c51d9","id":"14","kazakh":"Әйел ","latin":"Áıel"},{"background":"white","color":"#8c51d9","id":"15","kazakh":"Құрбы ","latin":"Qurby"},{"background":"white","color":"#8c51d9","id":"16","kazakh":"Құрдас","latin":"Qurdas"},{"background":"white","color":"#8c51d9","id":"17","kazakh":"Көршi","latin":"Kórshi"},{"background":"white","color":"#8c51d9","id":"18","kazakh":"Үйлену","latin":"Úılený"},{"background":"white","color":"#8c51d9","id":"19","kazakh":"Жүз","latin":"Júz"},{"background":"white","color":"#8c51d9","id":"20","kazakh":"Мың","latin":"Myń"}],"word_0_2":[{"background":"white","color":"#8c51d9","id":"21","kazakh":"Қала","latin":"Qala"},{"background":"white","color":"#8c51d9","id":"22","kazakh":"Ықшамаудан","latin":"Yqshamaýdan"},{"background":"white","color":"#8c51d9","id":"23","kazakh":"Көше","latin":"Kóshe"},{"background":"white","color":"#8c51d9","id":"24","kazakh":"Ақтөбе","latin":"Aqtóbe"},{"background":"white","color":"#8c51d9","id":"25","kazakh":"Саябақ","latin":"Saıabaq"},{"background":"white","color":"#8c51d9","id":"26","kazakh":"Дәрiхана","latin":"Dárihana"},{"background":"white","color":"#8c51d9","id":"27","kazakh":"Балабақша ","latin":"Balabaqsha"},{"background":"white","color":"#8c51d9","id":"28","kazakh":"Басшы","latin":"Basshy"},{"background":"white","color":"#8c51d9","id":"29","kazakh":"Өмiрбаян ","latin":"Ómirbaıan"},{"background":"white","color":"#8c51d9","id":"30","kazakh":"Түйiндеме ","latin":"Túıindeme"}],"word_0_3":[{"background":"white","color":"#8c51d9","id":"31","kazakh":"Кәсiпкер ","latin":"Kásipker"},{"background":"white","color":"#8c51d9","id":"32","kazakh":"Жаңалық ","latin":"jańalyq"},{"background":"white","color":"#8c51d9","id":"33","kazakh":"Қуырдақ","latin":"Qýyrdaq "},{"background":"white","color":"#8c51d9","id":"34","kazakh":"Тәттi ","latin":"Tátti"},{"background":"white","color":"#8c51d9","id":"35","kazakh":"Балмұздақ ","latin":"Balmuzdaq"},{"background":"white","color":"#8c51d9","id":"36","kazakh":"Оңтүстiк ","latin":"Ońtústik"},{"background":"white","color":"#8c51d9","id":"37","kazakh":"Солтүстiк ","latin":"Soltústik"},{"background":"white","color":"#8c51d9","id":"38","kazakh":"Шығыс","latin":"Shyǵys"},{"background":"white","color":"#8c51d9","id":"39","kazakh":"Бүркiт ","latin":"Búrkit"},{"background":"white","color":"#8c51d9","id":"40","kazakh":"Қыс","latin":"Qys"}],"word_0_4":[{"background":"white","color":"#8c51d9","id":"41","kazakh":"Қаңтар ","latin":"Qańtar"},{"background":"white","color":"#8c51d9","id":"42","kazakh":"Ақпан","latin":"Aqpan"},{"background":"white","color":"#8c51d9","id":"43","kazakh":"Сәуiр ","latin":"Sáýir"},{"background":"white","color":"#8c51d9","id":"44","kazakh":"Желтоқсан","latin":"Jeltoqsan"},{"background":"white","color":"#8c51d9","id":"45","kazakh":"Тәулiк","latin":"Táýlik"},{"background":"white","color":"#8c51d9","id":"46","kazakh":"Жаңбыр ","latin":"Jańbyr"},{"background":"white","color":"#8c51d9","id":"47","kazakh":"Саяхат ","latin":"Saıahat"},{"background":"white","color":"#8c51d9","id":"48","kazakh":"Ғаламтор ","latin":"Ǵalamtor"},{"background":"white","color":"#8c51d9","id":"49","kazakh":"Әуежай ","latin":"Áýejaı"},{"background":"white","color":"#8c51d9","id":"50","kazakh":"Төлқұжат ","latin":"Tólqujat"}],"word_1_5":[{"background":"white","color":"#8c51d9","id":"51","kazakh":"Отбасы ","latin":"Otbasy"},{"background":"white","color":"#8c51d9","id":"52","kazakh":"Ағайынды ","latin":"Aǵaıyndy"},{"background":"white","color":"#8c51d9","id":"53","kazakh":"Келiн","latin":"Kelin"},{"background":"white","color":"#8c51d9","id":"54","kazakh":"Нағашы","latin":"Naǵashy"},{"background":"white","color":"#8c51d9","id":"55","kazakh":"Жеңге","latin":"Jeńge"},{"background":"white","color":"#8c51d9","id":"56","kazakh":"Жасөспiрiм ","latin":"Jasóspirim"},{"background":"white","color":"#8c51d9","id":"57","kazakh":"Еңбекқор","latin":"Eńbekqor"},{"background":"white","color":"#8c51d9","id":"58","kazakh":"Қанша?","latin":"Qansha?"},{"background":"white","color":"#8c51d9","id":"59","kazakh":"Нешiншi?","latin":"Neshinshi?"},{"background":"white","color":"#8c51d9","id":"60","kazakh":"Нөмiр","latin":"Nómir"}],"word_1_6":[{"background":"white","color":"#8c51d9","id":"61","kazakh":"Әуесқойлық","latin":"Áýesqoılyq"},{"background":"white","color":"#8c51d9","id":"62","kazakh":"Серуендеу","latin":"Serýendeý"},{"background":"white","color":"#8c51d9","id":"63","kazakh":"Жағажай","latin":"Jaǵajaı"},{"background":"white","color":"#8c51d9","id":"64","kazakh":"Шипажай","latin":"Shıpajaı"},{"background":"white","color":"#8c51d9","id":"65","kazakh":"Шiлдехана","latin":"Shildehana"},{"background":"white","color":"#8c51d9","id":"66","kazakh":"Құттықтау","latin":"Quttyqtaý"},{"background":"white","color":"#8c51d9","id":"67","kazakh":"Салт-дәстүр","latin":"Salt-dástúr"},{"background":"white","color":"#8c51d9","id":"68","kazakh":"Мұрын","latin":"Muryn"},{"background":"white","color":"#8c51d9","id":"69","kazakh":"Әдемi","latin":"Ádemi"},{"background":"white","color":"#8c51d9","id":"70","kazakh":"Сұлу","latin":"Sulý"}],"word_1_7":[{"background":"white","color":"#8c51d9","id":"71","kazakh":"Үй","latin":"Úı"},{"background":"white","color":"#8c51d9","id":"72","kazakh":"Баспалдақ","latin":"Baspaldaq"},{"background":"white","color":"#8c51d9","id":"73","kazakh":"Шаңсорғыш","latin":"Shańsorǵysh"},{"background":"white","color":"#8c51d9","id":"74","kazakh":"Тоңазытқыш","latin":"Tońazytqysh"},{"background":"white","color":"#8c51d9","id":"75","kazakh":"Түсқағаз","latin":"Túsqaǵaz"},{"background":"white","color":"#8c51d9","id":"76","kazakh":"Үкiмет","latin":"Úkimet"},{"background":"white","color":"#8c51d9","id":"77","kazakh":"Рәмiз","latin":"Rámiz"},{"background":"white","color":"#8c51d9","id":"78","kazakh":"Елтаңба","latin":"Eltańba"},{"background":"white","color":"#8c51d9","id":"79","kazakh":"Халық","latin":"Halyq"},{"background":"white","color":"#8c51d9","id":"80","kazakh":"Азаматтық","latin":"Azamattyq"}],"word_1_8":[{"background":"white","color":"#8c51d9","id":"81","kazakh":"Шекара","latin":"Shekara"},{"background":"white","color":"#8c51d9","id":"82","kazakh":"Елшiлiк","latin":"Elshilik"},{"background":"white","color":"#8c51d9","id":"83","kazakh":"Жауынгер","latin":"Jaýynger"},{"background":"white","color":"#8c51d9","id":"84","kazakh":"Дүкен","latin":"Dúken"},{"background":"white","color":"#8c51d9","id":"85","kazakh":"Азық-түлiк","latin":"Azyq-túlik"},{"background":"white","color":"#8c51d9","id":"86","kazakh":"Ас мәзiрi","latin":"As máziri"},{"background":"white","color":"#8c51d9","id":"87","kazakh":"Сатылым","latin":"Satylym"},{"background":"white","color":"#8c51d9","id":"88","kazakh":"Жеңiлдiк","latin":"Jeńildik"},{"background":"white","color":"#8c51d9","id":"89","kazakh":"Жанкүйер","latin":"Jankúıer"},{"background":"white","color":"#8c51d9","id":"90","kazakh":"Демеушi","latin":"Demeýshi"}],"word_1_9":[{"background":"white","color":"#8c51d9","id":"91","kazakh":"Жиналыс","latin":"Jınalys"},{"background":"white","color":"#8c51d9","id":"92","kazakh":"Күнтiзбе","latin":"Kúntizbe"},{"background":"white","color":"#8c51d9","id":"93","kazakh":"Ғарышкер","latin":"Ǵaryshker"},{"background":"white","color":"#8c51d9","id":"94","kazakh":"Даяшы","latin":"Daıashy"},{"background":"white","color":"#8c51d9","id":"95","kazakh":"Негiздеме","latin":"Negizdeme"},{"background":"white","color":"#8c51d9","id":"96","kazakh":"Көзқарас","latin":"Kózqaras"},{"background":"white","color":"#8c51d9","id":"97","kazakh":"Келiсiмшарт","latin":"Kelisimshart"},{"background":"white","color":"#8c51d9","id":"98","kazakh":"Сыйақы","latin":"Syıaqy"},{"background":"white","color":"#8c51d9","id":"99","kazakh":"iссапар","latin":"İssapar"},{"background":"white","color":"#8c51d9","id":"100","kazakh":"Басқарма","latin":"Basqarma"}],"word_2_10":[{"background":"white","color":"#8c51d9","id":"101","kazakh":"Қалыңыз қалай?","latin":"Qalyńyz qalaı?"},{"background":"white","color":"#8c51d9","id":"102","kazakh":"Жаман емес, жақсы","latin":"- Jaman emes, jaqsy"},{"background":"white","color":"#8c51d9","id":"103","kazakh":"Бәрi ойдағыдай","latin":"Bári oıdaǵydaı"},{"background":"white","color":"#8c51d9","id":"104","kazakh":"Не жаңалық?","latin":"Ne jańalyq?"},{"background":"white","color":"#8c51d9","id":"105","kazakh":"Кездескенiмiз қандай жақсы болды!","latin":"Kezdeskenimiz qandaı jaqsy\r\nboldy!"},{"background":"white","color":"#8c51d9","id":"106","kazakh":"Танысуға рұқсат етiңiзшi","latin":"Tanysýǵa ruqsat etińizshi"},{"background":"white","color":"#8c51d9","id":"107","kazakh":"Алғысымды бiлдiремiн","latin":"Alǵysymdy bildiremin"},{"background":"white","color":"#8c51d9","id":"108","kazakh":"Мен сiзге өте ризамын","latin":"Men sizge óte rızamyn"},{"background":"white","color":"#8c51d9","id":"109","kazakh":"Кешiрiм өтiнемiн","latin":"Keshirim ótinemin"},{"background":"white","color":"#8c51d9","id":"110","kazakh":"Маған газет берiңiзшi","latin":"Maǵan gazet berińizshi"}],"word_2_11":[{"background":"white","color":"#8c51d9","id":"111","kazakh":"Кiруге рұқсат етiңiзшi","latin":"Kirýge ruqsat etińizshi"},{"background":"white","color":"#8c51d9","id":"112","kazakh":"Әрине, рұқсат","latin":"Árıne, ruqsat"},{"background":"white","color":"#8c51d9","id":"113","kazakh":"Кешiрiңiз, уақытым болмай тұр","latin":"Keshirińiz, ýaqytym bolmaı tur"},{"background":"white","color":"#8c51d9","id":"114","kazakh":"Сау болыңыз!","latin":"Saý bolyńyz!"},{"background":"white","color":"#8c51d9","id":"115","kazakh":"Кездескенше!","latin":"Kezdeskenshe!"},{"background":"white","color":"#8c51d9","id":"116","kazakh":"Бәрi сәттi болсын!","latin":"Bári sátti bolsyn!"},{"background":"white","color":"#8c51d9","id":"117","kazakh":"Жолыңыз болсын!","latin":"Jolyńyz bolsyn!"},{"background":"white","color":"#8c51d9","id":"118","kazakh":"Бiз әлi кездесемiз!","latin":"Biz áli kezdesemiz!"},{"background":"white","color":"#8c51d9","id":"119","kazakh":"Ұмытпаңыздар!","latin":"Umytpańyzdar!"},{"background":"white","color":"#8c51d9","id":"120","kazakh":"Шын жүректен","latin":"Shyn júrekten"}],"word_2_12":[{"background":"white","color":"#8c51d9","id":"121","kazakh":"Отау иесi","latin":"Otaý ıesi"},{"background":"white","color":"#8c51d9","id":"122","kazakh":"Жасөспiрiм ","latin":"Jasóspirim"},{"background":"white","color":"#8c51d9","id":"123","kazakh":"Баспасөз","latin":"Baspasóz"},{"background":"white","color":"#8c51d9","id":"124","kazakh":"Өнер жұлдыздары","latin":"Óner juldyzdary"},{"background":"white","color":"#8c51d9","id":"125","kazakh":"Тiкелей эфир","latin":"Tikeleı efır"},{"background":"white","color":"#8c51d9","id":"126","kazakh":"Мақала","latin":"Maqala"},{"background":"white","color":"#8c51d9","id":"127","kazakh":"Тележүргiзушi","latin":"Telejúrgizýshi"},{"background":"white","color":"#8c51d9","id":"128","kazakh":"Баспа үйi","latin":"Baspa úıi"},{"background":"white","color":"#8c51d9","id":"129","kazakh":"Бөлiм бастығы","latin":"Bólim bastyǵy"},{"background":"white","color":"#8c51d9","id":"130","kazakh":"Мерзiмдi баспасөз","latin":"Merzimdi baspasóz"}],"word_2_13":[{"background":"white","color":"#8c51d9","id":"131","kazakh":"Меншiктi тiлшi","latin":"Menshikti tilshi"},{"background":"white","color":"#8c51d9","id":"132","kazakh":"Кiтап баспадан шықты","latin":"Kitap baspadan shyqty"},{"background":"white","color":"#8c51d9","id":"133","kazakh":"Мәдени ескерткiш","latin":"Mádenı eskertkish"},{"background":"white","color":"#8c51d9","id":"134","kazakh":"Сауда үйi","latin":"Saýda úıi"},{"background":"white","color":"#8c51d9","id":"135","kazakh":"Ойын-сауық орталығы","latin":"Oıyn-saýyq ortalyǵy"},{"background":"white","color":"#8c51d9","id":"136","kazakh":"Анықтама бюросы","latin":"Anyqtama búrosy"},{"background":"white","color":"#8c51d9","id":"137","kazakh":"Сұлулық салоны","latin":"Sulýlyq salony"},{"background":"white","color":"#8c51d9","id":"138","kazakh":"Жауын-шашын","latin":"Jaýyn-shashyn"},{"background":"white","color":"#8c51d9","id":"139","kazakh":"Өмiрге құштар","latin":"Ómirge qushtar"},{"background":"white","color":"#8c51d9","id":"140","kazakh":"Бiлiктi маман","latin":"Bilikti maman"}],"word_2_14":[{"background":"white","color":"#8c51d9","id":"141","kazakh":"Тiл үйренушi","latin":"Til úırenýshi"},{"background":"white","color":"#8c51d9","id":"142","kazakh":"Ғимараттар құрылысы","latin":"Ǵımarattar qurylysy"},{"background":"white","color":"#8c51d9","id":"143","kazakh":"Сүт өнiмдерi","latin":"Sút ónimderi"},{"background":"white","color":"#8c51d9","id":"144","kazakh":"Қазақ жазуы","latin":"Qazaq jazýy"},{"background":"white","color":"#8c51d9","id":"145","kazakh":"Жаңашыл педагог","latin":"Jańashyl pedagog"},{"background":"white","color":"#8c51d9","id":"146","kazakh":"Жарқын болашақ","latin":"Jarqyn bolashaq"},{"background":"white","color":"#8c51d9","id":"147","kazakh":"Шешендiк өнер","latin":"Sheshendik óner"},{"background":"white","color":"#8c51d9","id":"148","kazakh":"Үй тапсырмасы","latin":"Úı tapsyrmasy"},{"background":"white","color":"#8c51d9","id":"149","kazakh":"Ұстаздық ету","latin":"Ustazdyq etý"},{"background":"white","color":"#8c51d9","id":"150","kazakh":"Мектеп бiтiру","latin":"Mektep bitirý"}],"word_3_15":[{"background":"white","color":"#8c51d9","id":"151","kazakh":"Швейцария","latin":"Shveısarıa"},{"background":"white","color":"#8c51d9","id":"152","kazakh":"Эпицентр","latin":"Epısentr"},{"background":"white","color":"#8c51d9","id":"153","kazakh":"Сантиметр","latin":"Santımetr"},{"background":"white","color":"#8c51d9","id":"154","kazakh":"Қоршаған ортаны қорғау","latin":"Qorshaǵan ortany qorǵaý"},{"background":"white","color":"#8c51d9","id":"155","kazakh":"Компьютерде жұмыс iстеу","latin":"Kompúterde jumys isteý"},{"background":"white","color":"#8c51d9","id":"156","kazakh":"Жоғары нәтиже көрсету","latin":"Joǵary nátıje kórsetý"},{"background":"white","color":"#8c51d9","id":"157","kazakh":"Шығармашылықпен айналысу","latin":"Shyǵarmashylyqpen aınalysý"},{"background":"white","color":"#8c51d9","id":"158","kazakh":"Қарақыпшақ Қобыланды","latin":"Qaraqypshaq Qobylandy"},{"background":"white","color":"#8c51d9","id":"159","kazakh":"Әбунасыр әл-Фараби","latin":"Ábýnasyr ál-Farabı"},{"background":"white","color":"#8c51d9","id":"160","kazakh":"Леонардо да Винчи","latin":"Leonardo da Vınchı"}],"word_3_16":[{"background":"white","color":"#8c51d9","id":"161","kazakh":"Юля","latin":"iýlıa"},{"background":"white","color":"#8c51d9","id":"162","kazakh":"Өз үйiм - өлең төсегiм","latin":"Óz úıim - óleń tósegim"},{"background":"white","color":"#8c51d9","id":"163","kazakh":"Жаны сұлудың тәнi сұлу","latin":"Jany sulýdyń táni sulý"},{"background":"white","color":"#8c51d9","id":"164","kazakh":"Жақсы сөз жарым ырыс","latin":"Jaqsy sóz jarym yrys"},{"background":"white","color":"#8c51d9","id":"165","kazakh":"Өмiр - үлкен мектеп","latin":"Ómir - úlken mektep"},{"background":"white","color":"#8c51d9","id":"166","kazakh":"Ештен кеш жақсы","latin":"Eshten kesh jaqsy"},{"background":"white","color":"#8c51d9","id":"167","kazakh":"Өткен iске өкiнбе","latin":"Ótken iske ókinbe"},{"background":"white","color":"#8c51d9","id":"168","kazakh":"Сақтықта қорлық жоқ","latin":"Saqtyqta qorlyq joq"},{"background":"white","color":"#8c51d9","id":"169","kazakh":"Бес саусақ бiрдей емес","latin":"Bes saýsaq birdeı emes"},{"background":"white","color":"#8c51d9","id":"170","kazakh":"Денсаулық - зор байлық","latin":"Densaýlyq - zor baılyq"}],"word_3_17":[{"background":"white","color":"#8c51d9","id":"171","kazakh":"ЮНЕСКО","latin":"UNESСO"},{"background":"white","color":"#8c51d9","id":"172","kazakh":"ЭКСПО","latin":"EXPO"},{"background":"white","color":"#8c51d9","id":"173","kazakh":"Актёр","latin":"Аktór"},{"background":"white","color":"#8c51d9","id":"174","kazakh":"Дирижёр","latin":"Dırıjо́r"},{"background":"white","color":"#8c51d9","id":"175","kazakh":"Цирк","latin":"Sırk"},{"background":"white","color":"#8c51d9","id":"176","kazakh":"Корпорация","latin":"Korporasıa"},{"background":"white","color":"#8c51d9","id":"177","kazakh":"Училище","latin":"Ýchılıshe"},{"background":"white","color":"#8c51d9","id":"178","kazakh":"Борщ","latin":"Borsh"},{"background":"white","color":"#8c51d9","id":"179","kazakh":"Элемент","latin":"Element"},{"background":"white","color":"#8c51d9","id":"180","kazakh":"Парашют","latin":"Parashút"}],"word_3_18":[{"background":"white","color":"#8c51d9","id":"181","kazakh":"Бюджет","latin":"Búdjet"},{"background":"white","color":"#8c51d9","id":"182","kazakh":"Компьютер","latin":"Kompúter"},{"background":"white","color":"#8c51d9","id":"183","kazakh":"Заряд","latin":"Zarа́d"},{"background":"white","color":"#8c51d9","id":"184","kazakh":"Князь","latin":"Knáz"},{"background":"white","color":"#8c51d9","id":"185","kazakh":"Акция","latin":"Aksıa"},{"background":"white","color":"#8c51d9","id":"186","kazakh":"Химия","latin":"Hımıa"},{"background":"white","color":"#8c51d9","id":"187","kazakh":"Гимназия","latin":"Gımnazıa"},{"background":"white","color":"#8c51d9","id":"188","kazakh":"Альбом","latin":"Álbom"},{"background":"white","color":"#8c51d9","id":"189","kazakh":"Фольклор","latin":"Fólklor"},{"background":"white","color":"#8c51d9","id":"190","kazakh":"Мультфильм","latin":"Múltfılm"}],"word_3_19":[{"background":"white","color":"#8c51d9","id":"191","kazakh":"Класс","latin":"Klas"},{"background":"white","color":"#8c51d9","id":"192","kazakh":"Холл","latin":"Hol"},{"background":"white","color":"#8c51d9","id":"193","kazakh":"Калий","latin":"Kalı"},{"background":"white","color":"#8c51d9","id":"194","kazakh":"Экономист","latin":"Ekonomıs"},{"background":"white","color":"#8c51d9","id":"195","kazakh":"Педагог","latin":"Pedagog"},{"background":"white","color":"#8c51d9","id":"196","kazakh":"Боулинг","latin":"Boýlıń"},{"background":"white","color":"#8c51d9","id":"197","kazakh":"Брифинг","latin":"Brıfıń"},{"background":"white","color":"#8c51d9","id":"198","kazakh":"Веб-сайт","latin":"Ýeb-saıt"},{"background":"white","color":"#8c51d9","id":"199","kazakh":"Филолог","latin":"Fılolog"},{"background":"white","color":"#8c51d9","id":"200","kazakh":"Рейтинг","latin":"Reıtıń"}]
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