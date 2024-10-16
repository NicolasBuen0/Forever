window.SimpleAnime = class {
  constructor() {
    (this.items = document.querySelectorAll('[data-anime]')), this.init();
  }
  animateItems() {
    this.items.forEach((t) => {
      const e = Number(t.getAttribute('data-anime'));
      isNaN(e) ||
        setTimeout(() => {
          t.classList.add('anime');
        }, e);
    });
  }
  handleVisibility() {
    void 0 !== document.visibilityState
      ? 'visible' === document.visibilityState && this.animateItems()
      : this.animateItems();
  }
  init() {
    (this.handleVisibility = this.handleVisibility.bind(this)),
      this.handleVisibility(),
      document.addEventListener('visibilitychange', this.handleVisibility);
  }
};
new SimpleAnime();




var modals = document.getElementsByClassName("modal");
var closeBtns = document.getElementsByClassName("close");

var openModalBtn = document.getElementById("openModal");


var locationModal = document.getElementById("locationModal");


// Abrir modal "Como Chegar"
openModalBtn.onclick = function(event) {
    event.preventDefault();
    locationModal.style.display = "flex";
};



// Fechar modal ao clicar no "x"
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        for (var j = 0; j < modals.length; j++) {
            modals[j].style.display = "none";
        }
    };
}

// Fechar modal ao clicar fora do conteúdo
window.onclick = function(event) {
    if (event.target == locationModal) {
        for (var i = 0; i < modals.length; i++) {
            modals[i].style.display = "none";
        }
    }
};