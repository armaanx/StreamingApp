export interface CatalogueItemType {
  id: string;
  title: string;
  year: string;
  genre: string;
  rating: number;
  poster: string;
  synopsis: string;
  videoUrl: string;
  subtitles: string;
}

export const mockData = [
  {
    id: '1',
    title: 'Inception',
    year: '2010',
    genre: 'Sci-Fi',
    rating: 8.8,
    poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    synopsis:
      "A skilled thief enters people's dreams to steal secrets, but must pull off one final job — planting an idea instead.",
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/inception.vtt',
  },
  {
    id: '2',
    title: 'Interstellar',
    year: '2014',
    genre: 'Sci-Fi',
    rating: 8.6,
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    synopsis:
      "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/interstellar.vtt',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    year: '2008',
    genre: 'Action',
    rating: 9.0,
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    synopsis:
      'Batman faces his greatest challenge when the Joker wreaks havoc on Gotham.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/dark-knight.vtt',
  },
  {
    id: '4',
    title: 'Avengers: Endgame',
    year: '2019',
    genre: 'Action',
    rating: 8.4,
    poster: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    synopsis:
      "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' actions.",
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/endgame.vtt',
  },
  {
    id: '5',
    title: 'Parasite',
    year: '2019',
    genre: 'Thriller',
    rating: 8.6,
    poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    synopsis:
      'Greed and class discrimination threaten the symbiotic relationship between two families.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/parasite.vtt',
  },
  {
    id: '6',
    title: 'The Matrix',
    year: '1999',
    genre: 'Sci-Fi',
    rating: 8.7,
    poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    synopsis:
      'A hacker discovers reality is a simulation and joins the rebellion against its controllers.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/matrix.vtt',
  },
  {
    id: '7',
    title: 'Fight Club',
    year: '1999',
    genre: 'Drama',
    rating: 8.8,
    poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
    synopsis:
      'An office worker and a soap maker form an underground fight club with far-reaching consequences.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/fight-club.vtt',
  },
  {
    id: '8',
    title: 'Joker',
    year: '2019',
    genre: 'Drama',
    rating: 8.4,
    poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    synopsis:
      'A mentally troubled man embarks on a downward spiral that leads to the birth of the infamous Joker.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/joker.vtt',
  },
  {
    id: '9',
    title: 'Whiplash',
    year: '2014',
    genre: 'Drama',
    rating: 8.5,
    poster: 'https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg',
    synopsis:
      'A young drummer enrolls in a cut-throat music conservatory where his instructor pushes him to the limit.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/whiplash.vtt',
  },
  {
    id: '10',
    title: 'The Shawshank Redemption',
    year: '1994',
    genre: 'Drama',
    rating: 9.3,
    poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    synopsis:
      'Two imprisoned men bond over years, finding solace and eventual redemption through acts of decency.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/shawshank.vtt',
  },
  {
    id: '11',
    title: 'Pulp Fiction',
    year: '1994',
    genre: 'Crime',
    rating: 8.9,
    poster: 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
    synopsis:
      'The lives of two hitmen, a boxer, and others intertwine in a series of violent, darkly comic events.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/pulp-fiction.vtt',
  },
  {
    id: '12',
    title: 'The Godfather',
    year: '1972',
    genre: 'Crime',
    rating: 9.2,
    poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    synopsis:
      'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/godfather.vtt',
  },
  {
    id: '13',
    title: 'Gladiator',
    year: '2000',
    genre: 'Action',
    rating: 8.5,
    poster: 'https://image.tmdb.org/t/p/w500/pRn3TJHbAqCAO7VZ8zsEZec5ek.jpg',
    synopsis:
      'A betrayed Roman general fights his way back to power to seek revenge against the corrupt emperor.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/gladiator.vtt',
  },
  {
    id: '14',
    title: 'Forrest Gump',
    year: '1994',
    genre: 'Drama',
    rating: 8.8,
    poster: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    synopsis:
      'The life story of Forrest Gump, a man with a low IQ who influences several decades of American history.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/forrest-gump.vtt',
  },
  {
    id: '15',
    title: 'Spider-Man: Across the Spider-Verse',
    year: '2023',
    genre: 'Animation',
    rating: 8.7,
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    synopsis:
      'Miles Morales embarks on a multiversal adventure, meeting different Spider-People to face a new threat.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/spiderverse.vtt',
  },
  {
    id: '16',
    title: 'The Piano Teacher',
    year: '2023',
    genre: 'Animation',
    rating: 8.7,
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    synopsis:
      'Miles Morales embarks on a multiversal adventure, meeting different Spider-People to face a new threat.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/spiderverse.vtt',
  },
];
