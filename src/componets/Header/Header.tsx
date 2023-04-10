import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import {BurgerIcon} from '../common/SvgIcons/BurgerIcon';
import {BasketIcon} from '../common/SvgIcons/BasketIcon';

export const Header = () => {
    return (
        <View style={styles.headerContent}>
            <Pressable>
                <BurgerIcon/>
            </Pressable>
            <Pressable>
                <BasketIcon colorFill={'#FFF'}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 16
    }
})
