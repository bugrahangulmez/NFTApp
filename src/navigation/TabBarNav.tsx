import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Home, Plus, Profile, Search, Stats} from '../screens';
import {View, Text, TouchableOpacity} from 'react-native';
import {SCREEN_WIDTH, scaleHeight, scaleWidth} from '../constants/scale';
import {BlurView} from '@react-native-community/blur';
import {COLORS} from '../constants/constants';
import HomeSvg from '../svg/HomeSvg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import StatsSvg from '../svg/StatsSvg';
import PlusMainSvg from '../svg/PlusMainSvg';
import SearchSvg from '../svg/SearchSvg';
import ProfileSvg from '../svg/ProfileSvg';

const TabBarNav = () => {
  type RootTabBarParamList = {
    Home: undefined;
    Stats: undefined;
    Plus: undefined;
    Search: undefined;
    Profile: undefined;
  };

  const TabBar = createBottomTabNavigator<RootTabBarParamList>();

  const insets = useSafeAreaInsets();

  function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    return (
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          height: scaleHeight(100),
          width: SCREEN_WIDTH,
          paddingBottom: insets.bottom,
          justifyContent: 'center',
        }}>
        <BlurView
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            height: scaleHeight(100),
            width: SCREEN_WIDTH,
            borderRadius: 50,
            paddingHorizontal: scaleHeight(14),
            paddingVertical: scaleWidth(22),
          }}></BlurView>

        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let Icon = HomeSvg;

          if (label === 'Home') Icon = HomeSvg;
          if (label === 'Stats') Icon = StatsSvg;
          if (label === 'Plus') Icon = PlusMainSvg;
          if (label === 'Search') Icon = SearchSvg;
          if (label === 'Profile') Icon = ProfileSvg;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                height: scaleHeight(44),
                width: scaleHeight(44),
                top: scaleHeight(20),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <TabBar.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <TabBar.Screen name="Home" component={Home} />
      <TabBar.Screen name="Stats" component={Stats} />
      <TabBar.Screen name="Plus" component={Plus} />
      <TabBar.Screen name="Search" component={Search} />
      <TabBar.Screen name="Profile" component={Profile} />
    </TabBar.Navigator>
  );
};

export default TabBarNav;
