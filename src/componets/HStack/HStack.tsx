import React, {FC, ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import {VStackProps} from '../VStack/VStack';
import {PADDING, WIDTH} from '../../constants/constants';


export const HStack: FC<VStackProps> = ({children}) => {

    let sumWidth = 0;
    React.Children.forEach(children, (child, index) => {
        if (!React.isValidElement(child)) return;
        const {width} = child.props;
        sumWidth += width;
    });

    if ((WIDTH - PADDING * 2) < sumWidth) {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginHorizontal: -PADDING}}>
                {children}
            </ScrollView>
        );
    }

    return (
        <View style={{flexDirection: 'row'}}>
            {children}
        </View>
    );
};

