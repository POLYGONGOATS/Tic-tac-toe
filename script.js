body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 5px;
    margin: 20px auto;
}

.cell {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cell:hover {
    background-color: #f0f0f0;
}

#message {
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    transition: transform 0.3s, opacity 0.3s;
}

.hidden {
    opacity: 0;
}

.visible {
    opacity: 1;
    transform: scale(1.2);
}

.hidden-message {
    display: none;
}

.visible-message {
    display: block;
}

