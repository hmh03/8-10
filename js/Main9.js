import {
    Image,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { MENU_DATA } from '../data.js';
import Navbar from '../components/Navbar.js';

const Main9 = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <ImageBackground source={item.source} style={styles.image}>
                <Text style={styles.text}>{item.text}</Text>
            </ImageBackground>
        </View>
    );

    return (
        <View style={[styles.container, { marginTop: 44 }]}>
            <Navbar tit={'Shop'} isCart />
            <View style={styles.container}>
                <FlatList
                    data={MENU_DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.container}
                />
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginTop: 10,
    },
    menu: {
        fontSize: 17,
    },
    header: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 109,
        overflow: 'hidden',
        borderRadius: 17,
        marginBottom: 7,
    },
    text: {
        position: 'absolute',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        padding: 40,
        fontWeight: '900',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default Main9;
