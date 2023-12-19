import ShowCards from "./ShowCards";

const Shows = () => {
  return (
    <div className=" bg-red h-full p-4">
      <div className="bg-gradient-to-tr from-red via-maroon to-black w-full">
        <h1 className="text-6xl p-4">UPCOMING EVENTS</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <ShowCards />
        <ShowCards />
        <ShowCards />
        <ShowCards />
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="btn bg-maroon border-maroon text-white hover:text-maroon hover:bg-white hover:border-white">
          MORE DATES
        </button>
      </div>
    </div>
  );
};

export default Shows;
