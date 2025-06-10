# Crypto Trading App

A modern, full-stack cryptocurrency trading dashboard that provides real-time market data, portfolio tracking, and mock trading capabilities. Built with performance and user experience in mind.

## 🌟 Features

- **Real-time Market Data**: Live cryptocurrency price updates and market trends
- **User Authentication**: Secure login and registration system with JWT
- **Portfolio Management**: Track your cryptocurrency holdings and performance
- **Mock Trading**: Practice trading with virtual currency
- **Responsive Design**: Optimised for both desktop and mobile devices
- **Interactive Charts**: Visual representation of market data using ApexCharts
- **Secure API**: Protected endpoints with JWT authentication

## 🛠 Tech Stack

### Frontend
- **React 18**: Latest version for optimal performance
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **ApexCharts**: Interactive charting library
- **React Hook Form**: Efficient form handling
- **Radix UI**: Accessible UI components

### Backend
- **Spring Boot**: Robust Java framework
- **H2 Database**: In-memory database (configurable for MySQL/PostgreSQL)
- **JWT**: Secure authentication
- **Maven**: Dependency management

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TomH0011/Crypto-Trading-App.git
   cd Crypto-Trading-App
   ```

2. **Backend Setup**
   ```bash
   cd Backend/CryptoTradingApp
   mvn clean install
   ```

   Configure `src/main/resources/application.properties`:
   ```properties
   # Database Configuration
   spring.datasource.url=jdbc:h2:mem:crypto_db
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=

   # JWT Configuration
   jwt.secret=YourSuperSecretJWTKey
   jwt.expirationMs=86400000

   # API Configuration
   price.api.key=YOUR_PRICE_API_KEY_HERE
   ```

   Start the backend:
   ```bash
   mvn spring-boot:run
   ```

3. **Frontend Setup**
   ```bash
   cd ../../Frontend/CryptoTradingAppFrontend2
   npm install
   ```

   Create `.env.local`:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:8080/api
   ```

   Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Configuration Options

### Database Options
- **H2 (Default)**: In-memory database for development
- **MySQL/PostgreSQL**: For production environments
  ```properties
  spring.datasource.url=jdbc:mysql://localhost:3306/crypto_db
  spring.datasource.username=root
  spring.datasource.password=YourDBPassword
  spring.jpa.hibernate.ddl-auto=update
  ```

### Environment Variables
- `PRICE_API_KEY`: Your cryptocurrency price API key
- `JWT_SECRET`: Secret key for JWT token generation
- `REACT_APP_API_BASE_URL`: Frontend API endpoint

## Deployment

1. **Backend Deployment**
   ```bash
   cd Backend/CryptoTradingApp
   mvn clean package
   java -jar target/crypto-trading-app-0.0.1-SNAPSHOT.jar
   ```

2. **Frontend Deployment**
   ```bash
   cd Frontend/CryptoTradingAppFrontend2
   npm run build
   ```
   Deploy the contents of the `dist` directory to your hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request






