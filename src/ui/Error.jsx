import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <div className="px-3 py-4 sm:px-8 sm:py-6 lg:px-20">
        <h2 className="my-5 text-lg font-bold">Something went wrong!</h2>
        <p className="my-3">{error.data || error.message}.</p>
        <Link
          to="/"
          className=" text-blue-500 underline underline-offset-2 transition-colors hover:text-blue-600"
        >
          &larr; Back
        </Link>
      </div>
    </div>
  );
}

export default Error;
