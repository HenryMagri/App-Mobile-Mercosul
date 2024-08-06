import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../Size/SelectSizeContext';

import Inicio1PDF from './Mosaic/inicio1.png'
import Inicio2PDF from './Mosaic/inicio2.png'

const imageWidth = Dimensions.get('window').width;

export default function Landing() {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "87%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={Inicio1PDF} style={{ width: imageWidth, height: imageWidth }} />
                    <Image source={Inicio2PDF} style={{ width: imageWidth, height: imageWidth * 0.4129 }} />
                </View>
                <View style={{ width: imageWidth, alignItems: 'center', backgroundColor: "#00803b" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.15 * imageWidth, color: "#c9d22e" }}>APRESENTAÇÃO</Text>
                    <Text style={{ textAlign: 'justify', width: 0.9 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>Esta cartilha tem o objetivo orientar os condutores ou proprietários de veículos, residentes nos Estados Partes do Mercosul (Argentina, Paraguai, Uruguai e Venezuela) e Associados (Bolívia, Chile, Colômbia, Equador, Peru, Guiana e Suriname), que pretendam conduzi-los no território da República Federativa do Brasil, quanto às exigências mínimas para um trânsito sem contratempos e seguro.</Text>
                    <Text style={{ textAlign: 'justify', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5, marginBottom: 0.15 * imageWidth }}>Esta cartilha não contempla as exigências relativas à prestação de serviço remunerado internacional de cargas e passageiros.</Text>
                </View>
                <View style={{ width: imageWidth, alignItems: 'center', backgroundColor: "white" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth, color: "#c9d22e" }}>FICHA TÉCNICA</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>ORGANIZAÇÃO:</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", width: imageWidth * 0.95, marginTop: imageWidth * 0.05 }}>
                        <View style={{ marginLeft: imageWidth * 0.01, marginRight: imageWidth * 0.01 }}>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '800' }}>MRE</Text>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '600' }}>MINISTÉRIO DAS RELAÇÕES EXTERIORES</Text>
                        </View>
                        <View style={{ marginLeft: imageWidth * 0.01, marginRight: imageWidth * 0.01 }}>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '800' }}>SENATRAN</Text>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '600' }}>SECRETARIA NACIONAL DE TRÂNSITO</Text>
                        </View>
                        <View style={{ marginLeft: imageWidth * 0.01, marginRight: imageWidth * 0.01 }}>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '800' }}>MTUR</Text>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '600' }}>MINISTÉRIO DO TURISMO</Text>
                        </View>
                        <View style={{ marginLeft: imageWidth * 0.01, marginRight: imageWidth * 0.01 }}>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '800' }}>PRF</Text>
                            <Text style={{ textAlign: 'center', width: 0.22 * imageWidth, marginTop: 0.02 * imageWidth, fontSize: selectSize * 0.7, color: 'black', fontFamily: 'sans-serif', fontWeight: '600' }}>POLÍCIA RODOVIÁRIA FEDERAL</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>RESPONSÁVEL PELA ELABORAÇÃO:</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '800', lineHeight: selectSize * 1.5 }}>CGSV/DIOP/PRF</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>COORDENAÇÃO-GERAL DE SEGURANÇA VIÁRIA</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>DIAGRAMAÇÃO:</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '800', lineHeight: selectSize * 1.5 }}>CCOM/PRF</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5, marginBottom: 0.2 * imageWidth }}>COORDENAÇÃO DE COMUNICAÇÃO INSTITUCIONAL</Text>
                </View>
            </ScrollView>
        </View>
    );
}