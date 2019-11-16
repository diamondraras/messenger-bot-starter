#!/usr/bin/env bash

. ../.env.local


curl -X POST -H "Content-Type: application/json" -d '{
  "get_started": {"payload": "BEGINING"}
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}"

echo

curl -X POST -H "Content-Type: application/json" -d '{
  "greeting": [
    {
      "locale":"default",
      "text":"Hello {{user_first_name}}!" 
    }, {
      "locale":"en_US",
      "text":"Hi {{user_first_name}}!"
    }
  ]
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}"

echo


curl -X POST -H "Content-Type: application/json" -d '{
    "persistent_menu": [
        {
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [
                {
                    "type": "postback",
                    "title": "Payload 1",
                    "payload": "payload1"
                },
                {
                    "type": "postback",
                    "title": "Payload 2",
                    "payload": "payload2"
                },
                {
                    "type": "nested",
                    "title": "Langue",
                    "call_to_actions":[
                      {
                        "title":"Français",
                        "type":"postback",
                        "payload":"LANG.FR"
                        },
                        {
                        "title":"English",
                        "type":"postback",
                        "payload":"LANG.EN"
                        },
                         {
                        "title":"Malagasy",
                        "type":"postback",
                        "payload":"LANG.MG"
                        }
                    ]
                }
            ]
        }
    ]
}' "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}"

echo


