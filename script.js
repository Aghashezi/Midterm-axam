const Displayed = document.querySelectorAll(".faq-toggle");
Displayed.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faq = toggle.parentElement;
    faq.classList.toggle("active");

    const TEXT = faq.querySelector(".faq-text");
    TEXT.style.display = TEXT.style.display === "block";
  });
});
// Select all the button with id fa-times
const Wantdelete = document.querySelectorAll(".fa-times");
//use foreachloop to delel a specific element
Wantdelete.forEach((Wantdelete) => {
  //eventlistener will only delete the element we clicked on just now recently
  Wantdelete.addEventListener("click", () => {
    const faq = Wantdelete.closest(".faq");
    //it will remove element from class faq
    faq.remove(); 
  });
});
//Add new record
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("Btn");
  const bookList = document.querySelector(".faq-container"); 
  btn.addEventListener("click", function (e) {
      e.preventDefault(); 

      const question = document.getElementById("myinput").value;
      const answer = document.getElementById("myinput1").value;

      if (question && answer) {
      
          const newRecord = document.createElement("div");
        newRecord.classList.add("faq");
        
          const questionElement = document.createElement("h3");
          questionElement.textContent = question;
          newRecord.appendChild(questionElement);

    
          const answerElement = document.createElement("p");
          answerElement.classList.add("faq-text");
          answerElement.textContent = answer;
          newRecord.appendChild(answerElement);

          const toggleButton = document.createElement("button");
          toggleButton.classList.add("faq-toggle");
          toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i><i class="fas fa-times"></i>';
          newRecord.appendChild(toggleButton);

          toggleButton.addEventListener("click", function () {
              newRecord.classList.toggle("active");
              answerElement.style.display = answerElement.style.display === "block" ? "none" : "block";
          });

        
          bookList.appendChild(newRecord);

          
          document.getElementById("myinput").value = "";
          document.getElementById("myinput1").value = "";
      }
  });
});
