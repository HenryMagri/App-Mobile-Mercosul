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
                <View style={{ width: imageWidth, alignItems: 'center', backgroundColor: "#0059aa" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.15 * imageWidth, color: "#c9d22e" }}>PRESENTACIÓN</Text>
                    <Text style={{ textAlign: 'justify', width: 0.9 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>Este folleto tiene como objetivo orientar a los conductores y/o propietarios de vehículos, residentes en los Estados Partes del Mercosur (Argentina, Paraguay, Uruguay y Venezuela) y Asociados (Bolivia, Chile, Colombia, Ecuador, Perú, Guyana y Surinam), que pretendan conducirlos en el territorio de la República Federativa de Brasil, sobre los requisitos mínimos para un tránsito libre y seguro.</Text>
                    <Text style={{ textAlign: 'justify', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5, marginBottom: 0.15 * imageWidth }}>Este folleto no cubre los requisitos relacionados con la prestación de servicios internacionales pagos de carga y pasajeros.</Text>
                </View>
                <View style={{ width: imageWidth, alignItems: 'center', backgroundColor: "white" }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth, color: "#c9d22e" }}>FICHA TÉCNICA</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>ORGANIZADORES:</Text>
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
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>RESPONSABLE POR EL PREPARO:</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '800', lineHeight: selectSize * 1.5 }}>CGSV/DIOP/PRF</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>COORDENAÇÃO-GERAL DE SEGURANÇA VIÁRIA</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5 }}>DIAGRAMACIÓN:</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '800', lineHeight: selectSize * 1.5 }}>CCOM/PRF</Text>
                    <Text style={{ textAlign: 'center', width: 0.9 * imageWidth, marginTop: 0.01 * imageWidth, fontSize: selectSize * 0.8, color: 'black', fontFamily: 'sans-serif', fontWeight: '600', lineHeight: selectSize * 1.5, marginBottom: 0.2 * imageWidth }}>COORDENAÇÃO DE COMUNICAÇÃO INSTITUCIONAL</Text>
                </View>
            </ScrollView>
        </View>
    );
}