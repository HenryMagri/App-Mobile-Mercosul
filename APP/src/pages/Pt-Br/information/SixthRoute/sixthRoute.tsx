import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Livro from '../../../../icons/livro-aberto-e-terra.png';

const imageWidth = Dimensions.get('window').width;

const SixthRoute = () => {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "85%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#58585b', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={Livro} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>GLOSSÁRIO RESUMIDO</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Autorização para Circulação no Mercosul (ACM):<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> é o documento emitido pela Empresa Locadora de Veículos – ELV, no qual constarão as principais informações do contrato de locação do veículo, quais sejam os dados da empresa locadora, do(s) condutor(es) e do seguro.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Autorização do Proprietário:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> é a autorização concedida pelo proprietário de veículo estrangeiro registrado em Estado Parte do Mercosul, para que terceiro, residente no país de matrícula do veículo, conduza-o em sua ausência.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Cédula Azul ou Cédula de Identificação para Autorizado a Conduzir:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> documento adotado pela Argentina, que substitui as autorizações notariais exigidas para dirigir automóveis de terceiros a qual, para ser expedida, requer a documentação legal pertinente.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Certificado de Apólice de Seguro internacional do Mercosul:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> é o documento de porte obrigatório para veículo registrado e oriundo dos Estados Partes do Mercosul, em circulação internacional, que comprova a contratação de uma Apólice de Seguro internacional de Responsabilidade Civil por danos causados a pessoas ou objetos não transportados no veículo, com cobertura nos Estados Partes em que circule. Tem a designação de Carta-Verde e deve ser apresentado no original.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Condutor Estrangeiro:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> É todo cidadão estrangeiro ou brasileiro não residente no Brasil ou residente a menos de 180 dias, habilitado no exterior.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Empresa Locadora de Veículos (ELV):<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> é a empresa constituída de acordo com a legislação do estado parte onde esteja radicada, sendo regularmente cadastrada junto à autoridade aduaneira, que tem como atividade a locação de veículos terrestres para circularem no território do Mercosul.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Estados Partes do Mercosul:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> são os países que integram o Mercado Comum do Sul – Mercosul, na condição de membros plenos. São os quatro fundadores do bloco: Brasil, Argentina, Paraguai e Uruguai, e ainda a Venezuela, atualmente suspensa.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Estados Associados do Mercosul:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>  são países que ingressaram no bloco após sua fundação. Podem participar, na qualidade de convidados, das reuniões dos órgãos da estrutura institucional do Mercosul para tratar temas de interesse comum, mas sem direito a voto. São sete: Bolívia, Chile, Colômbia, Equador, Peru, Guiana e Suriname.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Permissão Internacional para Dirigir:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>  é o documento de habilitação internacional para dirigir, que pode ser emitido por todos os países contratantes da Convenção sobre Trânsito Viário, celebrada em Viena em 1968. </Text></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SixthRoute;