import './App.css';
import { Routes, Route } from 'react-router-dom'; 

import Home from '@/page/Home/Home/Home';
import { Navbar } from '@/page/Home/Navbar/Navbar'; // Add Navbar here
import Portfolio from '@/page/Portfolio/Portfolio';
import Activity from '@/page/Activity/Activity';
import Wallet from '@/page/Wallet/Wallet';
import Withdrawal from '@/page/Withdrawal/Withdrawal';
import PaymentDetails from '@/page/PaymentDetails/PaymentDetails';
import StockDetails from '@/page/StockDetails/StockDetails';
import Watchlist from '@/page/Watchlist/Watchlist';
import Profile from '@/page/Profile/Profile';
import SearchCoin from '@/page/Search/SearchCoin';
import NotFound from '@/page/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar /> {/* Ensure Navbar is inside here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/withdrawal" element={<Withdrawal />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/market/:id" element={<StockDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchCoin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

