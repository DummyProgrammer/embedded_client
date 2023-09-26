window.Framework = {
    config: {
        name: "jandresdev",
        clientIds: {
            "cac1.pure.cloud": "<your OAuth Client ID>",
            "sae1.pure.cloud": "<your OAuth Client ID>",
            "mypurecloud.com": "<your OAuth Client ID>",
            "usw2.pure.cloud": "9d9b5378-2f8f-4196-b1fb-43634adb2736",
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
        window.addEventListener("message", function(event) {
            try {
                var message = JSON.parse(event.data);
                console.log(message.type)
                if(message){
                    if(message.type == "clickToDial"){
                        window.PureCloud.clickToDial(message.data);
                    } else if(message.type == "addAssociation"){
                        window.PureCloud.addAssociation(message.data);
                    }else if(message.type == "addAttribute"){
                        window.PureCloud.addCustomAttributes(message.data);
                    }else if(message.type == "addTransferContext"){
                        window.PureCloud.addTransferContext(message.data);
                    }else if(message.type == "sendContactSearch"){
                        if(contactSearchCallback) {
                            contactSearchCallback(message.data);
                        }
                    }else if(message.type == "updateUserStatus"){
                        window.PureCloud.User.updateStatus(message.data);
                    }else if(message.type == "updateInteractionState"){
                        window.PureCloud.Interaction.updateState(message.data);
                    }else if(message.type == "setView"){
                        window.PureCloud.User.setView(message.data);
                    }else if(message.type == "updateAudioConfiguration"){
                        window.PureCloud.User.Notification.setAudioConfiguration(message.data);
                    }else if(message.type == "sendCustomNotification"){
                        window.PureCloud.User.Notification.notifyUser(message.data);
                    }
                }
            } catch {
                //ignore if you can not parse the payload into JSON
            }
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
