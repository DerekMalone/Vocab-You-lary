const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
      <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX35962412.jpg" width="75"alt="vocabulary image">
          <a class="navbar-brand title" href="#">Vocab-You-lary</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" id="show-all-vocab">
                  Show all Vocabulary Cards <span class="sr-only">(current)</span>
                </a>
                </li>
                <li>
                <a class="nav-link" href="#" id="new-vocab">
                  Create a New Vocabulary Card! <span class="sr-only">(current)</span>
                </a>
                </li>
                </ul>
                <div id="cart-button"></div>
                <div id="logout-button"></div>
                </div>
                </nav>
                `;
};

export default navBar;
