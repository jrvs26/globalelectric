import React, { useState } from "react";
import Vision from "../images/vision.jpg";
import Mission from "../images/mission.jpg";
import CompanyService from "../images/company_service.jpg";
import { Button, Modal } from "react-bootstrap";
import Logo from "../images/globaltranslogo.png";

function About({ id }) {
  const [showMissionModal, setShowMissionModal] = useState(false);
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [showCompanyServiceModal, setShowCompanyServiceModal] = useState(false);

  const handleCloseMissionModal = () => setShowMissionModal(false);
  const handleShowMissionModal = () => setShowMissionModal(true);

  const handleCloseVisionModal = () => setShowVisionModal(false);
  const handleShowVisionModal = () => setShowVisionModal(true);

  const handleCloseCompanyServiceModal = () =>
    setShowCompanyServiceModal(false);
  const handleShowCompanyServiceModal = () => setShowCompanyServiceModal(true);
  return (
    <>
      <section id={id}>
        <div className="flex align-items-center justify-center mt-5 mb-2 cursor-default">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            <mark className="px-2 text-white bg-violet-600 rounded">About</mark>{" "}
            US
          </h1>
        </div>
        <div
          className="flex align-items-center justify-center mb-10"
          style={{ marginTop: "20px", gap: "80px" }}
        >
          <div className="max-w-sm bg-gray-600 border border-gray-800 rounded-lg shadow">
            <img
              className="rounded-t-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              src={Mission}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Mission
              </h5>
              <p className="mb-3 font-normal text-gray-900">
                The Mission of Global Electric Power Development Corporation
              </p>
              <button
                onClick={handleShowMissionModal}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-gray-600 border border-gray-800 rounded-lg shadow">
            <img
              className="rounded-t-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              src={Vision}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Vision
              </h5>
              <p className="mb-3 font-normal text-gray-900">
                The Vision of Global Electric Power Development Corporation.
              </p>
              <button
                onClick={handleShowVisionModal}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-gray-600 border border-gray-800 rounded-lg shadow">
            <img
              className="rounded-t-lg hover:scale-110 transition-transform duration-300 ease-in-out"
              src={CompanyService}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Company Services
              </h5>
              <p className="mb-3 font-normal text-gray-900">
                Company Services of Global Electric Power Development
                Corporation.
              </p>
              <button
                onClick={handleShowCompanyServiceModal}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-3 text-center align-align-items-center justify-content-center mb-20">
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="text-2xl italic font-medium text-white">
                "Global Electric Power Development Corporation was established
                in the year 2012, as an Electrical Contractor. With our hard
                work and commitment, our organization is one of the leading
                Electrical Contractor service providers."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img className="w-6 h-6 rounded-full" src="" alt="" />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-200">
                <cite className="pe-2 font-medium text-gray-100">
                  <a href="/">Engr. Jojo Tobias</a>
                </cite>
                <cite className="ps-3 text-sm text-gray-500">
                  CEO and President of Global Electric Power Development
                  Corporation.
                </cite>
              </div>
            </figcaption>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img className="w-6 h-6 rounded-full" src="" alt="" />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-200">
                <cite className="pe-2 font-medium text-gray-100">
                  <a href="/">Engr. Edgardo Garcia</a>
                </cite>
                <cite className="ps-3 text-sm text-gray-500">
                  COO and Vice President Of Global Electric Power Development
                  Corporation.
                </cite>
              </div>
            </figcaption>
          </figure>
        </div>
        <Modal
          show={showMissionModal}
          onHide={handleCloseMissionModal}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              {" "}
              {/* Added text-center class */}
              Mission of Global Electric Power Development Corporation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="mx-auto mb-2"
              src={Logo}
              alt=""
              height={100}
              width={100}
            />
            <hr />
            <br />

            <p className="mb-3 mt-3 font-normal text-gray-900 text-center">
              Global Electric Power Development Corporation offers customer the
              highest-quality of electrical services, first choice for
              electrical services, with inspiring quality, professionalism and
              innovation, each and every time.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseMissionModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showVisionModal}
          onHide={handleCloseVisionModal}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Vision of Global Electric Power Development Corporation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="mx-auto mb-2"
              src={Logo}
              alt=""
              height={100}
              width={100}
            />
            <hr />
            <br />
            <p className="mb-3 mt-3 font-normal text-gray-900 text-center">
              To Full fill our client's requirements and we will grow our
              business; by consistently delivering a high standard of service
              and be recognized as a peak performing provider to our clients.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseVisionModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showCompanyServiceModal}
          onHide={handleCloseCompanyServiceModal}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-base">
              Company Services of Global Electric Power Development Corporation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="mx-auto"
              src={Logo}
              alt=""
              height={100}
              width={100}
            />
            <hr className="mt-1" />
            <p className="mb-3 mt-3 font-normal text-gray-900 text-center">
              Our electrical services include supply and installation, testing
              and commissioning, rentals and maintenance of electrical systems.
              As an electrical contractor company, GEPDC places great emphasis
              on its relationship with clients, private or commercial, and
              prides ourselves on the ability to respond to your contracting
              requirements in an efficient and cost-effective way.
            </p>
            <br />
            <hr />
            <br />
            <p className="mb-3 mt-3 font-normal text-gray-900 text-center">
              <ul>
                <li>General lighting and power systems</li>
                <li>Circuit breakers and panel boards</li>
                <li>Feeder lines, wireways, and cable trays</li>
                <li>Low and high voltage switchgears and switchboards</li>
                <li>Motor control centers and load centers</li>
                <li>Capacitor banks, power factor corrections</li>
                <li>Automatic voltage regulator</li>
                <li>
                  Thermal scanning for all types of electrical facilities,
                  infrared thermal imaging camera
                </li>
                <li>Transformer testing and maintenance of substations</li>
                <li>Power generating systems and controls</li>
                <li>Substation, transmission, and distribution systems</li>
                <li>Transformer, dry type and oil immersed</li>
                <li>High voltage terminations</li>
                <li>Solar power plant/roof top solar</li>
                <li>
                  Power quality monitoring for secondary voltages (flickers,
                  unbalance, transients, power, energy)
                </li>
                <li>Rental of manlift, genset, and transformer</li>
              </ul>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleCloseCompanyServiceModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
}

export default About;
