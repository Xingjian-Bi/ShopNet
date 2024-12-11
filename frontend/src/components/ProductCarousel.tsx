import { Link } from "react-router-dom";
import { FC } from "react";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { ProductType } from "../types";
import getErrorMessage from "../utils/getErrorMessage";

const ProductCarousel: FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetTopProductsQuery(undefined);

  return isLoading ? null : error ? (
    <Message variant="danger">{getErrorMessage(error)}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product: ProductType) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white text-right">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
