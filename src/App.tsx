import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Settings, CreateActivity, AddPhotos} from './screens';
import {useRequestPermissions, useCreateMainFolder} from './hooks';
import {ActivityIndicator, Text, View} from 'react-native';
import {SettingsProvider} from './context/SettingsProvider';
import 'react-native-gesture-handler';
import {PhotographState} from './models';

export type ActivitiesStackParamsList = {
  Home: undefined;
  CreateActivity: undefined;
  AddPhotos: {activityId: string; photoStates?: PhotographState[]};
  ListPhotos: undefined;
};

export type MainDrawerStackParamList = {
  Activities: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<ActivitiesStackParamsList>();
const Drawer = createDrawerNavigator<MainDrawerStackParamList>();

const ActivitiesStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CreateActivity" component={CreateActivity} />
      <Stack.Screen
        name="AddPhotos"
        component={AddPhotos}
        options={({route}) => ({
          title: `Actividad - ${route.params.activityId}`,
        })}
      />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  const {appHasRequiredPermissions, isLoading, isError} =
    useRequestPermissions();

  const {
    isLoading: isCreateMainFolderLoading,
    isError: isErrorCreateMainFolderError,
  } = useCreateMainFolder();

  if (isLoading || isCreateMainFolderLoading) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isError || isErrorCreateMainFolderError) {
    return (
      <View style={{flex: 1}}>
        <Text>
          Ocurrio un error al solicitar los permisos necesarios para el
          funcionamiento de la aplicación
        </Text>
      </View>
    );
  }

  if (!appHasRequiredPermissions) {
    return (
      <View style={{flex: 1}}>
        <Text>
          No tienes los permisos necesarios para ejecutar esta aplicación
        </Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <SettingsProvider>
        <Drawer.Navigator initialRouteName="Activities">
          <Drawer.Screen name="Activities" component={ActivitiesStack} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </SettingsProvider>
    </NavigationContainer>
  );
};

export default App;
