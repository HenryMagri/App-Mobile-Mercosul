import React, { useContext } from 'react';
import { Text, ScrollView, Linking, Dimensions, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Documents from '../../../../icons/documento.png';
import Button from '../../../../icons/buttonEs.png';

const imageWidth = Dimensions.get('window').width;

const ImageButton = ({ onPress, widthSize, heightSize, margintopSize }: { onPress: any, widthSize: any, heightSize: any, margintopSize: any }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: widthSize, height: heightSize, marginTop: margintopSize }}>
      <Image source={Button} style={{ width: '100%', height: '100%' }} />
    </TouchableOpacity>
  );
};

const FirstRoute = () => {

  const { selectSize } = useContext(SelectSizeContext);

  return (
    <View style={{ height: "85%" }}>
      <ScrollView
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{ flexGrow: 1 }}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ backgroundColor: '#34aa45', width: imageWidth, height: 0.25 * imageWidth, flexDirection: 'row', alignItems: 'center', padding: 5, elevation: 6, shadowOpacity: 0.2, shadowColor: "black" }}>
            <Image source={Documents} style={{ width: 0.15 * imageWidth, height: 0.15 * imageWidth }} />
            <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth }}>DOCUMENTOS OBLIGATORIOS</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO OFICIAL DE IDENTIFICACIÓN O PASAPORTE</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Todos los conductores y pasajeros deberán portar un documento de identificación personal original, expedido por un organismo oficial de su país de origen, de conformidad con la relación acordada entre los países.</Text>
            <ImageButton onPress={() => { Linking.openURL('https://drive.google.com/file/d/1HgPZE6fnD6ZVjJ1f4Ik-6rZw9JxgCzaM/view') }} widthSize={selectSize * imageWidth * 0.023} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO DE COMPROBACIÓN DE ENTRADA A BRASIL</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Para efectos de reconocimiento de la licencia de conducir extranjera, el conductor deberá comprobar su tiempo de permanencia regular en Brasil cada vez que conduzca el vehículo;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) La prueba de entrada a Brasil, para efectos del reconocimiento de títulos extranjeros, podrá ser demostrada por medio de un documento físico o digital proporcionado por la Policía Federal de Brasil, o mediante registro de ingreso en el pasaporte;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) La Tarjeta de Tráfico Fronterizo Local no es suficiente para acreditar la fecha de entrada del extranjero en Brasil, para efectos del reconocimiento de la licencia extranjera.</Text>
            <ImageButton onPress={() => { Linking.openURL('https://portaldeimigracao.mj.gov.br/images/portarias/PORTARIA_Nº_11.264_DE_24_DE_JANEIRO_DE_2020.pdf') }} widthSize={selectSize * imageWidth * 0.023} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>En caso de ingreso o salida por vía terrestre, el control migratorio se realizará en el lugar designado por la Policía Federal para tal efecto.</Text>
            </View>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>LICENCIA DE CONDUCIR
            </Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) La licencia de conducir sólo será reconocida si el conductor es mayor de 18 años, presenta el documento original, este se encuentra dentro del plazo de vigencia y está acompañado por un documento de identificación oficial;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) La categoría de la licencia debe ser compatible con el vehículo que conduce;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) El conductor deberá comprobar su fecha de ingreso regular para efectos del cómputo del plazo máximo para el reconocimiento de su licencia extranjera en Brasil;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) El ciudadano brasileño con licencia del exterior, que desee conducir en Brasil con su licencia extranjera, deberá comprobar, en el momento de fiscalización, que había mantenido residencia normal en el país de origen del documento por un período no inferior a 6 (seis) meses anteriores a la expedición de la licencia, por medio de la presentación de una declaración o certificado de la autoridad consular brasileña en el respectivo país;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>e) Los representantes en misión diplomática en Brasil podrán conducir en el territorio nacional con licencia extranjera, sin límite de tiempo, hasta el término de su misión.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>f) Se permite la presentación del Permiso de Conducir Internacional – PIDacompañado de una licencia de conducir extranjera, sólo para países signatarios de la Convención de Viena sobre Circulación Vial.</Text>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>No se requiere traducción jurada ni registro de reconocimiento de títulos extranjeros.</Text>
            </View>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO DE REGISTRO Y PROPIEDAD DEL VEHÍCULO</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Si el conductor es el propietario del vehículo, será suficiente la presentación del documento original de propiedad;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Para los vehículos registrados en los Estados Partes del Mercosur, así como para Perú, en caso de que el conductor no sea el propietario y este último no esté presente en el vehículo, se requerirá una autorización del propietario, mediante un documento público o privado con firma reconocida. Los cónyuges o familiares del propietario hasta el segundo grado de consanguinidad están exentos de esta disposición.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Para vehículos matriculados en los Estados Partes del Mercosur, que sean propiedad de Empresas de Alquiler de Vehículos (EAV), basta presentar la Autorización de Circulación en el Mercosur (ACM);</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) Para conductores provenientes de países asociados al Mercosur, no se requiere autorización del propietario.</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.93 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>CERTIFICADO DE PÓLIZA DE SEGURO DE RESPONSABILIDAD CIVIL INTERNACIONAL (TARJETA VERDE)</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Para la circulación de vehículos del tipo turismo, categoría privada o de alquiler, matriculados en los Estados Partes del Mercosur, se requerirá la adquisición de un Seguro de Responsabilidad Civil Internacional del Propietario y/o Conductor y la presentación del certificado en formulario bilingüe (portugués y español);</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Este seguro deberá haber sido contratado en el país de registro del vehículo;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Para vehículos matriculados en los Estados Partes del Mercosur, propiedad de una Empresa de Alquiler de Vehículos (EAV), el certificado de póliza de seguro podrá ser sustituido por la Autorización de Circulación en el Mercosur (ACM);</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) Para la circulación de vehículos matriculados en países asociados al Mercosur, no existe el requisito de Seguro Tarjeta Verde.</Text>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>No son válidos los seguros internacionales emitidos o representados en Brasil por agentes de seguros, contadores, bufetes de abogados, otros profesionales independientes, personas físicas o jurídicas y asociaciones que no estén comprendidas en el concepto de Compañía de Seguros.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FirstRoute;