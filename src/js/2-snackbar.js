import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  position: 'topRight',
  progressBar: false,
  messageColor: '#FFFFFF',
  icon: '',
  close: false
})

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = document.querySelector('input[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: '#3FDA83',
      });
    })
    .catch((delay) => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#F0444C',
      });
    });
});