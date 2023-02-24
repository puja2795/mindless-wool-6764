import React from "react";
import "../styles/Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { border } from "@chakra-ui/styled-system";
import {
  Button,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import data from "../data.json";
import { ProductCard } from "../Components/HomePageComponents/ProductCard";

export const HomePage = () => {
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
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ width: "20%", height: "100%" }}></div>
      <div
        style={{
          width: "70%",
          height: "310px",
        }}
      >
        <Grid
          h="100%"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          padding={2}
        >
          <GridItem
            rowSpan={5}
            colSpan={2}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
          >
            <Carousel
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              transitionDuration={1000}
              containerClass="carousel-container"
            >
              {carouselImages.map((el) => {
                return (
                  <div>
                    <img width="100%" src={el} alt="carousel" />
                  </div>
                );
              })}
            </Carousel>
          </GridItem>
          <GridItem
            colSpan={2}
            rowSpan={3}
            bg="tomato"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
          >
            <Image
              src="https://static3.industrybuying.com/homepage/16732564011662983964web-side-bnr-top%20(2)%20(1).png"
              alt="industry"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem
            colSpan={1}
            rowSpan={2}
            bg="white"
            p={2}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
          >
            <div style={{ display: "flex" }}>
              <Image
                src="https://www.industrybuying.com/static/images/mobile.png"
                alt="industry"
              />
              <Text fontSize="xs">
                Enter your phone number to <b>GET UPTO 5% OFF</b>
              </Text>
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <Input
                variant="outline"
                borderRadius="2px"
                height="30px"
                placeholder="Enter Your Phone"
                fontSize="14px"
              />
              <Button
                bgColor="black"
                borderRadius="2px"
                color="white"
                height="30px"
              >
                Go
              </Button>
            </div>
          </GridItem>
          <GridItem
            colSpan={1}
            rowSpan={2}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
          >
            <Image
              src="https://static3.industrybuying.com/homepage/1551767207right-small-reseller2.gif"
              alt="industry"
              width="100%"
              height="100%"
            />
          </GridItem>
        </Grid>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "5px",
          }}
        >
          <div
            style={{
              width: "80%",
              border: "1px solid green",
              paddingRight: "10px",
            }}
          >
            <Image
              src="https://static3.industrybuying.com/homepage/1652437509PowerHouse-Strip-Banner%20(1).png"
              alt="industry"
              marginBottom={4}
            />
            <Heading as="h3" size="md" textAlign="left" marginTop="12px">
              IB POWER BRAND
            </Heading>
            {/* <Box w="100%"> */}
            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={1}
              templateRows="repeat(2, 1fr)"
              w="100%"
              padding={2}
            >
              {data["power-brands"].map((el) => {
                return (
                  <ProductCard
                    el={el}
                    boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                  />
                );
              })}
            </Grid>
            {/* </Box> */}
          </div>
          <div style={{ width: "20%", border: "1px solid green" }}>
            <Image
              src="https://static3.industrybuying.com/homepage/1676984146Domestic-Monoblock-Pump-side-bnr.png"
              alt="industry"
              marginBottom={4}
            />
            <Image
              src="https://static3.industrybuying.com/homepage/1676984378image%20(2).png"
              alt="industry"
            />
          </div>
        </div>
      </div>
      <div
        style={{ width: "10%", border: "1px solid green", height: "100%" }}
      ></div>
    </div>
  );
};
