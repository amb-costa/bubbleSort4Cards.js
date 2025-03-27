import $ from "jquery";

$(function() {
  $("#draw").trigger("click")(function() {
    $("#cardSpace").empty(); 
    let suit = []; 
    let numb = []; 
    let contain = $('<div class="cardContainer"></div>');

    for (let i = 0; i < amountInp.value; i++) {
      let rNum = randomNumber();
      let rSuit = randomSuit();
      numb.push(rNum);
      suit.push(rSuit);
      contain.append(createCard(rSuit, toLetter(rNum))); 
    }
    $("#cardSpace").append(contain); 
  });

  $("#sort").trigger("click")(function() {
    let ers = [...numb]; 
    let sses = [...suit]; 
    $("#logSpace")
      .empty()
      .append("<h4>Bubble log:</h4>"); 

    let wall = ers.length - 1;
    while (wall > 0) {
      for (let i = 0; i < wall; i++) {
        if (parseInt(ers[i]) > parseInt(ers[i + 1])) {
          
          [ers[i], ers[i + 1]] = [ers[i + 1], ers[i]];
          [sses[i], sses[i + 1]] = [sses[i + 1], sses[i]];

          let auxRow = $('<div class="cardContainer"></div>');
          for (let j in ers) {
            auxRow.append(createCard(sses[j], toLetter(ers[j])));
          }
          $("#logSpace").append(auxRow); 
        }
      }
      wall--; 
    }
  });
});
