// activity variables
const activityItem = document.querySelectorAll("[data-activity-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalTitle = document.querySelector("[data-modal-title]");

// modal variable
// modal toggle function
const activityModalFunccc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");

}

// add click event to all modal items
for (let i = 0; i < activityItem.length; i++) {

    activityItem[i].addEventListener("click", function () {
        modalTitle.innerHTML = "";
        var x = this.querySelector("[data-activity-title]").querySelectorAll("img");
        for (let j = 0; j < x.length; j++) {
            modalTitle.innerHTML += `                    
        <div class="swiper-slide">
           <div class="swiper-zoom-container">
               <img alt=""
                   src="${x[j].src}">
           </div>
       </div>`


        }
        const myCustomSlider = document.querySelectorAll('.mySwiper');
        const pagination = document.querySelectorAll('.swiper-pagination');
        const next = document.querySelectorAll('.swiper-button-next');
        const prev = document.querySelectorAll('.swiper-button-prev');


        for (i = 0; i < myCustomSlider.length; i++) {

            myCustomSlider[i].classList.add('mySwiper-' + i);
            pagination[i].classList.add('swiper-pagination-' + i);
            next[i].classList.add('swiper-button-next-' + i);
            prev[i].classList.add('swiper-button-prev-' + i);


            new Swiper('.mySwiper-' + i, {
                zoom: false,
                navigation: {
                    nextEl: `.swiper-button-next-${i}`,
                    prevEl: `.swiper-button-prev-${i}`,
                },
                pagination: {
                    el: `.swiper-pagination-${i}`,
                    clickable: true,
                },
            });
        }
        activityModalFunccc();
        imgsPrevent();
    });

}
modalCloseBtn.addEventListener("click", activityModalFunccc);
overlay.addEventListener("click", activityModalFunccc);
function imgsPrevent() {
    imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        img.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        })
    });

    swipers = document.querySelector(".swiper")
    if (swipers) {
        swipers.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        })
    }
    project = document.querySelector(".projectsec2")
    if (project) {
        project.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        })
    }
}
imgsPrevent();
///////////send email//////////////
function validate() {
    let namee = document.querySelector("#name");
    let emaill = document.querySelector("#email");
    let phonee = document.querySelector("#phone");
    let companyy = document.querySelector("#company");
    let msg = document.querySelector("#message");
    let btn = document.querySelector("#submit");
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (namee.value == "" || emaill.value == "" || msg.value == "") {
                alert("fields are required")
            } else {
                sendmail(namee.value, emaill.value, phonee.value, companyy.value, msg.value);
                namee.value= emaill.value= phonee.value= companyy.value= msg.value=""
            }
        });
    }
}
validate();

function sendmail(namee, emaill, phonee, companyy, msg) {
    emailjs.send("service_tt5wws5", "template_dqjk68n", {
        name: namee,
        email: emaill,
        phone: phonee,
        company: companyy,
        message: msg,
    });
}