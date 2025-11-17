// ===== DATA =====
const data = {
  jokes: {
  Funny: [
    `Once upon a time, there was a chicken named Charlie who decided it was time to cross the road. But this was no ordinary road—it was a busy city street with honking cars, delivery trucks, and scooters zipping by. Charlie carefully observed the traffic patterns, timing his steps like a professional athlete. Just as he made a dash, a pigeon flew low, causing Charlie to stumble into a puddle. Covered in mud, Charlie still made it halfway, only to be confronted by a curious dog sniffing him. Thinking quickly, Charlie performed a perfect somersault, landing safely on the other side where a crowd of animals cheered. The squirrel who witnessed the entire act crowned Charlie “Hero of the Road,” and pigeons even held a parade in his honor. That day, Charlie became a legend, proving that determination, patience, and a little bit of acrobatics can help anyone achieve their dreams—even a small chicken in a chaotic city.`
  ],
  Dad: [
    `I bought a book on anti-gravity, hoping it would teach me the secrets of floating objects. But as soon as I opened it, the pages began to levitate, spinning slowly in the air like tiny paper helicopters. My cat tried to catch them, leaping and missing with spectacular flair. I attempted to grab a page, but it floated away again. Then, the phone rang, the wind blew through the open window, and suddenly the living room resembled a paper tornado. I tried to contain it, stacking books, closing doors, even negotiating with my cat. Hours later, exhausted and covered in floating pages, I finally sat down. The book landed gently on my lap, as if acknowledging my perseverance. That night, I realized that anti-gravity wasn’t just about defying physics—it was about embracing chaos and laughing through it.`
  ],
  Programming: [
    `There once was a programmer named Alex who spent days writing a complex algorithm. One morning, Alex noticed a tiny bug in the code. Determined to fix it, Alex spent hours debugging, only to realize the bug was a typo in the variable name. Alex sighed, took a coffee break, and returned to find five more errors that had mysteriously appeared. Each fix seemed to create new problems. Days turned into nights, and Alex survived on snacks and caffeine alone. Finally, after countless attempts, the program ran flawlessly… until the computer crashed. Alex laughed, realizing that programming is an endless cycle of solving problems and creating new ones. In the end, the true lesson was patience, perseverance, and learning to laugh at the absurdity of it all.`
  ],
  Puns: [
    `I told my baker friend that I wanted to learn how to make perfect bread. He said, 'Knead the dough carefully, or you'll loaf around all day.' I practiced diligently, yet somehow the dough kept sticking to my hands. Every attempt resulted in bizarrely shaped loaves resembling animals, objects, and abstract art. My cat knocked one off the counter, and it landed in the milk, creating a new culinary creation. Visitors laughed at my 'experimental bakery,' but I persevered. By the end of the week, I produced a bread masterpiece shaped like a dragon breathing smoke made of flour. The moral? Baking requires patience, creativity, and accepting a little chaos in the kitchen.`
  ],
  KnockKnock: [
    `Knock knock. Who’s there? Lettuce. Lettuce who? Lettuce in, it's raining outside! But the rain wasn’t ordinary; it was a storm of tiny gummy bears falling from the sky. {name} and their friend opened the door, only to find the street covered in colorful candy. Children laughed and adults scrambled to collect the treats. Soon, a full-blown gummy bear festival erupted, complete with makeshift candy slides and rivers of chocolate. All because of a simple knock knock joke.`
  ],
  Dark: [
    `I once visited a graveyard at midnight, hoping for a quiet walk. The fog was thick, the moon barely visible. Suddenly, I heard footsteps behind me. Heart pounding, I turned, but no one was there. Then I realized the sound was coming from my own shoes—the soles had worn thin, creating ghostly echoes. I laughed nervously and continued walking, only to notice shadows moving independently, flickering in unnatural ways. By the end, I realized that sometimes the darkest moments bring the most unexpected humor, especially when your imagination runs wild in empty graveyards.`
  ],
  Punny: [
    `I asked the gym instructor if he could teach me to do splits. He said, 'How flexible are you?' I said, 'I can’t make it on Tuesdays.' He stared, then laughed. Determined, I practiced daily, turning into the town’s most comically flexible person. People stopped to watch, children mimicked my moves, and soon I became a local legend for being punny and physically absurd. The moral? Humor and persistence go hand in hand.`
  ],
  OneLiners: [
    `I told my wife she was drawing her eyebrows too high. She looked surprised. So I said, 'Maybe it’s time to start an eyebrow art gallery!' She laughed, I laughed, and we both realized that life is better when you exaggerate a little.`
  ],
  Sarcastic: [
    `I’m not arguing, I’m just explaining why I’m right. Once, I spent three hours explaining a simple concept to my friend, who then said, 'Oh, I already knew that.' I nodded and replied, 'Well, of course, you did. I was just rehearsing for my TED talk.'`
  ],
  Nerdy: [
    `There are only 10 types of people in the world: those who understand binary and those who don’t. I tried explaining it to my dog, but he just wagged his tail and left. Moral: binary jokes aren’t for everyone, but those who get them feel like true champions.`
  ]
},
  stories: {
  Fantasy: [
    `{name} stepped into the Enchanted Forest where the sunlight danced through the leaves like liquid gold. Every tree whispered secrets older than time itself, and every path seemed alive, bending and twisting in ways that defied logic. Birds with crystal feathers sang harmonies so perfect they made {name}’s heart ache. As {name} wandered deeper, glowing mushrooms lit the path, revealing hidden doors in tree trunks. Tiny fairies peeked from behind flowers, giggling softly. {name} discovered an ancient stone altar, covered in glowing runes that seemed to pulse with a rhythm matching {name}’s heartbeat. A voice echoed through the forest: 'You are chosen, {name}, to protect the magic that binds this realm.' With a mixture of awe and determination, {name} accepted the quest, knowing that the forest had already woven {name}’s destiny into its eternal story. Every step forward was both perilous and beautiful, filled with creatures and challenges that tested courage, wit, and heart. By the end of the day, {name} had not only explored the forest but also discovered a strength within themselves that they never knew existed. The adventure had just begun, and the forest seemed to hum in approval.`
  ],
  SciFi: [
    `{name} boarded the starship Odyssey, leaving Earth behind in search of the unknown reaches of space. The ship glided silently through galaxies where stars shone like molten jewels and nebulae painted the void with colors that defied description. On the third day, {name} detected a planet orbiting a binary star system. Upon landing, {name} found crystalline cities inhabited by intelligent beings who communicated through light and sound. They shared knowledge of interdimensional travel, quantum physics, and the history of the universe. Every discovery challenged {name}’s understanding of reality. Weeks passed, and {name} documented the alien cultures, the strange ecosystems, and cosmic phenomena beyond imagination. One night, gazing at a distant black hole, {name} reflected on the fragility and beauty of life on Earth. Each new encounter brought lessons about empathy, curiosity, and courage. By journey’s end, {name} was not only an explorer but also a storyteller, carrying tales of wonder to inspire humanity to dream beyond its stars.`
  ],
  Mystery: [
    `A thick fog blanketed the streets as {name} approached the abandoned mansion. Its windows were shattered, and the gate creaked with the wind. Legend said the house was haunted, and locals whispered that no one who entered ever returned the same. {name} felt a mix of fear and curiosity but pressed on. Inside, the air smelled of dust and decay. Every step echoed ominously as shadows seemed to move independently. On a dusty table lay a letter with no sender. As {name} read it, cryptic clues unfolded, hinting at a hidden room and a long-forgotten secret. The walls seemed to close in, yet a strange warmth urged {name} forward. Hours passed, and each discovery deepened the mystery: portraits whose eyes followed, books that rearranged themselves, and a ticking clock that counted down to an unknown moment. Finally, {name} unlocked a hidden chamber revealing artifacts and journals that told the story of a family lost in time. Solving the mansion’s mystery required wit, patience, and courage, and {name} realized that the house had chosen them to uncover its long-buried secrets.`
  ],
  Adventure: [
    `{name} set sail on a wooden ship across a stormy sea, with waves crashing like mountains and wind howling with fury. The crew whispered about a hidden island filled with treasures and monsters. {name} held the map tightly, heart racing with anticipation. Days passed, each more challenging than the last — navigating reefs, battling tempests, and keeping spirits high. On the fourth night, a glowing island appeared on the horizon. {name} led the crew ashore, discovering jungles alive with strange creatures and vines hanging like natural traps. Every step revealed ancient ruins and inscriptions hinting at a civilization that vanished centuries ago. With courage and determination, {name} deciphered the clues, overcoming hidden dangers and puzzles left by the island’s creators. The adventure taught resilience, creativity, and teamwork. When {name} finally emerged with the treasure, it wasn’t gold alone but the stories, friendships, and experiences gained that mattered most.`
  ],
  Comedy: [
    `{name} was walking down Main Street when a stray banana peel changed everything. Slipping spectacularly, {name} landed in a freshly baked pie shop window, smashing a pie that had taken hours to make. The baker screamed, the crowd laughed, and {name} tried to stand while covered in cream. A dog barked, knocking over a tower of cupcakes, adding to the chaos. {name} decided to make the best of the disaster, juggling the fallen pastries to entertain the crowd. Soon, everyone was laughing, clapping, and taking pictures. What began as an embarrassing moment became a spontaneous festival, with {name} as the accidental star. By the end of the day, {name} had become the town’s hero for turning chaos into joy, and even the baker forgave them after tasting the surprisingly delicious pie mess.`
  ],
  Horror: [
    `{name} awoke in a dark room with no memory of how they got there. Shadows stretched across the walls, moving independently of any light. A faint whisper called {name}’s name, making the hairs on the back of their neck stand up. Every door creaked as if pushed by invisible hands. The air was cold, smelling faintly of decay. {name} moved through the corridors, heart pounding, discovering old photographs with eyes scratched out and journals filled with terrifying accounts of previous visitors. Footsteps echoed behind them even when no one was there. Suddenly, a shadow lunged, but as {name} turned, it vanished into the darkness. Realizing escape required confronting the unknown, {name} pressed on, navigating the house’s maze-like structure. By dawn, {name} emerged trembling but alive, carrying a story that would haunt them forever and remind them that some places are better left alone.`
  ],
  Romance: [
    `{name} met someone special on a rainy afternoon. Sharing an umbrella, they laughed as water splashed around their shoes, talking about everything and nothing. Days turned into weeks, filled with stolen glances, long walks, and shared dreams. {name} learned about kindness, patience, and love in its simplest form. Together, they faced challenges — misunderstandings, distance, and life’s unpredictability — but each obstacle strengthened their bond. Sunsets were painted with shared moments, mornings began with soft whispers, and nights ended with laughter echoing under the stars. {name} realized that love isn’t just in grand gestures but in the small, everyday acts of caring. Through this journey, {name} found not only a partner but a companion in life’s journey, someone who understood the heart and soul. Their love became a story that could inspire hope and warmth in anyone who heard it.`
  ],
  Superhero: [
    `{name} discovered extraordinary powers after a strange cosmic storm. By day, {name} blended into ordinary life, but by night, they patrolled the city streets, stopping crime and helping those in need. Each action carried risks, from supervillains to innocent bystanders caught in danger. {name} trained tirelessly, learning to control powers, understand responsibility, and make difficult moral choices. News of a masked hero spread through the city, inspiring citizens and terrifying criminals. Friendships and rivalries emerged, testing {name}’s judgment and courage. Every mission strengthened the resolve to protect the innocent, and {name} realized that being a hero wasn’t about fame or glory but making choices that could save lives. With every sunset, {name} embraced the mantle of the superhero, balancing ordinary life with extraordinary responsibility, and learning that courage is the greatest superpower of all.`
  ],
  Historical: [
    `{name} traveled back in time to Ancient Rome, witnessing gladiators battling in the Colosseum, senators debating passionately, and markets bustling with merchants from distant lands. Dressed in local attire, {name} navigated the streets, learning about culture, politics, and daily life. The scent of spices and fresh bread filled the air, while chariots clattered over stone roads. {name} attended secret meetings with scholars, discovering lost knowledge and untold stories. A chance encounter with a senator revealed a conspiracy that could change the empire’s fate. Using wit and courage, {name} intervened subtly, preserving history while learning invaluable lessons. Returning to the present, {name} carried insights, stories, and a deep appreciation for the complexities of civilization, realizing that history is not just facts but lived experiences full of drama, triumph, and tragedy.`
  ],
  SliceOfLife: [
    `{name} had an ordinary day that turned extraordinary in unexpected ways. Morning coffee spilled on their favorite book, prompting a walk to clear the mind. At the park, {name} noticed a child helping an elderly person tie their shoes, which inspired a ripple of kindness around them. A conversation with a stranger led to a new friendship, and the sunset painted the sky with breathtaking colors. {name} realized that even in mundane moments, beauty and connection existed everywhere. Small acts of empathy, observation, and gratitude transformed the ordinary into a story worth remembering. By the end of the day, {name} felt content, inspired, and aware that life’s richness comes not from grand adventures but from the simple, meaningful moments that often go unnoticed.`
  ]
},

  compliments: {
    Fun: [
      "{name}, your energy is contagious! People love being around you.",
      "You light up the room, {name}, with your humor and laughter."
    ],
    Cute: [
      "{name}, your smile brightens even the darkest day.",
      "Everyone notices your charm and positivity, {name}!"
    ],
    Motivational: [
      "{name}, your dedication and hard work are inspiring!",
      "Keep pushing forward, {name}, your efforts will pay off!"
    ],
    Friendly: [
      "{name}, you are the friend everyone wishes they had.",
      "Your kindness and empathy make you truly special, {name}!"
    ],
    Romantic: [
      "{name}, you have a heart full of love and warmth.",
      "Anyone would be lucky to share a moment with you, {name}."
    ],
    Work: [
      "{name}, your skills and creativity are impressive!",
      "You handle challenges at work with grace and intelligence, {name}."
    ],
    Personality: [
      "{name}, your personality is magnetic and inspiring!",
      "People are drawn to your confidence and authenticity, {name}."
    ],
    Talent: [
      "{name}, your talents shine bright and deserve recognition!",
      "You have a unique gift, {name}, and the world can see it clearly."
    ],
    Confidence: [
      "{name}, your self-assurance is admirable!",
      "You inspire others by simply being confident in yourself, {name}."
    ],
    Random: [
      "{name}, just being you makes the world better!",
      "Keep being amazing, {name}, in your own unique way!"
    ]
  }
};

// ===== SELECTORS =====
const nameInput = document.getElementById("nameInput");
const categorySelect = document.getElementById("categorySelect");
const generateBtn = document.getElementById("generateBtn");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");
const saveBtn = document.getElementById("saveBtn");
const favoritesList = document.getElementById("favoritesList");

let currentGenerator = "jokes";

// ===== TAB LOGIC =====
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    currentGenerator = tab.dataset.gen;
    updateCategories();
  });
});

// ===== CATEGORY DROPDOWN =====
function updateCategories(){
  categorySelect.innerHTML="";
  const categories = Object.keys(data[currentGenerator]);
  categories.forEach(cat=>{
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}
updateCategories();

// ===== GENERATE CONTENT =====
generateBtn.addEventListener("click",()=>{
  const name = nameInput.value || "{name}";
  const category = categorySelect.value;
  const items = data[currentGenerator][category];
  const randomItem = items[Math.floor(Math.random()*items.length)];
  outputText.textContent = randomItem.replace(/{name}/g,name);
  outputText.parentElement.scrollTop = 0; // scroll top for long content
});

// ===== COPY =====
copyBtn.addEventListener("click",()=>{
  navigator.clipboard.writeText(outputText.textContent);
  alert("Copied to clipboard!");
});

// ===== SAVE FAVORITE =====
saveBtn.addEventListener("click",()=>{
  const content = outputText.textContent;
  let favorites = JSON.parse(localStorage.getItem("favorites")||"[]");
  favorites.push(content);
  localStorage.setItem("favorites",JSON.stringify(favorites));
  displayFavorites();
});

// ===== DISPLAY FAVORITES =====
function displayFavorites(){
  let favorites = JSON.parse(localStorage.getItem("favorites")||"[]");
  favoritesList.innerHTML="";
  favorites.forEach(item=>{
    const li=document.createElement("li");
    li.textContent=item;
    favoritesList.appendChild(li);
  });
}
displayFavorites();
