src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
src = "//embed.typeform.com/next/embed.js";

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".openbtn").addClass("show");
            $(".navbar").addClass("remove");
        } else {
            $(".openbtn").removeClass("show");
            $(".navbar").removeClass("remove");

        }
    });
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


var quotes = [{
        quote: "I always come back.",
        source: "William Afton"
    },
    {
        quote: "Although for one of you, the darkest pit of Hell has opened to swallow you whole, so don't keep the devil waiting, old friend. ",
        source: "Henry Emily"
    },
    {
        quote: "And to you monsters trapped in the corridors, be still, and give up your spirits. They don't belong to you.",
        source: "Henry Emily"
    },
    {
        quote: "No one can change the past. The only thing we can do is strive to make up for our mistakes.",
        source: "Pheonix Wright"
    },
    {
        quote: "Why did I become a lawyer in the first place…? Because someone has to look out for the people who have no one on their side.",
        source: "Pheonix Wright"
    },
    {
        quote: "Our job is to find the truth, no matter how painful it may be.",
        source: "Miles Edgeworth"
    },
    {
        quote: "Thanks to you i am saddled with unnecessary feelings.",
        source: "Miles Edgworth",
    },

];

function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes[randomNumber];
    return randomQuote;
}

function printQuote() {
    var quotes = getRandomQuote();
    var quoteContainer = document.getElementById("quote-box");
    var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
    if (quotes.citation) {
        quoteString += `<span class="citation">${quotes.citation}</span>`;
    }
    if (quotes.year) {
        quoteString += `<span class="year">${quotes.year}</span></p>`;
    } else {
        quoteString += '</p>'
    };
    quoteContainer.innerHTML = quoteString;


}