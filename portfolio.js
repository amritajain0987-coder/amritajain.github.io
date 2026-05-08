// Welcome Message
console.log("Welcome to Prof. Amrita Jain Portfolio");

// Smooth Scroll Effect for Future Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    anchor.addEventListener('click', function (e) {
        
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// Footer Year Auto Update
const footer = document.querySelector("footer");

footer.innerHTML = `© ${new Date().getFullYear()} Prof. Amrita Jain | Academic Portfolio`;
