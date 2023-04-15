import {
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    Image,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import React from "react";
import ItemListFood from "../ItemListFood";
import {
    FoodDummy1,
    FoodDummy2,
    FoodDummy3,
    FoodDummy4,
} from "../../../assets";
import { ScrollView } from "react-native-gesture-handler";
import { Gap } from "../../atoms";
import { useNavigation } from "@react-navigation/native";

const renderTabBar = (props) => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: "#020202",
            height: 3,
            width: 0.5,
        }}
        style={{
            backgroundColor: "white",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomColor: "#F2F2F2",
            borderBottomWidth: 1,
        }}
        tabStyle={{
            width: "auto",
        }}
        renderLabel={({ route, focused, color }) => (
            <Text
                style={{
                    fontFamily: "Poppins-Medium",
                    color: focused ? "#020202" : "#8D92A3",
                }}
            >
                {route.title}
            </Text>
        )}
    />
);

const NewTaste = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 8 }}>
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy2}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy3}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy4}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <ItemListFood
                    image={FoodDummy1}
                    onPress={() => navigation.navigate("FoodDetail")}
                />
                <Gap height={60} />
            </View>
        </ScrollView>
    );
};

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const HomeTabSection = () => {
    const layout = useWindowDimensions();

    const renderScene = SceneMap({
        1: NewTaste,
        2: SecondRoute,
        3: NewTaste,
    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "1", title: "New Taste" },
        { key: "2", title: "Popular" },
        { key: "3", title: "Recomended" },
    ]);
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
