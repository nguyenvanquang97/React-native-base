import * as React from "react"
import Svg, { Path } from "react-native-svg"

function icon1(props) {
    return (
        <Svg
            width={10}
            height={16}
            viewBox="0 0 6 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5.53 5.645L.478.69A.08.08 0 00.433.667a.074.074 0 00-.049.01.1.1 0 00-.037.042.134.134 0 00-.013.06v1.087c0 .07.026.136.068.178l4.034 3.955L.402 9.955a.248.248 0 00-.068.177v1.088c0 .094.086.146.145.088l5.05-4.954a.446.446 0 00.102-.157.547.547 0 000-.395.446.446 0 00-.102-.157z"
                fill="#595959"
            />
        </Svg>
    )
}

export default icon1
