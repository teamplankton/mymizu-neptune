exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("ratings")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ratings").insert([
        { tap_id: 197398, star: 3, comment: "okay" },
        { tap_id: 197399, star: 1, comment: "bad" },
        { tap_id: 197443, star: 2, comment: "so so" },
        { tap_id: 197501, star: 4, comment: "good" },
        { tap_id: 196864, star: 4, comment: "good" },
        { tap_id: 198374, star: 5, comment: "very good" },
      ]);
    });
};
