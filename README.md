A comprehensive, full-stack application that lets users explore real-time cryptocurrency prices, place mock buy/sell orders, and track their portfolio. This project stitches together three key parts:

Java Spring Boot backend

React + Tailwind CSS frontend UI

Frontend-to-Backend integration with REST APIs & user authentication

Whether you’re aiming to learn how to build a modern trading dashboard from scratch or wanting to showcase a polished portfolio project, this repository has everything you need.


### Structure

crypto-trading-platform/
├── backend/                    # Java Spring Boot service
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/
│   │   │   │   ├── config/             # Security / Swagger configs
│   │   │   │   ├── controller/         # REST controllers (auth, prices, orders)
│   │   │   │   ├── dto/                # Request/response DTOs
│   │   │   │   ├── model/              # Entity classes (User, Order, Portfolio)
│   │   │   │   ├── repository/         # Spring Data JPA repositories
│   │   │   │   └── service/            # Business logic (price feed, user service)
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── data.sql            # (Optional) sample seed data
│   │   └── test/                       # Unit & integration tests
│   └── pom.xml                         # Maven build file
│
├── frontend/                     # React + Tailwind CSS client
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                # Images, icons
│   │   ├── components/            # Reusable UI components (Navbar, Card, Modal)
│   │   ├── contexts/              # React Contexts (AuthContext, PriceContext)
│   │   ├── hooks/                 # Custom hooks (useAuth, useFetchPrices)
│   │   ├── pages/                 # Top-level pages (Login, Dashboard, Portfolio)
│   │   ├── services/              # API service calls (auth.service.js, price.service.js, order.service.js)
│   │   ├── styles/                # Tailwind config overrides (optional)
│   │   ├── utils/                 # Utility functions (formatPrice, parseJWT)
│   │   └── index.js               # React entry point
│   └── package.json
│
├── README.md                     # (You’re reading it!)
└── .gitignore


🔍 Overview & Key Features
Java Spring Boot Backend

User Authentication & Authorization

JWT-based login/register endpoints

User, Role, and Token entities

Cryptocurrency Price Feed

Scheduled tasks to pull real-time prices from a third-party API (e.g., CoinGecko)

Exposes a /api/prices REST endpoint returning current prices for supported symbols

Order Management

Place mock buy/sell orders via /api/orders

Order entity with fields: id, userId, symbol, quantity, priceAtOrder, timestamp

Portfolio Tracking

/api/portfolio/{userId} returns a user’s current holdings and unrealized P&L

Persistence

H2 (in-memory) by default; can be switched to MySQL/PostgreSQL

Spring Data JPA repositories for User, Order, PortfolioRecord

Configuration & Security

application.properties for DB URL, JWT secret, price-feed API key

Swagger/OpenAPI docs served at /swagger-ui.html

React + Tailwind CSS Frontend

Responsive Dashboard

Sidebar navigation: Home | Market | Portfolio | Settings

Main charts showing top 10 coins’ live prices (bar/line charts)

Authentication Flow

Public: Login & Register pages

Protected Routes: Dashboard, Portfolio pages require a valid JWT

Stored token in localStorage + AuthContext

Market Page

Fetches /api/prices every 10 seconds via useFetchPrices hook

Displays price cards (symbol, current price, 24h change)

Portfolio Page

Fetches user’s portfolio from /api/portfolio/{userId}

Table of holdings: symbol, quantity, average price, current value, P&L

“Sell” modal to place mock sell orders

Place Order Modal

Dropdown of available symbols; input quantity

Sends POST to /api/orders and updates portfolio context

Tailwind Styling

Configured in tailwind.config.js

Custom colours, fonts, and spacing to match a trading platform aesthetic

Frontend-to-Backend Integration

CORS & Proxy Setup

Backend running on http://localhost:8080

In React’s package.json, proxy: "http://localhost:8080" for development ease

Axios interceptors attach JWT in Authorization: Bearer <token> header

Environment Variables

Frontend: REACT_APP_API_BASE_URL=http://localhost:8080/api

Backend:

PRICE_API_KEY=YOUR_PRICE_API_KEY
JWT_SECRET=YourSuperSecretJWTKey
DB_URL=jdbc:h2:mem:crypto_db
DB_USERNAME=sa
DB_PASSWORD=
(Or switch to MySQL/PostgreSQL by updating spring.datasource.url, etc.)

Error Handling & Loading States

Global ErrorBoundary component for uncaught errors

useLoading hook to show spinners on async calls

Testing

Backend: JUnit + Mockito tests for controllers & services

Frontend: Jest + React Testing Library for key components (Login form, PriceCard)

🔧 Prerequisites
Java 17+

Maven 3.6+

Node.js 16+ (includes npm)

Git (to clone this repo)

Optional (if you want to switch to a relational database instead of H2):

MySQL or PostgreSQL

🚀 Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/crypto-trading-platform.git
cd crypto-trading-platform
2. Backend Setup
Navigate to the backend/ folder:

cd backend
Copy and configure application.properties:

Make a copy of the sample and edit it:

cp src/main/resources/application.properties.example src/main/resources/application.properties
Update the following properties in src/main/resources/application.properties:

properties
# Spring Datasource (H2 by default)
spring.datasource.url=jdbc:h2:mem:crypto_db
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JWT Settings
jwt.secret=YourSuperSecretJWTKey
jwt.expirationMs=86400000

# External Price Feed API
price.api.key=YOUR_PRICE_API_KEY_HERE

# (Optional) To switch to MySQL/PostgreSQL:
# spring.datasource.url=jdbc:mysql://localhost:3306/crypto_db
# spring.datasource.username=root
# spring.datasource.password=YourDBPassword
# spring.jpa.hibernate.ddl-auto=update
Build and run the backend:

mvn clean install
mvn spring-boot:run
Verify the backend is running:

Swagger UI: http://localhost:8080/swagger-ui.html

Test endpoints:

POST http://localhost:8080/api/auth/register

POST http://localhost:8080/api/auth/login

GET http://localhost:8080/api/prices

3. Frontend Setup
Open a new terminal and navigate to the frontend/ folder:

cd ../frontend
Create environment file:

In the frontend/ directory, create a file named .env.local with:

REACT_APP_API_BASE_URL=http://localhost:8080/api
Install dependencies and start the development server:


npm install
npm start
Access the UI:

Open http://localhost:3000 in your browser.

Register a new user → log in → you’ll be redirected to the dashboard.

Browse Market, view live price updates, place “Buy”/“Sell” mock orders, and watch portfolio updates in real time.

