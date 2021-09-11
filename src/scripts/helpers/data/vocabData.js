import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB CARDS
const getVocabCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGE VOCAB CARD
const getSingleVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE NEW VOCABULARY CARD
const createVocabCard = (vocabObj) => new Promise((resolve, reject) => {
  console.warn(vocabObj);
  axios.post(`${dbUrl}/vocab.json`, vocabObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getVocabCards().then((vocabArray) => resolve(vocabArray));
        });
    }).catch((error) => reject(error));
});

// DELETE VOCAB CARD
const deleteVocabCard = (vocabId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${vocabId}.json`)
    .then(() => {
      getVocabCards().then((response) => resolve(response));
    }).catch(reject);
});

// UPDATE VOCAB CARD
const updateVocabCard = (vocabObj) => new Promise((resolve, reject) => {
  console.warn(vocabObj.firebaseKey);
  axios.patch(`${dbUrl}/vocab/${vocabObj.firebaseKey}.json`, vocabObj)
    .then(() => getVocabCards().then(resolve))
    .catch(reject);
});

export {
  getVocabCards, createVocabCard, deleteVocabCard, getSingleVocabCard, updateVocabCard
};
