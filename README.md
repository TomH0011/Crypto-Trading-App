# Crypto Trading App

A full-stack cryptocurrency trading dashboard that lets users register/login, view real-time coin prices, place mock buy/sell orders, and track a portfolio. Built as a learning project and portfolio showcase.

## Tech Stack

**Client:** React, TailwindCSS, Axios, React Context API  
**Server:** Java Spring Boot (Maven), H2 (in-memory) database, JWT for authentication  

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/TomH0011/Crypto-Trading-App.git
   cd Crypto-Trading-App
-------------------------------------------------------------------------------
2. Backend Setup
   cd Backend/CryptoTradingApp
   mvn clean install
     Edit src/main/resources/application.properties to set:
      spring.datasource.url=jdbc:h2:mem:crypto_db
      spring.datasource.driverClassName=org.h2.Driver
      spring.datasource.username=sa
      spring.datasource.password=
      
      jwt.secret=YourSuperSecretJWTKey
      jwt.expirationMs=86400000
      
      price.api.key=YOUR_PRICE_API_KEY_HERE
      
   # (Optional) For MySQL/PostgreSQL:
   # spring.datasource.url=jdbc:mysql://localhost:3306/crypto_db
   # spring.datasource.username=root
   # spring.datasource.password=YourDBPassword
   # spring.jpa.hibernate.ddl-auto=update

     Run the backend server:
       mvn spring-boot:run
       The backend will start on http://localhost:8080/.

-------------------------------------------------------------------------------

3. Frontend Setup
   cd ../../Frontend/CryptoTradingAppFrontend2
   npm install

   Create a file named .env.local in CryptoTradingAppFrontend2/ with:
   REACT_APP_API_BASE_URL=http://localhost:8080/api

   Start the React development server:
   npm start
   The frontend will be available at http://localhost:3000/.

-------------------------------------------------------------------------------

### Deployment

1. Build and package the backend (generates a JAR):
   cd Backend/CryptoTradingApp
   mvn clean package

   Copy the resulting target/crypto-trading-app-0.0.1-SNAPSHOT.jar to your server and run:
   java -jar crypto-trading-app-0.0.1-SNAPSHOT.jar

2. Build the frontend for production:
   cd ../Frontend/CryptoTradingAppFrontend2
   npm run build

3. Configure environment variables on your hosting platform:
   PRICE_API_KEY

   JWT_SECRET

   (If using a relational DB) spring.datasource.* values





