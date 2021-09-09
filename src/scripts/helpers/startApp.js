import navigationEvents from '../components/events/navigationEvents';
import logoutButton from './logoutButton';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  // getCards().then();
};

export default startApp;
