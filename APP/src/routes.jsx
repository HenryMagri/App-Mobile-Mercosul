import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Dimensions } from 'react-native';
import React, { useState, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Image } from 'expo-image';
import SelectSizeContext from './Size/SelectSizeContext';

import LandingPt from './pages/Pt-Br/landing/landing';
import InformationPt from './pages/Pt-Br/information/information';
import EquipmentsPt from './pages/Pt-Br/equipments/equipments';
import TouristPt from './pages/Pt-Br/tourist/tourist';
import FinesPt from './pages/Pt-Br/fines/fines';
import LandingEs from './pages/Es-Ar/landing/landing';
import InformationEs from './pages/Es-Ar/information/information';
import EquipmentsEs from './pages/Es-Ar/equipments/equipments';
import TouristES from './pages/Es-Ar/tourist/tourist';
import FinesES from './pages/Es-Ar/fines/fines';

import BrasilIcon from './icons/brasil.png';
import BrasilEsIcon from './icons/brasilEs.png';
import LandingON from './icons/landingON.png';
import LandingOFF from './icons/landingOFF.png';
import InformationON from './icons/informationON.png';
import InformationOFF from './icons/informationOFF.png';
import EquipmentsON from './icons/equipmentsON.png';
import EquipmentsOFF from './icons/equipmentsOFF.png';
import TouristON from './icons/guia-de-viagemON.png';
import TouristOFF from './icons/guia-de-viagemOFF.png';
import FinesON from './icons/multa-administrativaON.png';
import FinesOFF from './icons/multa-administrativaOFF.png';

const Tab = createBottomTabNavigator();
const imageWidth = Dimensions.get('window').width;
const imageHeight = Dimensions.get('window').height;

export default function Routes() {

  const [selectLanguage, setSelectLanguage] = useState('Pt-Br');
  const { selectSize, setSelectSize } = useContext(SelectSizeContext);

  if (selectLanguage == "Pt-Br") {

    return (
      <View style={{ height: '100%', zIndex: 20 }}>
        <NavigationContainer style={{ position: 'absolute' }}>
          <Tab.Navigator
            screenOptions={{
              lazy: true,
              tabBarStyle: { position: 'absolute', width: imageWidth, height: 0.12 * imageHeight, paddingBottom: 10, borderTopColor: "#c6c6c6", borderTopWidth: 1 },
              tabBarLabelPosition: "below-icon",
              tabBarLabelStyle: { fontSize: 12, fontFamily: 'sans-serif', fontWeight: 'regular', color: "black" },
              headerStyle: { height: 0.18 * imageHeight, borderBottomColor: "#c6c6c6", borderBottomWidth: 1 },
              headerTitleStyle: { fontSize: 10, fontFamily: 'sans-serif', fontWeight: 'regular', color: "black" },
              headerTitleContainerStyle: { paddingTop: "15%" },
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Image source={BrasilIcon} style={{ width: 0.5 * imageWidth, height: 0.37 * imageWidth, marginTop: -0.05 * imageHeight }} contentFit='cover' />
              ),
            }}
          >
            <Tab.Screen
              initialParams={selectSize}
              name="Início"
              component={LandingPt}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={LandingON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={LandingOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Informações"
              component={InformationPt}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={InformationON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={InformationOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Equipamentos"
              component={EquipmentsPt}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={EquipmentsON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={EquipmentsOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Turismo"
              component={TouristPt}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={TouristON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={TouristOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Multas"
              component={FinesPt}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={FinesON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={FinesOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
          </Tab.Navigator>
        </NavigationContainer>

        <View style={{ position: 'absolute', marginTop: '20%', marginLeft: '80%', width: "15%" }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectLanguage(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Idioma", value: 10 }}
            items={[
              { label: 'Português', value: "Pt-Br" },
              { label: 'Espanhol', value: "Es-Ar" },
            ]} />
        </View>

        <View style={{ position: 'absolute', marginTop: '20%', marginLeft: '8%', width: "15%" }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectSize(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Fonte", value: 10 }}
            items={[
              { label: "Pequena", value: 10 },
              { label: "Média", value: 15 },
              { label: "Grande", value: 20 },
            ]} />
        </View>
      </View>
    );

  } else {

    return (
      <View style={{ height: '100%', zIndex: 20 }}>
        <NavigationContainer style={{ position: 'absolute', }}>
          <Tab.Navigator
            screenOptions={{
              lazy: true,
              tabBarStyle: { position: 'absolute', width: imageWidth, height: 0.12 * imageHeight, paddingBottom: 10, borderTopColor: "#c6c6c6", borderTopWidth: 1 },
              tabBarLabelPosition: "below-icon",
              tabBarLabelStyle: { fontSize: 12, fontFamily: 'sans-serif', fontWeight: 'regular', color: "black" },
              headerStyle: { height: 0.18 * imageHeight, borderBottomColor: "#c6c6c6", borderBottomWidth: 1 },
              headerTitleStyle: { fontSize: 10, fontFamily: 'sans-serif', fontWeight: 'regular', color: "black" },
              headerTitleContainerStyle: { paddingTop: "15%" },
              headerTitleAlign: 'center',
              headerTitle: () => (
                <Image source={BrasilEsIcon} style={{ width: 0.5 * imageWidth, height: 0.37 * imageWidth, marginTop: -0.05 * imageHeight }} contentFit='cover' />
              ),
            }}
          >
            <Tab.Screen
              initialParams={selectSize}
              name="Comienzo"
              component={LandingEs}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={LandingON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={LandingOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Información"
              component={InformationEs}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={InformationON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={InformationOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Equipo"
              component={EquipmentsEs}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={EquipmentsON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={EquipmentsOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Turismo"
              component={TouristES}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={TouristON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={TouristOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
            <Tab.Screen
              initialParams={selectSize}
              name="Multas"
              component={FinesES}
              options={{
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => (focused ? <Image source={FinesON} style={{ width: 40, height: 40 }} contentFit='cover' /> : <Image source={FinesOFF} style={{ width: 40, height: 40 }} contentFit='cover' />)
              }} />
          </Tab.Navigator>
        </NavigationContainer>

        <View style={{ position: 'absolute', marginTop: '20%', marginLeft: '80%', width: "15%" }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectLanguage(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Idioma", value: 10 }}
            items={[
              { label: 'Português', value: "Pt-Br" },
              { label: 'Espanhol', value: "Es-Ar" },
            ]} />
        </View>

        <View style={{ position: 'absolute', marginTop: '20%', marginLeft: '8%', width: "15%" }}>
          <RNPickerSelect
            onValueChange={(value) => setSelectSize(value)}
            useNativeAndroidPickerStyle={false}
            placeholder={{ label: "Fonte", value: 10 }}
            items={[
              { label: "Pequena", value: 10 },
              { label: "Média", value: 15 },
              { label: "Grande", value: 20 },
            ]} />
        </View>
      </View>
    );
  }
}