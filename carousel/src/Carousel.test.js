import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it('renders without crashing',() => {
  render(<Carousel/>)
})

it('matches snapshot',() => {
  const {asFragment} = render(<Carousel/>);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the left and right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId('left-arrow');
  fireEvent.click(leftArrow);

  // expect the first image to show, but not second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

});

it('should not show left arrow on the first image and not show right arrow on last image',() => {
  const {getByTestId} = render(<Carousel/>);
  const leftArrow = getByTestId('left-arrow');
  const rightArrow = getByTestId('right-arrow');

  expect(leftArrow).toHaveClass('hidden');
  expect(rightArrow).not.toHaveClass('hidden');

  fireEvent.click(rightArrow);

  expect(leftArrow).not.toHaveClass('hidden');
  expect(rightArrow).not.toHaveClass('hidden');

  fireEvent.click(rightArrow);

  expect(leftArrow).not.toHaveClass('hidden');
  expect(rightArrow).toHaveClass('hidden');
})
