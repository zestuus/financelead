# financelead

### Personal finance planner

## Overview
This project is a personal finance planner.

## Documantation

Our project specification is [here](./docs/specification.md).

Our project architecture described [here](./docs/architecture.md).

## To run project locally:

1. Ensure you have:
    - **node** 12.x.x installed on your computer
    - **yarn** command installed (you can install it using the following command `npm install -g yarn`
    - **psql** command installed on your computer
1. Install all required packages: `yarn` or `yarn install`
1. Create the local database **financelead**: `npx sequelize-cli db:create`
1. Run all required migrations: `npx sequelize-cli db:migrate`