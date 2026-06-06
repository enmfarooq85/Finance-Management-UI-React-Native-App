import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  date: string;
};

const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "Payment Received",
    message: "You received $120 from John",
    time: "10:30 AM",
    date: "Today",
  },
  {
    id: "2",
    title: "Expense Alert",
    message: "You spent $80 on food",
    time: "09:10 AM",
    date: "Today",
  },
  {
    id: "3",
    title: "Weekly Report",
    message: "Your weekly report is ready",
    time: "Yesterday",
    date: "05 June",
  },
];

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </Pressable>

        <Text style={styles.title}>Notifications</Text>
        <View style={styles.bellContainer}>
          <Ionicons name="notifications" size={20} color="#fff" />
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <View style={styles.dot}>
                <Ionicons name="notifications" size={30} color="black" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.messageText}>{item.message}</Text>

                <View style={styles.metaRow}>
                  <Text style={styles.metaText}>{item.date}</Text>
                  <Text style={styles.metaText}>{item.time}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#00D09E",
  },

  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  bellContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#00D09E",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  content: {
    flex: 1,
    backgroundColor: "#F1FFF3",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 14,
  },

  dot: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#00D09E",
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },

  messageText: {
    fontSize: 12,
    color: "#666",
    marginTop: 3,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },

  metaText: {
    fontSize: 11,
    color: "#999",
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginLeft: 22,
  },
});
