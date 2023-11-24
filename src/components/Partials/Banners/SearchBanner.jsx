import bannerImg from "../../../assets/images/womanrun.jpg";
const SearchBanner = () => {
  return (
    <div
      className="hero min-h-[200px] sm:min-h-[300px]"
      style={{
        backgroundImage: `url(${bannerImg})`,
        //   "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="my-5 text-2xl">
            Coding, Designing, Creating: <br /> Your Talent, <br />
            Your ContestHub!
          </p>
          <div className="join">
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
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
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
