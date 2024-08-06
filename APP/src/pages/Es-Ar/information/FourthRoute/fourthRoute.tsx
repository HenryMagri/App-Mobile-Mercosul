import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Condutor from '../../../../icons/condutor.png';

const imageWidth = Dimensions.get('window').width;

const FourthRoute = () => {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "85%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#ff8500', width: imageWidth, height: 0.32 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={Condutor} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>CONDUCTOR BRASILEÑO RESIDENTE Y CON LICENCIA EN ESTADOS PARTES Y ASOCIADOS DEL MERCOSUR</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Los conductores brasileños residentes y con licencia del exterior, para que su licencia extranjera sea reconocida en Brasil, deben comprobar, por medio de la presentación de un certificado o declaración consular, que residieron en el país de origen del documento, al menos 6 (seis) meses antes de la respectiva emisión de esa licencia.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Una vez cumplido este requisito, al ser fiscalizado, también deberá comprobar que su último ingreso al territorio nacional sucedió menos de 180 días antes de tal fiscalización.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Finalmente, deberá presentar su licencia extranjera, dentro del plazo de vigencia, compatible con el vehículo que conduce y acompañada del documento de identificación emitido por el país de origen de esa licencia.</Text>
                        <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
                            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>No se reconocerá la licencia extranjera de un conductor brasileño que tenga, pendiente de cumplimiento en Brasil, una pena de suspensión del derecho a conducir o la revocación de la Licencia Nacional de Conducir.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FourthRoute;