export const testProfileData = {
    first_name: {key: 'Name', value: 'Homer'},
    second_name: {key: 'Second name', value: 'Simpson'},
    login: {key: 'Login', value: 'D\'oh'},
    display_name: { key: 'Chat name', value: 'Homer'},
    email: { key: 'Email', value: 'donut@inbox.com'},
    phone: { key: 'Phone', value: '+7(999)1234567'},
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
