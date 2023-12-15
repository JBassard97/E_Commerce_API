# E_Commerce_API

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Screenshots](#screenshots)

## Description

This repository contains the source code for an e-commerce api. This has dedicated routes for retrieving all of the products, categories, or tags and their associations between themselves. It also handles every type of http request and makes crud operations on the database asyncronously, and responds with json and relevant status codes.

## Installation

You will need to have mySQL downloaded to create the database, and Node.js for the runtime environment. VS Code's integrated terminal works as a good CLI to start and perform the following steps:

    1. Clone the project
    2. You need rename the file '.env.EXAMPLE' to simply '.env'. Open it and ensure that your mySQL password is filled in with your own (if you've setup your mySQL to not have one, just leave it blank). The 'DB_USER' can remain 'root' 3. Right-click the folder titled 'db' and select 'Open in Integrated Terminal'
    4. You'll need to create the database initially, so start the mySQL shell by entering 'mysql -u root -p' If you're not worried about a password because you didn't make one, 'mysql -u root' will work too.
    5. Enter 'SOURCE schema.sql;' Then enter 'quit' to exit
    6. Enter 'cd ..' in the terminal to return to the root directory of the application
    7. Download the project's dependencies by entering 'npm i'
    8. We'll need to seed the databases tables with initial data, so run the script to do so by entering 'npm run seed' 9. Finally we are ready to begin, so enter 'npm run start'

## Usage

Link to project: https://github.com/JBassard97/E_Commerce_API

Once you've entered 'npm run start' and a message is displayed stating that the server is listening, you should be set to immediately test it. This can be done easiest with Insomnia or Postman. For my demonstration I'll be using Insomnia, which easily toggles request types and collections. When you are finished running the server, be sure to enter 'Ctrl + C'. Here is a brief layout of the routes and what the API expects and returns (all in json):

### /api/categories

GET request returns all categories

POST request creates a new category with the request body:

    {
        "category_name": "New Category Name"
    }

### /api/categories/:id

GET request returns the one category by its id

PUT request updates a category by its id with a new name with the request body:

    {
        "category_name": "Updated Category Name"
    }

DELETE request will delete a category with that id

### /api/tags

GET request returns all tags

POST request creates a new tag with the request body:

    {
        "tag_name": "New Tag Name"
    }

### /api/tags/:id

GET request returns the one tag by its id

PUT request updates a tag by its id with a new name with the request body:

    {
        "tag_name": "Updated Tag Name"
    }

DELETE request will delete a tag with that id

### /api/products

GET request returns all products

POST request creates a new product with the request body:

    {
        "product_name": "Black Turtle-Neck",
        "price": 89.00,
        "stock": 4,
        "tagIds": [1, 2, 3],
        "category_id": 1
    }

### /api/products/:id

GET request returns the one product by its id

PUT request updates a product by with the request body:

    {
        "product_name": "Fancy Flannel",
        "price": 42.00,
        "stock": 69,
        "tagIds": [3, 4]
    }

DELETE request will delete a category with that id

## License

MIT

## Screenshots
