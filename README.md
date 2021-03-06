# financelead

### Personal finance planner

## Overview
This project is a personal finance planner.

## Documantation

Our project specification is [here](./docs/specification.md).

Our project architecture described [here](./docs/architecture.md).

Our Software Requirement Specification (SRS) document [here](https://docs.google.com/document/d/1dCZi9gjk3WMZE32XQtQT4HeUUMPWtNNo/edit?usp=sharing&ouid=117956364632858588855&rtpof=true&sd=true).

## To run project locally:

1. Ensure you have:
    - **node** 12.x.x installed on your computer
    - **yarn** command installed (you can install it using the following command `npm install -g yarn`
    - **psql** command installed on your computer
1. Install all required packages: `yarn` or `yarn install`
1. Create superuser for the local database: `psql -U postgres -c "CREATE USER financelead_admin SUPERUSER PASSWORD '1111';"`
1. Create the local database **financelead**: `npx sequelize-cli db:create`
1. Run all required migrations: `npx sequelize-cli db:migrate`

Finally:

1. Run the frontend with the `yarn start` command
1. Open second terminal window and run the backend with the `yarn start:backend` command