import React from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

interface SuperBottonProps extends  TouchableOpacityProps {
    title: string
    isLoading: boolean
    withSpinner?: 'start' | 'end'
    variant?: 'primary' | 'secondary' | 'default'
    size?: number
}

export const SuperButton = ({title, isLoading, variant = 'default', withSpinner = undefined, size = 14, ...restProps}:SuperBottonProps) => {
    return (
        <TouchableOpacity {...restProps} style={[styles.button_default, styles[`button_${variant}`]]}>
            {isLoading && withSpinner === 'start' && <ActivityIndicator/>}
            {!isLoading && <Text style={[styles.title_default, styles[`title_${variant}`], {fontSize: size}]}>
                {title}
            </Text>}
            {isLoading && withSpinner === 'end' && <ActivityIndicator/>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button_default: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button_primary: {
        backgroundColor: '#28f5ce',
        borderColor: '#28f5ce'
    },
    button_secondary: {
        backgroundColor: 'rgba(26, 124, 249, 0.2)',
        borderColor: '#28f5ce'
    },
    title_default: {
        fontSize: 16,
        textAlign: 'center',
        color: 'blue'
    },
    title_primary: {
        color: '#000',
    },
    title_secondary: {
        color: 'red'
    }
})