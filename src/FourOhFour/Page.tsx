import { Link } from "react-router-dom";

export default function FourOhFourPage() {
  return (
    <main className="px-12 py-8 mx-auto max-w-7xl">
      <div className="format dark:format-invert max-w-full pb-8">
        <h1>404 - Page Not Found</h1>
        <p>
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <p>
          <Link to="/">Go back to Home</Link>
        </p>
      </div>
    </main>
  );
}
