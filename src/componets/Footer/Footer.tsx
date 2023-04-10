import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

export const Footer = () => {
    return (
        <View style={styles.footerContent}>
            <Text style={styles.footerText}>© 2023 </Text>
            <Pressable>
                <Text style={[styles.footerText, styles.footerLink]}>Pavel Grigoryev.</Text>
            </Pressable>
            <Text style={styles.footerText}> All rights reserved</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 23,
        paddingTop: 31,
        paddingBottom: 29,
    },
    footerText: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24
    },
    footerLink: {
        textDecorationLine: 'underline'
    }
});
