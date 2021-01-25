var config = {
    style: 'mapbox://styles/0lmagalhaes0/ckapcx3lx06661ilyp9271rpi',
    accessToken: 'pk.eyJ1IjoiMGxtYWdhbGhhZXMwIiwiYSI6ImNrYXBjajExeDA0ZGEyc3Bhc3ZldHpxd3QifQ.GotIhSCb5LRUTRvv2skUbg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Luis\'s Path',
    subtitle: 'The journey behind the CV',
    byline: 'Luis Magalhaes',
    footer: '',
    chapters: [
        {
            id: 'home',
            title: 'Origins',
            image: '',
            description: 'I am originally from Belo Horizonte, the 3rd biggest metropolitan area in Brazil. With 6 years old I passed an aphabetization and math test to study in what may be the only Primary/Mid School linked to a Federal University in Brazil. I also obtained high enough grades in this school to study in one of the few Federal Secondary/Technic schools in Brazil. I\'m no genius, but I can say that I studied in an University campus for 11 years before I even started college. But I also liked arts: I joined different bands, obtained professional certification of dancer and started an University course of Theater, before deciding to go back to more \"regular\" fields.',
            location: {
                center: [-43.963848, -19.860369],
                zoom: 14,
                pitch: 60,
                bearing: -137.54
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'joinville',
            title: 'Beginning',
            image: '',
            description: 'Motivated by an opportunity to finally start a \"real\" job, I moved to Joinville, south of Brazil. There I had hands-on experience on every single activity that makes a hotel/restaurant function, from housekeeping to waitering to administrative tasks to supervision. I also started a Business Administration course in a local college and provided my first Business Consultancy, with amazing results!',
            location: {
                center: [-48.865097, -26.300935],
                zoom: 13,
                pitch: 60,
                bearing: 82.54
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'return',
            title: 'Return to the Origins',
            image: '',
            description: 'Unable to cope with the cultural differences and solitude, I decided to return to my home city. I continued my studies and found out I could negotiate relatively well, which generated good returns in the sales activity.',
            location: {
                center: [-43.911878, -19.938900],
                zoom: 14,
                pitch: 60,
                bearing: -15
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'vix',
            title: 'Unstable Ground',
            image: '',
            description: 'Due to a family situation, though, I had to move to neighbor state. Unfortunately it was at the same time of the 2008 Economic Crisis, which left me with few options. I worked in minor, unrelated job positions for a while.',
            location: {
                center: [-40.297306, -20.335367],
                zoom: 13.4,
                pitch: 60,
                bearing: -30.5
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'home-again',
            title: 'From Zero to Hero',
            image: '',
            description: 'The next year I went back to my city, but still with little options. After a couple of job changes, I landed in Tam Airlines. After a year in the airport working for the main company, I could show my work as an Assistant Manager in a multi-store franchise of Tam Viagens, a company-related Travel Agency. Better financial controls and sales improvement were achieved in the stores during my work. Then I received an invitation for a Trainee program in California, USA, which I could not refuse.',
            location: {
                center: [-43.971543, -19.710727],
                zoom: 11.34,
                pitch: 60,
                bearing: 177.61
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'usa',
            title: 'The Golden Gate',
            image: '',
            description: 'The Land of the Opportunity is also the Land of Hardworking. After some months of adaptation, I found a 2nd job (in parallel with the Trainee Program) and worked often 7 days a week with average of 65h/week. I worked with big brands, such as LG and Intel while on my Trainee Program I could see the inner workings of Federal Regulations and Policies, besides the daily work with international partners. Lots of work and lots of learning! ',
            location: {
                center: [-122.428965, 37.865257],
                zoom: 11,
                pitch: 60,
                bearing: -30.3
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'mexico',
            title: 'Los Hermanos',
            image: '',
            description: 'When my American Visa expired and I could no longer stay, I hopped on my Bike and literally rode off into the sunset. After so much work, I could use an adventurous vacation. After driving around Mexico, I met a lovely family that needed help with their small business. For about 4 months I could apply my business knowledge in another country, with very good results again! Until today that family and the people\'s warmth hold a special place in my memories.',
            location: {
                center: [-100.510296, 22.228922],
                zoom: 8.6,
                pitch: 60,
                bearing: 78
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'msc',
            title: 'Nomad',
            image: '',
            description: 'Eager to keep traveling, I enlisted to work in the on-board sales department of MSC Cruises and decided to move to another country. Before each of them, I worked temporarily as Travel Agent in different parts of Brazil. Because there are times that we must work hard and there are times we must live hard.',
            location: {
                center: [-50.828880, -27.731243],
                zoom: 5,
                pitch: 60,
                bearing: 1.41
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chile',
            title: 'Chile',
            image: '',
            description: 'The time to work hard came again and I decided to do so in a less violent country. Chile was my choice. I found another small business in need for help and so another project kept me for some months. By the end of it, I joined the team of Ipsos Interactive Service, a sub-company of Ipsos Observer, a world wide company dedicated to Market Research. I loved the field and the company. The lack of receptivity of the Chilean people, though, made it such a though and lonely experience that after a year and a half I decided to return to Brazil.',
            location: {
                center: [-70.568602, -33.464953],
                zoom: 11.56,
                pitch: 60,
                bearing: 42.52
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'europe',
            title: 'The End of the World',
            image: '',
            description: 'Again in need to relax, I decided to backpack through Europe. When I reached the \"end of the world\" I met a german girl and we ended up getting married.',
            location: {
                center: [25.787090, 71.166162],
                zoom: 14,
                pitch: 60,
                bearing: 2.94
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'germany',
            title: '\'A New Hope\'',
            image: '',
            description: 'Shortly after coming to Germany was involved in an accident. The recovery took 18 months. Later, despite some German classes, it still was not enough for a proper professional communication and I had to settle again for unrelated jobs. In this crisis, though, I saw the opportunity to learn some programming and Data Science, in the hope I can now tune my career more adequately to my always present interest for IT.',
            location: {
                center: [9.885387, 52.233850],
                zoom: 10.81,
                pitch: 43.69,
                bearing: 2.94
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'noend',
            title: 'Not the End',
            image: '',
            description: 'The tail end is just the beginning of a new, more stable and focused career, hopefully on a position where I can mix both my administrative / commercial / managerial experiences and my newly developed IT skills. I\'m prepared to start it and would be glad to have the chance to join your team!'<br>'Luis Magalhaes',
            location: {
                center: [13.116499, 19.256830],
                zoom: 1.49,
                pitch: 23.69,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
