//template_gshcxuu
//service_3wh8sjb
//user_izP1FCYbL8nq5mcD9

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_3wh8sjb",
      "template_gshcxuu",
      event.target,
      "izP1FCYbL8nq5mcD9"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on azmccormicks@gmail.com"
      );
    });
}
let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    return document.body.classList.remove("modal--open");
    
  } else {
    document.body.classList += "modal--open";
    isModalOpen = true;
  }
}
