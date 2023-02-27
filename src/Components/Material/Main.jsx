import React from "react";
function Main() {
  return (
    <div className="container-fluid">
      <div className="p-5 bg-image" style={{ backgroundColor: "white" }}></div>
      <div className="card mx-4 mx-md-5 shadow-5-strong">
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center justify-content-center">
                <h2 className="fw-bold mb-5">User Data</h2>
              </div>
              <form>
                <div className="row">
                  <div className="mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        placeholder="FirstName"
                        id="form3Example1"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        placeholder="LastName"
                        id="form3Example2"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    placeholder="EmailAddress"
                    id="form3Example3"
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="form3Example4"
                    className="form-control"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    placeholder="PhoneNumber"
                    id="form3Example5"
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
