import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function imageSuccse(props) {
    return (
        <Svg
            width={54}
            height={54}
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_25037_101075)">
                <Path
                    d="M26.999 53.667c14.727 0 26.666-11.939 26.666-26.666C53.665 12.273 41.726.334 27 .334 12.27.334.332 12.274.332 27.001c0 14.727 11.94 26.666 26.667 26.666z"
                    fill="#2EB553"
                />
                <Path
                    d="M24.858 35a2.695 2.695 0 01-1.951-.843l-5.687-5.929c-1.078-1.123-1.23-2.771-.151-3.895a2.728 2.728 0 013.944 0l3.845 4.779 8.093-9.269c1.078-1.124 2.997-1.124 4.075 0 1.078 1.123.688 2.945-.39 4.069L26.81 34.157a2.695 2.695 0 01-1.952.843z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_25037_101075">
                    <Path
                        fill="#fff"
                        transform="translate(.332 .334)"
                        d="M0 0H53.3333V53.3333H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default imageSuccse
