const htmlElements = {
  closeButton: document.querySelector('#close-button'),
  bookRoom: document.querySelectorAll('.book-room'),
  modal: document.querySelector('#modal'),
  modalOverlay: document.querySelector('#modal-overlay'),
  roomNumber: document.querySelector('#room-number'),
  roomPrice: document.querySelector('#room-price'),
  totalPrice: document.querySelector('#total-price'),
  numberOfNights: document.querySelector('#number-of-nights'),
  confirmButton: document.querySelector('#confirm-button'),
};

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < htmlElements.bookRoom.length; i++) {
    htmlElements.bookRoom[i].addEventListener('click', modalPopup);
    htmlElements.bookRoom[i].addEventListener('click', updateRoom);
  };

  htmlElements.closeButton.addEventListener('click', closeModal);
  htmlElements.numberOfNights.addEventListener('click', updateTotal);
  htmlElements.confirmButton.addEventListener('click', closeModal);
});

// Change modal and modal-overlay display to be flex
function modalPopup() {
  htmlElements.modal.style.display = 'flex';
  htmlElements.modalOverlay.style.display = 'flex';
};

// Have it set modal and modal-overlay display to be none
function closeModal() {
  htmlElements.modal.style.display = 'none';
  htmlElements.modalOverlay.style.display = 'none';
};

// Function to set the room number and price in the modal
function updateRoom() {
  let tableRow = event.target.parentElement.parentElement.childNodes;
  htmlElements.roomNumber.innerText = tableRow[1].innerText;
  htmlElements.roomPrice.innerText = tableRow[5].innerText;
  htmlElements.totalPrice.innerText = tableRow[5].innerText;
};

// Function to update the total price
function updateTotal() {
  let turnIntoMoney = /[a-zA-Z\$]/g;
  let roomPrice = htmlElements.roomPrice.innerText.replace(turnIntoMoney, '');
  let nights = htmlElements.numberOfNights.value;
  let totalPrice = parseFloat(roomPrice * nights).toFixed(2);
  htmlElements.totalPrice.innerText = '$' + totalPrice;
};
