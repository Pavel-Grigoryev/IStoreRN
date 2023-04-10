import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const EmptyPage = () => {
    return (
        <View style={styles.emptyContent}>
            <Text style={styles.emptyTitle}>Oops! This place looks empty</Text>
            <Text style={styles.emptySubTitle}>Refresh page or clear filter</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyContent: {
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyTitle: {
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 24,
        marginBottom: 10
    },
    emptySubTitle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 24
    }
});