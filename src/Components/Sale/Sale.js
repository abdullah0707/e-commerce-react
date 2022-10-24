import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';

import './Sale.css';

const Sale = () => {
  return (
    <section className="text-center my-5">
      
      <MDBRow>
        <MDBCol sm="6" lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Red trousers <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6" lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe light">
                <a href="#!">
                  <p>
                    Sweatshirt <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6" lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe dark">
                <a href="#!">
                  <p>
                    Accessories <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6" lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="z-depth-1-half">
            <div className="view zoom">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="stripe light">
                <a href="#!">
                  <p>
                    Sweatshirt <MDBIcon icon="angle-right" />
                  </p>
                </a>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Sale;