# ERP

[![Netlify Status](https://api.netlify.com/api/v1/badges/4cf3a716-f52f-43d6-b956-9a6a69c87782/deploy-status)](https://erp-entnt.netlify.app/)

This project is an ERP (Enterprise Resource Planning) system, designed to manage basic business operations efficiently. The system consists of the following pages:

- Dashboard - Provides an overview of the system.
- Products Management - Allows for the management of product listings.
- Orders Management - Facilitates viewing and handling orders.

> Every action is done using local variables (mock datas) nothing is stored permanently. After refresh or re-renders data will be lost.

## Features

#### Dashboard:

- Display a summary of the total number of products and orders.
- Include links for quick navigation to the Products and Orders management pages.
- **Orders Calendar View**: a calendar view that displays orders on their expected delivery dates. Ability to click on a date to view all orders due for delivery that day.

#### Products Management:

- Shows a list of products with details such as name, category, price, and stock quantity, using mock data.
- Functionalities to add, edit, and delete products.

#### Orders Management:

- Shows a list of orders, including details like order ID, customer name, order date, and status, using mock data.
- Ability to view order details, update the order status, and delete the orders.

## Installation

Install the required packages using the package manager [npm](https://www.npmjs.com/).

```bash
npm install
```

## Running The Project

To run the project in development mode run the following command in the terminal.

```bash
npm run dev
```

## Production

To make the production-ready build run the following command in the terminal

```bash
npm run build
```

## Technology Used

<img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind" width="40" height="40"/>

