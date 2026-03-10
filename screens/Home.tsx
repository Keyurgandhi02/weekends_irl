import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, FlatList, RefreshControl } from "react-native";
import { Modalize } from "react-native-modalize";
import { App_Colors } from "../constants/Colors";
import HangoutsCard from "../components/hangouts/HangoutsCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardColors, HANGOUTS_DATA, filters_data } from "../utils/helper";
import CustomHeader from "../components/CustomHeader";
import ScrollFilter from "../components/ScrollFilter";
import { filters } from "../constants/Strings";
import { MainScreenHeight } from "../components/common/Layout";
import { useTabMenu } from "../components/BottomTabContext";
import FilterListItem from "../components/filter/FilterListItem";
import ModalizeTopCotainer from "../components/ModalizeTopCotainer";
import GlobalButton from "../components/common/GlobalButton";
import NoDataFound from "../components/NoDataFound";
import { globalStyles } from "../utils/styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

type UserDataProps = {
  id: number;
  user_details: {
    name: string;
    location: string;
    hangout_posted: number;
    hangout_badges: number;
    looking_for: { id: number; title: string }[];
    interests: { id: number; name: string }[];
    avatar: string;
    joinedhangouts: {
      id: number;
      label: string;
      totalMembers: string;
      icon: string;
    }[];
    posted_hangouts: {
      id: number;
      timeStamp: string;
      hang_title: string;
      hang_desc: string;
      hang_type: string;
      hang_link_icon?: string;
      hang_link_title: string;
      hang_link_btn_text: string;
      joined_members: {
        total_member: number;
        members: {
          id: number;
          name: string;
          location: string;
          avatar: string;
        }[];
      }[];
    }[];
  };
  hangout_details: {
    time_stamp: string;
    hang_title: string;
    hang_desc: string;
    hang_type: string;
    hang_link_icon?: string;
    hang_link_title: string;
    hang_link_btn_text: string;
    joined_members: {
      total_member: number;
      members: {
        id: number;
        name: string;
        location: string;
        avatar: string;
      }[];
    }[];
  };
};

const Home = () => {
  const modalizeRef = useRef<Modalize>(null);
  const navigation: any = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { setBottomBarStatus } = useTabMenu();

  // On Open Modalize Handler
  const onOpenBottomModalizeHandler = () => {
    modalizeRef.current?.open();
    setBottomBarStatus(false);
  };

  // On Close Modalize Handler
  const onCloseBottomHandler = () => {
    setBottomBarStatus(true);
  };

  // Render Hangouts Item
  const renderHangoutItem = ({
    item,
    index,
  }: {
    item: UserDataProps;
    index: number;
  }) => {
    const backgroundColor = CardColors[index % CardColors.length];
    return (
      <HangoutsCard
        item={item}
        backgroundColor={backgroundColor}
        navigation={navigation}
      />
    );
  };

  // Render Filter Item
  const renderFilterItem = ({ item }: any) => (
    <FilterListItem data={item} checkedColor={App_Colors.Primary_Color_Base} />
  );

  // Render Filter Header
  const renderSectionHeader = ({ section }: any) => (
    <>
      <View style={[styles.hBorder]} />
      <Text style={[styles.headerText]}>{section.title}</Text>
    </>
  );

  const onFilterHandler = () => {};

  // Filter Reset Handler
  const onFilterResetHandler = () => {};

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <CustomHeader
        title="Weekends"
        isBack={false}
        isSearch={true}
        isNotification={true}
        navigation={navigation}
      />
      <ScrollFilter
        filters={filters}
        activeFiltersCount={0}
        activeFiltersMap={{}}
        onProfileHandler={onOpenBottomModalizeHandler}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={HANGOUTS_DATA}
        style={{ marginBottom: 50 }}
        renderItem={renderHangoutItem}
        scrollEventThrottle={16}
        keyExtractor={(item) => item?.id.toString()}
        overScrollMode="never"
        ListEmptyComponent={<NoDataFound title="No Hangouts Found!" />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => setIsRefreshing(true)}
            title="Pull to refresh"
          />
        }
      />

      <Modalize
        ref={modalizeRef}
        onClosed={onCloseBottomHandler}
        modalHeight={MainScreenHeight - 100}
        snapPoint={700}
        HeaderComponent={
          <ModalizeTopCotainer
            label="Sort & Filter"
            onPressButtonHandler={onFilterResetHandler}
            icon="https://firebasestorage.googleapis.com/v0/b/ksm-inventory.appspot.com/o/Refresh.svg?alt=media&token=74b2b9a9-1499-4eff-a1b9-7b75a016f09f"
          />
        }
        FooterComponent={
          <View style={[styles.footerContainer]}>
            <GlobalButton
              title="Cancel"
              onClickHandler={onFilterHandler}
              buttonContainer={{ height: 52, width: "48%" }}
              buttonText={{
                color: App_Colors.White,
                secondColor: App_Colors.Primary_Color_Base,
                fontSize: 16,
              }}
              isDisabled={false}
              secondaryButton={true}
              isIcon={false}
              icon=""
            />
            <GlobalButton
              title="Submit"
              onClickHandler={onFilterHandler}
              buttonContainer={{ height: 52, width: "48%" }}
              buttonText={{
                color: App_Colors.White,
                secondColor: App_Colors.Primary_Color_Base,
                fontSize: 16,
              }}
              isDisabled={false}
              secondaryButton={false}
              isIcon={false}
              icon=""
            />
          </View>
        }
        sectionListProps={{
          sections: filters_data,
          renderItem: renderFilterItem,
          stickySectionHeadersEnabled: false,
          keyExtractor: (item) =>
            item?.id ? item?.id.toString() : item?.title,
          renderSectionHeader: renderSectionHeader,
          renderSectionFooter: () => <View style={{ marginBottom: 20 }} />,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: RFValue(32),
    color: App_Colors.Primary_Color_Base,
  },
  headerText: {
    fontFamily: "Halcom_Medium",
    fontSize: RFValue(16),
    fontWeight: "500",
    lineHeight: RFValue(19.2),
    color: App_Colors.Text_Black_1,
    paddingHorizontal: RFValue(21),
    marginTop: RFValue(24),
    marginBottom: RFValue(10),
  },
  hBorder: {
    borderBottomColor: App_Colors.Neutral_Color_2,
    borderBottomWidth: RFValue(0.45),
    marginHorizontal: RFValue(15),
    marginTop: RFValue(10),
  },
  buttonContainer: {
    width: RFValue(159),
    height: RFValue(42),
    backgroundColor: App_Colors.Primary_Color_Base,
    borderRadius: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: App_Colors.White,
    fontSize: RFValue(14),
    fontFamily: "Halcom_Regular",
    fontWeight: "400",
  },
  borderButton: {
    backgroundColor: undefined,
    borderWidth: RFValue(1),
    borderColor: App_Colors.Primary_Color_Base,
  },
  borderButtonText: {
    color: App_Colors.Primary_Color_Base,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: RFValue(70),
    margin: RFValue(16),
  },
});
