// dummy data in here
const users = [
  { username: "sofiec", password: "bennie" },
  { username: "Admonia", password: "MockingJay" },
  { username: "chrlee20043", password: "ilovetocode123" },
  { username: "jennifer", password: "teddy" },
];

const museums = [
  {
    museumName: "The Metropolitan Museum of Art",
    image: "https://tinyurl.com/mppxxwwz",
    description:
      "The Met is a world-renowned art museum in New York City, founded in 1870. It boasts a vast and diverse collection spanning 5,000 years, featuring art and artifacts from various cultures and civilizations. It's a major cultural institution known for its exceptional art holdings and educational programs.",
    link: "https://www.metmuseum.org/",
    type: "art",
    lat: 40.779434,
    lng: -73.963402,
  },
  {
    museumName: "The Guggenheim Museum",
    image:
      "https://www.guggenheim.org/wp-content/uploads/2022/09/installation-srgm-storylines-contemporary-art-at-the-guggenheim-2015.jpg",
    description:
      "The Guggenheim Museum in New York City is an architectural marvel and a hub of modern and contemporary art. Designed by renowned architect Frank Lloyd Wright, its iconic spiral structure is a work of art in itself. Inside, you'll discover a world-class collection of avant-garde and abstract art, including works by artists like Picasso, Kandinsky, and Pollock. As you ascend the spiraling ramps, you'll experience a unique journey through the evolution of art and culture. With its innovative architecture and diverse exhibitions, the Guggenheim offers visitors an unforgettable artistic experience at every turn.",
    link: "https://www.guggenheim.org/",
    type: "art",
    lat: 40.782951,
    lng: -73.958992,
  },
  {
    museumName: "The MoMa",
    image:
      "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1635866732/pcsrgie8hynaag88gkax.jpg",
    description:
      "The Museum of Modern Art, often referred to as MoMA, is a world-renowned institution dedicated to showcasing the finest examples of modern and contemporary art. Located in the heart of New York City, MoMA boasts an impressive collection of paintings, sculptures, photography, films, and design objects created by some of the most influential artists of the 20th and 21st centuries. From Picasso's 'Les Demoiselles d'Avignon' to van Gogh's 'Starry Night,' the museum's galleries offer a captivating journey through the evolution of art and creativity. With its commitment to innovation and artistic expression, MoMA continues to inspire and challenge the boundaries of the art world.",
    link: "https://www.moma.org/",
    type: "art",
    lat: 40.761509,
    lng: -73.978271,
  },
  {
    museumName: "The Whitney Museum of American Art",
    image: "https://tinyurl.com/3b7uctfd",
    description:
      "As the preeminent institution devoted to the art of the United States, the Whitney Museum of American Art presents the full range of twentieth-century and contemporary American art, with a special focus on works by living artists. The Whitney is dedicated to collecting, preserving, interpreting, and exhibiting American art, and its collection—arguably the finest holdings of twentieth-century American art in the world—is the Museum's key resource. The Museum's flagship exhibition, the Biennial, is the country's leading survey of the most recent developments in American art.",
    link: "https://whitney.org/",
    type: "art",
    lat: 40.739613,
    lng: -74.00898,
  },
  {
    museumName: "American Museum of Natural History",
    image: "https://tinyurl.com/mrsaznbk",
    description:
      "The American Museum of Natural History (AMNH) is an iconic institution located in the heart of New York City. Founded in 1869, it stands as one of the largest and most renowned natural history museums in the world, attracting millions of visitors annually. Nestled within Central Park on the Upper West Side of Manhattan, this magnificent museum is not only a testament to human curiosity and scientific exploration but also a cherished cultural treasure.",
    link: "https://www.amnh.org/",
    type: "academic",
    lat: 40.781303,
    lng: -73.974113,
  },
  {
    museumName: "The Museum of the Moving Image",
    image: "https://media.timeout.com/images/101748989/image.jpg",
    description:
      "The Museum of the Moving Image, located in New York City, is a cultural institution dedicated to the art, history, and technology of film, television, and digital media. It offers visitors a dynamic and interactive experience, showcasing the evolution of moving images and their impact on our culture. The museum features exhibitions, screenings, and educational programs that explore the rich history and creative process behind motion pictures and digital media.",
    link: "https://movingimage.us/",
    type: "academic",
    lat: 40.756345,
    lng: -73.92395,
  },
  {
    museumName: "The Tenement Museum",
    image:
      "https://static01.nyt.com/images/2020/04/21/arts/21virus-tenement1/21virus-tenement1-mediumSquareAt3X.jpg",
    description:
      "The Tenement Museum, located in New York City, is a historical museum that tells the stories of immigrant life in the late 19th and early 20th centuries. Housed in a tenement building, it offers guided tours and exhibits that recreate the living conditions and experiences of the diverse immigrant communities that once called the building home. The museum provides a glimpse into the challenges, aspirations, and contributions of these immigrant families, highlighting their role in shaping the city's history and culture.",
    link: "https://www.tenement.org/",
    type: "academic",
    lat: 40.718796,
    lng: -73.99007,
  },
  {
    museumName: "The NY Transit Museum",
    image: "https://nytransitmuseum.org/wp-content/uploads/2016/05/About.jpg",
    description:
      "The Transit Museum, situated in New York City, is a museum dedicated to the history and development of public transportation in the city. It showcases an extensive collection of vintage subway cars, buses, and related artifacts. Visitors can explore the evolution of New York City's transit system through exhibits, interactive displays, and historic vehicles, offering insights into the vital role public transportation has played in shaping the city's growth and daily life.",
    link: "https://www.nytransitmuseum.org/",
    type: "academic",
    lat: 40.690527,
    lng: -73.989818,
  },
  {
    museumName: "The Brooklyn Museum",
    image: "https://tinyurl.com/2v7jpmh3",
    description:
      "The Brooklyn Museum, founded in 1895, is one of the oldest and largest art museums in the United States. It houses over 1.5 million diverse artworks, from ancient Egyptian artifacts to contemporary pieces, in a Beaux-Arts building designed by McKim, Mead & White. The museum hosts temporary exhibitions, educational programs, and special events, fostering inclusivity and community engagement while enriching Brooklyn's cultural landscape.",
    link: "https://www.brooklynmuseum.org/",
    type: "art",
    lat: 40.6709108,
    lng: -73.963316,
  },
  {
    museumName: "The Museum of the City of New York",
    image: "https://tinyurl.com/4ene25z5",
    description:
      "The Museum of the City of New York is a treasure trove of history and culture, dedicated to preserving and celebrating the vibrant tapestry of New York City. Located on the iconic Fifth Avenue, this museum offers a captivating journey through the city's past, present, and future. Explore an extensive collection of artifacts, photographs, and exhibitions that showcase the city's rich history, diverse communities, and innovative spirit. From the early days of Dutch colonization to the ever-evolving metropolis we know today, The Museum of the City of New York provides a captivating window into the heart and soul of the Big Apple.",
    link: "https://www.mcny.org/",
    type: "academic",
    lat: 40.7925,
    lng: -73.9519,
  },
];

const reviews = [
  {
    userId: 1,
    museumId: 1,
    rating: 5,
    body: "I'm a review",
    date: "2023-09-20",
  },
  {
    userId: 1,
    museumId: 1,
    rating: 5,
    body: "I'm a morty.",
    date: "2023-09-20",
  },
  {
    userId: 1,
    museumId: 2,
    rating: 5,
    body: "I'm a review too",
    date: "2023-09-18",
  },
  { userId: 2, museumId: 3, rating: 5, body: "Reviewing", date: "2023-09-17" },
  {
    userId: 3,
    museumId: 4,
    rating: 5,
    body: "I'm a review",
    date: "2023-09-16",
  },
  {
    userId: 1,
    museumId: 5,
    rating: 5,
    body: "Look at this review",
    date: "2023-09-20",
  },
];

// const journal = [
//     { username: "sofiec", entry: "loved that museum", date: "2023-08-12" }
// ]

module.exports = { users, museums, reviews };
