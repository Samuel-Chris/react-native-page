import React from "react"
import Svg, { Circle } from "react-native-svg"

function BulletPoint(props) {
  return (
    <Svg width={7} height={7} viewBox="0 0 7 7" {...props}>
      <Circle data-name="Ellipse 179" cx={3.5} cy={3.5} r={3.5} fill="#555" />
    </Svg>
  )
}

export default BulletPoint
