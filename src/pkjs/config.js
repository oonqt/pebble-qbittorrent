module.exports = [
    {
        type: 'Heading',
        defaultValue: 'qBittorrent Remote'
    },
    {
        type: 'section',
        items: [
            {
                type: 'heading',
                defaultValue: 'Enter Client Details'
            },
            {
                type: 'input',
                appKey: 'clientAddress',
                description: 'ex: http://192.168.0.69:7755',
                label: 'Client Address'
            },
            {
                type: 'input',
                appKey: 'username',
                description: 'Leave blank if your device IP is in whitelisted subnet',
                label: 'Username'
            },
            {
                type: 'input',
                appKey: 'password',
                description: 'Leave blank if your device IP is in whitelisted subnet',
                label: 'Password'
            },
            {
                type: 'submit',
                defaultValue: 'Save Settings'
            }
        ]
    }
];