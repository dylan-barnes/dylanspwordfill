chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      title: "Generate Sassboss Password",
      contexts: ["editable"],
      id: "GenSassbossPass"
    });
    chrome.contextMenus.create({
        title: "Generate User Password",
        contexts: ["editable"],
        id: "GenUserPass"
      });
  });

function GenSassPass(type){
    const array1 = [
        "Maple", "Beach", "Angel", "Smile", "Bread", "Music", "Lemon", "Happy", "Cloud", "Queen",
        "Plant", "Ocean", "Peace", "Tiger", "River", "Fairy", "Amber", "Dream", "Candy", "Horse",
        "Stars", "Earth", "Fairy", "Sheep", "Brown", "Magic", "Tulip", "Puppy", "House", "Grace",
        "Amber", "Clear", "Leafy", "Sunny", "Happy", "Dream", "Smile", "Quiet", "Brave", "Sweet",
        "Angel", "Water", "Light", "Power", "Flora", "Heart", "Fresh", "Green", "Ocean", "Pearl",
        "Maple", "Peace", "Loyal", "Cloud", "Plant", "Tiger", "Melon", "Queen", "Story", "Robin",
        "Smile", "Candy", "Beach", "Horse", "Lemon", "Happy", "River", "Bread", "Ocean", "Angel",
        "Maple", "Plant", "Smile", "Beach", "Bread", "Music", "Angel", "Lemon", "Happy", "Cloud",
        "Queen", "Plant", "Ocean", "Peace", "Tiger", "River", "Smile", "Bread", "Dream", "Candy",
        "Maple", "Beach", "Angel", "Lemon", "Happy", "Cloud", "Ocean", "Queen", "Fairy", "Grace"
    ];
    const array2 = [
        "Baby", "Calm", "Dusk", "Easy", "Fade", "Gold", "Haze", "Idea", "Join", "Keen",
        "Lamp", "Mint", "Nest", "Open", "Pink", "Quiz", "Rest", "Soul", "Tall", "Undo",
        "Vast", "Wise", "Able", "Bell", "Cute", "Dawn", "Echo", "Fast", "Glow", "Hope",
        "Jazz", "Kiss", "Lush", "Mood", "Nail", "Oval", "Peak", "Rise", "Spin", "Tube",
        "Vibe", "Wild", "Avid", "Bolt", "Calm", "Dusk", "Easy", "Fade", "Gold", "Haze",
        "Idea", "Join", "Keen", "Lamp", "Mint", "Nest", "Open", "Pink", "Quiz", "Rest",
        "Soul", "Tall", "Undo", "Vast", "Wise", "Baby", "Calm", "Dusk", "Easy", "Fade",
        "Gold", "Haze", "Idea", "Join", "Keen", "Lamp", "Mint", "Nest", "Open", "Pink",
        "Quiz", "Rest", "Soul", "Tall", "Undo", "Vast", "Wise", "Able", "Bell", "Cute",
        "Dawn", "Echo", "Fast", "Glow", "Hope", "Jazz", "Kiss", "Lush", "Mood", "Nail",
        "Oval", "Peak", "Rise", "Spin", "Tube", "Vibe", "Wild", "Avid", "Bolt", "Calm"
    ];

    const array3 = [
        "Apple", "Banana", "Orange", "Grape", "Strawberry", "Melon", "Peach", "Pear", "Kiwi", "Pineapple",
        "Carrot", "Broccoli", "Cucumber", "Potato", "Tomato", "Lettuce", "Spinach", "Onion", "Garlic", "Pepper",
        "Ocean", "River", "Lake", "Stream", "Waterfall", "Beach", "Sand", "Wave", "Surf", "Swim",
        "Tree", "Flower", "Grass", "Leaf", "Branch", "Root", "Bark", "Trunk", "Twig", "Blossom",
        "Bird", "Eagle", "Owl", "Hawk", "Sparrow", "Robin", "Bluejay", "Cardinal", "Hummingbird", "Dove",
        "Dog", "Cat", "Rabbit", "Hamster", "Guinea pig", "Goldfish", "Turtle", "Parrot", "Horse", "Cow",
        "Book", "Pen", "Pencil", "Paper", "Notebook", "Diary", "Marker", "Eraser", "Desk", "Chair",
        "Sun", "Moon", "Star", "Planet", "Galaxy", "Comet", "Meteor", "Nebula", "Constellation", "Astronaut",
        "Music", "Guitar", "Piano", "Violin", "Drum", "Trumpet", "Flute", "Saxophone", "Accordion", "Harmonica",
        "Smile", "Laugh", "Happy", "Joy", "Fun", "Play", "Cheer", "Merry", "Delight", "Amuse"
      ];

    const array4 = [
    "Ocean", "Mountain", "Valley", "Desert", "Canyon", "Forest", "Jungle", "Savanna", "Prairie", "Tundra",
    "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Hippopotamus", "Rhino", "Kangaroo", "Koala", "Penguin",
    "Guitar", "Violin", "Piano", "Trumpet", "Flute", "Accordion", "Banjo", "Harp", "Saxophone", "Drum",
    "Sculpture", "Painting", "Drawing", "Photograph", "Mural", "Pottery", "Collage", "Printmaking", "Calligraphy", "Graffiti",
    "Elephant", "Whale", "Dolphin", "Shark", "Octopus", "Seahorse", "Jellyfish", "Starfish", "Crab", "Turtle",
    "Chocolate", "Vanilla", "Strawberry", "Caramel", "Mint", "Coffee", "Cinnamon", "Coconut", "Blueberry", "Raspberry",
    "Football", "Basketball", "Soccer", "Tennis", "Volleyball", "Baseball", "Golf", "Hockey", "Rugby", "Cricket",
    "Library", "Museum", "Theater", "Gallery", "Cinema", "Concert", "Zoo", "Aquarium", "Park", "Garden",
    "Adventure", "Discovery", "Exploration", "Journey", "Expedition", "Quest", "Voyage", "Odyssey", "Enterprise", "Trek",
    "Hero", "Villain", "Sidekick", "Protagonist", "Antagonist", "Superhero", "Vigilante", "Adventurer", "Champion", "Guardian"
    ];
    
      
    const specialSymbols = ["@", "#", "$", "%", "&", "!"]; // Additional array of special symbols

    // Randomly pick a string from each array
    const randomIndex1 = Math.floor(Math.random() * array1.length);
    const randomIndex2 = Math.floor(Math.random() * array2.length);
    const randomSymbolIndex = Math.floor(Math.random() * specialSymbols.length);

    const string1 = array1[randomIndex1];
    const string2 = array2[randomIndex2];
    const randomSymbol = specialSymbols[randomSymbolIndex];
    
    const randomArrayIndex1 = Math.floor(Math.random() * 4); // Random index between 0 and 3
    const randomArrayIndex2 = Math.floor(Math.random() * 4); // Random index between 0 and 3
    const randomArrayIndex3 = Math.floor(Math.random() * 4); // Random index between 0 and 3

    const selectedWord1 = [array1, array2, array3, array4][randomArrayIndex1][Math.floor(Math.random() * 4)];
    const selectedWord2 = [array1, array2, array3, array4][randomArrayIndex2][Math.floor(Math.random() * 4)];
    const selectedWord3 = [array1, array2, array3, array4][randomArrayIndex3][Math.floor(Math.random() * 4)];

    // Generate a random two-digit number
    const randomNumber = Math.floor(Math.random() * 90 + 10); // Generates a number between 10 and 99

    // Concatenate strings, add a random number, and a random symbol
    const sassString = string1 + string2 + randomNumber + randomSymbol;
    const userString = selectedWord1 + selectedWord2 + selectedWord3 + randomNumber + randomSymbol;

    if(type=="sboss"){return sassString}
    if(type=="user"){return userString}

        
      
}

let openburst = function(index, message){
  let url = 'https://burst.transmitsms.com/overview'
  chrome.tabs.create({index,url},function(tab){
    let tabId = tab.id;
    chrome.tabs.onUpdated.addListener(function listener (tabId, info) {
      if (info.status === 'complete' && tabId === tab.id) {
          chrome.tabs.onUpdated.removeListener(listener);
          chrome.tabs.sendMessage(tabId,message);
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: () => {
              var d=document,b='burst.transmitsms.com';if(!d.getElementById('bSMS')){for(var x=0;x<2;x++){var s=d.getElementsByTagName('head')[0].appendChild(d.createElement('script'));s.type='text/javascript';if(!x){var v='var aK=\'9e0262cddc1f7ab4fbad8462e9ed2bae\',aS=\'Rfs2fEc2SEGR4YTa\',aI=\'9e7c4f49a00dc386abbee5d50e84a179\'';try{s.text=v;}catch(e){s.textContent=v;}}else{s.src=d.location.protocol+'//'+b+'/burstSMS.js?r=1789&amp;id=41114';}}}else{bSMS.show()};
            }
          });
      }
    }
    )
  }
  
  )
}
chrome.contextMenus.onClicked.addListener(function(info,tab) {

    if(info.menuItemId=="GenSassbossPass"){
        let tabId = tab.id
        let index = tab.index+1
        message = GenSassPass("sboss");
        chrome.tabs.sendMessage(tabId,message);
        console.log('sent message')
        
        
        }
    
    else if(info.menuItemId=="GenUserPass"){
        let tabId = tab.id
        message = GenSassPass("user");
        chrome.tabs.sendMessage(tabId,message);
        console.log('sent message')
        
        }
    }
    
  )