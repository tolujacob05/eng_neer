import "../App.css";

function Image() {
  return (
    <>
      <div className="section full-height over-hide px-4 px-sm-0">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
              <div className="section mx-auto text-center slider-height-padding">
                <input
                  className="checkbox frst"
                  type="radio"
                  id="slide-1"
                  name="slider"
                  checked
                />
                <label for="slide-1"></label>
                <input
                  className="checkbox scnd"
                  type="radio"
                  name="slider"
                  id="slider-2"
                />
                <label for="slider-2"></label>
                <input
                  className="checkbox thrd"
                  type="radio"
                  name="slider"
                  id="slider-3"
                />
                <label for="slider-3"></label>
                <input
                  className="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-4"
                />
                <label for="slider-4"></label>
                <input
                  className="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-5"
                />
                <label for="slider-5"></label>
                <input
                  className="checkbox foth"
                  type="radio"
                  name="slider"
                  id="slider-6"
                />
                <label for="slider-6"></label>

                <ul>
                  <li>
                    <span>Digital Control</span>
                  </li>
                  <li>
                    <span>Digital Control</span>
                  </li>
                  <li>
                    <span>East</span>
                  </li>
                  <li>
                    <span>West</span>
                  </li>
                  <li>
                    <span>South</span>
                  </li>
                  <li>
                    <span>North</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
