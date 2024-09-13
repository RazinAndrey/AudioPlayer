export const genresData = ['Поп-музыка', 'Хип-хоп', 'Классика', 'Поп-музыка2', 'Хип-хоп2', 'Классика2', 'Хип-хоп3', 'Классика3'];

export const songsData = [
    {
        id: 1,
        title: 'Матушка',
        author: 'Татьяна Куртукова',
        genre: genresData[0],
        image: '/assets/images/png/image1.png',
        audio: '/assets/music/music1.mp3',
        loved: false
    },
    {
        id: 2,
        title: 'Асфальт',
        author: 'Jakone, Kiliana',
        genre: genresData[0],
        image: '/assets/images/png/image2.png',
        audio: '/assets/music/music2.mp3',
        loved: true
    },
    {
        id: 3,
        title: 'Привыкаю',
        author: 'MACAN, A.V.G',
        genre: genresData[1],
        image: '/assets/images/png/image3.png',
        audio: '/assets/music/music3.mp3',
        loved: true
    }
];