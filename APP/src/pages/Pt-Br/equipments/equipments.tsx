import React, { useContext } from 'react';
import { ScrollView, Text, View, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import { equipmentslists } from '../../equipmentlist';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../Size/SelectSizeContext';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default function Documents() {

    const [selectCountry, setSelectCountry] = useState('Qualquer');
    const [selectType, setSelectType] = useState('Qualquer');
    const { selectSize } = useContext(SelectSizeContext);

    const filterCountrys = equipmentslists.filter((equipmentslist) => (equipmentslist.country) == selectCountry)
    const filterTypes = equipmentslists.filter((equipmentslist) => (equipmentslist.typePtBr) == selectType)
    const filterAny = filterCountrys.filter((filterCountry) => (filterCountry.typePtBr) == selectType)

    if (selectCountry == "Qualquer" && selectType == "Qualquer") {

        return (
            <View style={{ alignContent: "space-between", flex: 1, flexDirection: 'row', backgroundColor: "white", height: imageHeight }}>
                <ScrollView style={{ position: 'absolute', marginTop: '18%', height: 0.63 * imageHeight, width: 1.06 * imageWidth, marginLeft: -0.04 * imageWidth, borderWidth: 0 }} showsVerticalScrollIndicator={false} removeClippedSubviews={true}>
                    <Card containerStyle={{ borderColor: 'white', paddingBottom: 0.1 * imageHeight, width: 1.1*imageWidth, borderWidth: 0 }}>
                        {equipmentslists.map((u, i) => {

                            return (
                                <View key={i} style={{ elevation: 6, shadowOpacity: 0.2, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: -2, height: 0 }, borderRadius: 5, padding: '2%', borderColor: "#c6c6c6", borderWidth: 0, width: 0.93 * imageWidth, marginBottom: 0.03 * imageWidth, backgroundColor: "white", alignContent: "space-between", flex: 1, flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 0.18 * imageWidth, justifyContent: 'center' }}>
                                        <Image source={u.uri} style={{ height: 0.10 * imageWidth, width: 0.1 * imageWidth }} />
                                        <Text style={{ fontSize: selectSize * 0.85 }}>{u.country}</Text>
                                    </View>
                                    <View style={{ marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.1 * imageWidth, height: '100%', justifyContent: 'center' }}>
                                        <Image source={u.icon} style={{ height: 40, width: 40 }} />
                                    </View>
                                    <View>
                                        <Text style={{ textAlignVertical: 'center', textAlign: 'center', marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.42 * imageWidth, height: "100%", justifyContent: 'center', fontSize: selectSize * 0.9 }}>
                                            {u.typePtBr}
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: "15%", justifyContent: 'center' }}>
                                        <Image source={u.check} style={{ height: 40, width: 40, }} />
                                    </View>
                                </View>
                            )
                        })}
                    </Card>
                </ScrollView>
                <View style={{ elevation: 7, shadowOpacity: 1, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: 2, height: 2 }, width: imageWidth, backgroundColor: 'white', height: 0.11 * imageHeight, padding: '2%', borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth, marginTop: -0.02 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.03 * imageWidth, position: 'relative' }}>País:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.027 * imageWidth, height: 0.05 * imageHeight, width: 0.75 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectCountry(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                    { label: "Argentina", value: "Argentina" },
                                    { label: "Bolívia", value: "Bolívia" },
                                    { label: "Paraguai", value: "Paraguai" },
                                    { label: "Uruguai", value: "Uruguai" },
                                    { label: "Venezuela", value: "Venezuela" },
                                    { label: "Chile", value: "Chile" },
                                    { label: "Colômbia", value: "Colômbia" },
                                    { label: "Peru", value: "Peru" },
                                    { label: "Guiana", value: "Guiana" },
                                    { label: "Suriname", value: "Suriname" },
                                    { label: "Equador", value: "Equador" },
                                ]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regra:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                        { label: "Buzina", value: "Buzina" },
                                        { label: "Cinto de Segurança", value: "Cinto de Segurança" },
                                        { label: "Chave de fenda, se o veículo possuir calota", value: "Chave de fenda, se o veículo possuir calota" },
                                        { label: "Chave de roda", value: "Chave de roda" },
                                        { label: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro", value: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro" },
                                        { label: "Espelho retrovisor (apenas um)", value: "Espelho retrovisor (apenas um)" },
                                        { label: "Espelho retrovisor (dois)", value: "Espelho retrovisor (dois)" },
                                        { label: "Extintor de incêndio", value: "Extintor de incêndio" },
                                        { label: "Freio de estacionamento", value: "Freio de estacionamento" },
                                        { label: "Freio de serviço", value: "Freio de serviço" },
                                        { label: "Lavador de para-brisa", value: "Lavador de para-brisa" },
                                        { label: "Limpador de para-brisa (pelo menos um)", value: "Limpador de para-brisa (pelo menos um)" },
                                        { label: "Macaco compatível", value: "Macaco compatível" },
                                        { label: "Para-brisa", value: "Para-brisa" },
                                        { label: "Para-choques (dianteiro e traseiro)", value: "Para-choques (dianteiro e traseiro)" },
                                        { label: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)", value: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)" },
                                        { label: "Pneus", value: "Pneus" },
                                        { label: "Roda sobressalente", value: "Roda sobressalente" },
                                        { label: "Silenciador de explosão", value: "Silenciador de explosão" },
                                        { label: "Triângulo", value: "Triângulo" },
                                        { label: "Velocímetro", value: "Velocímetro" },
                                        { label: "Faróis (na cor branca ou amarela)", value: "Faróis (na cor branca ou amarela)" },
                                        { label: "Faróis (na cor branca), proibida instalação em reboque e semirreboque", value: "Faróis (na cor branca), proibida instalação em reboque e semirreboque" },
                                        { label: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque", value: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque" },
                                        { label: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)", value: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)" },
                                        { label: "Lanterna de luz de freio (na cor vermelha)", value: "Lanterna de luz de freio (na cor vermelha)" },
                                        { label: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque", value: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque" },
                                        { label: "Lanterna de luz de placa (na cor branca)", value: "Lanterna de luz de placa (na cor branca)" },
                                        { label: "Lanterna de luz de posição (na cor branca à frente)", value: "Lanterna de luz de posição (na cor branca à frente)" },
                                        { label: "Lanterna de luz de posição (na cor vermelha na traseira)", value: "Lanterna de luz de posição (na cor vermelha na traseira)" }
                                    ]} />
                        </View>
                    </View>
                </View>

            </View>
        );

    } if (selectCountry != "Qualquer" && selectType == "Qualquer") {

        return (
            <View style={{ alignContent: "space-between", flex: 1, flexDirection: 'row', backgroundColor: "white", height: imageHeight }}>
                <ScrollView style={{ position: 'absolute', marginTop: '18%', height: 0.63 * imageHeight, width: 1.06 * imageWidth, marginLeft: -0.04 * imageWidth, borderWidth: 0 }} showsVerticalScrollIndicator={false} removeClippedSubviews={true}>
                    <Card containerStyle={{ borderColor: 'white', paddingBottom: 0.1 * imageHeight, width: 1.1*imageWidth, borderWidth: 0 }}>
                        {filterCountrys.map((u, i) => {

                            return (
                                <View key={i} style={{ elevation: 6, shadowOpacity: 0.2, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: -2, height: 0 }, borderRadius: 5, padding: '2%', borderColor: "#c6c6c6", borderWidth: 0, width: 0.93 * imageWidth, marginBottom: 0.03 * imageWidth, backgroundColor: "white", alignContent: "space-between", flex: 1, flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 0.18 * imageWidth, justifyContent: 'center' }}>
                                        <Image source={u.uri} style={{ height: 0.10 * imageWidth, width: 0.1 * imageWidth }} />
                                        <Text style={{ fontSize: selectSize * 0.85 }}>{u.country}</Text>
                                    </View>
                                    <View style={{ marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.1 * imageWidth, height: '100%', justifyContent: 'center' }}>
                                        <Image source={u.icon} style={{ height: 40, width: 40 }} />
                                    </View>
                                    <View>
                                        <Text style={{ textAlignVertical: 'center', textAlign: 'center', marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.42 * imageWidth, height: "100%", justifyContent: 'center', fontSize: selectSize * 0.9 }}>
                                            {u.typePtBr}
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: "15%", justifyContent: 'center' }}>
                                        <Image source={u.check} style={{ height: 40, width: 40, }} />
                                    </View>
                                </View>
                            )
                        })}
                    </Card>
                </ScrollView>
                <View style={{ elevation: 7, shadowOpacity: 1, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: 2, height: 2 }, width: imageWidth, backgroundColor: 'white', height: 0.11 * imageHeight, padding: '2%', borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth, marginTop: -0.02 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.03 * imageWidth, position: 'relative' }}>País:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.027 * imageWidth, height: 0.05 * imageHeight, width: 0.75 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectCountry(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                    { label: "Argentina", value: "Argentina" },
                                    { label: "Bolívia", value: "Bolívia" },
                                    { label: "Paraguai", value: "Paraguai" },
                                    { label: "Uruguai", value: "Uruguai" },
                                    { label: "Venezuela", value: "Venezuela" },
                                    { label: "Chile", value: "Chile" },
                                    { label: "Colômbia", value: "Colômbia" },
                                    { label: "Peru", value: "Peru" },
                                    { label: "Guiana", value: "Guiana" },
                                    { label: "Suriname", value: "Suriname" },
                                    { label: "Equador", value: "Equador" },
                                ]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regra:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                        { label: "Buzina", value: "Buzina" },
                                        { label: "Cinto de Segurança", value: "Cinto de Segurança" },
                                        { label: "Chave de fenda, se o veículo possuir calota", value: "Chave de fenda, se o veículo possuir calota" },
                                        { label: "Chave de roda", value: "Chave de roda" },
                                        { label: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro", value: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro" },
                                        { label: "Espelho retrovisor (apenas um)", value: "Espelho retrovisor (apenas um)" },
                                        { label: "Espelho retrovisor (dois)", value: "Espelho retrovisor (dois)" },
                                        { label: "Extintor de incêndio", value: "Extintor de incêndio" },
                                        { label: "Freio de estacionamento", value: "Freio de estacionamento" },
                                        { label: "Freio de serviço", value: "Freio de serviço" },
                                        { label: "Lavador de para-brisa", value: "Lavador de para-brisa" },
                                        { label: "Limpador de para-brisa (pelo menos um)", value: "Limpador de para-brisa (pelo menos um)" },
                                        { label: "Macaco compatível", value: "Macaco compatível" },
                                        { label: "Para-brisa", value: "Para-brisa" },
                                        { label: "Para-choques (dianteiro e traseiro)", value: "Para-choques (dianteiro e traseiro)" },
                                        { label: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)", value: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)" },
                                        { label: "Pneus", value: "Pneus" },
                                        { label: "Roda sobressalente", value: "Roda sobressalente" },
                                        { label: "Silenciador de explosão", value: "Silenciador de explosão" },
                                        { label: "Triângulo", value: "Triângulo" },
                                        { label: "Velocímetro", value: "Velocímetro" },
                                        { label: "Faróis (na cor branca ou amarela)", value: "Faróis (na cor branca ou amarela)" },
                                        { label: "Faróis (na cor branca), proibida instalação em reboque e semirreboque", value: "Faróis (na cor branca), proibida instalação em reboque e semirreboque" },
                                        { label: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque", value: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque" },
                                        { label: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)", value: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)" },
                                        { label: "Lanterna de luz de freio (na cor vermelha)", value: "Lanterna de luz de freio (na cor vermelha)" },
                                        { label: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque", value: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque" },
                                        { label: "Lanterna de luz de placa (na cor branca)", value: "Lanterna de luz de placa (na cor branca)" },
                                        { label: "Lanterna de luz de posição (na cor branca à frente)", value: "Lanterna de luz de posição (na cor branca à frente)" },
                                        { label: "Lanterna de luz de posição (na cor vermelha na traseira)", value: "Lanterna de luz de posição (na cor vermelha na traseira)" }
                                    ]} />
                        </View>
                    </View>
                </View>

            </View>
        );

    } if (selectCountry != "Qualquer" && selectType != "Qualquer") {

        return (
            <View style={{ alignContent: "space-between", flex: 1, flexDirection: 'row', backgroundColor: "white", height: imageHeight }}>
                <ScrollView style={{ position: 'absolute', marginTop: '18%', height: 0.63 * imageHeight, width: 1.06 * imageWidth, marginLeft: -0.04 * imageWidth, borderWidth: 0 }} showsVerticalScrollIndicator={false} removeClippedSubviews={true}>
                    <Card containerStyle={{ borderColor: 'white', paddingBottom: 0.1 * imageHeight, width: 1.1*imageWidth, borderWidth: 0 }}>
                        {filterAny.map((u, i) => {

                            return (
                                <View key={i} style={{ elevation: 6, shadowOpacity: 0.2, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: -2, height: 0 }, borderRadius: 5, padding: '2%', borderColor: "#c6c6c6", borderWidth: 0, width: 0.93 * imageWidth, marginBottom: 0.03 * imageWidth, backgroundColor: "white", alignContent: "space-between", flex: 1, flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 0.18 * imageWidth, justifyContent: 'center' }}>
                                        <Image source={u.uri} style={{ height: 0.10 * imageWidth, width: 0.1 * imageWidth }} />
                                        <Text style={{ fontSize: selectSize * 0.85 }}>{u.country}</Text>
                                    </View>
                                    <View style={{ marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.1 * imageWidth, height: '100%', justifyContent: 'center' }}>
                                        <Image source={u.icon} style={{ height: 40, width: 40 }} />
                                    </View>
                                    <View>
                                        <Text style={{ textAlignVertical: 'center', textAlign: 'center', marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.42 * imageWidth, height: "100%", justifyContent: 'center', fontSize: selectSize * 0.9 }}>
                                            {u.typePtBr}
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: "15%", justifyContent: 'center' }}>
                                        <Image source={u.check} style={{ height: 40, width: 40, }} />
                                    </View>
                                </View>
                            )
                        })}
                    </Card>
                </ScrollView>
                <View style={{ elevation: 7, shadowOpacity: 1, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: 2, height: 2 }, width: imageWidth, backgroundColor: 'white', height: 0.11 * imageHeight, padding: '2%', borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth, marginTop: -0.02 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.03 * imageWidth, position: 'relative' }}>País:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.027 * imageWidth, height: 0.05 * imageHeight, width: 0.75 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectCountry(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                    { label: "Argentina", value: "Argentina" },
                                    { label: "Bolívia", value: "Bolívia" },
                                    { label: "Paraguai", value: "Paraguai" },
                                    { label: "Uruguai", value: "Uruguai" },
                                    { label: "Venezuela", value: "Venezuela" },
                                    { label: "Chile", value: "Chile" },
                                    { label: "Colômbia", value: "Colômbia" },
                                    { label: "Peru", value: "Peru" },
                                    { label: "Guiana", value: "Guiana" },
                                    { label: "Suriname", value: "Suriname" },
                                    { label: "Equador", value: "Equador" },
                                ]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regra:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                        { label: "Buzina", value: "Buzina" },
                                        { label: "Cinto de Segurança", value: "Cinto de Segurança" },
                                        { label: "Chave de fenda, se o veículo possuir calota", value: "Chave de fenda, se o veículo possuir calota" },
                                        { label: "Chave de roda", value: "Chave de roda" },
                                        { label: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro", value: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro" },
                                        { label: "Espelho retrovisor (apenas um)", value: "Espelho retrovisor (apenas um)" },
                                        { label: "Espelho retrovisor (dois)", value: "Espelho retrovisor (dois)" },
                                        { label: "Extintor de incêndio", value: "Extintor de incêndio" },
                                        { label: "Freio de estacionamento", value: "Freio de estacionamento" },
                                        { label: "Freio de serviço", value: "Freio de serviço" },
                                        { label: "Lavador de para-brisa", value: "Lavador de para-brisa" },
                                        { label: "Limpador de para-brisa (pelo menos um)", value: "Limpador de para-brisa (pelo menos um)" },
                                        { label: "Macaco compatível", value: "Macaco compatível" },
                                        { label: "Para-brisa", value: "Para-brisa" },
                                        { label: "Para-choques (dianteiro e traseiro)", value: "Para-choques (dianteiro e traseiro)" },
                                        { label: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)", value: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)" },
                                        { label: "Pneus", value: "Pneus" },
                                        { label: "Roda sobressalente", value: "Roda sobressalente" },
                                        { label: "Silenciador de explosão", value: "Silenciador de explosão" },
                                        { label: "Triângulo", value: "Triângulo" },
                                        { label: "Velocímetro", value: "Velocímetro" },
                                        { label: "Faróis (na cor branca ou amarela)", value: "Faróis (na cor branca ou amarela)" },
                                        { label: "Faróis (na cor branca), proibida instalação em reboque e semirreboque", value: "Faróis (na cor branca), proibida instalação em reboque e semirreboque" },
                                        { label: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque", value: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque" },
                                        { label: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)", value: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)" },
                                        { label: "Lanterna de luz de freio (na cor vermelha)", value: "Lanterna de luz de freio (na cor vermelha)" },
                                        { label: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque", value: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque" },
                                        { label: "Lanterna de luz de placa (na cor branca)", value: "Lanterna de luz de placa (na cor branca)" },
                                        { label: "Lanterna de luz de posição (na cor branca à frente)", value: "Lanterna de luz de posição (na cor branca à frente)" },
                                        { label: "Lanterna de luz de posição (na cor vermelha na traseira)", value: "Lanterna de luz de posição (na cor vermelha na traseira)" }
                                    ]} />
                        </View>
                    </View>
                </View>

            </View>
        );

    } if (selectCountry == "Qualquer" && selectType != "Qualquer") {

        return (
            <View style={{ alignContent: "space-between", flex: 1, flexDirection: 'row', backgroundColor: "white", height: imageHeight }}>
                <ScrollView style={{ position: 'absolute', marginTop: '18%', height: 0.63 * imageHeight, width: 1.06 * imageWidth, marginLeft: -0.04 * imageWidth, borderWidth: 0 }} showsVerticalScrollIndicator={false} removeClippedSubviews={true}>
                    <Card containerStyle={{ borderColor: 'white', paddingBottom: 0.1 * imageHeight, width: 1.1*imageWidth, borderWidth: 0 }}>
                        {filterTypes.map((u, i) => {

                            return (
                                <View key={i} style={{ elevation: 6, shadowOpacity: 0.2, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: -2, height: 0 }, borderRadius: 5, padding: '2%', borderColor: "#c6c6c6", borderWidth: 0, width: 0.93 * imageWidth, marginBottom: 0.03 * imageWidth, backgroundColor: "white", alignContent: "space-between", flex: 1, flexDirection: 'row' }}>
                                    <View style={{ alignItems: 'center', width: 0.18 * imageWidth, justifyContent: 'center' }}>
                                        <Image source={u.uri} style={{ height: 0.10 * imageWidth, width: 0.1 * imageWidth }} />
                                        <Text style={{ fontSize: selectSize * 0.85 }}>{u.country}</Text>
                                    </View>
                                    <View style={{ marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.1 * imageWidth, height: '100%', justifyContent: 'center' }}>
                                        <Image source={u.icon} style={{ height: 40, width: 40 }} />
                                    </View>
                                    <View>
                                        <Text style={{ textAlignVertical: 'center', textAlign: 'center', marginLeft: 0.03 * imageWidth, alignItems: 'center', width: 0.42 * imageWidth, height: "100%", justifyContent: 'center', fontSize: selectSize * 0.9 }}>
                                            {u.typePtBr}
                                        </Text>
                                    </View>
                                    <View style={{ alignItems: 'center', width: "15%", justifyContent: 'center' }}>
                                        <Image source={u.check} style={{ height: 40, width: 40, }} />
                                    </View>
                                </View>
                            )
                        })}
                    </Card>
                </ScrollView>
                <View style={{ elevation: 7, shadowOpacity: 1, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: 2, height: 2 }, width: imageWidth, backgroundColor: 'white', height: 0.11 * imageHeight, padding: '2%', borderBottomColor: "#c6c6c6", borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth, marginTop: -0.02 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.03 * imageWidth, position: 'relative' }}>País:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.027 * imageWidth, height: 0.05 * imageHeight, width: 0.75 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectCountry(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                    { label: "Argentina", value: "Argentina" },
                                    { label: "Bolívia", value: "Bolívia" },
                                    { label: "Paraguai", value: "Paraguai" },
                                    { label: "Uruguai", value: "Uruguai" },
                                    { label: "Venezuela", value: "Venezuela" },
                                    { label: "Chile", value: "Chile" },
                                    { label: "Colômbia", value: "Colômbia" },
                                    { label: "Peru", value: "Peru" },
                                    { label: "Guiana", value: "Guiana" },
                                    { label: "Suriname", value: "Suriname" },
                                    { label: "Equador", value: "Equador" },
                                ]} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, width: imageWidth, height: 0.2 * imageWidth }}>
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regra:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Qualquer", value: "Qualquer" }}
                                items={[
                                        { label: "Buzina", value: "Buzina" },
                                        { label: "Cinto de Segurança", value: "Cinto de Segurança" },
                                        { label: "Chave de fenda, se o veículo possuir calota", value: "Chave de fenda, se o veículo possuir calota" },
                                        { label: "Chave de roda", value: "Chave de roda" },
                                        { label: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro", value: "Corrente ou cabo, caso o veículo esteja com dispositivo de engate de reboque ligeiro" },
                                        { label: "Espelho retrovisor (apenas um)", value: "Espelho retrovisor (apenas um)" },
                                        { label: "Espelho retrovisor (dois)", value: "Espelho retrovisor (dois)" },
                                        { label: "Extintor de incêndio", value: "Extintor de incêndio" },
                                        { label: "Freio de estacionamento", value: "Freio de estacionamento" },
                                        { label: "Freio de serviço", value: "Freio de serviço" },
                                        { label: "Lavador de para-brisa", value: "Lavador de para-brisa" },
                                        { label: "Limpador de para-brisa (pelo menos um)", value: "Limpador de para-brisa (pelo menos um)" },
                                        { label: "Macaco compatível", value: "Macaco compatível" },
                                        { label: "Para-brisa", value: "Para-brisa" },
                                        { label: "Para-choques (dianteiro e traseiro)", value: "Para-choques (dianteiro e traseiro)" },
                                        { label: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)", value: "Pneus (limites de carga, dimensões,velocidade, TWI, 1,6mm, recomendado fabricante)" },
                                        { label: "Pneus", value: "Pneus" },
                                        { label: "Roda sobressalente", value: "Roda sobressalente" },
                                        { label: "Silenciador de explosão", value: "Silenciador de explosão" },
                                        { label: "Triângulo", value: "Triângulo" },
                                        { label: "Velocímetro", value: "Velocímetro" },
                                        { label: "Faróis (na cor branca ou amarela)", value: "Faróis (na cor branca ou amarela)" },
                                        { label: "Faróis (na cor branca), proibida instalação em reboque e semirreboque", value: "Faróis (na cor branca), proibida instalação em reboque e semirreboque" },
                                        { label: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque", value: "Lanterna de luz de advertência (na cor âmbar), facultado em reboque e semirreboque" },
                                        { label: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)", value: "Lanterna de luz indicadora de direção dianteira e traseira (na cor âmbar)" },
                                        { label: "Lanterna de luz de freio (na cor vermelha)", value: "Lanterna de luz de freio (na cor vermelha)" },
                                        { label: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque", value: "Lanterna de luz de marcha-a-ré (na cor branca), opcional em reboque e semirreboque" },
                                        { label: "Lanterna de luz de placa (na cor branca)", value: "Lanterna de luz de placa (na cor branca)" },
                                        { label: "Lanterna de luz de posição (na cor branca à frente)", value: "Lanterna de luz de posição (na cor branca à frente)" },
                                        { label: "Lanterna de luz de posição (na cor vermelha na traseira)", value: "Lanterna de luz de posição (na cor vermelha na traseira)" }
                                    ]} />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}