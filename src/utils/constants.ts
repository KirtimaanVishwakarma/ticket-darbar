import LinkIcon from "../../public/assets/link-icon.svg";
import WhatsAppIcon from "../../public/assets/whatsapp-icon.svg";
import FacebookIcon from "../../public/assets/facebook-icon.svg";
import HomeIcon from "../../public/assets/dual-color/home-fill.svg";
import MovieIconFill from "../../public/assets/dual-color/movie-fill.svg";
import MovieIcon from "../../public/assets/dual-color/movie.svg";
import ProfileIcon from "../../public/assets/dual-color/profile.svg";
import ProfileFillIcon from "../../public/assets/dual-color/profile-fill.svg";
import HomeIconFill from "../../public/assets/dual-color/home-fill-yellow.svg"
import MorningIcon from "../../public/assets/prefferered-time/morning.png"
import AfternoonIcon from "../../public/assets/prefferered-time/afternoon.png"
import EveningIcon from "../../public/assets/prefferered-time/evening.png"
import NightIcon from "../../public/assets/prefferered-time/night.png"

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
export const moviesList = [
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 1
    },

    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 2
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 3
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 4
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 5
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 6
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 7
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 8
    },
    {
        image:
            'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTM4LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00419530-vwglsjmfwx-portrait.jpg',
        name: 'Stree 2: Sarkate Ka Atank',
        languages: ' Hindi, Tamil, Telugu',
        certificate: 'UA',
        id: 9
    },
];

export const languageList = [
    { type: 'Hindi', isAdded: true },
    { type: 'English', isAdded: false },
    { type: 'Gujarati', isAdded: false },
    { type: 'Marathi', isAdded: false },
    { type: 'Telugu', isAdded: true },
    { type: 'Tamil', isAdded: false },
]

export const webFilters = [
    {
        header: 'Languages',
        list: languageList,
    },
    {
        header: 'Genres',
        list: [
            { type: 'Drama', isAdded: false },
            { type: 'Comedy', isAdded: false },
            { type: 'Action', isAdded: false },
            { type: 'Romantic', isAdded: false },
            { type: 'Horror', isAdded: false },
            { type: 'Sci-Fi', isAdded: false },
            { type: 'Fantasy', isAdded: false },
            { type: 'Family', isAdded: false },
        ],
    },
    {
        header: 'Formate', list: [
            { type: '2D', isAdded: false },
            { type: '3D', isAdded: false },
            { type: '4DX 3D', isAdded: false },
            { type: 'IMAX 3D', isAdded: false },
            { type: 'IMAX 2D', isAdded: false },
        ]
    }
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

export const videosLinks = [
    { link: 'https://www.youtube.com/embed/f3xT1Nh5SNA?enablejsapi=1&modestbranding=1&origin=https%3A%2F%2Fin.bookmyshow.com&playsinline=1&mute=1&fs=1&rel=0&widgetid=3' },
    { link: 'https://www.youtube.com/embed/f3xT1Nh5SNA?enablejsapi=1&modestbranding=1&origin=https%3A%2F%2Fin.bookmyshow.com&playsinline=1&mute=1&fs=1&rel=0&widgetid=3' },
    { link: 'https://www.youtube.com/embed/f3xT1Nh5SNA?enablejsapi=1&modestbranding=1&origin=https%3A%2F%2Fin.bookmyshow.com&playsinline=1&mute=1&fs=1&rel=0&widgetid=3' },
    { link: 'https://www.youtube.com/embed/f3xT1Nh5SNA?enablejsapi=1&modestbranding=1&origin=https%3A%2F%2Fin.bookmyshow.com&playsinline=1&mute=1&fs=1&rel=0&widgetid=3' }
]

export const footerLinks = [
    { icon: HomeIcon, filledIcon: HomeIconFill, header: 'Home', path: '/' },
    { icon: MovieIcon, filledIcon: MovieIconFill, header: 'Movies', path: '/movies' },
    { icon: ProfileIcon, filledIcon: ProfileFillIcon, header: 'Profile', path: '/profile' },
]

export const AvailableFacility = [
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Ticket Cancellation'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'F&B'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'MTicket'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Gaming Zone'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Wheel Chair Facility'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Recline Seat'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Parking Facility'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Drinking Water'
    },
    {
        img: 'https://in.bmscdn.com/moviemode/cinemafacilities/cancellation.png',
        header: 'Food Court'
    },
]

export const PriceFilter = [
    { min: 0, max: 200 },
    { min: 201, max: 300 },
    { min: 301, max: 400 },
    { min: 401, max: 500 },
    { min: 501, max: 600 },
    { min: 601, max: 700 },
    { min: 701, max: 800 },
    { min: 800, max: 1000 },
]

export const PreferredTime = [
    {
        img: MorningIcon, dayCycle: 'morning', timeRange: {
            start: '12:00 AM',
            end: '11:59 AM',
        }
    },
    {
        img: AfternoonIcon, dayCycle: 'afternoon', timeRange: {
            start: '12:00 PM',
            end: '3:59 PM',
        }
    },
    {
        img: EveningIcon, dayCycle: 'evening', timeRange: {
            start: '4:00 PM',
            end: '6:59 PM',
        }
    },
    {
        img: NightIcon, dayCycle: 'night', timeRange: {
            start: '7:00 PM',
            end: '11:59 PM',
        }
    },
]