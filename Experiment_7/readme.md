### Here is the 7th Experiment of Skill Development Lab:

## Here is the question :

#### Maintaining the transactional history of any user is very important. Explore the various session tracking mechanism (Cookies, HTTP Session)

# Session Tracking Using Cookies

This project demonstrates how to use cookies to track session data and display it dynamically in a simple HTML page. Users can simulate adding transactions and view the transaction history stored in cookies.

## Features

- **Add Transaction**: Simulates adding a new transaction and stores it in a cookie.
- **Show Cookies**: Displays all cookies for the current domain in an alert box.

## How It Works

1. **Set Cookie**:
   - Uses JavaScript to store transaction history in the `transactionHistory` cookie.
   - The cookie is set with an expiration period of 7 days.

2. **Get Cookie**:
   - Retrieves the `transactionHistory` cookie and parses it to display the transaction history.

3. **Display Cookies**:
   - Fetches all cookies for the current domain and shows them in an alert box.

## Code Overview

- **HTML Structure**:
  - A title and two buttons for user interaction: "Add Transaction" and "Show Cookies."
  - A paragraph element to display transaction history.

- **JavaScript Functions**:
  - `setCookie(name, value, days)`: Sets a cookie with the given name, value, and expiration period.
  - `getCookie(name)`: Fetches the value of a specified cookie.
  - `trackTransaction()`: Adds a new transaction to the cookie and updates the display.
  - `showCookies()`: Alerts all cookies for the current domain.

## Usage

1. Open the `index.html` file in a browser.
2. Click **Add Transaction** to simulate a new transaction.
3. View the transaction history under the **History** section.
4. Click **Show Cookies** to see the current cookies in an alert box.

## Example

- After clicking **Add Transaction** multiple times, the **History** section will display:

### History: Transaction 1, Transaction 2, Transaction 3

```markdown
Clicking **Show Cookies** will show:
```

### transactionHistory=[...]; other_cookie=value; ...

```markdown

## Requirements

- Any modern web browser (e.g., Chrome, Firefox, Edge).
- No additional software or libraries are required.

## File Structure
```

### project/ 

│ ├── index.html # Main HTML file containing the session tracking code 

└── README.md # Documentation file (this file)

└── output.png #output of the experiment

## Notes

- This example is for demonstration purposes and is not intended for production use without proper security measures.
- Be cautious when working with cookies, as they can expose sensitive information.


## Contribution:
Feel free to fork the repository and submit pull requests for improvements, bug fixes, or feature additions.

## License:
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact:
Gmail: pavansai87654321@gmail.com