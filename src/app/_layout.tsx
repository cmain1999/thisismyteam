import { NativeTabs } from 'expo-router/native-tabs';

// `_layout.tsx` decides how the screens in this folder are arranged.
// Here we use a bottom tab bar. Each Trigger's `name` matches a file:
//   name="index" -> src/app/index.tsx
//   name="feed"  -> src/app/feed.tsx
export default function RootLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Matches</NativeTabs.Trigger.Label>
        {/* `sf` is the icon on iPhone, `md` is the icon on Android */}
        <NativeTabs.Trigger.Icon sf="soccerball" md="sports_soccer" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="feed">
        <NativeTabs.Trigger.Label>Feed</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="bubble.left.and.bubble.right" md="forum" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
