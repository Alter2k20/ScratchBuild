// //Scroll bug solution
// // Capture scroll position before refresh
// const scrollPosition = window.scrollY || window.pageYOffset;

// // Store the scroll position (you can use localStorage, sessionStorage, or a cookie)
// localStorage.setItem('scrollPosition', scrollPosition);

// // Restore scroll position after page reload
// document.addEventListener('DOMContentLoaded', () => {
//   const storedPosition = localStorage.getItem('scrollPosition');
//   if (storedPosition) {
//     window.scrollTo(0, parseInt(storedPosition, 10));
//   }
// });

const navHeight = document.getElementById("nav").style.height;
document.getElementById("content").setAttribute("style", navHeight);
console.error();
