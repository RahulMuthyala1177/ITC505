// Story data
const storyData = {
    start: {
        text: "Secrets of the Enigmatic Cave",
        choices: ["Enter Enigmatic Cave "],
        consequences: ["enigmatic cave"],
        image: "https://t4.ftcdn.net/jpg/05/76/15/85/360_F_576158513_DfiD9QzJPtab3qRxLFeyEpmywOQXE3hA.jpg"
    },
    "enigmatic cave": {
        text: "[You have Entered The Enigmatic Cave] You find yourself in the cave that splits into three paths [choose your Path]",
        choices: ["Left Cave", "Middle Cave", "Right cave"],
        consequences: ["left cave", "middle cave", "right cave"],
        image: "https://lparchive.org/Shadow-Hearts-(by-The-Dark-Id)/Update%2073/8-cavetemple_(17).jpg"
    },
	"left cave": {
        text: "[The Deadly Witch] You encountered a Deadly Witch Make Your Choice.",
        choices: ["Listen To Her", "Fight Her"],
        consequences: ["listen to her", "fight her"],
        image: "https://picfiles.alphacoders.com/529/529170.jpg"
    },
 "middle cave": {
        text: "You Encountered a Dragon",
        choices: ["Fight The Dragon","Make Friends With it"],
        consequences: ["fight the dragon", "make friends with it"],
        image: "https://helios-i.mashable.com/imagery/articles/01FUWIdxgjvS1ciV59xTVZq/hero-image.fill.size_1248x702.v1623363296.jpg"
	},
 "right cave": {
        text: "You hear the Voice!! [Greedy Spell]",
        choices: ["Collect the Gold","Feed the Goblin", "Walk through the light"],
        consequences: ["collect the gold", "feed the goblin","walk through light"],
        image: "https://pbs.twimg.com/media/FTn37MuWUAElJjq.jpg"
	},
"listen to her": {
        text: "GAME Over!! Oh no! you were trapped [You are manipulated]",
	choices: ["Game Over!!"],
        image: "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a026cdee38f78fd9c062258d2d09ef29.png"
	},
"walk through light": {
        text: "Clock is Ticking Make a choice!! [hurry up!!!] Make a wise choice",
	choices: ["Beak the door","Break the Evil Statue"],
	consequences: ["break the door", "break the evil statue"],
        image: "https://img.freepik.com/premium-photo/man-stands-front-arch-with-word-it_906598-100.jpg"
	},
"break the door": {
        text: "Oh god!! you are eternally trapped in the cave[you are not so wise!!]",
	choices: ["Game Over!! You Lose"],
        image: "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/clch8nu8j05d8p6kaspenlcth_1/public"
	},
"break the evil statue": {
        text: "You made the wise choice!! [you are safe now] You've freed the cave from the evil spell!!",
	choices: ["You Win!!"],
        image: "https://api.time.com/wp-content/uploads/2015/07/mattanderson5.jpg"
	},
 "fight her": {
        text: "[Get Ready For the Fight!!] Choose your weapon Wisely.",
        choices: ["Mystery Sword","The Gun"],
        consequences: ["mystery sword", "the gun"],
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71ac3fa2-32e7-4009-9fcb-2a2076d3d566/dgczrgb-17e4d32d-faf2-4e81-baa8-462e9cc33748.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxYWMzZmEyLTMyZTctNDAwOS05ZmNiLTJhMjA3NmQzZDU2NlwvZGdjenJnYi0xN2U0ZDMyZC1mYWYyLTRlODEtYmFhOC00NjJlOWNjMzM3NDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.brC2G-XiOA1N2Rg93pAqXQxTtmp6AVDotAxZnOGlo80"
	},
"mystery sword": {
        text: "Horayyy!! you Killed the Witch and Freed the cave from the spell",
	choices: ["You Win"],
        image: "https://cdna.artstation.com/p/assets/images/images/042/561/952/large/bobby-nehemia-eowyn-2.jpg?1634833644"
    },
"the gun": {
        text: "Game Over!! you were Killed by the Witch try again!!",
	choices: ["You Lost"],
        image: "https://i0.wp.com/mediachomp.com/wp-content/uploads/2021/03/thbz-18.jpg?resize=680%2C340&ssl=1"
    },
    "fight the dragon": {
        text: "You are Dumb!! You can never win fighting a Dragon [Burnt alive ahh!!]",
        choices: ["Game Over"],
        image: "https://t3.ftcdn.net/jpg/05/73/61/12/360_F_573611237_ibLJMHv2kIV7kBQKtdL8eFxIGRmrDtvA.jpg"
    },
    "make friends with it": {
        text: " wooohh!! Now you are the strongest man in the Entire world start your conquest ",
        choices: ["You Win"],
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2019/04/dragon-7_copy.jpg?w=1024"
    },
    "collect the gold": {
        text: "you are too greedy!! You'll forever be trapped in the cave",
        choices: ["You Lost"],
        image: "https://storyworks.scholastic.com/content/dam/classroom-magazines/storyworks/pages/promotion/120121/trapped-in-a-cave/STO-03-120121-P04-NF-Trapped-HR.jpg"
    },
    "feed the goblin": {
        text: "[Goblin I'm Hungry please Help me!!]You have Fed the Goblin!! You escaped the spell Now all the Gold is Yours Horrayyyy!!.",
        choices: ["You Win"],
        image: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F7f10236d-e8eb-4f62-a233-6dd06714087e.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
    },

	"you-win":{
		text: "You won the Game",
        image: "https://d3i6fh83elv35t.cloudfront.net/static/2023/01/GettyImages-1458699303-e1674487584191-1024x576.jpg"
	}
    // ... continue the story data for other paths
    // Remember to update the image URLs and add consequences for other choices
};

// Function to start the game
function startGame() {
    // Set initial state
    currentStage = "start";

    // Refresh page display
    updatePage();

    // Hide start container and show story container
    document.getElementById("start-container").style.display = "none";
    document.getElementById("story-container").style.display = "block";
}

// Function to update the page based on user choices
function updatePage() {
    const currentData = storyData[currentStage];
    document.getElementById("story-text").textContent = currentData.text;

    // Clear previous choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    // Display current choices
    currentData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(currentData.consequences[index]);
        choicesContainer.appendChild(button);
    });

    // Display current image
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = currentData.image;
}

// Function to handle user choices and navigate to the next stage
function makeChoice(choice) {
    currentStage = choice;
    updatePage();

    // Check if it's an ending stage
    if (!storyData[choice].choices) {
        endGame();
    }
}

// Function to end the game and display the final image
function endGame() {
    const imageContainer = document.getElementById("image-container");
    const storyImage = document.getElementById("story-image");
    storyImage.src = storyData[currentStage].image;

    // Display a message or perform any other final actions
}

// Initialize the game
let currentStage = "";
startGame();
