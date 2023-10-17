import * as React from "react"
import Svg, { Path } from "react-native-svg"

function icondelete(props) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.154 7L13.958.281C14.055.17 13.973 0 13.823 0h-1.764a.365.365 0 00-.272.122L7 5.664 2.213.122A.358.358 0 001.941 0H.177C.027 0-.055.17.042.281L5.846 7 .042 13.719a.168.168 0 00.04.255.18.18 0 00.095.026h1.764a.365.365 0 00.272-.122L7 8.336l4.787 5.542a.358.358 0 00.272.122h1.764c.15 0 .232-.17.135-.281L8.154 7z"
        fill="#262626"
      />
    </Svg>
  )
}

export default icondelete
