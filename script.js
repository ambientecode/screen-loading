const buttonLoading = document.querySelector('.btn-loading');
let spinnerContainer = document.createElement('div');
spinnerContainer.classList.add('spinner-container');
let spinner = document.createElement('div');
spinner.classList.add('spinner');
spinnerContainer.appendChild(spinner);

buttonLoading.addEventListener('click', (e) => {
    e.preventDefault();
    startLoading();
    setTimeout(stopLoading, 2000);
});

function startLoading() {
    document.body.insertAdjacentElement('afterBegin', spinnerContainer);
}

function stopLoading() {
    document.body.removeChild(spinnerContainer);
}