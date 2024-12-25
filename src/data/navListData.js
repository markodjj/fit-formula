const navListData = [
    // {
    //     _id: 1,
    //     path: 'home',
    //     name: 'Home',
    //     icon: '',
    //     active: true,
    //     submenu: null
    // },
    {
        _id: 2,
        path: '/plan',
        name: 'Plan Ishrane',
        icon: '',
        active: false,
        submenu: [
            {name: 'Kalkulator Kalorija', path: '/kalorije-kalkulator'},
            {name: 'BMR kalkulator', path: '/bmr-kalkulator'},
            {name: 'TDEE kalkulator', path: '/tdee-kalkulator'}
        ]
    },
    {
        _id: 3,
        path: '/tablica',
        name: 'Tablica Kalorija',
        icon: '',
        active: false,
        submenu: [
            {name: 'Meso', path: '/tablica/meso'},
            {name: 'Žitarice', path: '/tablica/zitarice'},
            {name: 'Povrće', path: '/tablica/povrce'},
            {name: 'Voće', path: '/tablica/voce'},
            {name: 'Jaja', path: '/tablica/jaja'},
            {name: 'Riba', path: '/tablica/riba'},
            {name: 'Mlečni proizvodi', path: '/tablica/mlecni-proizvodi'}
        ]
    },
    {
        _id: 4,
        path: 'blog',
        name: 'Blog',
        icon: '',
        active: false,
        submenu: null
    },
    {
        _id: 5,
        path: 'onama',
        name: 'O nama',
        icon: '',
        active: false,
        submenu: null
    }

]

export default navListData