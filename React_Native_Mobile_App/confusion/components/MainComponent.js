import React, {Component} from 'react';
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Constants from 'expo-constants';
import Contact from "./ContactComponent";
import About from "./AboutComponent";


const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);
const AppMenu = createAppContainer(MenuNavigator);


const HomeNavigator = createStackNavigator({
        Home: { screen: Home },

    },
    {

        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);
const AppHome = createAppContainer(HomeNavigator);

const ContactNavigator = createStackNavigator({
        Home: { screen: Contact },

    },
    {

        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);
const AppContact= createAppContainer(ContactNavigator);

const AboutNavigator = createStackNavigator({
        Home: { screen: About },

    },
    {

        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);
const AppAbout= createAppContainer(AboutNavigator);



const MainNavigator = createDrawerNavigator({
    Home: { screen: AppHome , navigationOptions:{title:'Home' , drawerLabel:'Home'}},
    Menu: { screen: AppMenu , navigationOptions:{title:'Menu' , drawerLabel:'Menu'}},
    Contact: { screen: AppContact , navigationOptions:{title:'Contact' , drawerLabel:'Contact'}},
    About: { screen: AppAbout , navigationOptions:{title:'About' , drawerLabel:'About'}}
})
const AppMain = createAppContainer(MainNavigator);


class Main extends Component {


    render( ) {

        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                <AppMain />
            </View>

        );
    }


}
export  default Main;
