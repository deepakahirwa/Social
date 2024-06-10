import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="mb-6 md:mb-8">
                <img
                    src="https://raw.githubusercontent.com/arunpariyar/404-page/86096ecec1b535b4e9281d5c734c5eae6fecf585/src/assets/Scarecrow.png"
                    alt="404-Scarecrow"
                    className="w-full max-w-md md:max-w-lg"
                />
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 md:text-3xl  font-mono">I have bad news for you</h2>
                <p className="text-lg text-gray-700 mb-6 md:text-xl font-mono ">
                    The page you are looking for might be removed or is temporarily unavailable
                </p>
                <Link
                    to="/Signin"

                >

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors md:text-sm md:py-1.5">Back to homepage</button>

                </Link>

            </div>
        </div>
    );
}


