import {ActivityIndicator, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";

export const LoaderScreenPage = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ImageBackground style={styles.bg_image_panda}
                                 source={require('../../assets/images/loader_screen.png')}
                                 resizeMode={'cover'}>
                    <Text style={styles.text_h1}>Panda {'\n'} Logic Paws</Text>
                    <ActivityIndicator size={90} color={'rgba(255, 255, 255, 1)'} />
                </ImageBackground>
            </SafeAreaView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    bg_image_panda: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center', // Додає можливість центрованого контенту
        alignItems: 'center',
        gap: 50,
    },
    text_h1: {
        fontSize: 50,
        fontWeight: '700',
        lineHeight: 60.51,
        textAlign: 'center',
        marginTop: 300,

        color: 'rgba(255, 255, 255, 1)',
    },
});
