exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("ratings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ratings").insert([
        { tap_id: 197398, star: 3, comment: "Okay" },
        { tap_id: 197399, star: 1, comment: "Bad" },
        { tap_id: 197443, star: 2, comment: "So so" },
        { tap_id: 197501, star: 4, comment: "Good" },
        { tap_id: 196864, star: 4, comment: "Good" },
        { tap_id: 198374, star: 5, comment: "Very good" },
        { tap_id: 2299, star: 3, comment: "It's alright" },
        { tap_id: 2299, star: 4, comment: "Refreshing!" },
        { tap_id: 2299, star: 5, comment: "Waterrrr!!" },
        { tap_id: 2299, star: 4, comment: "Thank you!" },
        { tap_id: 197606, star: 5, comment: "Simply baffled!" },
        { tap_id: 197606, star: 2, comment: "Is this water?" },
        { tap_id: 197606, star: 4, comment: "Clean" },
        { tap_id: 197606, star: 3, comment: "The power of water...." },
        { tap_id: 2101, star: 4, comment: "Wowowow" },
        { tap_id: 198334, star: 5, comment: "Holy water!" },
        { tap_id: 198334, star: 4, comment: "Very good" },
        { tap_id: 198333, star: 4, comment: "Noice!" },
        { tap_id: 198333, star: 5, comment: "Very good" },
        { tap_id: 198333, star: 5, comment: "Could this be love?" },
        { tap_id: 198333, star: 4, comment: "H20 4 life!" },
        { tap_id: 2300, star: 1, comment: "My dog didn't like it" },
        { tap_id: 2300, star: 2, comment: "What is this stuff" },
        { tap_id: 2100, star: 3, comment: "It's alright" },
        { tap_id: 575, star: 4, comment: "Happy with the water!" },
        { tap_id: 575, star: 3, comment: "It's normal" },
        { tap_id: 575, star: 5, comment: "Great park great water!" },
        { tap_id: 575, star: 2, comment: "Meh" },
        { tap_id: 576, star: 2, comment: "Hard to find" },
        { tap_id: 1499, star: 5, comment: "Saved my life!" },
        { tap_id: 1499, star: 4, comment: "Holy Water!!" },
        { tap_id: 1499, star: 4, comment: "Refreshing!" },
        { tap_id: 1499, star: 5, comment: "Mizuuuu!" },
        { tap_id: 1500, star: 3, comment: "Good" },
        { tap_id: 1500, star: 3, comment: "Nice water spot" },
        { tap_id: 1500, star: 3, comment: "Good" },
        { tap_id: 1500, star: 5, comment: "Thank you!" },
        { tap_id: 447, star: 5, comment: "Good" },
        { tap_id: 447, star: 2, comment: "Nice water spot" },
        { tap_id: 447, star: 1, comment: "It broke on me" },
        { tap_id: 447, star: 5, comment: "Thank you!" },
        { tap_id: 448, star: 1, comment: "My dog did not like this" },
        { tap_id: 448, star: 5, comment: "My turtle loved it though" },
      ]);
    });
};
