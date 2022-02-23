let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        switch(styles.item(1)){
            case "decrease":
                count--;
                break;
            case "increase":
                count ++;
                break;
            case "reset":
                count = 0;
                break;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
        console.log(count);
    })
});