use movies_wk8;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Alien",
    genres: ["science fiction", "horror", "thriller"],
    rating: "15",
    release_date: "1979-05-25",
    runtime: 117,
    budget: 14,
    box_office: 203,
    crew: {
      director: "Ridley Scott",
      producers: ["Gordon Carroll", "David Giler", "Walter Hill"],
      cast: ["Sigourney Weaver", "John Hurt"]
    },
    plot_summary: "The crew of a spacecraft, Nostromo, intercept a distress signal from a planet and set out to investigate it. However, to their horror, they are attacked by an alien which later invades their ship.",
    img: "alien.jpg"
  },
  {
    title: "Aliens",
    genres: ["science fiction", "horror", "thriller", "action"],
    rating: "15",
    release_date: "1986-06-18",
    runtime: 117,
    budget: 18,
    box_office: 183,
    crew: {
      director: "James Cameron",
      producers: ["Gale Anne Hurd"],
      cast: ["Sigourney Weaver", "Bill Paxton", "Carrie Hen"]
    },
    plot_summary: "Ellen Ripley is sent back to the planet LV-426 to establish contact with a terraforming colony. Once there, she encounters the Alien Queen and her offspring and has to fight them to survive.",
    img: "Aliens.jpg"
  },
  {
    title: "Memento",
    genres: ["thriller", "mystery"],
    rating: "15",
    release_date: "2000-09-05",
    runtime: 113,
    budget: 9,
    box_office: 40,
    crew: {
      director: "Christopher Nolan",
      producers: ["Suzanne Todd"],
      cast: ["Guy Pierce", "Carrie-Anne Moss", "Joe Pantoliano"]
    },
    plot_summary: "Leonard Shelby, an insurance investigator, suffers from anterograde amnesia and uses notes and tattoos to hunt for the man he thinks killed his wife, which is the last thing he remembers.",
    img: "memento.jpg"
  },
  {
    title: "Up",
    genres: ["family"],
    rating: "pg",
    release_date: "2009-05-29",
    runtime: 96,
    budget: 175,
    box_office: 735,
    crew: {
      director: "Pete Docter",
      producers: ["Jonas Rivera"],
      cast: ["Ed Anser", "Christopher Plummer"]
    },
    plot_summary: "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",

    img: "up.jpg"
  },

])
