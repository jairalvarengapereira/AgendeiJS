import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbaCalendar from "../abacalendar/abacalendar";
import AbaHome from "../abahome/abahome";
import AbaProfile from "../abaprofile/abaprofile";
import { COLORs } from "../../assets/constants/theme";
import icon from "../../assets/constants/icon";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Main(){
  return <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AbaHome} options={{
        headerTitleAlign: "center",
        headerTitle:() =>{
          return <Image 
            source={icon.logo3}
            style={{ width: 45, height: 55 }}
            >
          </Image>
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          return <Image 
            source={icon.home}
            style={{ 
              width: 35, 
              height: 35,
              opacity: focused ? 1 : .3
            }}>
          </Image>
        }
      }} />
      <Tab.Screen name="Meus Agendamentos" component={AbaCalendar} options={{
        headerTitleAlign: "center",
        headerTintColor: COLORs.blue2,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          return <Image 
            source={icon.calendar}
            style={{ 
              width: 35, 
              height: 35,
              opacity: focused ? 1 : .3
            }}>
          </Image>
        }

      }}/>
      <Tab.Screen name="Meu Perfil" component={AbaProfile} options={{
        headerTitleAlign: "center",
        headerTintColor: COLORs.blue2,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          return <Image 
            source={icon.profile}
            style={{ 
              width: 23, 
              height: 30,
              opacity: focused ? 1 : .3
            }}>
          </Image>
        }
      }}/>
      {/* <Tab.Screen name="Appointments" component={AppointmentsScreen} /> */}
    </Tab.Navigator>
  </NavigationContainer>
}
export default Main;