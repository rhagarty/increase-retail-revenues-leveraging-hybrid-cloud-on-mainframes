// This module helps to run the application in local development environment
// by faking CloudFoundry's VCAP_SERVICES environment variable
process.env.VCAP_SERVICES = process.env.VCAP_SERVICES || JSON.stringify({


});

