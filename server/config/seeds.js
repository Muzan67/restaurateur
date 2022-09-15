const db = require('./connection');

const { Resource } = require('../models');

db.once('open', async () => {

    await Resource.deleteMany();

    const resources = await Resource.insertMany([
        {
            resourceName: 'Concept/Brand',
            description: 'What kind of restaurant do you want?  You can get creative or keep it classic.'
        },
        {
            resourceName: 'Financials',
            description: "As in all businesses, funding is essential to the success of a restaurant. It's time to figure out a budget."
        },
        {
            resourceName: 'Property',
            description: "Where your restaurant is located is very important.  Choose wisely."
        },
        {
            resourceName: 'Permits/Licenses',
            description: "Be mindful of the various federal, state, and local permits and licenses required."
        },
        {
            resourceName: 'Menu',
            description: 'This is the fun and most important part. Give me your best stuff!'
        },
        {
            resourceName: 'Kitchen Equipment',
            description: 'Every restaurant needs kitchen equipment. Consider connecting with a supplier.'
        },
        {
            resourceName: 'Employees',
            description: "Let's make sure you find the right people. Whether it's kitchen staff or front-of-house, work with the best."
        },
        {
            resourceName: 'Marketing',
            description: "Get the word out!  Time to take advantage of the various advertising channels out there."
        },
        {
            resourceName: 'Opening',
            description: "It's the big day. Let's make an impression that they will remember."
        }
    ]);

    console.log('resources seeded');

    process.exit();
})

// we still need to fill in seeds with information for estimatedCost, image, and links.