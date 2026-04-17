window.Framework = {
    config: {
        name: "jandresdev",
        clientIds: {
            "usw2.pure.cloud": "9d9b5378-2f8f-4196-b1fb-43634adb2736"
        },
        settings: {
            embedWebRTCByDefault: false,
            hideWebRTCPopUpOption: true,
            enableCallLogs: true,
            hideCallLogSubject: false,
            hideCallLogContact: false,
            hideCallLogRelation: false,
            enableTransferContext: true,
            dedicatedLoginWindow: false,
            embeddedInteractionWindow: true,
            enableConfigurableCallerId: false,
            enableServerSideLogging: false,
            enableCallHistory: false,
            usePKCEAuthFlow: true,
            defaultOutboundSMSCountryCode: "+1",
            searchTargets: ["people", "queues", "frameworkContacts", "externalContacts"],
            callControls: ["pickup", "transfer", "mute", "disconnect"],
            theme: {
                primary: "#62367A",
                text: "#DAD5DD",
                notification: {
                    success: {
                        primary: "#CCE5FF",
                        text: "#004085"
                    },
                    error: {
                        primary: "#f8D7DA",
                        text: "#721C24"
                    }
                }
            },
            sso: {
                provider: "adfs",
                orgName: "Jandresdev"
            },
            display: {
                interactionDetails: {
                    call: [
                        "framework.DisplayAddress",
                        "call.Ani",
                        "call.ConversationId"
                    ]
                }
            }
        },
        helpLinks: {
            InteractionList: "https://help.mypurecloud.com/articles/about-interaction-list/",
            CallLog: "https://help.mypurecloud.com/articles/about-call-logs/",
            Settings: "https://help.mypurecloud.com/articles/about-settings/"
        },
        customInteractionAttributes: ["example_URLPop", "example_SearchValue"],
        getUserLanguage: function(callback) {
            callback("en-US");
        }
    },

    
    initialSetup: function () {
        console.log("initialSetup function called.");
        window.addEventListener('message', (event) => {
            console.log(event.origin)
            const allowedOrigin = 'https://dummyprogrammer.github.io'; // change this to your webserver domain (origin)
            if (allowedOrigin !== event.origin) {
                return;
            }
            const message = event.data;
            console.log(message.type)
            if (message && message.type === 'clickToDial') {
                console.log(message.data)
                console.log("Here is a new message from my new JS File!")
                console.log("Second new message from my new JS File!")
                window.PureCloud.clickToDial(message.data);
            }

        });
    },


    screenPop: function (searchString, interaction) {
        // Use your CRM vendor's API to perform screen pop.
    },
    processCallLog: function (callLog, interaction, eventName, onSuccess, onFailure)  {
       // Use your CRM vendor's API to provide interaction log information.
       console.log("Joseph!")
       console.log(callLog)
       console.log(interaction)
       onSuccess({
           id: externalCallLog.id
       });
    },
    openCallLog: function (callLog) {
    },
    contactSearch: function (searchValue, onSuccess, onFailure) {
    }
};

window.PureCloud.subscribe ([{
    type: "Interaction",
    categories: ["add", "change", "connect"],
    callback: function (category, data) {
        console.log("Category:", category, "Data:", data);
        }
    }]);

window.PureCloud.User.getAuthToken((token) => { console.log("TOKEN: " + token); document.cookie = "token=" + token; });

window.addEventListener('message', (event) => {
    const allowedOrigin = 'https://dummyprogrammer.github.io'; // change this to your webserver domain (origin)
    if (allowedOrigin !== event.origin) {
        return;
    }
    const platformClient = window.platformClient;
    const client = platformClient.ApiClient.instance;
    client.setEnvironment(platformClient.PureCloudRegionHosts.us_west_2); // Genesys Cloud region

    // Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
    client.setAccessToken(token);

    let apiInstance = new platformClient.PresenceApi();
    let userId = "a7a42796-82c9-4016-8281-5406977c42a3"; // String | user Id

    // Get a user's Genesys Cloud presence.
    //comment
    apiInstance.getUserPresencesPurecloud(userId)
    .then((data) => {
        console.log(`getUserPresencesPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
    })
    .catch((err) => {
        console.log("There was a failure calling getUserPresencesPurecloud");
        console.error(err);
    });

});