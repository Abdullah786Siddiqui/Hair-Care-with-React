import React from "react";

const Reaction = () => {
  return (
    <div
      className="container-fluid mt-5 p-4"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <h2
        className="text-center text-dark mb-4"
        style={{ fontSize: "36px", fontWeight: "bold" }}
      >
        Hair Care Product Reviews
      </h2>

      {/* <!-- Review 1 --> */}
      <div className="mb-4 pb-3 border-bottom">
        <div className="d-flex align-items-center mb-3">
          <img
            src="/public/resized_image_1.jpg"
            className="rounded-circle me-3 "
          />
          <div>
            <h5 className="mb-1 text-dark">Anum Mustafa</h5>
            <div className="text-warning">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
        <p className="text-muted">
          "I have been using this hair serum for the past month and my hair
          feels incredibly smooth and shiny. It has really helped reduce frizz
          and split ends!"
        </p>
      </div>

      {/* <!-- Review 2 --> */}
      <div className="mb-4 pb-3 border-bottom">
        <div className="d-flex align-items-center mb-3">
          <img
            src="/public/resized_image_1.jpg"
            alt="Reviewer Image"
            className="rounded-circle me-3"
          />
          <div>
            <h5 className="mb-1 text-dark">Ayesha Malik</h5>
            <div className="text-warning">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        <p className="text-muted">
          "Great product! I noticed my hair became noticeably thicker and
          healthier after just two weeks. I love the way it nourishes my scalp!"
        </p>
      </div>

      {/* <!-- Review 3 --> */}
      <div className="mb-4 pb-3 border-bottom">
        <div className="d-flex align-items-center mb-3">
          <img
            src="/public/M.jpg "
            alt="Reviewer Image"
            className="rounded-circle me-3"
          />
          <div>
            <h5 className="mb-1 text-dark">Mohammad Ali</h5>
            <div className="text-warning">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        <p className="text-muted">
          "This shampoo has completely transformed my hair. It feels more
          nourished and less dry. I highly recommend it to anyone struggling
          with hair damage."
        </p>
      </div>
      {/* 
    <!-- Review 4 --> */}
      <div className="mb-4">
        <div className="d-flex align-items-center mb-3">
          <img
            src="/public/N-.jpg"
            alt="Reviewer Image"
            className="rounded-circle me-3"
          />
          <div>
            <h5 className="mb-1 text-dark">Nabeel Hassan</h5>
            <div className="text-warning">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <p className="text-muted">
          "I’ve tried multiple hair oils, but none have worked as well as this
          one. My hair looks more vibrant and healthy after just a few uses!"
        </p>
      </div>
    </div>
  );
};

export default Reaction;
