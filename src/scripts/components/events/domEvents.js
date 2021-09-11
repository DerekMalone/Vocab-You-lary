import createNewVocab from '../forms/vocabForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT TO ADD A VOCAB ITEM
    if (e.target.id.includes('new-vocab')) {
      createNewVocab();
    }

    // if (e.target.id.includes('')) {
    //   e.preventDefault();
    //   const vocabObj = {
    //     title: document.querySelector('#vocab-title').value,
    //     definition: document.querySelector('#vocab-definition').value,
    //     language_tech: document.querySelector('#vocab-definition').value,
    //     time: new Date()
    //   };

    // }
  });
};

export default domEvents;
