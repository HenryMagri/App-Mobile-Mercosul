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
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>INFORMACIÓN ÚTIL PARA TURISTAS</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>CADASTUR</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Sistema de registro de personas físicas y jurídicas que actúan en el sector turístico, gestionado por el Ministerio de Turismo, en colaboración con los organismos oficiales de turismo, en los 26 estados brasileños y el Distrito Federal, con el objetivo de promover la organización, formalización y legalización de los prestadores de servicios turísticos en Brasil.</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('https://cadastur.turismo.gov.br/') }} widthSize={selectSize * imageWidth * 0.045} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} left={"-10%"} image={Clique} link={'https://cadastur.turismo.gov.br/'} top={'12%'} size={selectSize * 0.9} />
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth }}>SALUD</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Atención Médica: Asistencia Médica: los servicios de salud pública en Brasil son gratuitos para los turistas extranjeros. Si el turista necesita atención médica, sufre un accidente o tiene algún problema de salud, solo tiene que llamar gratuitamente al Servicio de Atención Móvil de Urgencia (SAMU) en el 192.</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('tel:192') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'192'} top={'0'} size={selectSize * 1.5} />
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Cuidados Básicos: Precauciones básicas: Brasil es un país de clima tropical, por lo que se recomienda a todos mantenerse correctamente hidratados, bebiendo mucha agua, vestir ropa cómoda y protegerse del sol con sombrero, gafas y bloqueador solar, evitando la exposición directa al sol entre las 10.00 y las 16.00 horas. Estaciones del año en Brasil: verano (desde diciembre hasta marzo); otoño (desde marzo hasta junio); invierno (desde junio hasta septiembre); primavera (desde septiembre hasta diciembre).</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Vacunas: no es obligatorio vacunarse contra ningún tipo de enfermedad para entrar en Brasil. Sin embargo, hay zonas del país con Recomendación de Vacunación (ACVR) contra la Fiebre Amarilla antes de su visita. Más información en:</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-viajante/vacina-para-viajantes') }} widthSize={selectSize * imageWidth * 0.045} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} left={"-10%"} image={Clique} link={'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-viajante/vacina-para-viajantes'} top={'12%'} size={selectSize * 0.6} />
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth }}>SEGURIDAD</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Brasil es un país que invierte cada vez más en seguridad pública y refuerza la seguridad en los destinos turísticos. Los turistas que deseen visitar el país pueden viajar con tranquilidad. El Ministerio de Turismo está creando “Turismo Seguro”, un programa nacional de seguridad turística centrado en diversas áreas de actuación, para que pueda disfrutar de las maravillas y encantos que sólo Brasil puede ofrecer. </Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» En caso de incidentes, el país cuenta con comisarías repartidas por todo el territorio. La mayoría de las capitales de los estados también cuenta con comisarías especializadas en asistencia al turista. Si se encuentra en una ciudad que no cuenta con una Comisaría de Atención al Turista, el incidente puede ser registrado en cualquier comisaría.</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth }}>TRANSPORTE</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Los servicios prestados por los transportadores turísticos se realizan en régimen de fletamento turístico, que requiere un permiso de autorización de la Agencia Nacional de Transportes Terrestres - ANTT, en el caso de los servicios de transporte colectivo de pasajeros por carretera interestatal e internacional. En el caso de reclamaciones y sugerencias en este ámbito, la ANTT, además de la atención presencial en sus bases operativas, también pone a disposición los contactos de su defensoría, número de teléfono 166 y correo electrónico:</Text>
                        <ButtonType1 onPress={() => { Linking.openURL('mailto:ouvidoria@antt.gov.br') }} widthSize={selectSize * imageWidth * 0.045} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} left={"-10%"} image={Email} link={'ouvidoria@antt.gov.br'} top={'0%'} size={selectSize * 0.9} />
                        <ButtonType1 onPress={() => { Linking.openURL('tel:166') }} widthSize={selectSize * imageWidth * 0.015} heightSize={selectSize * imageWidth * 0.007} margintopSize={selectSize} left={"-12%"} image={Telefone} link={'166'} top={'0'} size={selectSize * 1.5} />
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth, backgroundColor: '#003487' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.1 * imageWidth, color: 'white' }}>INFORMACIÓN TURÍSTICA</Text>
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
                                <Text style={{ textAlign: 'justify', fontSize: 0.9 * selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '700', marginLeft: 0.03 * imageWidth }}>> Idioma: <Text style={{ fontWeight: '400' }}>el portugués es el idioma oficial de Brasil.</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: 0.8 * imageWidth, marginTop: 0.05 * imageWidth }}>
                                <Image source={Real} style={{ width: selectSize * 2.5, height: selectSize * 2.5 }} />
                                <Text style={{ textAlign: 'justify', fontSize: 0.9 * selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '700', marginLeft: 0.02 * imageWidth }}>> Moeda: <Text style={{ fontWeight: '400' }}> la moneda de Brasil es el REAL.</Text></Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: 0.8 * imageWidth, marginTop: 0.05 * imageWidth, marginBottom: 0.2 * imageWidth }}>
                                <Image source={Tomada} style={{ width: selectSize * 2.5, height: selectSize * 2.5 }} />
                                <Text style={{ textAlign: 'justify', fontSize: 0.9 * selectSize, color: 'white', fontFamily: 'sans-serif', fontWeight: '700', marginLeft: 0.02 * imageWidth }}>> Eletricidade: <Text style={{ fontWeight: '400' }}>el voltaje eléctrico en Brasil varía entre 110V y 220V, dependiendo de la ubicación. Los enchufes en Brasil son del tipo N y tienen el estándar de 3 pines.</Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View>
    );
}