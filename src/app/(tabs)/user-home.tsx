import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { router } from "expo-router";

const CAR = require("../../../assets/images/car.png");
const SALARY = require("../../../assets/images/salary.png");
const FOOD = require("../../../assets/images/food.png");

type FilterType = "Daily" | "Weekly" | "Monthly";

type StatItem = {
  id: number;
  title: string;
  value: string;
};

type FilterData = {
  title: string;
  desc: string;
  stats: StatItem[];
};

export default function UserHomeScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Daily");

  const filters: FilterType[] = ["Daily", "Weekly", "Monthly"];

  const data: Record<FilterType, FilterData> = {
    Daily: {
      title: "Daily Report",
      desc: "Your spending is stable today",
      stats: [
        { id: 1, title: "Food", value: "-$120" },
        { id: 2, title: "Transport", value: "-$40" },
        { id: 3, title: "Shopping", value: "-$80" },
      ],
    },
    Weekly: {
      title: "Weekly Report",
      desc: "You spent slightly more this week",
      stats: [
        { id: 1, title: "Food", value: "-$720" },
        { id: 2, title: "Transport", value: "-$210" },
        { id: 3, title: "Shopping", value: "-$430" },
      ],
    },
    Monthly: {
      title: "Monthly Report",
      desc: "Overall budget under control",
      stats: [
        { id: 1, title: "Food", value: "-$2,800" },
        { id: 2, title: "Transport", value: "-$900" },
        { id: 3, title: "Shopping", value: "-$1,600" },
      ],
    },
  };

  const currentData = data[activeFilter];

  const handleNotificationNavigation = () => {
    router.push("/screens/notifications");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.subHeaderContainer}>
          <View>
            <Text style={styles.headerTextHeading}>Hi, Welcome Back</Text>
            <Text style={styles.headerTextDescription}>Good Morning</Text>
          </View>

          <View style={styles.notificationContainer}>
            <Ionicons
              onPress={handleNotificationNavigation}
              name="notifications-outline"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View style={styles.bottomHeaderContainer}>
          <View style={styles.bottomSubHeaderContainer}>
            <View>
              <View style={styles.leftBottomHeaderContainer}>
                <View style={styles.arrowsContainer}>
                  <Feather name="arrow-up-right" size={15} color="black" />
                </View>
                <Text style={styles.labelText}>Total Balance</Text>
              </View>
              <Text style={styles.amountText}>$777, 33.00</Text>
            </View>

            <View style={styles.verticalLines} />

            <View>
              <View style={styles.leftBottomHeaderContainer}>
                <View style={styles.arrowsContainer}>
                  <Feather name="arrow-down-right" size={15} color="black" />
                </View>
                <Text style={styles.labelText}>Total Balance</Text>
              </View>
              <Text style={styles.amountText}>$777, 33.00</Text>
            </View>
          </View>

          <View style={styles.progressWrapper}>
            <View style={styles.blackProgressBar}>
              <View style={styles.whiteProgressBar} />
            </View>
            <Text style={styles.progressText}>30% of Expense looks good.</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentTopCard}>
            <View style={styles.leftTopContentContainer}>
              <View style={styles.carCircle}>
                <Image source={CAR} />
              </View>
              <Text style={styles.goalText}>Saving Goals</Text>
            </View>

            <View style={styles.verticalDivider} />

            <View style={styles.rightCard}>
              <View style={styles.rowItem}>
                <Image source={SALARY} />
                <View>
                  <Text style={styles.statSub}>Revenue Last Week</Text>
                  <Text style={styles.statValue}>-$3,200</Text>
                </View>
              </View>

              <View style={styles.rowItem}>
                <Image source={FOOD} />
                <View>
                  <Text style={styles.statSub}>Food Last Week</Text>
                  <Text style={styles.statValue}>-$3,200</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.filterContainer}>
            <View style={styles.filterBar}>
              {filters.map((item) => (
                <Pressable
                  key={item}
                  onPress={() => setActiveFilter(item)}
                  style={[
                    styles.filterBtn,
                    activeFilter === item && styles.activeBtn,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      activeFilter === item && styles.activeText,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.contentBox}>
              <Text style={styles.title}>{currentData.title}</Text>
              <Text style={styles.desc}>{currentData.desc}</Text>

              {currentData.stats.map((item) => (
                <View key={item.id} style={styles.statRow}>
                  <Text style={styles.statName}>{item.title}</Text>
                  <Text style={styles.statAmount}>{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#00D09E",
    paddingBottom: -90,
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTextHeading: {
    fontSize: 20,
    fontWeight: "700",
  },

  headerTextDescription: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: "500",
  },

  notificationContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomHeaderContainer: {
    marginTop: 20,
    gap: 15,
  },

  bottomSubHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  leftBottomHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  labelText: {
    fontSize: 12,
    fontWeight: "500",
  },

  amountText: {
    marginTop: 4,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  arrowsContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  verticalLines: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
    marginHorizontal: 10,
  },

  progressWrapper: {
    gap: 8,
  },

  blackProgressBar: {
    height: 12,
    borderRadius: 10,
    backgroundColor: "black",
    overflow: "hidden",
  },

  whiteProgressBar: {
    width: "30%",
    height: "100%",
    backgroundColor: "white",
  },

  progressText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
  },

  content: {
    flex: 1,
    backgroundColor: "#F1FFF3",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },

  contentTopCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00D09E",
    padding: 18,
    borderRadius: 25,
    marginBottom: 20,
  },

  leftTopContentContainer: {
    gap: 8,
  },

  carCircle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "#00D09E",
    borderWidth: 3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  goalText: {
    color: "white",
    fontWeight: "600",
    fontSize: 13,
  },

  verticalDivider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
    marginHorizontal: 12,
  },

  rightCard: {
    flex: 1,
    gap: 14,
  },

  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  statSub: {
    fontSize: 12,
    color: "#1a1a1a",
  },

  statValue: {
    fontSize: 16,
    fontWeight: "700",
  },

  filterContainer: {
    marginTop: 10,
  },

  filterBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 6,
  },

  filterBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 10,
  },

  activeBtn: {
    backgroundColor: "#00D09E",
  },

  filterText: {
    color: "#777",
    fontWeight: "500",
  },

  activeText: {
    color: "#fff",
    fontWeight: "700",
  },

  contentBox: {
    marginTop: 12,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 14,
  },

  title: {
    fontSize: 14,
    fontWeight: "700",
  },

  desc: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  statName: {
    color: "#333",
    fontWeight: "500",
  },

  statAmount: {
    fontWeight: "700",
  },
});
