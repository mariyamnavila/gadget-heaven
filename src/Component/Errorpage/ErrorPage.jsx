import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center py-[150px] bg-white space-y-4">
            <h1 className="text-8xl font-semibold">404</h1>
            <h3 className="text-5xl">Ooops!</h3>
            <h4 className="text-2xl">Looks Like you're in the wrong place</h4>
            <p>We can't find the age you're looking for... <Link className="font-bold" to={'/'}>Take me Home</Link></p>
        </div>
    );
};

export default ErrorPage;