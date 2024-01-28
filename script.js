let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector('.change').classList.toggle('dark-mode');
  document.querySelector('.statsh').classList.toggle('dark-mode');
  document.querySelector('.statsp').classList.toggle('dark-mode');
  document.querySelector('.background').classList.toggle('dark-mode');
  document.querySelector('.support').classList.toggle('dark-mode');
  document.querySelector('.carousel').classList.toggle('dark-mode');
}
themeButton.addEventListener("click", toggleDarkMode);


let signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {
  let signature = document.createElement('p');
  signature.textContent = `🖊️ ${person.name} from ${person.hometown} supports helping the homeless.`;
  let signatureSection = document.querySelector('.signatures');
  signatureSection.appendChild(signature);
}

const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }


  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
    toggleModal(person);
  }
}

signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");
const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you ${person.name} for supporting helping the homeless and bettering our community!`;
  let intervalId = setInterval(scaleImage, 500);
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000)
}

let scaleFactor = 1;
let modalImage = document.getElementById('modal-image');
const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

let closeButton = document.getElementById("modal-button");
const closeModal = () => {
  let modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);

window.addEventListener("scroll", reveal);

