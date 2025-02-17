import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { style } from "./style";
import { colors } from "@/styles/colors";

export default function Header() {
    return (
        <View style={style.container}>
            <Image style={style.image} source={{ uri: "https://qualyteam.com/pb/wp-content/uploads/2024/01/artigo-qualyteam-cultura-da-qualidade.jpg" }} />

            <View style={style.user}>
                <Text style={style.name}>Usuario da Silva</Text>
                <Text style={style.email}>usuariodasuilva@gmail.com</Text>
            </View>

            <TouchableOpacity>
                <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
            </TouchableOpacity>

        </View>
    );
}