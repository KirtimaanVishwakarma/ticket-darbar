import LinkIcon from "../../public/assets/link-icon.svg";
import WhatsAppIcon from "../../public/assets/whatsapp-icon.svg";
import FacebookIcon from "../../public/assets/facebook-icon.svg";

export const cinemasList = [
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
    {
        name: "Ajanta Cinema Cinex",
        location: "Borivali (W)",
        movies:
        {
            title: "Movie 1",
            duration: "120 minutes",
            genre: "Drama"
        },
        timeseries: [
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
            {
                time: '03:30PM',
                audio: 'Galaxy'
            },
            {
                time: '03:30PM',
                audio: 'Dolby'
            },
        ]
    },
];

export const seatDescription = [
    {
        heading: 'Sold',
        className: 'bg-gray-300',
    },
    {
        heading: 'Available',
        className: 'bg-white !border border-green-600',
    },
    {
        heading: 'Selected',
        className: 'bg-green-600',
    },
]

export const screenSeats = {
    totalRows: 23,
    seatDetails: [{
        seatType: 'RECLINER',
        price: 250,
        rows: ['A', 'B'],
        blockedSeats: {
            A: [1, 2, 3, 4, 5],
            B: [1, 2, 3, 4, 5, 11, 17, 18, 23],
        },
        bookedSeats: {
            A: [23],
            B: [12]
        },
    },
    {
        seatType: 'PRIME',
        price: 160,
        rows: ['C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
        blockedSeats: {
            C: [8, 9, 10, 11, 12, 13, 16, 17],
            D: [8, 9, 10, 11, 12, 13, 16, 17],
            E: [8, 9, 10, 11, 12, 13, 16, 17],
            F: [8, 9, 10, 11, 12, 13, 16, 17],
            G: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            H: [8, 9, 16, 17],
            J: [8, 9, 16, 17],
            K: [8, 9, 16, 17],
            L: [8, 9, 16, 17],
            M: [8, 9, 16, 17],
        },
        bookedSeats: {
            C: [1, 3, 6, , 20, 23],
            G: [1, 3, 6, , 20, 23]
        },
    },
    {
        seatType: 'CLASSIC',
        price: 150,
        rows: ['N', 'O'],
        blockedSeats: {
            N: [8, 9, 16, 17],
            O: [8, 9, 16, 17],
        }
    }],
}

export const castList = [
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
  ];

export const shareLinks = [
    {
        header: 'Copy Link',
        url: 'copy',
        icon: LinkIcon
    },
    {
        header: 'Facebook',
        url: 'https://www.facebook.com/share_channel/?link=https%3A%2F%2Fin.bookmyshow.com%2Fmumbai%2Fmovies%2Fthalapathy-is-the-goat%2FET00401441&app_id=966242223397117&source_surface=external_reshare&display&hashtag',
        icon: FacebookIcon
    },
    {
        header: 'WhatsApp',
        url: 'https://x.com/intent/post?url=https%3A%2F%2Fin.bookmyshow.com%2Fmumbai%2Fmovies%2Fthalapathy-is-the-goat%2FET00401441&utm_source=twittershare&utm_medium=social&via=BookMyShow&text=&mx=2',
        icon: WhatsAppIcon
    },
]