/* eslint-disable no-alert */
import {
  createVocabCard, deleteVocabCard, updateVocabCard, getSingleVocabCard
} from '../../helpers/data/vocabData';
import showVocabCards from '../vocabCard';
import createNewVocab from '../forms/vocabForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT TO ADD A VOCAB ITEM

    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObj = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_tech: document.querySelector('#vocab-language-tech').value,
        time: Date.now(),
      };
      createVocabCard(vocabObj).then(showVocabCards);
    }

    if (e.target.id.includes('delete-vocab')) {
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, id] = e.target.id.split('--');

        deleteVocabCard(id).then(showVocabCards);
      }
    }

    // OPENS EDIT VOCAB FORM
    if (e.target.id.includes('edit-vocab-btn')) {
      console.warn('clicked');
      const [, id] = e.target.id.split('--');
      getSingleVocabCard(id).then((bookObj) => createNewVocab(bookObj));
    }

    // SAVES CHANGES TO VOCAB ITEM
    if (e.target.id.includes('update-vocab-btn')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObj = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_tech: document.querySelector('#vocab-language-tech').value,
        firebaseKey
      };
      updateVocabCard(vocabObj, firebaseKey).then(showVocabCards);
    }
  });
};

export default domEvents;
