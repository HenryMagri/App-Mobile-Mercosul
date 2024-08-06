import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View, Linking } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Livros from '../../../../icons/pilha-de-tres-livros.png';
import Pointer from '../../../../icons/pointer.png';

const imageWidth = Dimensions.get('window').width;

const SeventhRoute = () => {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "85%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#c7c7c7', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={Livros} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>BIBLIOGRAFIA</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.1 * imageWidth }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, textAlign: 'justify', width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL.
                                <Text onPress={() => Linking.openURL('https://www.planalto.gov.br/ccivil_03/constituicao/ConstituicaoCompilado.htm')} style={{ backgroundColor: 'yellow' }}> Constituição da República Federativa do Brasil de 1988.</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, textAlign: 'justify', width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL.
                                <Text onPress={() => Linking.openURL('https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm')} style={{ backgroundColor: 'yellow' }}> Lei nº 9.503, de 23 de setembro de 1997. </Text>
                                Institui o Código de Trânsito Brasileiro. </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL. Conselho Nacional de Trânsito.
                                <Text onPress={() => Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao3822011alterada.pdf')} style={{ backgroundColor: 'yellow' }}> Resolução nº 382/2011. </Text>
                                Dispõe sobre notificação e cobrança de multa por infração de trânsito praticada com veículo licenciado no exterior em trânsito no território nacional.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL. Conselho Nacional de Trânsito.
                                <Text onPress={() => Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao8192021.pdf')} style={{ backgroundColor: 'yellow' }}> Resolução nº 819/2021. </Text>
                                Dispõe sobre o transporte de crianças com idade inferior a dez anos que não tenham atingido 1,45m (um metro e quarenta e cinco centímetros) de altura no dispositivo de retenção adequado.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL. Conselho Nacional de Trânsito.
                                <Text onPress={() => Linking.openURL('https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9332022.pdf')} style={{ backgroundColor: 'yellow' }}> Resolução nº 933/2022. </Text>
                                Dispõe sobre a habilitação do candidato ou condutor estrangeiro para direção de veículos em território nacional.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL. Ministério da Fazenda.
                                <Text onPress={() => Linking.openURL('http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=21119')} style={{ backgroundColor: 'yellow' }}> Portaria nº 16/1995. </Text>
                                Publicada no DOU em 13/01/1995. Dispõe sobre a circulação de veículos comunitários do Mercosul, de uso particular, exclusivo de turistas. </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>BRASIL. Receita Federal do Brasil.
                                <Text onPress={() => Linking.openURL('http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=70297')} style={{ backgroundColor: 'yellow' }}> Instrução Normativa nº 1.600/2015. </Text>
                                Dispõe sobre a aplicação dos regimes aduaneiros especiais de admissão temporária e exportação temporária. </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>MERCOSUL. Conselho do Mercado Comum/CMC.
                                <Text onPress={() => Linking.openURL('https://normas.mercosur.int/public/normativas/3258')} style={{ backgroundColor: 'yellow' }}> Decisão nº 46/2015. </Text>
                                Acordo sobre documentos de viagem e de retorno dos Estados Partes do Mercosul e Estados Associados. </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
                            <Image source={Pointer} style={{ width: 0.09 * imageWidth, height: 0.09 * imageWidth }} />
                            <Text style={{ marginLeft: 0.03 * imageWidth, width: 0.85 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>MERCOSUL. Grupo Mercado Comum/GMC.
                                <Text onPress={() => Linking.openURL('https://www.sgt4.mercosur.int/es-es/Documents/Res_120_1994.pdf')} style={{ backgroundColor: 'yellow' }}> Resolução nº 120/1994. </Text>
                                Dispõe sobre o seguro de responsabilidade civil do proprietário, tendo em visto o artigo 13 do Tratado de Assunção. </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SeventhRoute;