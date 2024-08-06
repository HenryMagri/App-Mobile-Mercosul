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
        <View style={{height: "87%"}}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#cc0b48', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={FinesIcon} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>COBRANÇA E PAGAMENTO DE MULTAS</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.05 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Quando o veículo for fiscalizado, autuado e multado estando em rota de entrada no Brasil, o policial, sempre que possível, entregará ao condutor a via da notificação da autuação e penalidade, juntamente com o boleto (guia) de pagamento.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O pagamento dessa multa deverá ser realizado pelo condutor antes do início de seu deslocamento para saída do país, na rede bancária ou conveniados.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Caso não seja possível emitir a guia de pagamento no momento da fiscalização, o condutor deverá comparecer imediatamente à unidade de fiscalização do órgão autuador mais próxima para a respectiva emissão e posterior pagamento.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Quando em rota de saída, em qualquer ponto de fiscalização do território nacional, o veículo ficará retido até o pagamento de quaisquer multas pendentes;</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Os veículos que saírem do território nacional sem o pagamento da multa, e que posteriormente forem flagrados tentando ingressar ou se encontrem em circulação no território nacional serão retidos até a regularização da situação (pagamento do débito de multa pendente).</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Para saber se o veículo possui pendências de multas a serem pagas, o proprietário poderá consultar,  para infrações em rodovias federais,  o link do NADA CONSTA no site da PRF ou procurar  os órgãos estaduais e municipais de trânsito para infrações nas demais vias públicas do país.</Text>
                        <ImageButton onPress={() => { Linking.openURL('https://nadaconsta.prf.gov.br/nada_consta/index.jsf') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
                        <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2*imageWidth }}>
                            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>O pagamento das multas por infração de trânsito deverá ser efetuado, exclusivamente, na rede bancária ou conveniados.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}