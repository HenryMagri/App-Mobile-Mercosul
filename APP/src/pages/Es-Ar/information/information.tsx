import * as React from 'react';
import { Text, useWindowDimensions, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import SecondRoute from './SecondRoute/secondRoute';
import FirstRoute from './FirstRoute/firstRoute';
import ThirdRoute from './ThirdRoute/thirdroute';
import FourthRoute from './FourthRoute/fourthRoute';
import FifthRoute from './FifthRoute/fifthRoute';
import SixthRoute from './SixthRoute/sixthRoute';
import SeventhRoute from './SeventhRoute/seventhRoute';

const imageWidth = Dimensions.get('window').width;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SeventhRoute,
});

export default function Documents() {

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'DOCUMENTOS', },
    { key: 'second', title: 'CONDICIONES DEL VEHÍCULO' },
    { key: 'third', title: 'REGLAS' },
    { key: 'fourth', title: 'CONDUCTOR RESIDENTE FUERA DE BRASIL' },
    { key: 'fifth', title: 'DERECHO DE DEFENSA Y RECURSO' },
    { key: 'sixth', title: 'GLOSARIO' },
    { key: 'seventh', title: 'BIBLIOGRAFÍA' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          activeColor="black"
          inactiveColor="black"
          indicatorStyle={{ backgroundColor: '#c6c6c6', height: 1 }}
          activeBackgroundColor="white"
          inactiveBackgroundColor="blue"
          labelStyle={{ fontSize: 15, textAlign: 'center' }}
          style={{ backgroundColor: 'white', elevation: 6, shadowOpacity: 0.2, shadowColor: "black", shadowRadius: 10, shadowOffset: { width: -2, height: 0 }, }}
          scrollEnabled
        />
      )}
    />
  );

}