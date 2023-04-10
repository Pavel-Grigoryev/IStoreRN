import React from 'react';

export const getAbsoluteChildren = (children: JSX.Element[] | JSX.Element, reverse: boolean) => {
    let childrenArray = React.Children.toArray(children)
    if(reverse) {
        childrenArray = childrenArray.reverse()
    }
    return childrenArray.map((child: any) => {
        return React.cloneElement(
            child,
            {position: 'absolute'},
            child.props.children
        )
    })
}