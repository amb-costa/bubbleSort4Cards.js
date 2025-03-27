// include jQuery before your script
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$(document).ready(function() {
    const $drawBtn = $("#draw");
    const $sortBtn = $("#sort");
    const $amountInp = $("#amount");
    const $cardSpace = $("#cardSpace");
    const $logSpace = $("#logSpace");

    function toLetter(el) {
        switch (el) {
            case "1": return "A"; break;
            case "11": return "J"; break;
            case "12": return "Q"; break;
            case "13": return "K"; break;
            default: return el;
        }
    }

    function randomNumber() {
        let nmb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        let picked = Math.floor(Math.random() * nmb.length);
        return nmb[picked];
    }

    function randomSuit() {
        let suit = ["diamond", "spades", "heart", "club"];
        let picked = Math.floor(Math.random() * suit.length);
        return suit[picked];
    }

    function createCard(cls, num) {
        const $div = $("<div></div>").addClass("card").addClass(cls);
        $div.text(num);
        return $div;
    }

    $drawBtn.on("click", function() {
        $cardSpace.empty(); // Using jQuery's .empty()
        let container = $("<div></div>").addClass("cardContainer");

        for (let i = 0; i < $amountInp.val(); i++) {
            const rNum = randomNumber();
            const rSuit = randomSuit();
            container.append(createCard(rSuit, toLetter(rNum)));
        }

        $cardSpace.append(container);
    });

    $sortBtn.on("click", function() {
        const $container = $cardSpace.find(".cardContainer").clone(); // clone current state
        $logSpace.html("<h4>Bubble log:</h4>");

        let wall = numb.length - 1;
        while (wall > 0) {
            let i = 0;
            while (i < wall) {
                if (parseInt(numb[i]) > parseInt(numb[i + 1])) {
                    [numb[i], numb[i + 1]] = [numb[i + 1], numb[i]];
                    [suit[i], suit[i + 1]] = [suit[i + 1], suit[i]];

                    $container.children().each(function() {
                        $(this).text(toLetter(numb[$(this).index()]));
                    });
                    $logSpace.append($container.clone());
                }
                i++;
            }
            wall--;
        }
    });

    const numb = [];
    const suit = [];
});