import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View, TouchableOpacity, Linking } from 'react-native';
import { Image } from 'expo-image';
import Button from '../../../../icons/buttonEs.png';
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
};

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
            <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'black' }}>PRINCIPALES REGLAS DE SEGURIDAD VIAL</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPALES REGLAS DE CIRCULACIÓN Y CONDUCTA</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Los conductores extranjeros, cuando viajen en territorio brasileño, deben prestar atención a las normas de circulación y conducta establecidas para las carreteras, definidas por el Código de Tránsito brasileño, las cuales deben ser obedecidas plenamente.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Como ejemplos, destacamos las normas que prohíben y permiten adelantar, que regulan las prohibiciones de estacionamiento, los límites de velocidad, el uso obligatorio del cinturón de seguridad por parte de todos los ocupantes del vehículo, la prohibición de consumir cualquier cantidad de bebida alcohólica, entre otras. </Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPALES REGLAS DE ADELANTAMIENTO</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» El conductor no podrá adelantar vehículos en vías con doble sentido de dirección y pista única, en los tramos en curva ni en subidas sin visibilidad suficiente, en los pasos a nivel, en los puentes y viaductos, ni en los cruces peatonales, excepto cuando haya señalización permitiendo hacerlo.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» En Brasil hay cuatro señales reglamentarias que prohíben adelantamiento:</Text>
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.4 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={ProibidoUltrapassar} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.75 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth, justifyContent: 'center', alignItems: 'center' }}>La existencia de la señal R-7 (prohibido adelantar) implica que no hay visibilidad suficiente para adelantar.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0.001 * imageWidth }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={Simples} style={{ width: 0.2 * imageWidth, height: 0.2 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.7 * selectSize, width: 0.7 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth }}>La Línea Continua Simple (prohibido adelantar) divide los flujos de circulación opuestos, delimitando el espacio disponible para cada sentido y regulando los tramos en los que están prohibidos los adelantamientos y movimientos laterales en ambos sentidos.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0.001 * imageWidth }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={Duplo} style={{ width: 0.2 * imageWidth, height: 0.2 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.7 * selectSize, width: 0.7 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth }}>La Doble Línea Continua (prohibido adelantar) divide los flujos de circulación opuestos, delimitando el espacio disponible para cada sentido y regulando los tramos en los que están prohibidos los adelantamientos y movimientos laterales en ambos sentidos.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0.001 * imageWidth }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={Pontilhado} style={{ width: 0.2 * imageWidth, height: 0.2 * imageWidth }} />
              <Text style={{ fontWeight: '600', fontSize: 0.7 * selectSize, width: 0.7 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.02 * imageWidth }}>La Línea Continua/Seccionada divide los flujos de circulación opuestos, delimitando el espacio disponible para cada sentido y regulando los tramos en los que están prohibidos los adelantamientos, la transposición y la lateralidad a los vehículos que circulan por la vía junto a la línea continua (vehículos que circulan en el carril a la izquierda de la imagen) o permitido para los vehículos que circulan por el carril contiguo a la línea seccionada (vehículos que circulan por la derecha de la imagen).</Text>
            </View>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'center', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '700' }}>Nota</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Por costumbre, muchos conductores utilizan señas para llamar la atención sobre algunas situaciones en su ruta que no están reguladas por la legislación de tránsito brasileña. Ya que pueden crear confusión en su interpretación, es importante resaltarlos en esta Guía:</Text>
              <Text style={{ marginTop: 0.05 * imageWidth, marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, fontSize: 0.9 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '100' }}>Un ejemplo de ello es la señalización de adelantamientos de vehículos en las autopistas. Muchos conductores, especialmente los camioneros, tienen la costumbre de señalar al conductor del vehículo que les sigue la posibilidad de que pueda adelantarlos o no.En Brasil, comúnmente, el uso del indicador de dirección derecho (direccional derecha/intermitente) significa que el vehículo de atrás puede adelantar por la izquierda, mientras que el uso del indicador de dirección izquierdo (direccional izquierda/intermitente) significa que el vehículo que va detrás no debe adelantar porque hay otro muy cerca en sentido contrario.</Text>
            </View>
            <View style={{ backgroundColor: 'white', marginTop: 0.03 * imageWidth, padding: 7, borderColor: 'red', borderWidth: 1 }}>
              <Text style={{ fontSize: selectSize, color: 'red', fontWeight: '700', textAlign: 'center' }}>ATENCIÓN!</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.005 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Mucho cuidado al utilizar e interpretar este tipo de señas. Sólo adelanta si las señales de tráfico lo permiten y es completamente seguro hacerlo.</Text>
              <Text style={{ fontSize: selectSize, color: 'red', fontWeight: '700', marginTop: 0.005 * imageWidth, textAlign: 'center' }}>EN CASO DE DUDA, ¡NO ADELANTE!</Text>
            </View>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Otro ejemplo, en el entorno urbano, es el uso de las luces de emergencia (intermitentes rojas) para indicar al conductor que va detrás que el vehículo se detendrá, especialmente al acercarse a un paso de peatones. Balancear el brazo izquierdo hacia arriba y hacia abajo, fuera de la ventanilla del vehículo, también es una señal que se utiliza a menudo para llamar la atención del conductor que está atrás sobre esta situación, evitando que se produzcan colisiones traseras.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPALES REGLAS SOBRE LÍMITES DE VELOCIDAD</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» La velocidad máxima permitida será indicada por medio de señalización, obedeciendo a características técnicas y a condiciones de tránsito.</Text>
              <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                  <Image source={Velocidade} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>PLACA R-19</Text>
                </View>
                <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Regula el límite máximo de velocidad a la que pueden circular todo tipo de vehículos por la vía o carril, vigente desde el punto donde se coloca la señal. La velocidad indicada se aplica desde el lugar donde se coloca la señal, hasta donde hay otra que la modifica.</Text>
              </View>
              <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
              <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.82 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                  <Image source={Fiscalização} style={{ width: 0.25 * imageWidth, height: 0.63 * imageWidth }} />
                </View>
                <View>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Placa de Velocidad Regulada por Tipos de Vehículos en que:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}><Text style={{ fontWeight: '700' }}>Vehículos Ligeros: </Text>Vehículos de todo tipo con un Peso Bruto Total de hasta 3.500 kg.</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}><Text style={{ fontWeight: '700' }}>Vehículos pesados: </Text>Vehículos de todo tipo con un Peso Bruto Total superior a 3.500 kg y vehículos ligeros que arrastren remolques o semirremolques.</Text>
                </View>
              </View>
              <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
              <View style={{ backgroundColor: 'white', width: imageWidth, height: 1.85 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.25 * imageWidth, textAlign: 'center', color: 'black' }}>UBICACIÓN NO MARCADA CON SEÑAL DE LÍMITE DE VELOCIDAD REGULADA</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginBottom: 0.05 * imageWidth }}>Cuando no exista señalización reglamentaria (Placa R-19), la velocidad máxima será:</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>I - en vías urbanas:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>a) 80 km/h, en vías de tránsito rápido:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>b) 60 km/h, en vías arteriales;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>c) 40 km/h, en vías colectoras;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>d) 30 km/h, en vías locales.</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.05 * imageWidth }}>II - en caminos rurales:</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>a) en carreteras de doble carril:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>a.1. 110 km/h para turismos, camiones, camionetas y motocicletas;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>a.2. 90 km/h para otros vehículos;</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>b) en carreteras de un solo carril:</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>b.1. 100 km/h para turismos, camiones, camionetas y motocicletas;</Text>
                  <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.02 * imageWidth }}>b.2. 90 km/h para otros vehículos;</Text>
                  <Text style={{ fontWeight: '700', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black', marginTop: 0.03 * imageWidth }}>c) en ‘estrada’ (camino rural sin asfaltar):<Text style={{ fontWeight: '400' }}> 60 km/h.</Text></Text>
                </View>
              </View>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PRINCIPALES REGLAS DE CIRCULACIÓN</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>La circulación de vehículos por vías terrestres abiertas al tráfico se ajustará a las siguientes normas:</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>I - la circulación será por el lado derecho de la vía, permitiéndose excepciones debidamente señalizadas;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>II - el conductor debe mantener una distancia de seguridad lateral y frontal entre su vehículo y los demás;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>III - cuando los vehículos, circulando por flujos que se cruzan, se acerquen a un lugar no señalizado, tendrán prioridad de paso:</Text>
              <Text style={{ marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) en el caso de un solo flujo procedente de una carretera, el que circula por ella;</Text>
              <Text style={{ marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) en el caso de una rotonda, la persona que transita por ella;</Text>
              <Text style={{ marginLeft: 0.1 * imageWidth, textAlign: 'justify', width: 0.83 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) en los demás casos, el que venga por la derecha del conductor;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>IV - cuando una vía tiene varios carriles en el mismo sentido, los del lado derecho están destinados a la circulación de vehículos más lentos y de mayor tamaño;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>V - el tránsito de vehículos por aceras, andenes y arcenes sólo podrá ocurrir para ingresar o salir de propiedades aledañas o áreas especiales de estacionamiento;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>VI - los vehículos precedidos de escoltas oficiales tendrán prioridad de paso;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>VII - los vehículos que circulen sobre rieles tendrán prioridad sobre los demás;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>VIII - respetando las reglas de circulación y conducta establecidas, en orden descendente, los vehículos de mayor tamaño serán siempre responsables de la seguridad de los menores, los vehículos motorizados de los vehículos no motorizados y, en conjunto, de la seguridad de los peatones.</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Parada} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Parada Obligatoria</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Indica al conductor que detenga su vehículo antes de entrar o cruzar la calle/carril.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Preferencia} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Ceda el paso</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Informa al conductor de la obligación de ceder el paso al vehículo que circula por la vía por la que ingresa o cruza, debiendo para ello reducir la velocidad o detener su vehículo, si fuera necesario.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoProibido} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Sentido Prohibido</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Indica al conductor que tiene prohibido avanzar o entrar en el carril o zona restringida por la señal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Sentido} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Sentido de Circulación de la Via o Carril</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Indica al conductor que la carretera/carril marcado tiene sentido de circulación única.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoVira} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Siga Adelante o a la izquierda</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Informa al conductor del vehículo que los movimientos de circulación permitidos son únicamente los indicados.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoFrente} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Siga adelante</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Indica al conductor del vehículo la obligación de realizar el movimiento indicado.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={SentidoDuplo} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Doble dirección de circulación</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Indica al conductor del vehículo que el carril de circulación de un solo sentido pasa a ser de doble sentido, después del punto donde se coloca la señal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={ProibidoCarro} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Prohibido el Tránsito de Vehículos</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Indica al conductor de cualquier vehículo a motor la prohibición de circular, desde el punto marcado, por la zona o vía/pista o carril.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={ProibidoMoto} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Prohibido el Tránsito de Motocicletas</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.65 * imageWidth, textAlign: 'justify', color: 'black' }}>Instruye al conductor de motocicletas, scooters y ciclomotores que tiene prohibido circular desde el punto señalizado, por la zona, vía/pista o carril.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>REGLAS PRINCIPALES PARA DETENERSE Y ESTACIONAR</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Cuando esté prohibido estacionar en la vía, la parada deberá limitarse al tiempo necesario para el embarque o desembarque de pasajeros, siempre que no interrumpa o perturbe el flujo de vehículos o el movimiento de peatones.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» En las paradas, operaciones de carga o descarga y en los estacionamientos, el vehículo deberá posicionarse en el sentido de la circulación, paralelo al borde de la calzada y junto a la guía de la acera (bordillo), permitiéndose excepciones debidamente señalizadas.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» En las vías dotadas de arcenes, los vehículos detenidos, estacionados o en carga o descarga deberán ubicarse fuera de la calzada.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» El estacionamiento de vehículos de motor de dos ruedas se realizará en posición perpendicular a la guía de la acera (bordillo) y junto a ella, salvo que exista señalización que determine otra condición.</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={Estacionamento} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Estacionamento Reglamentado</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.6 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.03 * imageWidth }}>Informa al conductor que está permitido el estacionamiento de vehículos. La señal es válida a lo largo del costado de la cuadra o del tramo marcado de la vía, antes y después de la señal que contiene la señal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={EstacionamentoProibido} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Prohibido Estacionar</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.6 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.03 * imageWidth }}>Informa al conductor que está prohibido estacionar vehículos. La señal es válida a lo largo del frente de la cancha o tramo señalizado, antes y después de la señal que contiene la señal.</Text>
            </View>
            <View style={{ backgroundColor: 'black', height: 1, width: 0.8 * imageWidth, marginTop: 0 }} />
            <View style={{ backgroundColor: 'white', width: imageWidth, height: 0.6 * imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 0.3 * imageWidth }}>
                <Image source={EstacionamentoParada} style={{ width: 0.25 * imageWidth, height: 0.25 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.9 * selectSize, width: 0.3 * imageWidth, textAlign: 'center', color: 'black' }}>Prohibido parar o Estacionar</Text>
              </View>
              <Text style={{ fontWeight: '400', fontSize: 0.9 * selectSize, width: 0.6 * imageWidth, textAlign: 'justify', color: 'black', marginLeft: 0.03 * imageWidth }}>Informar al conductor que está prohibido detenerse y estacionar vehículos. La señal es válida a lo largo del frente de la cuadra o tramo señalizado, antes y después de la placa que contiene la señal.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>CONDUCCIÓN BAJO LA INFLUENCIA DE ALCOHOL O OTRAS DROGAS</Text>
              <Image source={Alcool} style={{ width: 0.9 * imageWidth, height: 0.6 * imageWidth, marginTop: 0.1 * imageWidth }} />
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Brasil, a diferencia de otros países, adopta la conocida Ley Seca, que prohíbe conducir un vehículo en la vía pública con cualquier nivel de alcohol u otras drogas en el cuerpo, lo que caracteriza una infracción de tránsito muy grave.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» En determinadas circunstancias, también podrá considerarse una infracción penal (delito), en los casos en que el conductor conduzca un vehículo de motor con capacidad psicomotriz alterada debido a la influencia del alcohol u otra sustancia psicoactiva que determine dependencia, según lo regula la Resolução Contran nº 432/2013.</Text>
              <ImageButton onPress={() => { Linking.openURL('https://www.gov.br/prf/pt-br/concurso-2021/resolucoes/R432-13') }} widthSize={selectSize * imageWidth * 0.023} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
            </View>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>El incumplimiento de cualquier norma de circulación y conducta constituye una infracción de circulación que, además de poner en riesgo la seguridad de todos, se sujeta a multa.</Text>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DISPOSITIVOS DE RETENCIÓN PARA EL TRANSPORTE DE NIÑOS</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Considerando que los Dispositivos de Retención Infantil para el Transporte - DRC no se consideran elemento vehicular obligatorio, pero su uso es una norma de circulación y seguridad vial, serán exigibles a los ocupantes, según lo establecido en la Resolución CONTRAN N° 819/2021, en el modelo propio de cada país.</Text>
              <ImageButton onPress={() => { Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao8192021.pdf') }} widthSize={selectSize * imageWidth * 0.023} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» El transporte de niños menores de diez años y que no hayan alcanzado la altura de 1,45 m, deberá cumplir con lo establecido en la Resolución CONTRAN N° 819/2021;</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Los dispositivos de retención para el transporte de niños incluyen asientos, cojines, capazos para bebés/convertibles; el asiento del coche; el asiento elevado y el cinturón de seguridad adecuados a la edad, peso y altura del niño;</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={Bebe} style={{ width: 0.32 * imageWidth, height: 0.32 * imageWidth, marginTop: 0.1 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.6 * selectSize, width: 0.33 * imageWidth, textAlign: 'center', color: 'black' }}>a) Capazo de retención (Bebés hasta 1 año)</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={Cadeirinha} style={{ width: 0.32 * imageWidth, height: 0.32 * imageWidth, marginTop: 0.1 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.6 * selectSize, width: 0.33 * imageWidth, textAlign: 'center', color: 'black' }}>b) Cabestrillo de retención (niños entre 1 año y 4 años)</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={Elevaçao} style={{ width: 0.32 * imageWidth, height: 0.32 * imageWidth, marginTop: 0.1 * imageWidth }} />
                  <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.6 * selectSize, width: 0.33 * imageWidth, textAlign: 'center', color: 'black' }}>c) Asiento elevador (niños entre 4 años y 7,5 años)</Text>
                </View>
              </View>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>TRANSPORTE DE CARGA Y BICICLETAS EN LAS PARTES EXTERNAS DE LOS VEHÍCULOS</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» El transporte de carga o bicicletas en las partes externas de vehículos, como automóviles, camiones, camionetas y utilitarios, deberá cumplir con lo establecido en la Resolución CONTRAN N° 955/2022, según corresponda.</Text>
              <ImageButton onPress={() => { Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9552022.pdf') }} widthSize={selectSize * imageWidth * 0.023} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» En carácter general, las cargas transportadas en portaequipajes sobre el techo del vehículo no pueden exceder una altura de 50 centímetros ni tampoco superar el ancho o el largo del vehículo.</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Las bicicletas transportadas en la parte trasera exterior de los vehículos no deberán exceder su ancho y no deberán obstruir la visión de los dispositivos de iluminación del sistema de señalización trasera o de la placa de identificación.</Text>
              <View style={{ alignItems: 'center' }}>
                <Image source={BikeCorreto} style={{ width: 0.8 * imageWidth, height: 0.50 * imageWidth, marginTop: 0.1 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.8 * imageWidth, textAlign: 'center', color: 'black' }}>Transporte Adecuado</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Image source={BikeErrado} style={{ width: 0.8 * imageWidth, height: 0.5 * imageWidth, marginTop: 0.1 * imageWidth }} />
                <Text style={{ marginTop: 0.03 * imageWidth, fontWeight: '600', fontSize: 0.8 * selectSize, width: 0.8 * imageWidth, textAlign: 'center', color: 'black' }}>Transporte Incorreto</Text>
              </View>
            </View>
            <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
              <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>TRANSPORTE CON CAPACIDAD EXCESIVA Y PERSONAS EN COMPARTIMIENTOS DE CARGA DEL VEHÍCULO</Text>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>»  En Brasil, el número de personas transportadas en el vehículo está limitado a la capacidad de asientos destinada a tal fin. Asimismo, está prohibido transportar personas en el compartimento de carga del vehículo ya que representa un riesgo inminente para la vida del pasajero. A efectos de inspección, se considera compartimento de carga: la carrocería (baúl) de las camionetas pickup y el maletero de los vehículos de transporte de pasajeros. Así, el número de personas transportadas debe ser compatible con la capacidad nominal del vehículo y el número adecuado de plazas.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FirstRoute;