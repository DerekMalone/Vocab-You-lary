// import domEvents from '../components/events/domEvents';
import navigationEvents from '../components/events/navigationEvents';
import domBuilder from '../components/forms/domBuilder';
import navBar from '../components/forms/navBar';
import logoutButton from './logoutButton';
import showVocabCards from '../components/vocabCard';
import getVocabCards from './data/vocabData';

const startApp = () => {
  domBuilder();
  // domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getVocabCards().then((cards) => showVocabCards(cards));
};

export default startApp;
