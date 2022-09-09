// resourceName, description, estimatedCost, image, links (could be an object with {key: link title, value: link url})

const mongoose = require('mongoose');

const { Schema } = mongoose;

const resourceSchema = new Schema({
    resourceName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    estimatedCost: {
        type: Number
    },
    image: {
        type: String
    },
    links: {
        type: String
    },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;