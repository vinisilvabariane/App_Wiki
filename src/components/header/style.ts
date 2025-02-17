import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray[800],
        justifyContent: "space-between",
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginLeft: 20,
    },
    user: {
        flex: 1,
    },
    email: {
        color: colors.gray[100],
        fontSize: 16,
        fontWeight: "500",
    },
    name: {
        color: colors.gray[100],
        fontSize: 14,
    },
});