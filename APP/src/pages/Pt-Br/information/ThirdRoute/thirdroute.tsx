import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';
import Button from '../../../../icons/button.png';
import Rules from '../../../../icons/rules.png';
import ProibidoUltrapassar from '../../../../icons/proibido_ultrapassar.png';
import Simples from '../../../../icons/simples_continuo.png';
import Duplo from '../../../../icons/duplo_continuo.png';
import Pontilhado from '../../../../icons/duplo_pontilhado.png';
import Parada from '../../../../icons/parada.png';
import Preferencia from '../../../../icons/preferencia.png';
import SentidoProibido from '../../../../icons/sentido_proibido.png';
import Sentido from '../../../../icons/sentido.png';
import SentidoVira from '../../../../icons/sentido_vira.png';
import SentidoFrente from '../../../../icons/sentido_frente.png';
import SentidoDuplo from '../../../../icons/sentido_duplo.png';
import ProibidoCarro from '../../../../icons/proibido_carro.png';
import ProibidoMoto from '../../../../icons/proibido_moto.png';
import Estacionamento from '../../../../icons/estacionamento.png';
import EstacionamentoProibido from '../../../../icons/estacionamento_proibido.png';
import EstacionamentoParada from '../../../../icons/estacionamento_parada.png';
import Alcool from '../../../../icons/alcool.png';
import Bebe from '../../../../icons/bebe_conforto.png';
import Cadeirinha from '../../../../icons/cadeirinha.png';
import Elevaçao from '../../../../icons/elevação.png';
import BikeCorreto from '../../../../icons/bike_correto.png';
import BikeErrado from '../../../../icons/bike_errado.png';
import Velocidade from '../../../../icons/R-19.png';
import Fiscalização from '../../../../icons/fiscalização.png';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

const imageWidth = Dimensions.get('window').width;

const ImageButton = ({ onPress, widthSize, heightSize, margintopSize }: { onPress: any, widthSize: any, heightSize: any, margintopSize: any }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: widthSize, height: heightSize, marginTop: margintopSize }}>
      <Image source={Button} style={{ width: '100%', height: '100%' }} />
    </TouchableOpacity>
  );
}

const FirstRoute = () => {

  const { selectSize } = useContext(SelectSizeContext);

  return (
    <View style={{ height: "85%" }}>
      <ScrollView
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{ flexGrow: 1 }}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ backgroundColor: '#ffc900', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
            <Image source={Rules} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'black' }}>PRINCIPAIS REGRAS DE SEGURANÇA VIÁRIA</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPAIS REGRAS DE CIRCULAÇÃO E CONDUTA</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O condutor estrangeiro, ao trafegar no Brasil, deve ficar atento às regras  de circulação e conduta estabelecidas para as vias, definidas pelo Código  de Trânsito Brasileiro. Elas precisam ser obedecidas integralmente.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Como exemplos, destacamos as regras de proibição e permissão de  ultrapassagens, regulamentação de proibições de estacionamento, os limites  de velocidades, a obrigatoriedade do uso do cinto de segurança por todos os  ocupantes do veículos, a proibição de ingestão de qualquer quantidade de  bebidas alcoólicas, entre outras. </Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPAIS REGRAS DE ULTRAPASSAGEM</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O condutor não poderá ultrapassar veículos em vias com duplo sentido de  direção e pista única, nos trechos em curvas e em aclives sem visibilidade suficiente, nas passagens de nível, nas pontes e viadutos e nas travessias de  pedestres, exceto quando houver sinalização permitindo a ultrapassagem.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» No Brasil há quatro sinais de regulamentação que proíbem a ultrapassagem:</Text>
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.4 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ProibidoUltrapassar} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.75 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth, justifyContent: 'center', alignItems: 'center' }}>A existência da placa R-7 (proibido ultrapassar) caracteriza que a visibilidade não é suficiente para realizar a ultrapassagem.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0.001 * imageWidth }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={Simples} style={{ width: 0.2 * imageWidth, height: 0.2 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.7 * selectSize, width: 0.7 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth }}>A Linha Simples Contínua (proibido ultrapassar) divide fluxos opostos de circulação, delimitando o espaço disponível para cada sentido e regulamentando os trechos em que a ultrapassagem e os deslocamentos laterais são proibidos para os dois sentidos.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0.001 * imageWidth }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={Duplo} style={{ width: 0.2 * imageWidth, height: 0.2 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.7 * selectSize, width: 0.7 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth }}>A Linha Dupla Contínua (proibido ultrapassar) divide fluxos opostos de circulação, delimitando o espaço disponível para cada sentido e regulamentando os trechos em que a ultrapassagem e os deslocamentos laterais são proibidos para os dois sentidos.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0.001 * imageWidth }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={Pontilhado} style={{ width: 0.2 * imageWidth, height: 0.2 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.7 * selectSize, width: 0.7 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth }}>A Linha Contínua / Seccionada divide fluxos opostos de circulação, delimitando o espaço disponível para cada sentido e regulamentando os trechos em que a ultrapassagem, a transposição e deslocamento lateral são proibidos para veículos que trafegam na pista junto a linha continua (veículos que se deslocam na pista à esquerda da imagem) ou permitidos para os veículos que trafegam na pista junto à linha seccionada (veículos que se deslocam à direita da imagem).</Text>
            </View>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'center', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '700' }}>Nota</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Por costume, muitos condutores utilizam sinais para chamar a atenção para algumas situações  em seu percurso que não são regulamentadas pela legislação de trânsito brasileira. Por poderem criar confusão na sua interpretação, é importante destacá-las neste Guia, exemplo:</Text>
              <Text style={{ marginTop: 0.05 * imageWidth, marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, fontSize: 0.9 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '100' }}>A sinalização de ultrapassagem de veículos em rodovias. Muitos condutores,  principalmente de caminhões, têm o costume de sinalizar ao condutor do  veículo que está atrás a possibilidade de que este possa ou não o ultrapassá-lo.  No Brasil, comumente, o uso da lanterna indicadora de direção direita (seta/pisca direito)  indica que o veículo de trás pode ultrapassar o veículo da frente pela esquerda, enquanto o  uso da lanterna indicadora de direção esquerda (seta/pisca esquerdo) indica que o veículo  de trás não deve ultrapassar o veículo da frente pois há outro veículo no sentido contrário.</Text>
            </View>
            <View style={{ backgroundColor: 'white', marginTop: 0.03 * imageWidth, padding: 7, borderColor: 'red', borderWidth: 1 }}>
              <Text style={{ fontSize: selectSize, color: 'red', fontWeight: '700', textAlign: 'center' }}>ATENÇÃO!</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.005 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Muito cuidado no uso e na interpretação desse tipo de sinalização. Só faça a ultrapassagem se a sinalização horizontal permitir e tiver certeza de que há segurança para tal manobra.</Text>
              <Text style={{ fontSize: selectSize, color: 'red', fontWeight: '700', marginTop: 0.005 * imageWidth, textAlign: 'center' }}>NA DÚVIDA, NÃO ULTRAPASSE!</Text>
            </View>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Outro exemplo, no ambiente urbano, é o uso da lanterna de emergência (pisca-alerta) para indicar ao motorista de trás que o veículo irá parar, especialmente quando na aproximação de uma faixa  de pedestre. Balançar o braço esquerdo para cima e para baixo, para fora da janela do veículo também é um sinal muitas vezes utilizado para chamar atenção do motorista de trás para essa situação, evitando a ocorrência de colisões traseiras.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPAIS REGRAS SOBRE LIMITES DE VELOCIDADES</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» A velocidade máxima permitida para a via será indicada por meio de sinalização, obedecidas suas características técnicas e as condições de trânsito.</Text>
              <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                  <Image source={Velocidade} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>PLACA R-19</Text>
                </View>
                <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Regulamenta o limite máximo de velocidade em que todos os tipos de veículos podem circular na pista ou faixa, válido a partir do ponto onde o sinal é colocado. A velocidade indicada vale a partir do local onde estiver colocada a placa, até onde houver outra que a modifique.</Text>
              </View>
              <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
              <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.82 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                  <Image source={Fiscalização} style={{ width: 0.25 * imageWidth, height: 0.63 * imageWidth }} />
                </View>
                <View>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Placa de Velocidade Regulamentada por Tipos de Veículos sendo:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}><Text style={{ fontWeight: '700' }}>Veículos Leves: </Text>Veículos de todas as espécies com Peso Bruto Total até 3.500 kg.</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}><Text style={{ fontWeight: '700' }}>Veículos Pesados: </Text>Veículos de todas as espécies com Peso Bruto Total acima de 3.500 kg e os veículos leves tracionando reboque ou semirreboques.</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
              <View style={{ backgroundColor: 'white', width: imageWidth, height: 1.85 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.25 * imageWidth, textAlign: 'center', color: 'black' }}>LOCAL NÃO SINALIZADO COM PLACA DE REGULAMENTAÇÃO DE LIMITE DE VELOCIDADE</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginBottom: 0.05 * imageWidth }}>Onde não existir sinalização regulamentadora (Placa R-19), a velocidade máxima será de:</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>I - nas vias urbanas:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>a) 80 km/h, nas vias de trânsito rápido;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>b) 60 km/h, nas vias arteriais;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>c) 40 km/h, nas vias coletoras;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>d) 30 km/h, nas vias locais.</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.05 * imageWidth }}>II - nas vias rurais:</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>a) nas rodovias de pista dupla:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>a.1. 110 km/h para automóveis, camionetas, caminhonetes e motocicletas;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>a.2. 90 km/h para os demais veículos;</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>b) nas rodovias de pista simples:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>b.1. 100 km/h para automóveis, camionetas, caminhonetes e motocicletas;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>b.2. 90 km/h para os demais veículos;</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>c) nas estradas (via rural não pavimentada):<Text style={{ fontWeight: '400' }}> 60 km/h.</Text></Text>
                </View>
              </View>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPAIS REGRAS DE CIRCULAÇÃO</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>O trânsito de veículos nas vias terrestres abertas à circulação obedecerá às  seguintes normas:</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>I - a circulação far-se-á pelo lado direito da via, admitindo-se as exceções devidamente sinalizadas;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>II - o condutor deverá guardar distância de segurança lateral e frontal entre o seu e os demais veículos;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>III - quando veículos, transitando por fluxos que se cruzem, se aproximarem  de local não sinalizado, terá preferência de passagem:</Text>
              <Text style={{ marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) no caso de apenas um fluxo ser proveniente de rodovia, aquele  que estiver circulando por ela;</Text>
              <Text style={{ marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) no caso de rotatória, aquele que estiver circulando por ela;</Text>
              <Text style={{ marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) nos demais casos, o que vier pela direita do condutor;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>IV - quando uma pista de rolamento comportar várias faixas de circulação no mesmo sentido, são as da direita destinadas ao deslocamento dos veículos mais lentos e de maior porte;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>V - o trânsito de veículos sobre passeios, calçadas e nos acostamentos, só poderá ocorrer para que se adentre ou se saia dos imóveis ou áreas especiais de estacionamento;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>VI - os veículos precedidos de batedores terão prioridade de passagem;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>VII - os veículos que se deslocam sobre trilhos terão preferência de passagem sobre os demais;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>VIII - respeitadas as normas de circulação e conduta estabelecidas, em ordem decrescente, os veículos de maior porte serão sempre responsáveis pela segurança dos menores, os motorizados pelos não motorizados e, juntos, pela incolumidade dos pedestres.</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Parada} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Parada Obrigatória</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor que deve parar seu veículo antes de entrar ou cruzar a via/pista.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Preferencia} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Dê a Preferência</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor a obrigatoriedade de dar preferência de passagem ao veículo que circula na via em que vai entrar ou cruzar, devendo para tanto reduzir a velocidade ou parar seu veículo, se necessário.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoProibido} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Sentido Proibido</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor a proibição de seguir em frente ou entrar na pista ou área restringida pelo sinal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Sentido} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Sentido de Circulação da Via ou Pista</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor que a via/pista sinalizada tem sentido único de circulação.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoVira} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Siga em Frente ou à Esquerda</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor do veículo que os movimentos de circulação permitidos são somente os indicados.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoFrente} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Siga em Frente</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor do veículo a obrigatoriedade de realizar o movimento indicado.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoDuplo} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Duplo Sentido de Circulação</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor do veículo que a via de sentido único de circulação passa a ser de sentido duplo, após o ponto em que o sinal estiver colocado.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={ProibidoCarro} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Proibido Trânsito de Veículos</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor de qualquer veículo automotor a proibição de transitar, a partir do ponto sinalizado, na área ou via/pista ou faixa.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={ProibidoMoto} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Proibido Trânsito de Motocicletas</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Assinala ao condutor de motocicletas, motonetas e ciclomotores a proibição de transitar a partir do ponto sinalizado na área, via/pista ou faixa.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPAIS REGRAS DE PARADA E ESTACIONAMENTO</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Quando proibido o estacionamento na via, a parada deverá restringir-se ao tempo indispensável para embarque ou desembarque de passageiros, desde que não interrompa ou perturbe o fluxo de veículos ou a locomoção de pedestres.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Nas paradas, operações de carga ou descarga e nos estacionamentos, o veículo deverá ser posicionado no sentido do fluxo, paralelo ao bordo da pista de rolamento e junto à guia da calçada (meio-fio), admitidas as exceções devidamente sinalizadas.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Nas vias providas de acostamento, os veículos parados, estacionados ou em operação de carga ou descarga deverão estar situados fora da pista de rolamento.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O estacionamento dos veículos motorizados de duas rodas será feito em posição perpendicular à guia da calçada (meio-fio) e junto a ela, salvo quando houver sinalização que determine outra condição.</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Estacionamento} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Estacionamento Regulamentado</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.6 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.03 * imageWidth }}>Assinala ao condutor que é permitido o estacionamento de veículos. A placa tem validade ao longo da face de quadra ou do trecho de via sinalizado, antes e após a placa que contém o sinal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={EstacionamentoProibido} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Proibido Estacionar</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.6 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.03 * imageWidth }}>Assinala ao condutor que é proibido o estacionamento de veículos. A placa tem validade ao longo da face de quadra ou do trecho sinalizado, antes e após a placa que contém o sinal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={EstacionamentoParada} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Proibido parar e Estacionar</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.6 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.03 * imageWidth }}>Assinala ao condutor que é proibido a parada e estacionamento de veículos. A placa tem validade ao longo da face de quadra ou do trecho sinalizado, antes e após a placa que contém o sinal.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>CONDUÇÃO SOB INFLUÊNCIA DE ÁLCOOL OU OUTRAS DROGAS</Text>
              <Image source={Alcool} style={{ width: 0.9 * imageWidth, height: 0.6 * imageWidth, marginTop: 0.1 * imageWidth }} />
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O Brasil, diferente de outros países, adota o que se convencionou chamar de Lei Seca, que proíbe a condução de veículo em via pública com qualquer teor de álcool ou outra droga no organismo, que caracteriza infração de trânsito gravíssima.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Podendo em determinadas circunstâncias ser, também, considerada infração penal (crime), nos casos em que o condutor conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa que determine dependência, na forma regulamentada pela Resolução Contran nº 432/2013.</Text>
              <ImageButton onPress={() => { Linking.openURL('https://www.gov.br/prf/pt-br/concurso-2021/resolucoes/R432-13') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
            </View>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>O descumprimento de qualquer regra de circulação e conduta caracteriza infração de trânsito que, além de colocar em risco a segurança de todos, é passível da aplicação da penalidade de multa.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DISPOSITIVOS DE RETENÇÃO PARA O TRANSPORTE DE CRIANÇAS</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Considerando que os Dispositivos de Retenção para o Transporte de Criança-DRC não são considerados equipamento obrigatório do veículo, e seu uso é regra de circulação e segurança viária, será exigido para os ocupantes conforme estabelecido na Resolução CONTRAN nº 819/2021, no que couber, em modelo próprio de cada país.</Text>
              <ImageButton onPress={() => { Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao8192021.pdf') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O transporte de crianças com idade inferior a dez anos e que não tenham atingido 1,45m de altura deverá observar o disposto na Resolução CONTRAN nº 819/2021;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» São considerados dispositivos de retenção para o transporte de crianças o bebê conforto/conversível; a cadeirinha; o assento de elevação e o cinto de segurança adequados à idade, peso e altura da criança;</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={Bebe} style={{ width: 0.32 * imageWidth, height: 0.32 * imageWidth, marginTop: 0.1 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.6 * selectSize, width: 0.33 * imageWidth, textAlign: 'center', color: 'black' }}>a) Bebê Conforto (crianças até 1 ano)</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={Cadeirinha} style={{ width: 0.32 * imageWidth, height: 0.32 * imageWidth, marginTop: 0.1 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.6 * selectSize, width: 0.33 * imageWidth, textAlign: 'center', color: 'black' }}>b) Cadeirinha (crianças entre 1 ano e 4 anos)</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={Elevaçao} style={{ width: 0.32 * imageWidth, height: 0.32 * imageWidth, marginTop: 0.1 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.6 * selectSize, width: 0.33 * imageWidth, textAlign: 'center', color: 'black' }}>c) Assento de Elevação (crianças entre 4 anos e 7,5 anos)</Text>
                </View>
              </View>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>TRANSPORTE DE CARGAS E BICICLETAS NAS PARTES EXTERNAS DE VEÍCULOS</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O transporte de cargas ou bicicletas nas partes externas do veículo da espécie automóveis, camionetas, caminhonetes e utilitários deve observar o disposto na Resolução CONTRAN nº 955/2022, no que couber.</Text>
              <ImageButton onPress={() => { Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9552022.pdf') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Em linhas gerais, as cargas transportadas acondicionadas em bagageiros sobre o teto do veículo, não poderão ultrapassar a altura de 50 centímetros nem exceder a largura ou o comprimento do veículo.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» As bicicletas transportadas na parte externa traseira dos veículos, não podem exceder a sua largura e não devem impedir a visualização dos dispositivos luminosos do sistema de sinalização traseiro nem da placa de identificação.</Text>
              <View style={{ alignItems: 'center' }}>
                <Image source={BikeCorreto} style={{ width: 0.8 * imageWidth, height: 0.50 * imageWidth, marginTop: 0.1 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.8 * imageWidth, textAlign: 'center', color: 'black' }}>Transporte Correto</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={BikeErrado} style={{ width: 0.8 * imageWidth, height: 0.5 * imageWidth, marginTop: 0.1 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.8 * imageWidth, textAlign: 'center', color: 'black' }}>Transporte Incorreto</Text>
              </View>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>TRANSPORTE COM EXCESSO DE LOTAÇÃO E DE PESSOAS EM COMPARTIMENTO DE CARGA DE VEÍCULO</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» No Brasil, o número de pessoas transportadas no veículo fica limitado à sua capacidade de assentos destinados a esse fim. Também, o transporte de pessoas no compartimento de cargas do veículo é proibido por representar risco iminente à vida do passageiro. Para fins de fiscalização, considera-se como compartimento de carga, a carroceria (caçamba) das caminhonetes e o bagageiro nos veículos de transporte de passageiros. Neste sentido, o número de pessoas transportadas deve ser compatível com a capacidade nominal do veículo e o número apropriado de assentos.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FirstRoute;