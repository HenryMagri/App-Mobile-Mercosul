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
                    <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Autorización de Circulación en el Mercosur (ACM):<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> es el documento emitido por la Empresa de Alquiler de Vehículos – ELV, que contendrá las principales informaciones del contrato de alquiler del vehículo, incluyendo los datos de la empresa de alquiler, del/los conductor(es) y del seguro.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Autorización del Propietario:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> es la autorización que otorga el propietario de un vehículo extranjero matriculado en un Estado Parte del Mercosur, para que un tercero, residente en el país donde está matriculado el vehículo, pueda conducirlo en su ausencia.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Tarjeta Azul o Tarjeta de Identificación de Autorizado para Conducir:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>  documento adoptado por Argentina, que reemplaza las autorizaciones notariales requeridas para conducir automóviles de terceros que, para ser expedidas, requieren la documentación legal correspondiente.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Certificado de Póliza de Seguro Internacional del Mercosur:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> es el documento obligatorio para un vehículo matriculado originario de Estados Partes del Mercosur, en circulación internacional, que acredita la contratación de una Póliza de Seguro de Responsabilidad Civil internacional por daños causados a personas u objetos no transportados en el vehículo, con cobertura en los Estados Partes en los que se distribuya. Se llama Tarjeta Verde y debe presentarse en original.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Conductor Extranjero:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> Cualquier ciudadano extranjero o brasileño no residente en Brasil o residente por menos de 180 días, con licencia en el extranjero.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Empresa de Alquiler de Vehículos (EAV):<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> es una empresa constituida de conformidad con la legislación del Estado parte donde tiene su sede, estando registrada periódicamente ante la autoridad aduanera, cuya actividad es el alquiler de vehículos terrestres para circular en territorio del Mercosur.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Estados Partes del Mercosur:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> son los países que forman parte del Mercado Común del Sur – Mercosur, en calidad de miembros plenos. Son los cuatro fundadores del bloque: Brasil, Argentina, Paraguay y Uruguay, y también Venezuela, actualmente suspendida.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Estados Asociados del Mercosur:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> son países que se incorporaron al bloque después de su fundación. Pueden participar, en calidad de invitados, en reuniones de órganos de la estructura institucional del Mercosur para discutir temas de interés común, pero sin derecho a voto. Son siete: Bolivia, Chile, Colombia, Ecuador, Perú, Guyana y Surinam.</Text></Text>
                        <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: 1.01 * selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: 'bold', marginBottom: 0.2 * imageWidth }}>Permiso de conducir internacional:<Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}> es el documento de permiso de conducción internacional, que pueden expedir todos los países signatarios de la Convención Sobre Circulación Por Carretera, celebrada en Viena en 1968.</Text></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SixthRoute;