import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useState } from "react";
import { CartesianChart, Line } from "victory-native";

type ChartPoint = {
  label: string;
  income: number;
  expense: number;
};

type FilterType = "Daily" | "Weekly" | "Monthly";

export default function AnalysisScreen() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Daily");
  const filters: FilterType[] = ["Daily", "Weekly", "Monthly"];

  const handleNotificationNavigation = () => {
    router.push("/screens/notifications");
  };

  const chartData: Record<FilterType, ChartPoint[]> = {
    Daily: [
      { label: "Mon", income: 500, expense: 300 },
      { label: "Tue", income: 650, expense: 450 },
      { label: "Wed", income: 400, expense: 350 },
      { label: "Thu", income: 800, expense: 500 },
      { label: "Fri", income: 700, expense: 450 },
      { label: "Sat", income: 950, expense: 650 },
      { label: "Sun", income: 600, expense: 400 },
    ],

    Weekly: [
      { label: "W1", income: 2500, expense: 1800 },
      { label: "W2", income: 3200, expense: 2100 },
      { label: "W3", income: 2800, expense: 2300 },
      { label: "W4", income: 3600, expense: 2600 },
    ],

    Monthly: [
      { label: "Jan", income: 4200, expense: 3100 },
      { label: "Feb", income: 3900, expense: 2800 },
      { label: "Mar", income: 4800, expense: 3500 },
      { label: "Apr", income: 5100, expense: 3900 },
      { label: "May", income: 5500, expense: 4200 },
      { label: "Jun", income: 6000, expense: 4600 },
    ],
  };

  const currentData = chartData[activeFilter];

  const totalIncome = currentData.reduce((sum, item) => sum + item.income, 0);

  const totalExpense = currentData.reduce((sum, item) => sum + item.expense, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.subHeaderContainer}>
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
          <View style={{ height: 200, marginTop: 20 }}>
            <CartesianChart
              data={currentData}
              xKey="label"
              yKeys={["income", "expense"]}
            >
              {({ points }) => (
                <>
                  <Line
                    points={points.income}
                    color="#00D09E"
                    strokeWidth={4}
                  />

                  <Line
                    points={points.expense}
                    color="#0068FF"
                    strokeWidth={4}
                  />
                </>
              )}
            </CartesianChart>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ alignItems: "center", flex: 1 }}>
              <View
                style={{
                  ...styles.arrowsContainer,
                  borderColor: "#00D09E",
                }}
              >
                <Feather name="arrow-up-right" size={20} color="#00D09E" />
              </View>

              <Text style={{ marginTop: 5, fontWeight: "600", color: "#333" }}>
                Income
              </Text>

              <Text
                style={{ fontWeight: "bold", color: "#00D09E", marginTop: 4 }}
              >
                ${totalIncome}.00
              </Text>
            </View>

            <View style={{ alignItems: "center", flex: 1 }}>
              <View
                style={{
                  ...styles.arrowsContainer,
                  borderColor: "#0068FF",
                }}
              >
                <Feather name="arrow-down-right" size={20} color="#0068FF" />
              </View>

              <Text style={{ marginTop: 5, fontWeight: "600", color: "#333" }}>
                Expense
              </Text>

              <Text
                style={{ fontWeight: "bold", color: "#0068FF", marginTop: 4 }}
              >
                ${totalExpense}.00
              </Text>
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
    alignSelf: "flex-end",
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
});
