const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Karatina University',
                degree: 'BSc, Information Technology',
                detail: "Bachelor's Degree in Information Technology.",
                year: '2018-2022'
            },
            {
                id: 1,
                title: 'Kanyakine High School',
                degree: 'KCSE',
                detail: "Completed Kenya certificate of Secondary education.",
                year: '2016-2021'
            },
            {
                id: 2,
                title: 'Anne`s Junior Academy',
                degree: 'KCPE',
                detail: "Completed Kenya certificate of primary education.",
                year: '2006-2016'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'ONIX-MARKET',
                role: 'Penetration Tester',
                url: 'https://onix-market.com/',
                desc: 'As a PenTester, I test the Systems To Discover Vulnerabilities And help th company Secure their Cyber Space.',
                year: '09/2023 - Present',
                location: 'Nairobi, Kenya'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Nairobi, Kenya'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Nairobi, Kenya'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
