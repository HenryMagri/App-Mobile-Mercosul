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
            <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>CONDIÇÕES DO VEÍCULO</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>PLACA DE IDENTIFICAÇÃO</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Os veículos matriculados nos Estados Partes do Mercosul deverão estar identificados por meio de placas dianteira e traseira, confeccionadas em materiais metálicos com tratamento antioxidante, no modelo próprio de cada país, afixadas ao veículo; </Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Os veículos matriculados na Guiana e no Suriname, Estados Associados ao Mercosul, poderão ter as placas pintadas sobre superfície plana no veículo, desde que legível;  </Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Os veículos oriundos da Colômbia, Equador e da Venezuela poderão circular portando apenas a placa traseira;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) As motocicletas são dispensadas do uso de placa dianteira. </Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>EQUIPAMENTOS OBRIGATÓRIOS GERAIS</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Os veículos oriundos dos países integrantes do Mercosul ou demais países limítrofes, que pretendam circular no território brasileiro deverão possuir em boas condições de uso e funcionamento os equipamentos listados na aba "Equipamentos".</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>SISTEMA DE ILUMINAÇÃO E SINALIZAÇÃO</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Os veículos oriundos dos países integrantes do Mercosul que pretendam circular no território brasileiro deverão possuir, em boas condições de uso e funcionamento, os dispositivos do sistema de iluminação e sinalização listados na aba "Equipamentos".</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FirstRoute;