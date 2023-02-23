import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomePage = () => {
  const usenavigate = useNavigate();
  const [displayusername, displayusernameupdate] = useState("");

  const carouselImages = [
    "https://static3.industrybuying.com/homepage/1676984498symphony-desktop.png",
    "https://static3.industrybuying.com/homepage/1676984766vaccum-cleaner-desktop.png",
    "https://static3.industrybuying.com/homepage/1676984622Ink-Cartridge-&-Toner-desktop.png",
    "https://static3.industrybuying.com/homepage/1676008144Desktop-524X334-Tectix%20(1).png",
    "https://static3.industrybuying.com/homepage/1676358813powerwash-desktop.png",
    "https://static3.industrybuying.com/homepage/1675426294Desktop%20slider%20banner%20-%20524x334%20pixel-100%20(4).jpg",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    } else {
      displayusernameupdate(username);
    }
  }, []);


  return (
    <div>
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {carouselImages.map((el) => {
            return <div>{el}</div>;
          })}
        </Carousel>
        ;
      </div>
      <div>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </div>
    </div>
  );
};
