import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {getAbsoluteChildren} from '../../utils/getAbsoluteChildren';

interface ZStackProps {
    children: JSX.Element | JSX.Element[]
    reverse?: boolean
}

export const ZStack: FC<ZStackProps> = ({children, reverse = false}) => {
    return (
        <View style={{position: 'relative'}}>
            {getAbsoluteChildren(children, reverse)}
        </View>
    );
};

