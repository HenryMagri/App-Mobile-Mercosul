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
                        <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth, color: 'white' }}>DIREITO DE DEFESA E RECURSO</Text>
                    </View>
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» Após ser notificado, condutor ou proprietário poderá interpor a defesa e/ou recurso da infração no prazo definido na notificação, perante o órgão autuador, independente do pagamento da multa.</Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>» A eventual interposição de defesa ou recurso, não ilide a exigência do pagamento da multa antes da saída do veículo do território nacional ou a liberação do veículo retido até o efetivo pagamento.</Text>
                        <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
                            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>A defesa ou o recurso deverão ser redigidos no idioma português e o endereço indicado na petição para comunicação da decisão deverá ser no Brasil ou endereço eletrônico (e-mail), conforme o caso.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FifthRoute;