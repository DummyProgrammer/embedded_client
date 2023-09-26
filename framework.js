window.Framework = {
    config: {
        name: "<Org Name>",
        clientIds: {
            "cac1.pure.cloud": "<your OAuth Client ID>",
            "sae1.pure.cloud": "<your OAuth Client ID>",
            "mypurecloud.com": "<your OAuth Client ID>",
            "usw2.pure.cloud": "<your OAuth Client ID>",
            "aps1.pure.cloud": "<your OAuth Client ID>",
            "apne2.pure.cloud": "<your OAuth Client ID>",
            "mypurecloud.com.au": "<your OAuth Client ID>",
            "mypurecloud.jp": "<your OAuth Client ID>",
            "mypurecloud.ie": "<your OAuth Client ID>",
            "mypurecloud.de": "<your OAuth Client ID>",
            "euw2.pure.cloud": "<your OAuth Client ID>"
        },
        settings: {
            embedWebRTCByDefault: true,
            hideWebRTCPopUpOption: false,
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
                provider: "",
                orgName: ""
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
                window.PureCloud.clickToDial(message.data);
            }

            if 
        });
    },

    screenPop: function (searchString, interaction) {
        // Use your CRM vendor's API to perform screen pop.
    },
    processCallLog: function (callLog, interaction, eventName, onSuccess, onFailure)  {
       // Use your CRM vendor's API to provide interaction log information.
       onSuccess({
           id: externalCallLog.id
       });
    },
    openCallLog: function (callLog) {
    },
    contactSearch: function (searchValue, onSuccess, onFailure) {
    }
};
