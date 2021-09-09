import domEvents from '../components/events/domEvents';
import navigationEvents from '../components/events/navigationEvents';
import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
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
