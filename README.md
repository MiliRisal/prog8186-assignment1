﻿# Final Project integration

 I have created a Shop More website where the data is being fetched from the database and the users can add the products to the cart and place an order and check out. They can aslo create user account. Here is the project structure;

 # Project Structure

- *database (MongoDB Atlas)*
- *server (nodejs express)*
- *client (react web application)*

## Mongodb (Database)

- *Database: test*
- *Database schema:*
  - products (\_id, description, image, pricing, shippingCost)
  - users (\_id, email, password, username, purchaseHistory, shippingAddress)
  - orders (\_id, { users}, orderDate )
 
## React Application (Front-end)
- *Library: React*
- *Other Dependencies: react-router-dom, bootstrap, react-bootstrap*
- *Port: 300*


## Nodejs Express (Back-end)

- *Framework: Express*
- *Other Dependencies: body-parser, mongoose, cors*
- *Port: 3000*


 
