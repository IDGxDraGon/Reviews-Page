window.onload = function () {
  reload();
};

var left_btn = document.getElementById("left-btn");
var right_btn = document.getElementById("right-btn");
var surprise_me_btn = document.getElementById("surprise-me-btn");

var name_field = document.getElementById("name");
var job_field = document.getElementById("job");
var review_field = document.getElementById("review");
var image_field = document.getElementById("image");

var current_review = 0;

var current_image = [
  "photos/dragon.png",
  "photos/walter.jpg",
  "photos/nya.jpg",
  "photos/marten.jpg",
  "photos/lucy.jpg",
];

var names = ["Dragon", "Walter", "Nya", "Marten", "Lucy"];

var jobs = ["freelancer", "hotel owner", "Reporter", "Chef", "Vet"];

var reviews = [
  `Online jobs offer a flexible and diverse range of opportunities, making them a popular choice for many freelancers.
One of the biggest advantages is the ability to work from anywhere, which allows for a better work-life balance and
eliminates commuting time. Whether you're looking for full-time work or just a side gig, online platforms provide
access to various fields, from writing and graphic design to programming and customer service.

However, while online jobs provide significant benefits, they also come with challenges. Competition can be fierce,
and finding reliable clients or employers requires diligence and sometimes trial and error. Additionally, managing
time effectively and staying motivated can be challenging without a structured environment.

Overall, online jobs offer a great chance to build a career on your own terms. With the right approach, they can
provide rewarding work experiences and the freedom to create your ideal work environment.`,

  `My experience with [The DraGon perfume] was absolutely wonderful. This
perfume is not just a product, it is a masterpiece that exudes luxury
and distinction. Its unique formula combines rich and deep notes that
linger for a long time, ensuring an unforgettable aromatic experience.
The elegant packaging reflects the high quality of the perfume, as it
comes in a meticulously designed bottle, which enhances the sense of
luxury. [The DraGon Perfume] is an ideal choice for any special
occasion, and adds a touch of elegance that reflects good taste. It is
an excellent choice for anyone looking for excellence and quality in
the world of perfumes.`,

  `"The Fake News" sets out to explore the dangers of misinformation in the digital age but falls flat in its
execution. While the premise is timely and important, the film suffers from a predictable plot, shallow characters,
and sluggish pacing. Despite its initial promise, it fails to offer any meaningful insights into the complex issue
of fake news. The result is a disappointing and forgettable experience that leaves viewers wanting more substance
and depth. In the end, "The Fake News" is a missed opportunity to address a critical topic with the seriousness
and depth that it deserves.`,

  `Koshary is a delightful Egyptian dish that brings comfort in every bite. A hearty blend of rice,
lentils, pasta, and chickpeas, all topped with a zesty tomato sauce, crispy fried onions, and a
dash of garlic vinegar, it’s a true explosion of flavors and textures. The simplicity of ingredients
combined with the rich, tangy sauce makes it a satisfying meal that leaves you full and happy.
Whether enjoyed at a local street vendor or made at home, Koshary is a beloved staple that captures
the essence of Egyptian cuisine. Perfect for a quick, filling, and budget-friendly meal!`,

  `Ragdoll cats are renowned for their placid and affectionate nature, making them ideal pets for families
and individuals alike. Known for their striking blue eyes and silky, semi-long fur, Ragdolls are as beautiful
as they are gentle. These cats are typically calm and easygoing, often described as "puppy-like" due to their
tendency to follow their owners around and enjoy being held. They have a unique characteristic of going limp when
picked up, which is where they get their name. Overall, Ragdolls are a wonderful choice for those seeking a loving,
low-maintenance feline friend that thrives on companionship and comfort.`,
];

function reload() {
  if (current_review == 0) {
    name_field.innerHTML = names[0];
    job_field.innerHTML = jobs[0];
    review_field.innerHTML = reviews[0];
    image_field.src = current_image[0];
  } else if (current_review == 1) {
    name_field.innerHTML = names[1];
    job_field.innerHTML = jobs[1];
    review_field.innerHTML = reviews[1];
    image_field.src = current_image[1];
  } else if (current_review == 2) {
    name_field.innerHTML = names[2];
    job_field.innerHTML = jobs[2];
    review_field.innerHTML = reviews[2];
    image_field.src = current_image[2];
  } else if (current_review == 3) {
    name_field.innerHTML = names[3];
    job_field.innerHTML = jobs[3];
    review_field.innerHTML = reviews[3];
    image_field.src = current_image[3];
  } else if (current_review == 4) {
    name_field.innerHTML = names[4];
    job_field.innerHTML = jobs[4];
    review_field.innerHTML = reviews[4];
    image_field.src = current_image[4];
  }
}

left_btn.addEventListener("click", function () {
  if (current_review == 0) {
    current_review = 4;
  } else {
    current_review--;
  }
  reload();
});

right_btn.addEventListener("click", function () {
  if (current_review == 4) {
    current_review = 0;
  } else {
    current_review++;
  }
  reload();
});

surprise_me_btn.addEventListener("click", surprise_me);

function surprise_me() {
  var random_number = Math.floor(Math.random() * 5);
  var new_random_number;

  current_review = random_number;
  reload();

  do {
    new_random_number = Math.floor(Math.random() * 5);
  } while (new_random_number === current_review);

  current_review = new_random_number;
  reload();
}
