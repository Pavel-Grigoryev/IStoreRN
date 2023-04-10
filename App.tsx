import React from 'react';
import {PADDING, WIDTH} from './src/constants/constants';
import {FlatList, Image, ListRenderItem, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {BasketIcon} from './src/componets/common/SvgIcons/BasketIcon';
import {Header} from './src/componets/Header/Header';
import {Footer} from './src/componets/Footer/Footer';
import {EmptyPage} from './src/componets/EmptyPage/EmptyPage';

const images = [
    require('./assets/Iphone13_128.png'),
    require('./assets/Iphone14_Pro_128.png'),
    require('./assets/Iphone12_128.png'),
    require('./assets/IphoneSE_128.png'),
    require('./assets/Iphone13_512.png'),
    require('./assets/Iphone14_Pro_Max_128.png'),
];

const titles = [
    'Apple iPhone 13 128GB Blue',
    'Apple iPhone 14 Pro 128GB Space Black',
    'Apple iPhone 12 128GB Purple',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone 13 512GB Midnight',
    'Apple iPhone 14 Pro Max 256GB Purple',
];

const prices = [999, 1199, 799, 599, 899, 1199];

const itemsData: ItemType[] = [...Array(12)].map((_, index) => {

    return {
        id: index + 1,
        title: titles[index % titles.length],
        price: prices[index % prices.length],
        image: images[index % images.length],
    };
});
export default function App() {

    const renderItem: ListRenderItem<ItemType> = ({item}) => {
        return (
            <View style={[styles.itemPhone]}>
                <Image style={styles.phoneImage}
                       resizeMode={'contain'}
                       source={item.image}/>
                <View style={styles.phoneInfo}>
                    <Text style={styles.phoneName}>{item.title}</Text>
                    <View style={styles.containerPhonePrice}>
                        <Text style={styles.phonePrice}>$ {item.price}</Text>
                        <Pressable>
                            <BasketIcon/>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={[styles.container]}>
            <StatusBar style={'light'}/>
            <FlatList data={itemsData}
                      renderItem={renderItem}
                      numColumns={2}
                      contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      ListHeaderComponent={Header}
                      ListHeaderComponentStyle={styles.header}
                      stickyHeaderIndices={[0]}
                      ListFooterComponent={Footer}
                      ListFooterComponentStyle={styles.footer}
                      ListEmptyComponent={EmptyPage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A6A6A6'
    },
    itemPhone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        paddingTop: 12,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.4)',
        marginVertical: 6,
    },
    phoneImage: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8,
    },
    phoneInfo: {
        marginTop: 19,
        marginBottom: 22,
        paddingHorizontal: 12,
    },
    phoneName: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16,
        marginBottom: 17
    },
    containerPhonePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    phonePrice: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12,
    },
    header: {
        borderWidth: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 20,
        marginHorizontal: -PADDING,
        backgroundColor: '#21201E',
        marginBottom: 18
    },
    footer: {
        marginHorizontal: -PADDING,
        backgroundColor: '#21201E',
        marginTop: 42,
    },

});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red'
    },

});

//Types

type ItemType = {
    id: number
    title: string
    price: number,
    image: any
}
