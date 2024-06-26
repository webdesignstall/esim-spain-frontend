import CountrySearchComponent from "../countries/CountrySearchComponent";
const Banner = () => {
  return (
    <header className="custom-continer-fuller banner-section flex flex-col md:justify-start justify-center md:items-start items-center gap-3 py-2 2xl:p-20 sm:p-5">
      <p>
        <button className="text-[#C09D5E] bg-slate-700 text-[17px] sm:text-[20px] font-medium  border border-[#C09D5E] rounded-full px-10 py-2">
          For One eSim
        </button>
      </p>
      <h1
          style={{
              lineHeight: "1.3em",
          }}
          className="text-white lg:text-6xl text-[23px] md:text-4xl  font-bold my-2 md:my-5">
        Connecting Seamlessly <br /> Across the World
      </h1>
      <div className="lg:flex justify-between items-center gap-6  lg:bg-slate-700 lg:border lg:w-[45%] w-full lg:p-2 rounded-full text-white">
        <CountrySearchComponent />
      </div>
    </header>
  );
};

export default Banner;
