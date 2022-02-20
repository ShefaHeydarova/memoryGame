let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
 
span.onclick = function() {
  modal.style.display = "none";
  location.reload();
}
let star = document.querySelector('.star');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
}

let tbl = document.querySelector("#tbl");
let animal = [
  "ant", "dog", "donkey", "fish", "mouse","peacock", "pors", "turtle", "ant", "dog","donkey","fish", "mouse",  "peacock","pors","turtle"];
let last = [];

function table() {
  let rand;
  let number = 0;
  let count = 0;

  for (let i = 0; i < 16; i++) {
    rand = Math.floor(Math.random() * animal.length);
    last[i] = animal[rand];
    animal.splice(rand, 1);
  }

  let screen = "";
  for (let i = 0; i < 4; i++) {
    screen += `<tr>`;
    for (let j = 0; j < 4; j++) {
      screen += `<td><img src='images/${last[number]}.png'></td>`;
      count++;
      number++;
    }
    screen += `</tr>`;
  }
  tbl.innerHTML = screen;

  let arr = [];    
  let score = 0;  
  let click =0;
  let td = document.querySelectorAll("td");
 
  Array.from(td).forEach((item) => {
    item.addEventListener("click", (e) => {
      click++;
      e.target.children[0].classList.add("active");
      arr.push(e.target.children[0]);

      if (arr.length == 2) {
        if (arr[0].getAttribute("src") != arr[1].getAttribute("src")) {
          setTimeout(() => {
            arr[0].classList.add("passiv");
            arr[1].classList.add("passiv");
            arr[0].classList.remove("active");
            arr[1].classList.remove("active");
            arr = [];
          }, 500);
        } else{
                  score++;
                  if(score == td.length/2){
                   setTimeout(() => {
                    let icon = document.querySelectorAll('.fa-star');
                    modal.style.display = "block";
                    let s = 0;
                     if(click < 17){
                      for(; s<5; s++){
                        icon[s].style.display ="block";
                      }
                     }else if(click < 25){
                      for(; s<4; s++){
                        icon[s].style.display ="block";
                      }
                    }else if(click < 30){
                      for(; s<3; s++){
                        icon[s].style.display ="block";
                      }
                    }else if(click < 35){
                      for(; s<2; s++){
                        icon[s].style.display ="block";
                      }
                    }else {
                      for( ; s<1; s++){
                        icon[s].style.display ="block";
                      }
                    }
                    
                  }, 100);

                  }
        }
        setTimeout(() => {
          arr = [];
        }, 510);
      }
    });
  });
}

table();

let img = document.querySelectorAll("img");

setTimeout(() => {
  for (let k = 0; k < img.length; k++) {
    img[k].classList.add("passiv");
  }
}, 2000);
