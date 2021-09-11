import signOut from '../../helpers/signOut';
import createNewVocab from '../forms/vocabForm';
import { getVocabCards } from '../../helpers/data/vocabData';
import showVocabCards from '../vocabCard';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  // CLICK EVENT TO SHOW ALL VOCABULARY CARDS
  document.querySelector('#show-all-vocab')
    .addEventListener('click', () => {
      getVocabCards().then((cards) => showVocabCards(cards));
    });

  // CLICK EVENT TO PULL UP NEW VOCAB FORM
  document.querySelector('#new-vocab')
    .addEventListener('click', createNewVocab);
  console.warn('clicked');
};

export default navigationEvents;
