import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import AcceptCar from '../../../../icons/accept-car.png';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

const imageWidth = Dimensions.get('window').width;

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
          <View style={{ backgroundColor: '#0059aa', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
            <Image source={AcceptCar} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>CONDICIONES DEL VEHÍCULO</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PLACA DE IDENTIFICACIÓN</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Los vehículos matriculados en los Estados Partes del Mercosur deberán estar identificados mediante placas delanteras y traseras, fabricadas en materiales metálicos con tratamiento antioxidante, siguiendo modelo propio de cada país, fijadas en el vehículo;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Los vehículos registrados en Guyana y en Surinam, Estados Asociados al Mercosur, podrán tener sus placas/matrículas pintadas sobre una superficie plana del vehículo, desde que sean legibles;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Vehículos con origen en Colombia, Ecuador y Venezuela podrán circular aunque sólo tengan la placa trasera;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) Las motocicletas están exentas de utilizar placa frontal.</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>EQUIPO OBLIGATORIO GENERAL</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Los vehículos provenientes de países miembros del Mercosur u otros países vecinos, que pretendan circular en territorio brasileño, deberán contar con el equipamiento obligatorio detallado en la pestaña "Equipo".</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>SISTEMA DE ILUMINAÇÃO E SINALIZAÇÃO</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Vehículos provenientes de países miembros del Mercosur, que deseencircular en territorio brasileño, deben estar en buen estado.uso y funcionamiento, los dispositivos activos del sistema de iluminación ySeñalización relacionada en la pestaña "Equipo".</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FirstRoute;