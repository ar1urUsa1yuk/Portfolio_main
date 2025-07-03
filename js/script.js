// document.addEventListener("DOMContentLoaded", () => {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 // Якщо хочеш, щоб анімація спрацьовувала лише один раз:
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1 // починає реагувати, коли 10% елемента видно
//     });

//     document.querySelectorAll('.').forEach(el => {
//         observer.observe(el);
//     });
// });