import { render, screen } from '@testing-library/react';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './products/ProductList';

const mockData = {
  "products": [
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/7/1.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      ]
    },
    {
      "id": 30,
      "title": "Key Holder",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "price": 30,
      "discountPercentage": 2.92,
      "rating": 4.92,
      "stock": 54,
      "brand": "Golden",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/30/1.jpg",
        "https://cdn.dummyjson.com/product-images/30/2.jpg",
        "https://cdn.dummyjson.com/product-images/30/3.jpg",
        "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
      ]
    }
  ],
  "total": 2,
  "skip": 0,
  "limit": 10
}

describe("Menu", () => {
  test("renders menu", () => {
    render(<BrowserRouter><Menu></Menu></BrowserRouter>);
    expect(screen.getByText("React Products")
    ).toBeVisible();
  });

  test("loads product cards", async () => {
    render(<ProductList {...mockData}></ProductList>);
    expect(screen.getByText("Key Holder"))
  });

  
});
