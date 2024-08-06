import React, { useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import SelectSizeProvider from './src/Size/SelectSizeProvider';
import LoadingIcon from "./src/icons/loading.png";

import Routes from "./src/routes";

const imageHeight = Dimensions.get('window').height;
const imageWidth = Dimensions.get('window').width;

export default function App() {

  const [shouldRender, setShouldRender] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShouldRender(true);
    }, 1200);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image source={LoadingIcon} style={{ position: 'absolute', width: imageWidth, height: 1.15 * imageHeight }} />
      {shouldRender &&
        <SelectSizeProvider>
          <Routes />
        </SelectSizeProvider>

      }
    </View>
  );
}