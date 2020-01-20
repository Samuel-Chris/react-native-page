import React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function CheckIcon(props) {
  return (
    <Svg width={35} height={35} viewBox="0 0 35 35" {...props}>
      <G data-name="Group 1259" transform="translate(0 -.463)">
        <Rect
          data-name="Rectangle 248"
          width={35}
          height={35}
          rx={5}
          transform="translate(0 .463)"
          fill="#00e6c2"
        />
        <Path
          data-name="Icon awesome-check"
          d="M13.857 25.223L7.3 18.662a1.01 1.01 0 010-1.428l1.423-1.428a1.009 1.009 0 011.428 0l4.42 4.42 9.468-9.468a1.01 1.01 0 011.428 0l1.427 1.428a1.01 1.01 0 010 1.428l-11.609 11.61a1.01 1.01 0 01-1.428-.001z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default CheckIcon