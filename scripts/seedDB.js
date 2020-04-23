const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactbookapp"
);

const bookSeed = [
    {
        title: "Becoming",
        author: "Michelle Obama",
        description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare. \n In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same.",
        image: "https://books.google.com/books/content?id=YbtNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72ByTPyGRmUkvA0yI0INcQk7jRqMSEW7-ssv5_shhGd9fp82p-xqdhaza-58L65sII74NRNAyp186Mncj4E-VzYRnY5zoAJyZRBTLEqSJUjfwm0Zuf0Y7tq6l4ej0T7TgNCv-0O",
        link: "https://www.google.com/books/edition/Becoming/YbtNDwAAQBAJ?hl=en&gbpv=0"
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        description: "First published in 1943, The Little Prince by Antoine de Saint-Exupéry has been translated into more than 250 languages, becoming a global phenomenon. The Sahara desert is the scenery of Little Prince’s story. The narrator’s plane has crashed there and he has scarcely some food and water to survive. Trying to comprehend what caused the crash, the Little Prince appears. The serious blonde little boy asks to draw him a sheep. The narrator consents to the strange fellow’s request. They soon become friends and the Little Prince informs the pilot that he is from a small planet, the asteroid 325, talks to him about the baobabs, his planet volcanoes and the mysterious rose that grew on his planet. He also talks to him about their friendship and the lie that evoked his journey to other planets. Often puzzled by the grown-ups’ behavior, the little traveler becomes a total and eternal symbol of innocence and love, of responsibility and devotion. Through him we get to see how insightful children are and how grown-ups aren’t. Children use their heart to feel what’s really important, not the eyes. Heart-breaking, funny and thought-provoking, it is an enchanting and endlessly wise fable about the human condition and the power of imagination. A book about both childhood and adulthood, it can be read as a parable, a war story, a classic children's fairy-tale, and many more things besides: The Little Prince is a book for everyone; after all, all grown-ups were children once.",
        image: "https://books.google.com/books/content?id=mTxbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71YlPQy_QOYsFn_khvtUlT1nLdgeWqqvCtyE9C6VsK5QCkO2IYyOndUW_oKtprF4NLAQAoSs5257gBj5MSG-6OrAC5sNEzzliCrGFEjGefB2IWFjgnQWoEVDEF7kymSsY7zDSp2",
        link: "https://books.google.com/books?id=mTxbDwAAQBAJ&newbks=1&newbks_redir=0&dq=the+little+prince&source=gbs_navlinks_s"
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    },
    {
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    }

];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });