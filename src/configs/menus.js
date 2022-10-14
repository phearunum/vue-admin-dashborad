const menus= [
    {
        icon: 'mdi-view-dashboard',
        children: [],
        title: 'Dashboard',
        route:'Dashboard',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-calendar',
        children: [],
        title: 'Event Calendar',
        route:'EventCalendar',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-cog',
        children: [],
        title: 'Setting',
        route:'Settings',
        external:false,
        params:null,
    },
    {
        icon: 'mdi-account-lock',
        active: false,
        children: [
            {

                title: 'Users',
                route:'https://vuetifyjs.com/en/components/alerts',
                icon: 'mdi-account',
                external:true,
                params:null,
            },
            {

                title: 'Role',
                route:'https://vuetifyjs.com/en/components/alerts',
                icon: 'mdi-account-supervisor-outline',
                external:true,
                params:null,
            },
            {

                title: 'Role Access',
                route:'https://vuetifyjs.com/en/components/alerts',
                icon: 'mdi-account-wrench-outline',
                external:true,
                params:null,
            },
       

        ],
        title: 'Administrator',
        external:false,
        params:null,
    },

]
export default menus;