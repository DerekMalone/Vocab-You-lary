import { clearDom } from '../../helpers/clearDom';

const createNewVocab = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="vocab-form" class="">
    <div class="form-group">
        <label for="first_name">Title</label>
        <input type="text" class="form-control" id="vocab-title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="vocab-definition">Definition</label>
        <input type="text" class="form-control" id="vocab-definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="vocab-language-tech">Language or Technology</label>
        <input type="text" class="form-control" id="vocab-language-tech" placeholder="Language or Tech" value="${obj.language_tech || ''}" required>
      </div>
      <button type="submit" 
        id="${obj.firebaseKey ? `update-vocab-btn--${obj.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary">Submit New Vocabulary
      </button>
  </form>
  `;
};

export default createNewVocab;
