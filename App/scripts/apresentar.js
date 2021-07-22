var next_btns = document.querySelectorAll('.next_btn'),
    current_slide = 0,
    stay_at = 0; //Develop VAR

if (stay_at > 0) {
    /*Isso para a apresentação no slide de stay_at
    para que você desenvolva melhor */
    let slides = document.querySelectorAll(".sec");

    slides.forEach(slide => {
        slide.classList.remove('show');
        slide.style.display = "none";
    });
    current_slide = stay_at - 1;
    slide('next');
}
else {
    next_btns.forEach(btn => {
        btn.addEventListener('click', function () { slide('next') })
    });
    document.addEventListener('keypress', (KeyboardEvent) => {
        if (KeyboardEvent.key == "b") {
            slide('past');
        }
        else if (KeyboardEvent.key == "n") {
            slide('next');
        }
    })
}

function slide(option) {
    // present.classList.add("clicked");
    var past = document.querySelector("#s" + (current_slide - 1)),
        current = document.querySelector("#s" + current_slide),
        next = document.querySelector("#s" + (current_slide + 1));

    if (option == "next") {
        current.classList.remove("show");
        setTimeout(() => {
            current.style.display = "none";
            next.style.display = "block";
            setTimeout(() => {
                next.classList.add("show");
            }, 50);
        }, 2000);
        current_slide++;
    }
    else if (option == "past") {
        if (current_slide != 0) {
            current.classList.remove('show');
            setTimeout(() => {
                current.style.display = "none";
                past.style.display = "block";
                setTimeout(() => {
                    past.classList.add("show");
                }, 50);
            }, 2000);
            current_slide--;
        }
    }
}