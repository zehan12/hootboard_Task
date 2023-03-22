import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
    let error = useRouteError();
    return (
        <Fragment>

            <div className="w-full md:w-1/3 mx-auto">
                <div className="flex flex-col p-5 rounded-lg shadow bg-white">
                    <div className="flex">
                        <div>
                            <svg className="w-6 h-6 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                        </div>

                        <div className="ml-3">
                            <h3 className="text-2xl text-red-800">Something went Wrong!!</h3>
                            <h2 className="font-semibold text-gray-800">{error.message}</h2>                     
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default ErrorBoundary;