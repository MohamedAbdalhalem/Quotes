var qoute = document.getElementById("qoute");
var author = document.getElementById("author");

var qoutes=[ {
    qoute: `“Be yourself; everyone else is already taken.”`,
        author:`― Oscar Wilde`
},
    {
    qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author:`― Marilyn Monroe`
    },
    {
        qoute : `“So many books, so little time.”`,
        author : `― Frank Zappa`
    },
    {
    qoute : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author : `― Albert Einstein`
    },
    {
    qoute : `“A room without books is like a body without a soul.”`,
        author : ` Marcus Tullius Cicero`
}]

function displayQoute() {
    
    var x = Math.random() * 5 +1;
    var y = Math.floor(x)
    if (y == 1) {
        if (qoute.innerHTML == qoutes[0].qoute && author.innerHTML == qoutes[0].author) {
            qoute.innerHTML = qoutes[1].qoute;
            author.innerHTML = qoutes[1].author;
        } else {
            qoute.innerHTML = qoutes[0].qoute;
            author.innerHTML = qoutes[0].author;
        }
    }
    else if (y == 2) {
        if (qoute.innerHTML == qoutes[1].qoute && author.innerHTML == qoutes[1].author) {
            qoute.innerHTML = qoutes[2].qoute;
            author.innerHTML = qoutes[2].author;
        } else {
            qoute.innerHTML = qoutes[1].qoute;
            author.innerHTML = qoutes[1].author;
        }
    }
    else if (y == 3) {
        if(
            qoute.innerHTML == qoutes[2].qoute && author.innerHTML == qoutes[2].author) {
            qoute.innerHTML = qoutes[3].qoute;    
            author.innerHTML = qoutes[3].author;
        } else {
            qoute.innerHTML = qoutes[2].qoute;
            author.innerHTML = qoutes[2].author;
            }
    }
    else if (y == 4) {
        if (qoute.innerHTML == qoutes[3].qoute && author.innerHTML == qoutes[3].author) {
            qoute.innerHTML = qoutes[4].qoute;
            author.innerHTML = qoutes[4].author;
        } else {
            qoute.innerHTML = qoutes[3].qoute;
            author.innerHTML = qoutes[3].author;
        }
    }
    else if (y == 5) {
        if(qoute.innerHTML == qoutes[4].qoute && author.innerHTML == qoutes[4].author) {   
            qoute.innerHTML = qoutes[0].qoute;
            author.innerHTML = qoutes[0].author;
        } else {
            qoute.innerHTML = qoutes[4].qoute;
            author.innerHTML = qoutes[4].author;
            }
    }


}





