import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs backgroundColor="#c2ddc5">
      <NativeTabs.Trigger
        name="user-home"
        contentStyle={{
          backgroundColor: "#00D09E",
        }}
      >
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="analysis">
        <NativeTabs.Trigger.Icon sf="gear" md="analytics" />
        <NativeTabs.Trigger.Label>Analysis</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
