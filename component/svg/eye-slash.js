import * as React from "react"
import Svg, { Path } from "react-native-svg"

function eye_slash(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.082 11.396c-.824-1.736-1.804-3.151-2.941-4.247l-1.193 1.193c.973.929 1.82 2.145 2.552 3.659-1.95 4.036-4.718 5.953-8.5 5.953-1.136 0-2.182-.175-3.138-.525L7.57 18.721c1.328.614 2.804.92 4.43.92 4.504 0 7.865-2.346 10.082-7.038a1.412 1.412 0 000-1.207zm-1.49-7.515l-.999-1a.188.188 0 00-.265 0l-2.563 2.562C15.35 4.72 13.763 4.36 11.999 4.36c-4.504 0-7.865 2.346-10.082 7.038a1.413 1.413 0 000 1.207c.885 1.866 1.952 3.361 3.199 4.486l-2.48 2.48a.187.187 0 000 .265l1 1a.188.188 0 00.265 0l16.691-16.69a.187.187 0 000-.265zM3.5 12.001c1.952-4.036 4.72-5.953 8.5-5.953 1.279 0 2.44.219 3.495.665L13.847 8.36a4.125 4.125 0 00-5.581 5.58L6.31 15.898C5.228 14.942 4.296 13.647 3.5 12zm5.782 0a2.627 2.627 0 013.426-2.5l-3.302 3.301a2.624 2.624 0 01-.124-.801z"
                fill="#262626"
            />
            <Path
                d="M11.906 14.625c-.081 0-.161-.004-.24-.01l-1.238 1.237a4.128 4.128 0 005.33-5.33L14.52 11.76a2.617 2.617 0 01-.188 1.245 2.624 2.624 0 01-2.426 1.62z"
                fill="#262626"
            />
        </Svg>
    )
}

export default eye_slash