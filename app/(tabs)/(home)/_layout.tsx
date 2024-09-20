import { Stack } from 'expo-router';

export default function HomeLayout() {
    return (
        <Stack
        screenOptions={{
            headerStyle: {
            backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="details" />
        </Stack>
    );
}
