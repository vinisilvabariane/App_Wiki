import { StatusBar } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { colors } from "@/styles/colors";

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray[800]} />

      <Tabs
        screenOptions={{
          sceneStyle: {
            backgroundColor: colors.gray[600],
            paddingTop: 10,
          },
          tabBarActiveTintColor: colors.gray[100],
          tabBarInactiveTintColor: colors.gray[400],
          headerShown: false,
          tabBarStyle: { backgroundColor: colors.gray[800] },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="edit"
          options={{
            title: "Edição",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="edit" color={color} />,
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notificação",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="warning" color={color} />,
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              borderRadius: 5,
              backgroundColor: colors.red[300],
            }
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Busca",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}