import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const coursesData = [
  {
    id: "01",
    title: "Resume Builder",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];
const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
                <h2 className="text-center">Our Services</h2>
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-190">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <Link>
                  <button className="btn">See All</button>
                </Link>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col key={item.id} lg="4" md="6" sm="6">
              <ServicesCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
