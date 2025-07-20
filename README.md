# EdTech Application

## Overview
The EdTech application is a Spring Boot-based project designed to manage educational courses. It provides a RESTful API for handling course-related operations such as creating, updating, retrieving, and deleting courses.

## Project Structure
```
edtech-app
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── edtech
│   │   │           ├── EdtechApplication.java
│   │   │           ├── controller
│   │   │           │   └── CourseController.java
│   │   │           ├── service
│   │   │           │   └── CourseService.java
│   │   │           └── model
│   │   │               └── Course.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── static
│   └── test
│       └── java
│           └── com
│               └── edtech
│                   └── EdtechApplicationTests.java
├── pom.xml
└── README.md
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd edtech-app
   ```

2. **Build the project**:
   Ensure you have Maven installed, then run:
   ```
   mvn clean install
   ```

3. **Run the application**:
   You can run the application using:
   ```
   mvn spring-boot:run
   ```

4. **Access the API**:
   The application will be available at `http://localhost:8080`. You can use tools like Postman or curl to interact with the API.

## Usage
The application provides the following endpoints for managing courses:

- `GET /courses`: Retrieve all courses.
- `GET /courses/{id}`: Retrieve a specific course by ID.
- `POST /courses`: Create a new course.
- `PUT /courses/{id}`: Update an existing course.
- `DELETE /courses/{id}`: Delete a course by ID.

## Dependencies
This project uses the following key dependencies:
- Spring Boot
- Spring Web
- Spring Data JPA
- H2 Database (for in-memory database during development)

## License
This project is licensed under the MIT License. See the LICENSE file for more details.