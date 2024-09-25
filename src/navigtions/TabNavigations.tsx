
import HomeScreen from "../screens/mainScreens/HomeScreen";
import UploadScreen from "../screens/mainScreens/UploadScreen";
import AddItem from "../screens/mainScreens/UploadScreen/AddItem";
import ItemList from "../screens/mainScreens/UploadScreen/ItemDetails";
import UploadStackNav from "./UploadStackNav";
import { HomeStackParamList } from "./navigationTypes";
import { AntDesign } from "@expo/vector-icons";
// import {
//   createNativeStackNavigator,
//   BottomTabNavigationOptions,
// } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = () => {};
// const Tab = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeStackParamList>();


const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ header: () => null }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "ALLRESULTS",
            tabBarIcon: ({ size, focused, color }) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
        />
        {/* <Tab.Screen name="UploadScreen" component={UploadScreen} />
        <Tab.Screen name="AddItem" component={AddItem} /> */}
        <Tab.Screen
          name="UploadStackNav"
          component={UploadStackNav}
          options={{
            tabBarLabel: "UPLOAD",
            tabBarIcon: ({ size, focused, color }) => (
              <AntDesign name="cloudupload" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
