import { Illustrations } from "@/assets/illustrations";
import BreakButton from "@/src/ui/BreakButton";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";

type FakeData = {
  id: string;
  image: ImageSourcePropType;
  label: string;
  breakId: string;
  duration: number;
};

const FAKE_DATA: FakeData[] = [
  {
    id: "meat",
    image: Illustrations.meat,
    label: "Lunch time",
    breakId: "2453",
    duration: 30,
  },
  {
    id: "bluebook",
    image: Illustrations.blueBook,
    label: "Fun time reading",
    breakId: "2453",
    duration: 90,
  },
  {
    id: "money",
    image: Illustrations.spinWheel,
    label: "Casino",
    breakId: "2453",
    duration: 45,
  },
  {
    id: "pine",
    image: Illustrations.blueBook,
    label: "On a trail",
    breakId: "2453",
    duration: 120,
  },
];

const BreakItem = (item: FakeData) => {
  return (
    <BreakButton
      label={item.label}
      icon={
        <Image
          source={item.image}
          width={21}
          resizeMode="contain"
          style={{ width: 21 }}
        />
      }
      durationInMinutes={item.duration}
    />
  );
};

const BreaksList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={FAKE_DATA}
        renderItem={({ item }) => <BreakItem {...item} />}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BreaksList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  list: {
    flexGrow: 0,
  },
});
