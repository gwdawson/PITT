## PITT - Panintelligence Technical Test

![Panintelligence Logo](./assets/banner.jpg)

A holiday agency would like to suggest the lowest travel cost for holiday journeys to their customers.\
A return journey consists of the following parts:

- Taxi: £0.40/mile - (allows up to 4 people per taxi)
- Car: £0.20/mile - (allows up to 4 people per car), additional £3 parking fee
- Flight: £0.10/passenger/mile

This holiday agency already has an webservice API which can list the available airports, their connections and suggest the fastest routes.
This API is public and the documentation can be found here.
Your task is to make use of this API to build an application that gives a user the ability to:

- Suggest which vehicle to use to get to the departure airport (either Taxi or Car)
- Plan the flight from one airport to another (i.e. list the departure and arrival airports as well as all those inbetween)
- Plan the return flight
- List the total cost of the whole journey (journey to the outbound airport, the outbound and inbound flight)

The application can be built in whatever language you prefer using whichever technologies you’d like.

## Getting started

```yaml
$ git clone https://github.com/gwdawson/PITT.git
# Clones the repository into the current directory.

$ cd PITT
# Changes the current directory to the application directory.

$ npm install
# Installs all the dependencies.

you can run several commands:

$ npm start
# Starts the development server.

$ npm run build
# Bundles the app into static files for production.

$ npm test
# Starts the test runner.

$ npm run eject
# Removes this tool and copies build dependencies, configuration files
# and scripts into the app directory. If you do this, you can’t go back!
```

# License

All repositories distributed under the NULL License. See [`NULL`]() for more information.
