	import { Stack } from 'expo-router';

	export default function RootLayout() {
		return (
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="home" />
				<Stack.Screen name="consultation" />
				<Stack.Screen name="scan" />
				<Stack.Screen name="history" />
				<Stack.Screen name="profile" />
			</Stack>
		)
	}