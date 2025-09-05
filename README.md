# Mini JavaScript Projects

> This repository contains three interactive JavaScript mini-projects, each designed to teach and demonstrate core web development concepts: DOM manipulation, event handling, game logic, and UI design. All projects are self-contained and require only a web browser to run.

---

## Project Summary

| Project              | Description                   | Main Features                    | How to Run                             |
| -------------------- | ----------------------------- | -------------------------------- | -------------------------------------- |
| Tic Tac Toe          | Classic 2-player grid game    | Win/draw detection, modal, theme | Open `tic tac toe/index.html`          |
| Stone Paper Scissors | Play vs computer, animated UI | Score, images, random logic      | Open `Stone Paper Scissors/index.html` |
| Currency Converter   | Convert between currencies    | Instant conversion, clean UI     | Open `currency converter/index.html`   |

---

## 1. Tic Tac Toe

**Description:**
A modern, responsive version of the classic 3x3 grid game for two players (O and X). The game detects wins and draws, displays a modal message, and allows easy resets.

**Gameplay Instructions:**

- Click any empty cell to place your symbol (O starts first).
- Players alternate turns; the game automatically checks for a win or draw after each move.
- When a player wins or the game is drawn, a message appears. Click "New Game" or "RESET GAME" to play again.

**Features:**

- 3x3 grid, instant win/draw detection
- Modal message for results
- Reset and new game buttons
- Responsive design for mobile and desktop
- Accessible: keyboard focus styles, clear color contrast

**Customization:**

- Edit `styles.css` to change colors, layout, or add a dramatic theme (e.g., "hell" lava overlay)
- Tweak `script.js` to add features like score tracking, AI opponent, or sound effects

**Technologies Used:**

- HTML, CSS, JavaScript (no frameworks)

**Troubleshooting:**

- If symbols do not appear, check that `.box` elements exist in the HTML and that `script.js` is loaded.
- For best results, use a modern browser (Chrome, Edge, Firefox).

---

## 2. Stone Paper Scissors

**Description:**
Play the classic hand game against the computer. Choose stone, paper, or scissors and see who wins each round.

**Gameplay Instructions:**

- Select your move by clicking the corresponding button or image.
- The computer randomly selects its move.
- The result and score are displayed after each round.

**Features:**

- Animated UI with images for each move
- Score tracking
- Simple random logic for computer moves
- Quick restart option

**Customization:**

- Replace images in `images/` for custom graphics
- Edit `styles.css` for new color schemes or animations
- Extend `script.js` to add best-of-N matches or sound effects

**Technologies Used:**

- HTML, CSS, JavaScript

**Troubleshooting:**

- If images do not appear, check that `images/paper.png`, `images/rock.png`, and `images/scissors.png` exist and are referenced correctly in the HTML.

---

## 3. Currency Converter

**Description:**
A simple tool to convert amounts between different currencies. Enter an amount, select source and target currencies, and see the converted value instantly.

**Usage Instructions:**

- Enter the amount to convert.
- Select the source and target currencies from dropdowns.
- The converted value updates automatically.

**Features:**

- Instant conversion
- Clean, minimal UI
- Easy to extend for more currencies or live rates

**Customization:**

- Edit `codes.js` or `script.js` to add more currencies or fetch live rates from an API
- Change styles in `styles.css` for a new look

**Technologies Used:**

- HTML, CSS, JavaScript

**Troubleshooting:**

- If conversion does not work, check that the currency values and logic in the JS files are correct.

---

## Folder Structure

```
currency converter/
  codes.js
  index.html
  newscript.js
  script.js
  styles.css
Stone Paper Scissors/
  index.html
  script.js
  styles.css
  images/
    paper.png
    rock.png
    scissors.png
tic tac toe/
  index.html
  script.js
  styles.css
```

---

## Getting Started

- No build tools required; just open the HTML files in your browser.
- All styling and scripts are included locally.
- For best experience, use a modern browser.

## Customization & Extensibility

- All CSS and JS files are commented for easy understanding and modification.
- You can add new features, improve UI, or connect to APIs as you learn.

## Browser Compatibility

- Works on Chrome, Edge, Firefox, and most modern browsers.
- Mobile-friendly layouts included.

## License

This codebase is for educational and personal use. Feel free to modify, extend, and share.

This repository contains three beginner-to-intermediate JavaScript projects, each with its own UI and interactive features. These projects are ideal for learning DOM manipulation, event handling, and basic game/app logic.

## Projects Overview

### 1. Tic Tac Toe

A classic two-player game with a modern UI. Features:

- 3x3 grid, click to play as O or X
- Winner and draw detection
- Reset and new game buttons
- Modal message for game result
- Responsive design
- Easy to customize theme in `styles.css`

**How to run:**

- Open `tic tac toe/index.html` in your browser.

### 2. Stone Paper Scissors

A simple implementation of the popular hand game:

- Play against the computer
- Select stone, paper, or scissors
- See result and score
- Animated UI and images

**How to run:**

- Open `Stone Paper Scissors/index.html` in your browser.

### 3. Currency Converter

A basic currency conversion tool:

- Input amount and select currencies
- See converted value instantly
- Simple, clean UI

**How to run:**

- Open `currency converter/index.html` in your browser.

## Folder Structure

```
currency converter/
  codes.js
  index.html
  newscript.js
  script.js
  styles.css
Stone Paper Scissors/
  index.html
  script.js
  styles.css
  images/
    paper.png
    rock.png
    scissors.png
tic tac toe/
  index.html
  script.js
  styles.css
```

## Getting Started

- No build tools required; just open the HTML files in your browser.
- All styling and scripts are included locally.

## Customization

- You can edit the CSS files to change themes and colors.
- JS files are commented for easy understanding and modification.

## License

This codebase is for educational and personal use. Feel free to modify and share.
