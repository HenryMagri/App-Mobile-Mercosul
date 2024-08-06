import React, { useContext } from 'react';
import { Text, ScrollView, Linking, Dimensions, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../Size/SelectSizeContext';

import GuiaIcon from '../../../icons/guia-de-viagem.png';
import Clique from '../../../icons/clique.png';
import Telefone from '../../../icons/telefone.png';
import Email from '../../../icons/o-email.png';
import Selecione from '../../../icons/selecione.png';
import Chat from '../../../icons/chat-de-voz.png';
import Real from '../../../icons/real-brasileiro.png';
import Tomada from '../../../icons/tomada-eletrica.png';



const imageWidth = Dimensions.get('window').width;

const ButtonType1 = ({ onPress, widthSize, heightSize, margintopSize, left, image, link, top, size }: { onPress: any, widthSize: any, heightSize: any, margintopSize: any, left: any, image: any, link: any, top: any, size: any }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: widthSize, height: heightSize, marginTop: margintopSize, borderColor: '#003487', borderWidth: 1, borderRadius: 5, backgroundColor: '#f1f1f2', elevation: 10, shadowOpacity: 0.4, shadowColor: "black", flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
            <Text style={{ textAlign: 'center', width: "100%", fontSize: size }}>{link}</Text>
            <Image source={image} style={{ marginLeft: left, width: heightSize * 0.9, height: heightSize * 0.9, marginTop: top }} />
        </TouchableOpacity>
    );
};

const ButtonType2 = ({ onPress, size, link, link2, size2 }: { onPress: any, size: any, link: any, link2: any, size2: any }) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 0.5 * imageWidth }} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#205d9e', padding: 10, width: imageWidth * 0.33, height: imageWidth * 0.33, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', width: "100%", fontSize: size, color: "white" }}>{link}</Text>
            </View>
            <Image source={Selecione} style={{ width: imageWidth * 0.1, height: imageWidth * 0.1, marginLeft: 0.23 * imageWidth, marginTop: -0.05 * imageWidth }} />
            <Text style={{ textAlign: 'center', width: "100%", fontSize: size2, color: "white", marginTop: size * 1.2 }}>{link2}</Text>
        </TouchableOpacity>
    );
};

const ButtonType3 = ({ onPress, widthSize, heightSize, margintopSize, left, image, link, top, size }: { onPress: any, widthSize: any, heightSize: any, margintopSize: any, left: any, image: any, link: any, top: any, size: any }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: widthSize, height: heightSize, marginTop: margintopSize, borderColor: '#ff0039', borderWidth: 1, borderRadius: 5, backgroundColor: '#f1f1f2', elevation: 10, shadowOpacity: 0.4, shadowColor: "black", flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
            <Text style={{ textAlign: 'center', width: "100%", fontSize: size }}>{link}</Text>
            <Image source={image} style={{ marginLeft: left, width: heightSize * 0.9, height: heightSize * 0.9, marginTop: top }} />
        </TouchableOpacity>
    );
};

const ButtonType4 = ({ onPress, size, link, link2, size2 }: { onPress: any, size: any, link: any, link2: any, size2: any }) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 0.5 * imageWidth }} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#205d9e', padding: 10, width: imageWidth * 0.33, height: imageWidth * 0.33, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', width: "100%", fontSize: size, color: "white" }}>{link}</Text>
            </View>
            <Image source={Selecione} style={{ width: imageWidth * 0.1, height: imageWidth * 0.1, marginLeft: 0.23 * imageWidth, marginTop: -0.05 * imageWidth }} />
            <Text style={{ textAlign: 'center', width: "100%", fontSize: size2, color: "black", marginTop: size * 1.2 }}>{link2}</Text>
        </TouchableOpacity>
    );
};

export default function Tourist() {


    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "87%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#003487', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 10, shadowOpacity: 0.4, shadowColor: "black" }}>
                        <Image source={GuiaIcon} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>INFORMAÇÕES ÚTEIS AO TURISTA</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>CADASTUR</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Sistema de cadastro de pessoas físicas e jurídicas que atuam no setor de turismo, executado pelo Ministério do Turismo, em parceria com órgãos oficiais de turismo, nos 26 estados brasileiros e no Distrito Federal, tendo por objetivo a promoção do ordenamento, da formalização e da legalização dos prestadores de serviços turísticos no Brasil. </Text>
                        <ButtonType1 onPress={() => { Linking.openURL('https://cadastur.turismo.gov.br/') }} widthSize={selectSize * imageWidth * 0.045} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} left={"-10%"} image={Clique} link={'https://cadastur.turismo.gov.br/'} top={'12%'} size={selectSize * 0.9} />
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth }}>SAÚDE</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Atendimento Médico: os serviços públicos de saúde no Brasil são gratuitos para turistas estrangeiros. Se o turista necessitar de atendimento médico, sofrer um acidente ou apresentar algum problema de saúde, basta ligar gratuitamente para o Serviço de Atendimento Móvel de Urgência (SAMU), telefone 192.</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('tel:192') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'192'} top={'0'} size={selectSize * 1.5} />
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Cuidados Básicos: o Brasil é um país de clima tropical, por isso recomenda-se a todos se manterem devidamente hidratados, bebendo bastante água, fazendo uso de roupas confortáveis e protegendo-se do sol com chapéu ou boné, óculos escuros e protetor solar, evitando a exposição direta ao sol entre 10h e 16h. Estações do ano no Brasil: verão (dezembro a março); outono (março a junho); inverno (junho a setembro); primavera (setembro a dezembro).</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Vacinas: para entrar no Brasil não é obrigatório se vacinar contra qualquer tipo de doença. Porém, existem áreas no país com Recomendação de Vacinação (ACVR) contra a febre amarela antes da visita. Mais informações em:</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-viajante/vacina-para-viajantes') }} widthSize={selectSize * imageWidth * 0.045} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} left={"-10%"} image={Clique} link={'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-viajante/vacina-para-viajantes'} top={'12%'} size={selectSize * 0.6} />
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth }}>SEGURANÇA</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» O Brasil é um país que tem, cada vez mais, investido em segurança pública e vem fortalecendo a segurança nos destinos turísticos. Os turistas que pretendem visitar o país podem viajar com tranquilidade. O Ministério do Turismo, está criando o “Turismo Seguro”, um programa nacional de segurança turística com foco em diversos eixos de atuação, assim você pode aproveitar as maravilhas e encantos que só o Brasil tem.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Em caso de ocorrências, o país possui delegacias espalhadas em todo território nacional. Na maioria das capitais, possuímos também delegacias especializadas para atendimento ao turista. Caso esteja em alguma cidade que não possua uma Delegacia de Apoio ao Turista, a ocorrência poderá ser registrada em qualquer delegacia de polícia.</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth }}>TRANSPORTES</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Os serviços prestados pelas transportadoras turísticas são realizados sob regime de fretamento turístico, que requer termo de autorização junto à Agência Nacional de Transportes Terrestres - ANTT, nos casos de prestação dos serviços de transporte rodoviário coletivo interestadual e internacional de passageiros. Em caso de reclamações e sugestões nesse âmbito, a ANTT, além de atendimento presencial em suas bases operacionais, disponibiliza os contatos de sua ouvidoria, telefone 166 e e-mail ouvidoria@antt.gov.br.</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('mailto:ouvidoria@antt.gov.br') }} widthSize={selectSize * imageWidth * 0.045} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} left={"-10%"} image={Email} link={'ouvidoria@antt.gov.br'} top={'0%'} size={selectSize * 0.9} />
                        <ButtonType1 onPress={() => { Linking.openURL('tel:166') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'166'} top={'0'} size={selectSize * 1.5} />
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, backgroundColor: '#003487' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth, color: 'white' }}>INFORMAÇÕES TURÍSTICAS</Text>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.1 * imageWidth }}>
                            <ButtonType2 onPress={() => { Linking.openURL('https://www.gov.br/turismo/pt-br') }} link={"Ministério do Turismo do Brasil"} size={selectSize * 0.9} link2={"https://www.gov.br/turismo"} size2={selectSize * 0.75} />
                            <ButtonType2 onPress={() => { Linking.openURL('https://embratur.com.br/') }} link={"Embratur - Agência Brasileira de Promoção Internacional do Turismo"} size={selectSize * 0.7} link2={"https://embratur.com.br"} size2={selectSize * 0.75} />
                        </View>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 0.1 * imageWidth, marginBottom: 0.1 * imageWidth }}>
                            <ButtonType2 onPress={() => { Linking.openURL('https://visitbrasil.com/pt/') }} link={"Visit Brasil"} size={selectSize * 0.9} link2={"https://visitbrasil.com"} size2={selectSize * 0.75} />
                            <ButtonType2 onPress={() => { Linking.openURL('https://visitsouthamerica.travel') }} link={"Visit South America"} size={selectSize * 0.9} link2={"https://visitsouthamerica.travel"} size2={selectSize * 0.75} />
                        </View>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', backgroundColor: '#f1f1f2' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth, color: 'black' }}>TELEFONES DE EMERGÊNCIAS</Text>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center', width: 0.5 * imageWidth }}>
                                <Text style={{ textAlign: 'center', marginTop: 0.1 * imageWidth, fontSize: selectSize, color: 'black', fontFamily: 'sans-serif', fontWeight: '700' }}>Polícia Militar</Text>
                                <ButtonType1 onPress={() => { Linking.openURL('tel:190') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'190'} top={'0'} size={selectSize * 1.5} />
                            </View>
                            <View style={{ alignItems: 'center', width: 0.5 * imageWidth }}>
                                <Text style={{ textAlign: 'center', marginTop: 0.1 * imageWidth, fontSize: selectSize, color: 'black', fontFamily: 'sans-serif', fontWeight: '700' }}>Polícia Rodoviária Federal</Text>
                                <ButtonType1 onPress={() => { Linking.openURL('tel:191') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'191'} top={'0'} size={selectSize * 1.5} />
                            </View>
                        </View>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginBottom: 0.1 * imageWidth }}>
                            <View style={{ alignItems: 'center', width: 0.5 * imageWidth }}>
                                <Text style={{ textAlign: 'center', marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#ff0039', fontFamily: 'sans-serif', fontWeight: '700' }}>Ambulancia Pública (Samu)</Text>
                                <ButtonType3 onPress={() => { Linking.openURL('tel:190') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'190'} top={'0'} size={selectSize * 1.5} />
                            </View>
                            <View style={{ alignItems: 'center', width: 0.5 * imageWidth }}>
                                <Text style={{ textAlign: 'center', marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#ff0039', fontFamily: 'sans-serif', fontWeight: '700' }}>Corpo de Bombeiros</Text>
                                <ButtonType3 onPress={() => { Linking.openURL('tel:191') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'191'} top={'0'} size={selectSize * 1.5} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', backgroundColor: 'white' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth, color: 'black' }}>OUTRAS INFORMAÇÕES ÚTEIS</Text>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginTop: 0.1 * imageWidth }}>
                            <ButtonType4 onPress={() => { Linking.openURL('https://econsular.itamaraty.gov.br/') }} link={"Portal Consular Brasileiro"} size={selectSize * 0.9} link2={"https://econsular.itamaraty.gov.br/"} size2={selectSize * 0.75} />
                            <ButtonType4 onPress={() => { Linking.openURL('https://www.gov.br/prf/pt-br') }} link={"Polícia Rodoviária Federal"} size={selectSize * 0.9} link2={"https://www.gov.br/prf/pt-br"} size2={selectSize * 0.75} />
                        </View>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginTop: 0.05 * imageWidth, marginBottom: 0.05 * imageWidth }}>
                            <ButtonType4 onPress={() => { Linking.openURL('https://www.gov.br/pf/pt-br') }} link={"Polícia Federal"} size={selectSize * 0.9} link2={"https://www.gov.br/pf/pt-br"} size2={selectSize * 0.75} />
                            <ButtonType4 onPress={() => { Linking.openURL('https://portalservicos.senatran.serpro.gov.br/#/home') }} link={"Secretaria Nacional de Trânsito"} size={selectSize * 0.9} link2={"https://portalservicos.senatran.serpro.gov.br/#/home"} size2={selectSize * 0.75} />
                        </View>
                        <View style={{ width: imageWidth, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', marginBottom: 0.1 * imageWidth }}>
                            <ButtonType4 onPress={() => { Linking.openURL('https://www.gov.br/transportes/pt-br') }} link={"Ministério dos Transportes"} size={selectSize * 0.9} link2={"https://www.gov.br/transportes/pt-br"} size2={selectSize * 0.75} />
                        </View>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, backgroundColor: '#205d9e', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                        <View style={{ width: 0.9 * imageWidth, alignItems: 'flex-start' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: 0.8 * imageWidth, marginTop: 0.1 * imageWidth }}>
                                <Image source={Chat} style={{ width: selectSize * 2.5, height: selectSize * 2.5 }} />
                                <Text style={{ textAlign: 'justify', fontSize: 0.9 * selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '700', marginLeft: 0.03 * imageWidth }}>> Idioma: <Text style={{ fontWeight: '400' }}>o português é o idioma oficial do Brasil.</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: 0.8 * imageWidth, marginTop: 0.05 * imageWidth }}>
                                <Image source={Real} style={{ width: selectSize * 2.5, height: selectSize * 2.5 }} />
                                <Text style={{ textAlign: 'justify', fontSize: 0.9 * selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '700', marginLeft: 0.02 * imageWidth }}>> Moeda: <Text style={{ fontWeight: '400' }}>a moeda do Brasil é o REAL.</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: 0.8 * imageWidth, marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
                                <Image source={Tomada} style={{ width: selectSize * 2.5, height: selectSize * 2.5 }} />
                                <Text style={{ textAlign: 'justify', fontSize: 0.9 * selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '700', marginLeft: 0.02 * imageWidth }}>> Eletricidade: <Text style={{ fontWeight: '400' }}>a voltagem da eletricidade no Brasil varia entre 110V e 220V, conforme o local. As tomadas no Brasil são do tipo N e possuem o padrão de 3 pinos.</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View>
    );
}