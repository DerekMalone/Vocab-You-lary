import clearDom from '../../helpers/clearDom';

const createNewVocab = () => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="vocab-form" class="">
    <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" class="form-control" id="vocab-title" placeholder="Title" value="" required>
      </div>
      <div class="form-group">
        <label for="vocab-definition">Definition</label>
        <input type="text" class="form-control" id="vocab-definition" placeholder="Definition" value="" required>
      </div>
      <div class="form-group">
        <label for="vocab-language-tech">Language or Technology</label>
        <input type="text" class="form-control" id="vocab-language-tech" placeholder="Language or Tech" value="" required>
      </div>
      <div class="form-group">
      
      </div>
      <button type="submit" 
        id="submit-vocab" class="btn btn-primary">Submit New Vocabulary
      </button>
  </form>
  `;
};

// title: document.querySelector('#').value,
//         definition: document.querySelector('#').value,
//         language_tech: document.querySelector('#').value,
//         time: document.querySelector('#').value

export default createNewVocab;
