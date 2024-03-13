import React from "react";
import * as Loader from 'react-loader-spinner';

function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Loader.ThreeDots />
        </div>
    )
}

export default Loading;