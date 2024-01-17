if (document.querySelector(".hamburg-line")) {
  let hamburgLine = document.querySelector(".hamburg-line");
  let hamburgModal = document.querySelector(".nav-modal");
  hamburgLine.addEventListener("click", () => {
    hamburgModal.classList.toggle("nav-modal-active");
    if (hamburgModal.classList.contains("nav-modal-active")) {
      hamburgLine.querySelector("path").style.stroke = "#fff";
      document.body.style.overflow = "hidden";
    } else {
      hamburgLine.querySelector("path").style.stroke = "#B90504";
      document.body.style.overflow = "visible";
    }
  });

  window.onclick = function (e) {
    if (e.target == hamburgModal) {
      hamburgModal.classList.remove("nav-modal-active");
      hamburgLine.querySelector("path").style.stroke = "#B90504";
      document.body.style.overflow = "visible";
    }
  };

  let navModal = document.querySelector(".nav-modal-inner");
  navModal.querySelectorAll("a").forEach((e) => {
    e.addEventListener("click", () => {
      hamburgModal.classList.remove("nav-modal-active");
      hamburgLine.querySelector("path").style.stroke = "#B90504";
      document.body.style.overflow = "visible";
    });
  });
}
if (document.querySelector(".post-back-btn")) {
  document.querySelector(".post-back-btn").addEventListener("click", () => {
    window.history.back();
  });
}
if (document.querySelector(".post-bookmark-btn")) {
  let postBookmarkBtn = document.querySelector(".post-bookmark-btn");
  postBookmarkBtn.addEventListener("click", () => {
    if (postBookmarkBtn.style.backgroundColor == "rgb(255, 255, 255)") {
      postBookmarkBtn.style.backgroundColor = "rgb(185, 5, 4)";
      postBookmarkBtn.querySelector("svg path").style.stroke = "white";
    } else {
      postBookmarkBtn.style.backgroundColor = "rgb(255, 255, 255)";
      postBookmarkBtn.querySelector("svg path").style.stroke = "rgb(185, 5, 4)";
    }
  });
}

if (document.querySelector(".nav-back-btn-icon")) {
  document.querySelector(".nav-back-btn-icon").addEventListener("click", () => {
    window.history.back();
  });
}
let homeCards = document.querySelectorAll(".card-left-person-container");
let homeCardBtns = document.querySelectorAll(".card-down-icon");
homeCards.forEach((ele) => {
  let letfCardPerson = ele.querySelectorAll(".card-left-person");
  let arr = Array.from(letfCardPerson);
  let lastThree = arr.slice(3);
  lastThree.forEach((e) => {
    e.style.display = "none";
  });
});

homeCardBtns.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    let icon = event.target.closest(".card-down-icon svg");
    let parent = event.target.closest(".card-left-person-container");

    if (icon.style.transform == "rotate(180deg)") {
      icon.style.transform = "rotate(0deg)";
      homeCards.forEach((ele) => {
        let letfCardPerson = ele.querySelectorAll(".card-left-person");
        let arr = Array.from(letfCardPerson);
        let lastThree = arr.slice(3);
        lastThree.forEach((e) => {
          e.style.display = "none";
        });
      });
    } else {
      icon.style.transform = "rotate(180deg)";
      parent.querySelectorAll(".card-left-person").forEach((e) => {
        e.style.display = "flex";
      });
    }
  });
});

// Edit Bookmark

if (document.querySelector(".edit-bookmark-btn-profile")) {
  document
    .querySelector(".edit-bookmark-btn-profile")
    .addEventListener("click", () => {
      document.querySelectorAll(".card-delete-icon").forEach((e) => {
        if (e.style.display == "block") {
          e.style.display = "none";
        } else {
          e.style.display = "block";
        }
      });
    });
  document.querySelectorAll(".card-delete-icon").forEach((event) => {
    event.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}
