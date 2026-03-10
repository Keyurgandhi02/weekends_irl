import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Slider from "@react-native-community/slider";

interface User {
  id: number;
  latitude: number;
  longitude: number;
}

const dummyUsers: User[] = [
  { id: 1, latitude: 23.091234, longitude: 72.560123 },
  { id: 2, latitude: 23.191345, longitude: 72.558987 },
  { id: 3, latitude: 23.092345, longitude: 72.559876 },
];

const Locations = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [range, setRange] = useState<number>(1); // Default range
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let locations = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let lat = locations?.coords?.latitude;
      let long = locations?.coords?.longitude;

      let response = await Location.reverseGeocodeAsync({
        latitude: lat,
        longitude: long,
      });

      console.log("response1", ...response);
      // For demonstration purposes, we're using dummy user data here
      setUsers(dummyUsers);
    })();
  }, []);

  const getDistanceFromLatLonInKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  const filteredUsers = users.filter(
    (user) =>
      location &&
      getDistanceFromLatLonInKm(
        location.coords.latitude,
        location.coords.longitude,
        user.latitude,
        user.longitude
      ) <= range
  );

  return (
    <View style={styles.container}>
      {errorMsg && <Text>{errorMsg}</Text>}
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
          {filteredUsers.map((user) => (
            <Marker
              key={user.id}
              coordinate={{
                latitude: user.latitude,
                longitude: user.longitude,
              }}
              title={`User ${user.id}`}
            />
          ))}
        </MapView>
      )}
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={100}
        step={1}
        value={range}
        onValueChange={(value) => setRange(value)}
      />
      <Text>Range: {range} km</Text>
    </View>
  );
};
export default Locations;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "50%",
  },
  slider: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
  },
});
