import React, { useContext } from 'react';
import { ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react';
import { equipmentslists } from '../../equipmentlist';
import SelectSizeContext from '../../../Size/SelectSizeContext';

const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default function Documents() {

    const [selectCountry, setSelectCountry] = useState('Qualquer');
    const [selectType, setSelectType] = useState('Qualquer');
    const { selectSize } = useContext(SelectSizeContext);

    const filterCountrys = equipmentslists.filter((equipmentslist) => (equipmentslist.country) == selectCountry)
    const filterTypes = equipmentslists.filter((equipmentslist) => (equipmentslist.typeEsAr) == selectType)
    const filterAny = filterCountrys.filter((filterCountry) => (filterCountry.typeEsAr) == selectType)

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
                                            {u.typeEsAr}
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
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
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
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regla:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
                                items={[
                                    { label: "Bocina / claxon / pito", value: "Bocina / claxon / pito" },
                                    { label: "Cinturón de seguridad", value: "Cinturón de seguridad" },
                                    { label: "Destornillador, si el vehículo tiene tapacubos", value: "Destornillador, si el vehículo tiene tapacubos" },
                                    { label: "Llave de ajuste / de rueda / de cruz / de cruceta", value: "Llave de ajuste / de rueda / de cruz / de cruceta" },
                                    { label: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero", value: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero" },
                                    { label: "Espejo retrovisor (solo uno)", value: "Espejo retrovisor (solo uno)" },
                                    { label: "Espejos retrovisores (dos)", value: "Espejos retrovisores (dos)" },
                                    { label: "Extintor de incendios / matafuegos", value: "Extintor de incendios / matafuegos" },
                                    { label: "Freno de estacionamiento", value: "Freno de estacionamiento" },
                                    { label: "Freno de servicio", value: "Freno de servicio" },
                                    { label: "Lavador de parabrisas", value: "Lavador de parabrisas" },
                                    { label: "Limpiaparabrisas (al menos uno)", value: "Limpiaparabrisas (al menos uno)" },
                                    { label: "Gato hidráulico compatible", value: "Gato hidráulico compatible" },
                                    { label: "Parabrisas", value: "Parabrisas" },
                                    { label: "Parachoques (delantero y trasero)", value: "Parachoques (delantero y trasero)" },
                                    { label: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)", value: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)" },
                                    { label: "Neumáticos", value: "Neumáticos" },
                                    { label: "Rueda de repuesto", value: "Rueda de repuesto" },
                                    { label: "Silenciador de explosiones", value: "Silenciador de explosiones" },
                                    { label: "Triángulo de advertencia", value: "Triángulo de advertencia" },
                                    { label: "Velocímetro", value: "Velocímetro" },
                                    { label: "Faros (blancos o amarillos)", value: "Faros (blancos o amarillos)" },
                                    { label: "Faros (blancos), prohibida la instalación en remolques y semirremolques", value: "Faros (blancos), prohibida la instalación en remolques y semirremolques" },
                                    { label: "Luz de advertencia (ámbar), opcional en remolques y semirremolques", value: "Luz de advertencia (ámbar), opcional en remolques y semirremolques" },
                                    { label: "Luz intermitente delantera y trasera (color ámbar)", value: "Luz intermitente delantera y trasera (color ámbar)" },
                                    { label: "Luz de freno (color rojo)", value: "Luz de freno (color rojo)" },
                                    { label: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques", value: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques" },
                                    { label: "Luz de matrícula (blanca)", value: "Luz de matrícula (blanca)" },
                                    { label: "Luz de posición (blanca al frente)", value: "Luz de posición (blanca al frente)" },
                                    { label: "Luz de posición (roja en la parte trasera)", value: "Luz de posición (roja en la parte trasera)" }
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
                                            {u.typeEsAr}
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
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
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
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regla:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
                                items={[
                                    { label: "Bocina / claxon / pito", value: "Bocina / claxon / pito" },
                                    { label: "Cinturón de seguridad", value: "Cinturón de seguridad" },
                                    { label: "Destornillador, si el vehículo tiene tapacubos", value: "Destornillador, si el vehículo tiene tapacubos" },
                                    { label: "Llave de ajuste / de rueda / de cruz / de cruceta", value: "Llave de ajuste / de rueda / de cruz / de cruceta" },
                                    { label: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero", value: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero" },
                                    { label: "Espejo retrovisor (solo uno)", value: "Espejo retrovisor (solo uno)" },
                                    { label: "Espejos retrovisores (dos)", value: "Espejos retrovisores (dos)" },
                                    { label: "Extintor de incendios / matafuegos", value: "Extintor de incendios / matafuegos" },
                                    { label: "Freno de estacionamiento", value: "Freno de estacionamiento" },
                                    { label: "Freno de servicio", value: "Freno de servicio" },
                                    { label: "Lavador de parabrisas", value: "Lavador de parabrisas" },
                                    { label: "Limpiaparabrisas (al menos uno)", value: "Limpiaparabrisas (al menos uno)" },
                                    { label: "Gato hidráulico compatible", value: "Gato hidráulico compatible" },
                                    { label: "Parabrisas", value: "Parabrisas" },
                                    { label: "Parachoques (delantero y trasero)", value: "Parachoques (delantero y trasero)" },
                                    { label: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)", value: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)" },
                                    { label: "Neumáticos", value: "Neumáticos" },
                                    { label: "Rueda de repuesto", value: "Rueda de repuesto" },
                                    { label: "Silenciador de explosiones", value: "Silenciador de explosiones" },
                                    { label: "Triángulo de advertencia", value: "Triángulo de advertencia" },
                                    { label: "Velocímetro", value: "Velocímetro" },
                                    { label: "Faros (blancos o amarillos)", value: "Faros (blancos o amarillos)" },
                                    { label: "Faros (blancos), prohibida la instalación en remolques y semirremolques", value: "Faros (blancos), prohibida la instalación en remolques y semirremolques" },
                                    { label: "Luz de advertencia (ámbar), opcional en remolques y semirremolques", value: "Luz de advertencia (ámbar), opcional en remolques y semirremolques" },
                                    { label: "Luz intermitente delantera y trasera (color ámbar)", value: "Luz intermitente delantera y trasera (color ámbar)" },
                                    { label: "Luz de freno (color rojo)", value: "Luz de freno (color rojo)" },
                                    { label: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques", value: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques" },
                                    { label: "Luz de matrícula (blanca)", value: "Luz de matrícula (blanca)" },
                                    { label: "Luz de posición (blanca al frente)", value: "Luz de posición (blanca al frente)" },
                                    { label: "Luz de posición (roja en la parte trasera)", value: "Luz de posición (roja en la parte trasera)" }
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
                                            {u.typeEsAr}
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
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
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
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regla:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
                                items={[
                                    { label: "Bocina / claxon / pito", value: "Bocina / claxon / pito" },
                                    { label: "Cinturón de seguridad", value: "Cinturón de seguridad" },
                                    { label: "Destornillador, si el vehículo tiene tapacubos", value: "Destornillador, si el vehículo tiene tapacubos" },
                                    { label: "Llave de ajuste / de rueda / de cruz / de cruceta", value: "Llave de ajuste / de rueda / de cruz / de cruceta" },
                                    { label: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero", value: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero" },
                                    { label: "Espejo retrovisor (solo uno)", value: "Espejo retrovisor (solo uno)" },
                                    { label: "Espejos retrovisores (dos)", value: "Espejos retrovisores (dos)" },
                                    { label: "Extintor de incendios / matafuegos", value: "Extintor de incendios / matafuegos" },
                                    { label: "Freno de estacionamiento", value: "Freno de estacionamiento" },
                                    { label: "Freno de servicio", value: "Freno de servicio" },
                                    { label: "Lavador de parabrisas", value: "Lavador de parabrisas" },
                                    { label: "Limpiaparabrisas (al menos uno)", value: "Limpiaparabrisas (al menos uno)" },
                                    { label: "Gato hidráulico compatible", value: "Gato hidráulico compatible" },
                                    { label: "Parabrisas", value: "Parabrisas" },
                                    { label: "Parachoques (delantero y trasero)", value: "Parachoques (delantero y trasero)" },
                                    { label: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)", value: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)" },
                                    { label: "Neumáticos", value: "Neumáticos" },
                                    { label: "Rueda de repuesto", value: "Rueda de repuesto" },
                                    { label: "Silenciador de explosiones", value: "Silenciador de explosiones" },
                                    { label: "Triángulo de advertencia", value: "Triángulo de advertencia" },
                                    { label: "Velocímetro", value: "Velocímetro" },
                                    { label: "Faros (blancos o amarillos)", value: "Faros (blancos o amarillos)" },
                                    { label: "Faros (blancos), prohibida la instalación en remolques y semirremolques", value: "Faros (blancos), prohibida la instalación en remolques y semirremolques" },
                                    { label: "Luz de advertencia (ámbar), opcional en remolques y semirremolques", value: "Luz de advertencia (ámbar), opcional en remolques y semirremolques" },
                                    { label: "Luz intermitente delantera y trasera (color ámbar)", value: "Luz intermitente delantera y trasera (color ámbar)" },
                                    { label: "Luz de freno (color rojo)", value: "Luz de freno (color rojo)" },
                                    { label: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques", value: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques" },
                                    { label: "Luz de matrícula (blanca)", value: "Luz de matrícula (blanca)" },
                                    { label: "Luz de posición (blanca al frente)", value: "Luz de posición (blanca al frente)" },
                                    { label: "Luz de posición (roja en la parte trasera)", value: "Luz de posición (roja en la parte trasera)" }
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
                                            {u.typeEsAr}
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
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
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
                        <Text style={{ fontSize: 18, marginLeft: 0.04 * imageWidth, marginTop: 0.02 * imageWidth, position: 'relative' }}>Regla:</Text>
                        <View style={{ marginLeft: 0.02 * imageHeight, marginTop: 0.023 * imageWidth, height: 0.03 * imageHeight, width: 0.69 * imageWidth }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectType(value)}
                                useNativeAndroidPickerStyle={false}
                                placeholder={{ label: "Cualquier", value: "Qualquer" }}
                                items={[
                                    { label: "Bocina / claxon / pito", value: "Bocina / claxon / pito" },
                                    { label: "Cinturón de seguridad", value: "Cinturón de seguridad" },
                                    { label: "Destornillador, si el vehículo tiene tapacubos", value: "Destornillador, si el vehículo tiene tapacubos" },
                                    { label: "Llave de ajuste / de rueda / de cruz / de cruceta", value: "Llave de ajuste / de rueda / de cruz / de cruceta" },
                                    { label: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero", value: "Cadena o cable, si el vehículo dispone de dispositivo de enganche de remolque ligero" },
                                    { label: "Espejo retrovisor (solo uno)", value: "Espejo retrovisor (solo uno)" },
                                    { label: "Espejos retrovisores (dos)", value: "Espejos retrovisores (dos)" },
                                    { label: "Extintor de incendios / matafuegos", value: "Extintor de incendios / matafuegos" },
                                    { label: "Freno de estacionamiento", value: "Freno de estacionamiento" },
                                    { label: "Freno de servicio", value: "Freno de servicio" },
                                    { label: "Lavador de parabrisas", value: "Lavador de parabrisas" },
                                    { label: "Limpiaparabrisas (al menos uno)", value: "Limpiaparabrisas (al menos uno)" },
                                    { label: "Gato hidráulico compatible", value: "Gato hidráulico compatible" },
                                    { label: "Parabrisas", value: "Parabrisas" },
                                    { label: "Parachoques (delantero y trasero)", value: "Parachoques (delantero y trasero)" },
                                    { label: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)", value: "Neumáticos (límites de carga, dimensiones, velocidad, TWI, 1,6mm, recomendado por el fabricante)" },
                                    { label: "Neumáticos", value: "Neumáticos" },
                                    { label: "Rueda de repuesto", value: "Rueda de repuesto" },
                                    { label: "Silenciador de explosiones", value: "Silenciador de explosiones" },
                                    { label: "Triángulo de advertencia", value: "Triángulo de advertencia" },
                                    { label: "Velocímetro", value: "Velocímetro" },
                                    { label: "Faros (blancos o amarillos)", value: "Faros (blancos o amarillos)" },
                                    { label: "Faros (blancos), prohibida la instalación en remolques y semirremolques", value: "Faros (blancos), prohibida la instalación en remolques y semirremolques" },
                                    { label: "Luz de advertencia (ámbar), opcional en remolques y semirremolques", value: "Luz de advertencia (ámbar), opcional en remolques y semirremolques" },
                                    { label: "Luz intermitente delantera y trasera (color ámbar)", value: "Luz intermitente delantera y trasera (color ámbar)" },
                                    { label: "Luz de freno (color rojo)", value: "Luz de freno (color rojo)" },
                                    { label: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques", value: "Luz de marcha atrás (blanca), opcional en remolques y semirremolques" },
                                    { label: "Luz de matrícula (blanca)", value: "Luz de matrícula (blanca)" },
                                    { label: "Luz de posición (blanca al frente)", value: "Luz de posición (blanca al frente)" },
                                    { label: "Luz de posición (roja en la parte trasera)", value: "Luz de posición (roja en la parte trasera)" }
                                ]} />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}