import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
    let error = useRouteError();
    return <div className='text-4xl text-red-700'>Dang!
        <p> {error.message} </p>
    </div>;
}


export default ErrorBoundary;