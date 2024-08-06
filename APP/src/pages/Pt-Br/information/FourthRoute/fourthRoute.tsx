import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Condutor from '../../../../icons/condutor.png';

const imageWidth = Dimensions.get('window').width;

const FourthRoute = () => {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "85%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#ff8500', width: imageWidth, height: 0.32 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={Condutor} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>CONDUTOR BRASILEIRO RESIDENTE E HABILITADO NOS ESTADOS PARTES E ASSOCIADOS DO MERCOSUL</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O condutor brasileiro residente e habilitado no exterior, para ter reconhecida a habilitação estrangeira no Brasil, deverá comprovar, por meio de apresentação de certidão ou declaração consular, que residia no país de origem do documento, pelo menos, 6 meses antes da respectiva emissão da habilitação.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Cumprido este requisito, ao ser fiscalizado dirigindo, deverá também comprovar que sua última entrada no território nacional foi a menos de 180 dias.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Por fim, deverá apresentar a habilitação estrangeira, dentro do prazo de validade, compatível com o veículo conduzido e acompanhada do documento de identificação emitido pelo país de origem da habilitação.</Text>
                        <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
                            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Não será reconhecida a habilitação estrangeira do condutor brasileiro que possuir, pendente de cumprimento no Brasil, penalidade de suspensão do direito de dirigir ou cassação da Carteira Nacional de Habilitação.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FourthRoute;