// Define an array of messages and image URLs
const messages = [
    "I love you more than anything!",
    "I love you more every day!",
    "I think about you all the time. Whenever I'm excited or sad, you're the first person I wanna talk to",
    "I can't wait to live with you and wake up every day next to you",
    "You're the person I think about before I go to sleep and the first person I talk to when I wake up",
    "You're perfect my love, every day I'm thankful that I found such a perfect girl",
    "I love EVERYTHING about you. Your pretty eyes, your beautiful smile, your cute laugh. There isn't a thing about you that I'd change",
    "You're my first ever love and the only girl I want to be with",
    "I love the smell of your pretty brown hair when I'm cuddling with you",
    "I love the your signature perfume scents! Whenever I have trouble sleeping I spray it on my pillow!",
    "Just knowing I have you to come back to gives me so much comfort ml",
    "I am so proud of you and everything you're doing my love. You're such a cool and fun girlfriend!!!",
    "I love you so much, I'll be with you forever.",
    "You've given me the best year of my life and I'm so excited to live my life with you",
    "having a perfect and smart gf like you makes me want to be the best I can for you!",
    "I would love to hug you and kiss you for hours right now",
    "You're so beautiful!!! Ever since I met you, no other girl can compare.",
    "I love you more than words can say",
    "Remember our first date? I still remember being so nervous the entire time because I was still so starstruck that I was finally on a date with the girl of my dreams!",
    "Remember our first date? Sitting with you, lending you my jacket, listening to music togethter, all while working up the courage to kiss you. Everything about it was perfect.",
    "Remember pasadena? Playing house with you, kissing you all the time, fucking, then showering together and doing aftercare while singing our favorite songs together. I couldn't think of a more perfect day.",
    "Remember academy of sciences after dark? We are such an aesthetic couple heheeee, that was the cutest vid ive ever seen!!!",
    "Nobody's more perfect for me than you, you're the only one who gets me this deeply!",
    "Remember hawaii and how we stayed up every night until 4 am talking to each other, that was so special to me!!!",
    "Remember our first kiss ml. Everything about it was perfect, we stayed up confessing our feelings for each other in hawaii, then went for a night swim, and then kissed before we had to leave. That first kiss is my biggest flex",
    "I loved getting ready for outside lands with you because all I could think about was how pretty and cool of a gf that I have",
    "If I could spend every second of my life with you I would because you make me happier than anyone else ever could",
    "I am so in love with you Anika, I have no doubt that you are the one for me my love",
    "You are my everything and I would do anything or give anything up if it meant I could be with you",
    "I'm so confident in us working out that I lay awake at night planning things for our future together",
    "I love trying new restaurants and food together! You make me such a fatass hoebag",
    "When I think about you or read your texts I can't help but smile",
    "I love having a bucket list of dreams that we can look forward to together so I know we'll always have a great life together",
    "We've come so far together and I would never give that up for anything or anyone",
    "Feeling you laying on my chest and being able to hold you makes me feel so loved",
    "Remember pasadena??? I think about spending that time with you and how perfect it was. I'm so glad I got to make such great memories with you."
];

const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
"images/image10.jpg",
"images/image11.jpg",
"images/image12.jpg",
"images/image13.jpg",
"images/image14.jpg",
"images/image15.jpg",
"images/image16.jpg",
"images/image17.jpg",
"images/image18.jpg",
"images/image19.jpg",
"images/image20.jpg",
"images/image21.jpg",
"images/image22.jpg",
"images/image23.jpg",
"images/image24.jpg",
"images/image25.jpg",
"images/image26.jpg",
"images/image27.jpg",
"images/image28.jpg",
"images/image29.jpg",
"images/image30.jpg",
"images/image31.jpg",
"images/image32.jpg",
"images/image33.jpg",
"images/image34.jpg",
"images/image35.png",
"images/image36.png",
"images/image37.jpg",
"images/image38.jpg",
"images/image39.jpg",
"images/image40.jpg",
"images/image41.jpg",
"images/image42.jpg",
"images/image43.jpg",
"images/image44.jpg",
"images/image45.jpg",
"images/image46.jpg",
"images/image47.jpg",
"images/image48.jpg",
"images/image49.jpg",
"images/image50.jpg",
"images/image51.jpg",
"images/image52.jpg",
"images/image53.jpg",
"images/image54.jpg"
    

];

// Get references to HTML elements
const messageElement = document.getElementById("message");
const pictureElement = document.getElementById("picture");
const ilyButton = document.getElementById("ilyButton");

// Function to generate a random number within a given range
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Event listener for the button click
ilyButton.addEventListener("click", function () {
    const randomIndex = getRandomIndex(messages.length);

    // Update the message and picture
    messageElement.textContent = messages[randomIndex];
    pictureElement.src = images[randomIndex];
    pictureElement.alt = "Random Image";
});

