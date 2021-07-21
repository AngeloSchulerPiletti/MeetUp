var button = document.querySelector('#apresentar'),
    current_slide = 0;

button.addEventListener('click', function(){slide('next')});
document.addEventListener('keypress', (KeyboardEvent)=>{
    if(KeyboardEvent.key == "b"){
        slide('past');
    }
    else if(KeyboardEvent.key == "n"){
        slide('next');
    }
})

function slide(option) {
    // button.classList.add("clicked");
    var past = document.querySelector("#s" + (current_slide - 1)),
        current = document.querySelector("#s" + current_slide),
        next = document.querySelector("#s" + (current_slide + 1));
    
        console.log("Antes :"+current_slide);

    if(option == "next"){
        current.classList.remove("show");
        current.classList.add("hide");
        setTimeout(() => {
        current.style.display = "none";
        next.style.display = "block";
        setTimeout(() => {
            next.classList.remove("hide")
            next.classList.add("show");
        }, 50);
    }, 250);
        current_slide++;
    }
    else if(option == "past"){
        current.classList.remove('show');
        current.classList.add("hide");
        setTimeout(() => {
            current.style.display = "none";
            past.style.display = "block";
            setTimeout(() => {
                past.classList.remove("hide");
                past.classList.add("show");
            }, 50);
        }, 250);
        current_slide --;
    }

    console.log("Depois: "+current_slide);
    
}