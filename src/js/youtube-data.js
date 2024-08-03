const resourceManager = require('./resource-manager')

function getData() {
    return [ 
        { 
            title: 'Talking <strong>and AI with</strong> Google CEO Sundar Pichai!',
            thumb: resourceManager.getAsset('thumbnails/thumbnail-1.webp'),
            author: 'Marques Brownlee',
            stats: '3.4M views &#183; 6 months ago',
            avatar: resourceManager.getAsset('channel-pictures/channel-1.jpeg'),
            duration: 860,
        },
        {
            title: 'Try Not To Laugh Challenge #9',
            thumb: resourceManager.getAsset('/thumbnails/thumbnail-2.webp'),
            author: 'Markiplier',
            stats: '19M views &#183; 4 years ago',
            avatar: resourceManager.getAsset('channel-pictures/channel-2.jpeg'),
            duration: 502,
        }, 
        { 
            title: 'Crazy Tik Toks Taken Moments Before DISASTER',
            thumb: resourceManager.getAsset('thumbnails/thumbnail-3.webp'),
            author: 'SSSniperWolf',
            stats: '12M views &#183; 1 year ago',
            avatar: resourceManager.getAsset('channel-pictures/channel-3.jpeg'),
            duration: 553,
        },
        {
            title: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
            thumb: resourceManager.getAsset('thumbnails/thumbnail-4.webp'),
            author: 'Veritasium',
            stats: '18M views &#183; 4 months ago',
            avatar: resourceManager.getAsset('channel-pictures/channel-4.jpeg'),
            duration: 1329,
        },
        {
            title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
            thumb: resourceManager.getAsset('thumbnails/thumbnail-5.webp'),
            author: 'CS Dojo',
            stats: '519K views &#183; 5 years ago',
            avatar: resourceManager.getAsset('channel-pictures/channel-5.jpeg'),
            duration: 677,
        },
        {
            title: 'Anything You Can Fit In The Circle I’ll Pay For',
            thumb: resourceManager.getAsset('thumbnails/thumbnail-6.webp'),
            author: 'MrBeast',
            stats: '141M views &#183; 1 years ago',
            avatar: resourceManager.getAsset('channel-pictures/channel-6.jpeg'),
            duration: 1199
        },
    ]
}

module.exports = { getData }
