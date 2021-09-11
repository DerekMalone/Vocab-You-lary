import { clearDom } from '../helpers/clearDom';

const showVocabCards = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.definition}</p>
            <hr>
            <p class="card-definition">${item.language_tech}</p>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocab--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
};

// BUTTONS THAT CAN BE ADDED BACK TO CARD IF NEEDED
/* <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
           <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i> */

export default showVocabCards;
