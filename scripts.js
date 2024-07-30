
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }


        const scrollUpButton = document.getElementById('scroll-up');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollUpButton.style.display = 'flex';
            } else {
                scrollUpButton.style.display = 'none';
            }
        });

        scrollUpButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


        document.getElementById('directions-button').addEventListener('click', function () {
            window.open('https://www.google.com/maps/dir/?api=1&destination=BMW+KUN+Exclusive+in+Hyderabad', '_blank');
        });


       // below script will not allow to inspect

        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
        });
        document.addEventListener('keydown', function(e) {
          if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || (e.ctrlKey && (e.key === 'U' || e.key === 'u')) || (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c'))) {
            e.preventDefault();
          }
        });


       // below script will minimize in inspect

        function loadStylesheet(url) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        }
        
        function loadScript(url) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
        
        loadStylesheet('styles.min.css');
        loadScript('scripts.min.js');


        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123 || 
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || 
        (event.ctrlKey && event.shiftKey && event.keyCode === 74) || 
        (event.ctrlKey && event.keyCode === 85)) {
        event.preventDefault();
    }
});


alert("WELCOME TO MY WEBSITE");
     
      