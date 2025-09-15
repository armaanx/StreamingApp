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
    poster: './assets/images/1.jpg',
    synopsis:
      "A skilled thief enters people's dreams to steal secrets, but must pull off one final job — planting an idea instead.",
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    subtitles: 'https://www.example.com/subs/inception.vtt',
  },
  {
    id: '2',
    title: 'Interstellar',
    year: '2014',
    genre: 'Sci-Fi',
    rating: 8.6,
    poster: './assets/images/2.jpg',
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
    poster: './assets/images/3.jpg',
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
    poster: './assets/images/4.jpg',
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
    poster: './assets/images/5.jpg',
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
    poster: './assets/images/6.jpg',
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
    poster: './assets/images/7.jpg',
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
    poster: './assets/images/8.jpg',
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
    poster: './assets/images/9.jpg',
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
    poster: './assets/images/10.jpg',
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
    poster: './assets/images/11.jpg',
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
    poster: './assets/images/12.jpg',
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
    poster: './assets/images/13.jpg',
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
    poster: './assets/images/14.jpg',
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
    poster: './assets/images/15.jpg',
    synopsis:
      'Miles Morales embarks on a multiversal adventure, meeting different Spider-People to face a new threat.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/spiderverse.vtt',
  },
  {
    id: '16',
    title: 'Spider-Man: Into the Spider-Verse',
    year: '2018',
    genre: 'Animation',
    rating: 8.7,
    poster: './assets/images/16.jpg',
    synopsis:
      'After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    subtitles: 'https://www.example.com/subs/spiderverse.vtt',
  },
];
