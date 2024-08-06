import React, { useContext } from 'react';
import { Text, ScrollView, Linking, Dimensions, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../Size/SelectSizeContext';

import FinesIcon from '../../../icons/multa-administrativa.png';
import Button from '../../../icons/button.png';

const imageWidth = Dimensions.get('window').width;

const ImageButton = ({ onPress, widthSize, heightSize, margintopSize }: { onPress: any, widthSize: any, heightSize: any, margintopSize: any }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: widthSize, height: heightSize, marginTop: margintopSize }}>
            <Image source={Button} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
    );
};

export default function Fines() {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "87%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#cc0b48', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={FinesIcon} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>COBRO Y PAGO DE MULTAS</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Cuando el vehículo sea fiscalizado, notificado y multado en ruta hacia Brasil, el policía, siempre que sea posible, entregará al conductor copia de la notificación de la multa y sanción, junto con la boleta para el pago.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» El pago de esta multa deberá ser realizado por el conductor antes de iniciar su viaje de salida del país, a través de la red bancaria o a través de una filial.De no ser posible emitir la boleta de pago al momento de la inspección, el conductor deberá presentarse inmediatamente en la unidad de fiscalización de la entidad sancionadora más cercana para que se realice la emisión y efectúe el pago posteriormente.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Cuando se encuentre en la ruta de salida, en cualquier punto de fiscalización del territorio nacional, el vehículo será retenido hasta concluir el pago de las multas pendientes;</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Los vehículos que salgan del territorio nacional sin pagar la multa, y que posteriormente sean sorprendidos intentando ingresar o ya en circulación en el territorio nacional, serán detenidos hasta que se regularice su situación (pago de la deuda pendiente de multa).</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Para saber si el vehículo tiene multas pendientes de pago, el propietario puede consultar, para infracciones en carreteras federales, el enlace de NADA CONSTA en el sitio web de la PRF o buscar los órganos estatales y municipales de tránsito para infracciones en otras vías públicas del país.</Text>
                        <ImageButton onPress={() => { Linking.openURL('https://nadaconsta.prf.gov.br/nada_consta/index.jsf') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
                        <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
                            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>El pago de multas por infracciones de tránsito deberá realizarse exclusivamente a través de la red bancaria o entidades conveniadas.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}