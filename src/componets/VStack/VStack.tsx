import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';

export interface VStackProps {
    children: ReactNode
}

export const VStack: FC<VStackProps> = ({children}) => {
    return (
        <View>
            {children}
        </View>
    );
};

