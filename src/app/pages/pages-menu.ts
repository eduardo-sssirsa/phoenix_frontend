import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Welcome',
        icon: 'fas fa-home',
        home: true
    },
    {
        title: 'Entries',
        icon: 'fas fa-truck',
        children : [
            {
                title: 'News',
                link: '/pages/entries/news',
            },
            {
                title: 'Warranties',
                link: '/pages/entries/warranties'
            },
            {
                title: 'Warehouse',
                link: '/pages/entries/warehouse'
            },
            {
                title: 'Salepoint',
                link: '/pages/entries/salepoint'
            }
        ],
    },
    {
        title: 'Departures',
        icon: 'fas fa-shipping-fast',
        children : [
                {
                    title: 'News',
                    link: '/pages/departures/news',
                },
                {
                    title: 'Warranties',
                    link: '/pages/departures/warranties'
                },
                {
                    title: 'Warehouse',
                    link: '/pages/departures/warehouse'
                },
                {
                    title: 'Salepoint',
                    link: '/pages/departures/salepoint'
                },
                {
                    title: 'Obsolete',
                    link: '/pages/departures/obsolete'
                }                
        ],
    },
];