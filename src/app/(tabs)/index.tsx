import Header from "@/components/header";
import RecentList from "@/components/recent_list";
import { View, Text } from "react-native";
import { DATA } from "@/utils/data";
import { colors } from "@/styles/colors";

export default function Index() {
    return (
        <View style={{ flex: 1, paddingTop: 2 }}>
            <Header></Header>
            <RecentList data={DATA.RECENT}></RecentList>
        </View>
    );
}