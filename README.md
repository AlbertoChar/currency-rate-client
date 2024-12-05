# currency-rate-client
Currency Rate Client is a simple front-end application built with HTML, CSS, JavaScript, and jQuery.


# Currency Rate Client

The **Currency Rate Client** is a front-end application for managing and displaying currency exchange rates. It connects to a Node.js server to fetch live data and provides features like currency conversion and historical exchange rates for the past seven Mondays.

## Features

- Fetch and display the latest exchange rates.
- Convert amounts between currencies.
- Retrieve historical exchange rates for a specific base currency.
- Clean, professional user interface inspired by financial tools.

## Getting Started

### Prerequisites

- A running instance of the [Currency Rate Node Server](https://github.com/your-username/currency-rate-server).
- A modern web browser (Google Chrome, Firefox, etc.).

### Installation

1. Clone the repository:
   git clone https://github.com/your-username/currency-rate-client.git
   cd currency-rate-client
Ensure your currency-rate-server is running and accessible.

Open index.html in your preferred browser:

On most systems:
open index.html
Or manually open the file in a web browser.

## Folder Structure
currency-rate-client/
   ├── css/                   # Styling for the application
   │     └── styles.css       # Main CSS file
   ├── js/                    # JavaScript functionality
   │     ├── app.js           # Main application logic
   │     ├── services/        # Handles API communication
   │     └── components/      # Manages UI components (e.g., dropdowns, tables)
   ├── index.html             # Main HTML file
   └── README.md              # Project documentation


## Features Breakdown
Real-Time Exchange Rates:

Fetches live rates from the back-end API and populates dropdowns dynamically.
Currency Conversion:
Convert amounts between selected currencies with just one click.

Historical Rates:
Displays historical exchange rates for USD, ILS, GBP, and EUR for the past seven Mondays.


## Technologies Used
HTML: Structure of the web application.
CSS: Styling for a clean and professional UI.
JavaScript: Dynamic functionality and event handling.
jQuery: Simplifies AJAX requests and DOM manipulation.


## Example API Endpoints

Fetch Latest Rates:
GET /api/rates

Convert Currency:
POST /api/convert
Body:
{
  "amount": 100,
  "from": "USD",
  "to": "EUR"
}

Fetch Historical Rates:
GET /api/historical?base=USD
