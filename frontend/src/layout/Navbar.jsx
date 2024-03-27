import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: 'Login' },
  { to: '/register', text: 'Register' },
]

const userNav = [
  { to: '/', text: 'หน้าหลัก' },
  { to: '/Equipment', text: 'ยืมอุปกรณ์' },
  { to: '/Return', text: 'คืนอุปกรณ์' },
  { to: '/ShoppingCart', text: 'ตระกร้า' },
  { to: '/History', text: 'ประวัติ' },
  
  
]

export default function Header() {
  const { user, logout } = useAuth()
  const finalNav = user?.id ? userNav : guestNav
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-blue-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hello, {user?.id ? user.username : 'Guest'}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {finalNav.map(el => (
            <li key={el.to}>
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
              <button onClick={handleLogout}>Logout</button> 
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
