$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 80) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  /* Typing animation */
  var typed = new Typed(".home-typing", {
    strings: ["Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
  });

  var typed = new Typed(".about-typing", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
  });

  /* slide-up */
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  /* Toggle Menu/ NavBar Script */
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  /* OWL CAROUSEL */
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 1200,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// contact section

const form = document.querySelector("#contactForm")
form.addEventListener("submit",handleSubmit)

async function handleSubmit(e){
    e.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const subject = document.querySelector("#subject").value
    const msg = document.querySelector("#message").value
    
    let data = {
        service_id: 'service_p7kgtqn',
        template_id: 'template_jcx45pk',
        user_id: 'RQoKYKBxLSoU0NGVI',
        template_params: {
            'name': name,
            'email' : email,
            'subject' : subject,
            'message' : msg,

        }
    }

    try{
        await fetch("https://api.emailjs.com/api/v1.0/email/send",{
            method:'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        })
        console.log("Sent")
        e.target.reset()
    }
    catch(err){
        console.log(err)
    }

}   