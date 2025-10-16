import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

function Main() {
  const location = useLocation();
  const pathname = location.pathname.toLowerCase(); // case-insensitive check
  const noHeaderFooter = pathname === '/login' || pathname === '/signup';

  return (
    <div>
      {noHeaderFooter || <Navbar />}

      <Outlet />

      {noHeaderFooter || <Footer />}
    </div>
  );
}

export default Main;
