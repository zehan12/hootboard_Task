import React from "react";
const Toaster = ({icon, message}) => {
    return (
        <div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg bg-red-800 text-white">
                {React.createElement(icon)}
            </div>
            <div class="ml-2 text-black text-xs font-semibold">{message}</div>
        </div>
    )
}

export default Toaster;