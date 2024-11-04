import {Provider} from "react-redux";
import {store} from "./api/store";
import {AppContent} from "./ui/AppContent";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"; // изменен импорт
import {CharacterDetails} from "./ui/CharacterDetails";
import {Character} from "./types/types";


export type RootStackParamList = {
    Characters: undefined;
    Character: { character: Character };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator initialRouteName="Characters">
                    <Stack.Screen name="Characters"
                                  component={AppContent}
                                  options={{headerTitleStyle: {fontWeight: 'bold', fontSize: 22}}}/>
                    <Stack.Screen
                        name="Character"
                        component={CharacterDetails}
                        options={
                            {
                                title: "Character details",
                                headerTitleStyle: {fontWeight: 'bold', fontSize: 20}
                            }
                        }
                    />
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
