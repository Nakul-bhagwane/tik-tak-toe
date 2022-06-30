let boxes = document.querySelectorAll('.boxes');

let b_one = document.getElementById("one");
let b_two = document.getElementById("two");
let b_three = document.getElementById("three");
let b_four = document.getElementById("four");
let b_five = document.getElementById("five");
let b_six = document.getElementById("six");
let b_seven = document.getElementById("seven");
let b_eight = document.getElementById("eight");
let b_nine = document.getElementById("nine");

let counter = 0;
for (let i of boxes) {
    i.addEventListener('click', () => {

        if (counter < 9) {

            if (counter % 2 == 0) {
                i.innerHTML = "x";
                counter++;

                if (winner()) {
                    alert("wohoho you are the winner");

                    setTimeout(() => {
                        empty_box();
                    }, 2000);

                    counter = '0';
                }

                draw();
            }

            else {
                i.innerHTML = '0';
                counter++;
                
                if (winner()) {
                    alert("wohoho you are the winner");

                    setTimeout(() => {
                        empty_box();
                    }, 2000);
                    
                    counter = '0';
                }

                draw();
            }
        }
        // else {
        //     alert("MATCH DRAW")
        //     counter = "0";
        //     empty_box();
        // }
    });
}


// function to check weather the match is draw or not 
draw = () => {
    if (counter == 9) {
        alert("MATCH DRAW");

        setTimeout(() => {
            empty_box();
        }, 2000);

        counter = '0';
    }
}

// function to empty all the boxes 
empty_box = () => {
    b_one.innerHTML = '';
    b_two.innerHTML = '';
    b_three.innerHTML = '';
    b_four.innerHTML = '';
    b_five.innerHTML = '';
    b_six.innerHTML = '';
    b_seven.innerHTML = '';
    b_eight.innerHTML = '';
    b_nine.innerHTML = '';
}


// fcuntion that contain all the condition for match winning 
winner = () => {
    if (b_one.innerHTML != '' && b_two.innerHTML != '' && b_three.innerHTML != '' && b_four.innerHTML != '' &&
        b_one.innerHTML == b_two.innerHTML && b_two.innerHTML == b_three.innerHTML) {
        return true;
    }
    else if (b_four.innerHTML != '' && b_five.innerHTML != '' && b_six.innerHTML != '' &&
        b_four.innerHTML == b_five.innerHTML && b_five.innerHTML == b_six.innerHTML) {
        return true;
    }
    else if (b_seven.innerHTML != '' && b_eight.innerHTML != '' && b_nine.innerHTML != '' &&
        b_seven.innerHTML == b_eight.innerHTML && b_eight.innerHTML == b_nine.innerHTML) {
        return true
    }
    else if (b_one.innerHTML != '' && b_four.innerHTML != '' && b_seven.innerHTML != '' &&
        b_one.innerHTML == b_four.innerHTML && b_four.innerHTML == b_seven.innerHTML) {
        return true;
    }
    else if (b_two.innerHTML != '' && b_five.innerHTML != '' && b_eight.innerHTML != '' &&
        b_two.innerHTML == b_five.innerHTML && b_five.innerHTML == b_eight.innerHTML) {
        return true;
    }
    else if (b_three.innerHTML != '' && b_six.innerHTML != '' && b_nine.innerHTML != '' &&
        b_three.innerHTML == b_six.innerHTML && b_six.innerHTML == b_nine.innerHTML) {
        return true;
    }
    else if (b_one.innerHTML != '' && b_five.innerHTML != '' && b_nine.innerHTML != '' &&
        b_one.innerHTML == b_five.innerHTML && b_five.innerHTML == b_nine.innerHTML) {
        return true;
    }
    else if (b_three.innerHTML != '' && b_five.innerHTML != '' && b_seven.innerHTML != '' &&
        b_three.innerHTML == b_five.innerHTML && b_five.innerHTML == b_seven.innerHTML) {
        return true;
    }
}