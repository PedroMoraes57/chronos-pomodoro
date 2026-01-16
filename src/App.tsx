import { Heading } from './components/Heading';
import LogoAllInOneStudio from './assets/ALLINONESTUDIO.png';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <div className='landing-text'>
      <Heading />
      <img src={LogoAllInOneStudio} alt='All In One Studio Logo' />
      <p>Welcome to the All In One Studio application in React JS!</p>
    </div>
  );
}
