const clearDom = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

const clearNav = () => {
  document.querySelector('#navigation').innerHTML = '';
};

export { clearDom, clearNav };
