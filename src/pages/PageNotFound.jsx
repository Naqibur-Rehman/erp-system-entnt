import pageNotFound from "../assets/pageNotFound.png";

const PageNotFound = () => {
  return (
    <div className="flex flex-col mx-auto items-center text-center">
      <div className="">
        <img src={pageNotFound} alt="page not found" />
        <h1 className="text-3xl text-gray-700">Oops! Page Not Found.</h1>
      </div>
    </div>
  );
};

export default PageNotFound;
