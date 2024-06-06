> let { proto, generateWAMessageFromContent } = require('@adiwajshing/baileys')

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "test"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "test"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "test",
            subtitle: "test",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\".play\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\".play a thousand year\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              },
              {
                 "name": "cta_call",
                 "buttonParamsJson": "{\"display_text\":\"call\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
              },
              {
                 "name": "cta_reminder",
                 "buttonParamsJson": "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_cancel_reminder",
                 "buttonParamsJson": "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
              },
              {
                 "name": "address_message",
                 "buttonParamsJson": "{\"display_text\":\"address_message\",\"id\":\"message\"}"
              },
              {
                 "name": "send_location",
                 "buttonParamsJson": ""
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
