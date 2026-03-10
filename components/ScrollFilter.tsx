import React, { useRef } from "react";
import { Animated, StyleSheet, View, ScrollView } from "react-native";
import ScrollFilterListButton from "./ScrollFilterListButton";
import ScrollStickyButton from "./ScrollStickyButton";

type Filter = {
  name: string;
  label: string;
  type: string;
};

type Props = {
  filters: Filter[];
  activeFiltersCount: number;
  activeFiltersMap: Record<string, boolean>;
  onProfileHandler: any;
};

const FILTERS_ICON_WIDTH = 44;
const FILTERS_BUTTON_WIDTH = 100;

const ScrollFilter: React.FC<Props> = ({
  filters,
  activeFiltersCount,
  activeFiltersMap,
  onProfileHandler,
}) => {
  const animatedWidth = useRef(
    new Animated.Value(FILTERS_BUTTON_WIDTH)
  ).current;
  const scrollViewRef = useRef<ScrollView>(null);

  // On Scroll Handler
  const onFiltersScroll = (event: any) => {
    const eventX = event.nativeEvent.contentOffset.x;

    const direction = eventX > 0 ? 1 : -1;
    const offsetX = Math.min(
      Math.abs(eventX),
      FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH
    );
    animatedWidth.setValue(FILTERS_BUTTON_WIDTH - offsetX * direction);
  };

  // Scroll End Edge Function
  const onScrollEndSnapToEdge = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const maxOffset = FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH;
    const velocityFactor = Math.abs(event.nativeEvent.velocity.x * 30);

    if (offsetX > 0 && offsetX < maxOffset / 2 - velocityFactor) {
      scrollViewRef.current?.scrollTo({ x: 0 });
    } else if (
      maxOffset / 2 + velocityFactor <= offsetX &&
      offsetX < maxOffset
    ) {
      scrollViewRef.current?.scrollTo({
        x: FILTERS_BUTTON_WIDTH,
      });
    }
  };

  // Filter Select Handler
  const onSelectFilterHandler = () => {};
  return (
    <View style={[styles.container]}>
      <View style={[styles.stickyItem]}>
        <Animated.View
          style={[
            styles.stickyItemMask,
            {
              width: animatedWidth,
              maxWidth: FILTERS_BUTTON_WIDTH,
            },
          ]}
        >
          <ScrollStickyButton
            activeFiltersCount={activeFiltersCount}
            onPress={onProfileHandler}
          />
        </Animated.View>
      </View>
      <ScrollView
        horizontal
        style={[styles.scrollView]}
        contentContainerStyle={[
          styles.scrollViewContent,
          { paddingLeft: FILTERS_BUTTON_WIDTH - 18 },
        ]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={onFiltersScroll}
        onScrollEndDrag={onScrollEndSnapToEdge}
        scrollEventThrottle={16}
        overScrollMode="never"
      >
        {filters.map((filter) => (
          <ScrollFilterListButton
            key={filter.name}
            active={activeFiltersMap[filter.name]}
            text={filter.label}
            onPress={onSelectFilterHandler}
            icon={<></>}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollFilter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  stickyItem: {
    position: "absolute",
    zIndex: 1,
    left: 10,
  },
  stickyItemMask: {
    borderRadius: 8,
    overflow: "hidden",
  },
  scrollView: {
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingRight: 10,
    paddingBottom: 13,
  },
  dropDownIcon: {
    marginRight: 6,
  },
});
