import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface BoxProps extends ViewProps {
    bgr: string
    width: number
    height?: number
    mt?: number
    mb?: number
    ml?: number
    mr?: number
}

export const Box: FC<BoxProps> = ({bgr, width, height, children,mt,mr,mb,ml, ...restProps}) => {
    if (children) {
        return (
            <View
                {...restProps}
                style={[restProps.style,
                    {
                        backgroundColor: bgr,
                        borderWidth: 1,
                        width,
                        margin: 3,
                        height: height ?? width,
                        marginTop: mt ? mt : undefined,
                        marginRight: mr ? mr : undefined,
                        marginBottom: mb ? mb : undefined,
                        marginLeft: ml ? ml : undefined,

                    }]}
            >
                {children}
            </View>
        );
    }
    return (
        <View
            {...restProps}
            style={{
                backgroundColor: bgr,
                borderWidth: 1,
                width,
                margin: 3,
                height: height ?? width,
                marginTop: mt ? mt : undefined,
                marginRight: mr ? mr : undefined,
                marginBottom: mb ? mb : undefined,
                marginLeft: ml ? ml : undefined,
            }}/>
    );
};



