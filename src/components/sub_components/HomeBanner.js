import React from "react";

function onChange() {}

function HomeBanner() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170124577/69379761-technology-concept-banner-demo.jpg"
              class="d-block w-100"
              alt="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170124577/69379761-technology-concept-banner-demo.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170124577/69379761-technology-concept-banner-demo.jpg"
              class="d-block w-100"
              alt="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170124577/69379761-technology-concept-banner-demo.jpg"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170124577/69379761-technology-concept-banner-demo.jpg"
              class="d-block w-100"
              alt="https://previews.123rf.com/images/garagestock/garagestock1701/garagestock170124577/69379761-technology-concept-banner-demo.jpg"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HomeBanner;
