import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    FoodDummy1,
} from "../../../assets";

_renderItem = ({ item, index }) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.imageUrl}</Text>
            <Image source={Carousel5} style={{ width: 200, height: 200 }} />
        </View>
    );
};

const data = [
    {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: { Carousel5 },
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: { Carousel2 },
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://picsum.photos/id/12/200/300",
    },
];

const CarouselPromo = () => {
    const width = Dimensions.get("window").width;
    const [index, setIndex] = useState(0);
    return (
        <>
            <View>
                <Carousel
                    data={data}
                    renderItem={_renderItem}
                    sliderWidth={width + 80}
                    itemWidth={200}
                    //containerCustomStyle={{ backgroundColor: "black" }}
                    hasParallaxImages={true}
                    onSnapToItem={(index) => setIndex(index)}
                    autoplay
                    autoplayInterval={4500}
                    enableMomentum
                    loop
                    lockScrollWhileSnapping
                    //contentContainerCustomStyle={{ backgroundColor: "red" }}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    containerStyle={{ paddingVertical: 15 }}
                    dotStyle={{
                        width: 14,
                        height: 14,
                        borderRadius: 7,
                        marginHorizontal: 1,
                        backgroundColor: "#1A98D6",
                    }}
                    inactiveDotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 1,
                        backgroundColor: "#BCBCBC",
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        </>
    );
};

export default CarouselPromo;

const styles = StyleSheet.create({});
