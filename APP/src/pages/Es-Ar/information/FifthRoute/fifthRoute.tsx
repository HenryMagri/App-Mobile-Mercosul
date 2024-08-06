import React, { useContext } from 'react';
import { Text, ScrollView, Dimensions, View } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Leis from '../../../../icons/livro-de-leis.png';

const imageWidth = Dimensions.get('window').width;

const FifthRoute = () => {

    const { selectSize } = useContext(SelectSizeContext);

    return (
        <View style={{ height: "85%" }}>
            <ScrollView
                style={{ backgroundColor: 'white' }}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ backgroundColor: '#3f0054', width: imageWidth, height: 0.32 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
                        <Image source={Leis} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>DERECHO DE DEFENSA Y RECURSO</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Luego de ser notificado, el conductor o propietario podrá interponer defensa y/o recurso de apelación contra la infracción dentro del plazo definido en la notificación, ante el organismo emisor, independientemente del pago de la multa.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» La eventual interposición de defensa o recurso de apelación no lo libera de la obligación de pagar la multa antes de que el vehículo abandone el territorio nacional ni implica la liberación del vehículo retenido antes de ese pago.</Text>
                        <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
                            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>La petición de defensa o apelación debe estar escrita en portugués y debe incluirse en ella, para recibir la comunicación de la decisión, una dirección de correo en Brasil o una dirección de correo electrónico, según corresponda.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FifthRoute;