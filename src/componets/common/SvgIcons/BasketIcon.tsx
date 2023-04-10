import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const BasketIcon = (props: SvgProps & {colorFill?: string}) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill={props.colorFill ? props.colorFill : "#000"}
            d="M7 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 20c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 7 18c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.021-.588 1.413A1.925 1.925 0 0 1 7 22Zm10 0c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 15 20c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 17 18c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.021-.587 1.413A1.928 1.928 0 0 1 17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75c.383 0 .675.17.875.512.2.342.208.688.025 1.038l-3.55 6.4c-.183.333-.43.592-.738.775A1.943 1.943 0 0 1 15.55 13H8.1L7 15h12v2H7c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962L6.6 11.6 3 4H1V2h3.25l.95 2Z"
        />
    </Svg>
)
