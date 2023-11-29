// import bannerImg from "../../../assets/images/womanrun.jpg";
// import punk from "../../../assets/images/cyberpunk.jpg"
import game from "../../../assets/images/esports.webp"
const SearchBanner = () => {
  return (
    <div
      className="hero min-h-[200px] sm:min-h-[450px]"
      style={{
        backgroundImage: `url(${game})`,
        //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="my-5 text-lg md:text-3xl font-bold font-popins">
            Coding, Designing, Creating: <br /> Your Talent, <br />
            Your ContestHub!
          </p>
          <div className="join hidden sm:visible">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item text-stone-800">
              <option disabled selected>
                Filter
              </option>
              <option> Business contest </option>
              <option> Medical Contest </option>
              <option> Writing Contest </option>
              <option> Gaming Contest </option>
            </select>
            <div className="indicator">
              {/* <span className="indicator-item badge badge-secondary">new</span> */}
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
