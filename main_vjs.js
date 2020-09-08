let menubtn = document.querySelector('.gnb_menubtn');
let menu = document.querySelector('.gnb_menu_mob');

const mainloc = document.querySelector(".main_prologue").offsetTop;
console.log('main:' + mainloc)

const aboutloc = document.querySelector(".loc_about").offsetTop;
console.log('about:' + aboutloc)

const skillsloc = document.querySelector(".loc_skills").offsetTop;
console.log('skills:' + skillsloc)

const posrtfolioloc = document.querySelector(".loc_portfolio").offsetTop;
console.log('portfolio:' + posrtfolioloc)

const contactloc = document.querySelector(".loc_contact").offsetTop;
console.log('contact:' + contactloc)

const aboutbtn = document.querySelectorAll(".goto_about")
const skillsbtn = document.querySelectorAll(".goto_skills")
const portfoliobtn = document.querySelectorAll(".goto_portfolio")
const contactbtn = document.querySelectorAll(".goto_contact")


// Mobile menu toggle

menubtn.addEventListener('click', function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});



aboutbtn.addEventListener('click', function () {
  // const aboutloc = document.querySelector(".loc_about").offsetTop;
  window.scrollTo({
    top: aboutlct,
    behavior: 'instant'
  })
})

// skillsbtn.addEventListener('click', function () {
//   window.scrollTo({
//     top: skillslct,
//     behavior: 'instant'
//   });
// })

// window.scrollTo({
//   top: contactlct,
//   behavior: 'instant'
// });