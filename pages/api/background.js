const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Karatina University',
                degree: 'BSc, Information Technology',
                detail: "Bachelor's Degree in Information Technology.",
                year: '2021-2025'
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
            {
                id: 3,
                title: 'alx_Africa',
                degree: 'Software Engineering',
                detail: "Doing SWE-SE program With Backend Major",
                year: '2023-2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'onix market',
                role: 'Penetration Tester',
                url: 'https://onix-market.com/',
                desc: 'As a PenTester, I test the Systems To Discover Vulnerabilities And help th company Secure their Cyber Space.',
                year: '09/2023 - Present',
                location: 'Nairobi, Kenya'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
