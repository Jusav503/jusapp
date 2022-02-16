import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);

  // To update images dots
  const onFlatListUpdate = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={[styles.images, { width: windowWidth - 25 }]}
            source={{ uri: item }}
          />
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        // Dots
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              { backgroundColor: index == activeIndex ? "white" : "black" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: 250,
    height: 450,
    resizeMode: "contain",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: "#ededed",
    borderColor: "#c9c9c9",
  },
});

export default ImageCarousel;
