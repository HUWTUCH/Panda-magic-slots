import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet, View,
} from 'react-native';
import {LoaderScreenPage} from "./src/components/LoderPage/LoaderScreen.tsx";
import {OnBoardOne} from "./src/components/OnBoardPages/OnBoardPageOne/PageOne.tsx";
import {OnBoardGlob} from "./src/components/OnBoardPages/OnBoard/OnBoard.tsx";

function App(): React.JSX.Element {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => {
      setIsSplashVisible(false)
    }, 3000);
    return () => clearTimeout(start);
  }, [])

  if (isSplashVisible) {
    return (
        <View>
          <LoaderScreenPage />
        </View>
    );
  }

  return (
    <View>
      <OnBoardGlob />
      {/*<ActivityIndicator size="large" color="#00ff00" />*/}
    </View>
  );
}

// const styles = StyleSheet.create({
//
// });

export default App;
