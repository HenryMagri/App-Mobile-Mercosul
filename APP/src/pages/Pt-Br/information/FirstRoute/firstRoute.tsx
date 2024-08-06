import React, { useContext } from 'react';
import { Text, ScrollView, Linking, Dimensions, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import SelectSizeContext from '../../../../Size/SelectSizeContext';

import Documents from '../../../../icons/documento.png';
import Button from '../../../../icons/button.png';

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
            <Text style={{ fontWeight: 'bold', fontSize: 20, width: 0.8 * imageWidth, textAlign: 'center', marginLeft: -0.05 * imageWidth }}>DOCUMENTOS DE PORTE OBRIGATÓRIO </Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO DE IDENTIFICAÇÃO OFICIAL OU PASSAPORTE</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Todos os condutores e passageiros deverão portar um documento de identificação pessoal, original, expedido por órgão oficial do país de origem, conforme relação acordada entre os países. </Text>
            <ImageButton onPress={() => { Linking.openURL('https://drive.google.com/file/d/1HgPZE6fnD6ZVjJ1f4Ik-6rZw9JxgCzaM/view') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO COMPROBATÓRIO DE ENTRADA NO BRASIL</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Para fins de reconhecimento do documento de habilitação estrangeiro, o condutor deverá comprovar o tempo de estada regular no Brasil sempre que estiver na direção do veículo.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) A comprovação de entrada no Brasil, para fins de reconhecimento da habilitação estrangeira, poderá se dar por meio de documento físico ou digital fornecido pela Polícia Federal do Brasil, ou pelo registro de entrada no passaporte;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) A Carteira de Trânsito Vicinal Fronteiriço não é suficiente para comprovar a data de entrada do estrangeiro no Brasil para fins de reconhecimento da habilitação estrangeira.</Text>
            <ImageButton onPress={() => { Linking.openURL('https://portaldeimigracao.mj.gov.br/images/portarias/PORTARIA_Nº_11.264_DE_24_DE_JANEIRO_DE_2020.pdf') }} widthSize={selectSize * imageWidth * 0.019} heightSize={selectSize * imageWidth * 0.0073} margintopSize={selectSize} />
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Na hipótese de entrada ou saída por via terrestre, o controle migratório ocorrerá no local designado pela Polícia Federal para esse fim.</Text>
            </View>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO DE HABILITAÇÃO DO CONDUTOR</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) O documento de habilitação somente será reconhecido se o condutor for maior de 18 anos, for apresentado no original, estiver dentro do prazo de validade e acompanhado do documento de identificação oficial;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) A categoria da habilitação deverá ser compatível com o veículo conduzido;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) O condutor deverá comprovar a data de entrada regular no Brasil para fins de cômputo do prazo máximo de reconhecimento de sua habilitação estrangeira no Brasil;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) O cidadão brasileiro habilitado no exterior, que pretender conduzir no Brasil com a habilitação estrangeira, deverá comprovar, no ato da fiscalização, que mantinha residência normal no país de origem do documento por um período não inferior a 6 (seis) meses quando do momento da expedição da habilitação, através de apresentação de atestado, declaração ou certidão da autoridade consular do Brasil no respectivo país;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>e) Os representantes em missão diplomática no Brasil poderão conduzir no território nacional com a habilitação estrangeira, sem limite de prazo, até o fim da respectiva missão.</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>f) É admitida a apresentação da Permissão Internacional para Dirigir – PID acompanhada do documento de habilitação estrangeiro, somente para os países signatários da Convenção sobre Trânsito Viário de Viena.</Text>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7 }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Não é exigida a tradução juramentada e o registro de reconhecimento da habilitação estrangeira.</Text>
            </View>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.85 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>DOCUMENTO DE MATRÍCULA E DE PROPRIEDADE DO VEÍCULO</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Se o condutor for o proprietário do veículo basta a apresentação do documento de matrícula original;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Para os veículos matriculados nos Estados Partes do Mercosul, bem como para o Peru, caso o condutor não for o proprietário e este não estiver presente no veículo, deverá ser portada autorização do proprietário, mediante documento público ou particular com firma reconhecida, ficando dispensados os cônjuges ou familiares do proprietário, até segundo grau de consanguinidade;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Para os veículos registrados nos Estados Partes do Mercosul, de propriedade das Empresas Locadoras de Veículos (ELV), basta portar a Autorização para Circulação no Mercosul (ACM);</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) Para os condutores dos países associados ao Mercosul não há exigência da autorização do proprietário.</Text>
          </View>
          <View style={{ width: imageWidth, alignItems: 'center', marginTop: 0.05 * imageWidth }}>
            <Text style={{ fontWeight: 'bold', fontSize: 1.2 * selectSize, width: 0.93 * imageWidth, textAlign: 'center', marginTop: 0.05 * imageWidth }}>CERTIFICADO DE APÓLICE DE SEGURO INTERNACIONAL DE RESPONSABILIDADE CIVIL (CARTA VERDE)</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.1 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>a) Para a circulação de veículos do tipo automóvel de passeio, de categoria particular ou aluguel, registrados nos Estados Partes do Mercosul, será exigido o Seguro Internacional de Responsabilidade Civil do Proprietário e/ ou Condutor, sendo obrigatório o porte do certificado em formulário bilíngue (português e espanhol);</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>b) Este seguro deverá, obrigatoriamente, ter sido contratado no país de matrícula do veículo;</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>c) Para os veículos registrados nos Estados Partes do Mercosul, de propriedade de Empresa Locadora de Veículos (ELV), o certificado de apólice do seguro poderá ser substituído pela Autorização para Circulação no Mercosul (ACM);</Text>
            <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, marginTop: 0.04 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>d) Para a circulação dos veículos matriculados nos países associados ao Mercosul não há exigência do Seguro Carta Verde.</Text>
            <View style={{ backgroundColor: '#f1f1f2', marginTop: 0.03 * imageWidth, padding: 7, marginBottom: 0.2 * imageWidth }}>
              <Text style={{ textAlign: 'justify', width: 0.93 * imageWidth, fontSize: selectSize, color: '#58585b', fontFamily: 'sans-serif', fontWeight: '600' }}>Não são válidos seguros internacionais emitidos ou que tenham como representantes no Brasil escritórios despachantes, contadores, escritórios de advocacia, outros profissionais liberais, pessoas físicas ou jurídicas e associações que não se enquadrem no conceito de Companhia de Seguro.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default FirstRoute;