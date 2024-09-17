export const testProfileData = {
    'Name': 'Homer',
    'Last name': 'Simpson',
    'Email': 'donut@inbox.com',
    'Login': 'D\'oh',
    'Chat name': 'Homer',
    'Phone': '+7(999)1234567'
}


export const testChatsData = [{
    uuid: '1',
    name: 'Kate',
    messages: [
        {
            senderIsYou: false,
            time: '11:00',
            text: 'Hello!'
        },
        {
            senderIsYou: false,
            time: '11:01',
            text: 'Long time no see!',
            unread: true,
        },
    ]
}, {
    uuid: '2',
    name: 'Tom',
    messages: [{
        senderIsYou: false,
        time: '13:30',
        text: 'Hey there!'
    }]
}, {
    uuid: '3',
    name: 'Mary',
    messages: [
        {
            senderIsYou: false,
            time: '10:20',
            text: 'Good morning!'
        },
        {
            senderIsYou: false,
            time: '10:21',
            text: 'What a nice day. Isn\'t it?',
        },
        {
            time: '10:25',
            text: 'Indeed!',
            senderIsYou: true,
        }
    ]
}];
