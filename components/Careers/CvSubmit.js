import React from "react";
const CvSubmit = () => {
  return (
    <>
      <section>
        <div className="row upset">
          <div className="col-lg-12 col-md-6 col-12 ">
            <p className="text-center mt-5">
              No open Vacancies available at the moment, But you can still
              upload your CV in our HR, So if there would be free vacancy we
              will contact you
            </p>
          </div>
          <div className="col-lg-12 col-md-6 col-12 ">
            <div className="text-center border border-dark border-1 bg-light p-5 mt-5">
              <div className="dropzone">
                <img
                  src="./images/Vector.png"
                  className="img-fluid upload-icon "
                />
                <input type="file" className="upload-input" />
              </div>

              <small  className="text-secondary" >
            Cv Upload*
              </small>

              {/* <input type="file" /> */}
              {/* <small className="text-secondary">Cv Upload*</small> */}
            </div>
            <div className="col-lg-12 col-md-6 col-12 text-center mt-5">
              <input type="button" value="Submit" className="btn Submit_btu px-4 py-2" style={{borderRadius: "0"}} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CvSubmit;
