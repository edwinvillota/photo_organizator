import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Home,
  Settings,
  CreateActivity,
  AddPhotos,
  ActivitiesRecord,
} from './screens';
import {useRequestPermissions, useCreateMainFolder} from './hooks';
import {SettingsProvider} from './context/SettingsProvider';
import 'react-native-gesture-handler';
import {PhotographState} from './models';
import {LoadingView, ErrorView} from './components/atoms';

export type ActivitiesStackParamsList = {
  Home: undefined;
  CreateActivity: undefined;
  AddPhotos: {activityId: string; photoStates?: PhotographState[]};
  ActivitiesRecord: undefined;
  Error: {error: unknown};
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
      <Stack.Screen
        name="CreateActivity"
        component={CreateActivity}
        options={{title: 'Nueva actividad'}}
      />
      <Stack.Screen
        name="AddPhotos"
        component={AddPhotos}
        options={({route}) => ({
          title: `Actividad - ${route.params.activityId}`,
        })}
      />
      <Stack.Screen
        name="ActivitiesRecord"
        component={ActivitiesRecord}
        options={{title: 'Actividades ejecutadas'}}
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
    return <LoadingView />;
  }

  if (isError || isErrorCreateMainFolderError) {
    return (
      <ErrorView
        error="Ocurrio un error al solicitar los permisos necesarios para el
      funcionamiento de la aplicación"
      />
    );
  }

  if (!appHasRequiredPermissions) {
    return (
      <ErrorView error="No tienes los permisos necesarios para ejecutar esta aplicación" />
    );
  }

  return (
    <NavigationContainer>
      <SettingsProvider>
        <Drawer.Navigator initialRouteName="Activities">
          <Drawer.Screen
            name="Activities"
            component={ActivitiesStack}
            options={{title: 'Actividades'}}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{title: 'Preferencias'}}
          />
        </Drawer.Navigator>
      </SettingsProvider>
    </NavigationContainer>
  );
};

export default App;
