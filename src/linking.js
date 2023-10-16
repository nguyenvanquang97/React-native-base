const config = {
  screens: {
    Home: {
      path: "home",
    },
    Profile: {
      path: "profile/:id",
      parse: {
        id: (id) => `${id}`,
      },
    },
    Notifications: "notifications",
    Settings: "settings",
    Login: {
      path: 'loginScreen/:clientId',
      parse: {
        clientId: (clientId) => `${clientId}`,
      },
    }
  },
};

const linking = {
  prefixes: ["demo://app"],
  config: {
    screens: {
      Home: {
        path: "/home/:id",
        parse: {
          id: (id) => `${id}`,
        },
      },
      Profile: {
        path: "profile/",
        parse: {
          id: (id) => `${id}`,
        },
      },
      Notifications: "notifications",
      Settings: "settings",
      Login: {
        path: 'loginScreen/:clientId',
        parse: {
          clientId: (clientId) => `${clientId}`,
        },
      }
    },
  },
};

export default linking;
