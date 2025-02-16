const plusButton = document.querySelectorAll(".plus-btn");

plusButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    const questionNumber = btn.getAttribute("data-question");
    const answerContent = document.querySelector(
      `.answer[data-question="${questionNumber}"]`
    );

    const image = btn;
    if (image.src.includes("icon-plus.svg")) {
      image.src = "./assets/images/icon-minus.svg";
    } else {
      image.src = "./assets/images/icon-plus.svg";
    }

    answerContent.classList.toggle("show");
  });
});
