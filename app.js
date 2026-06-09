
const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #f4f4f4;
        }

        .calculator {
            width: 320px;
            background: #222;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }

        #display {
            width: 100%;
            height: 70px;
            border: none;
            outline: none;
            border-radius: 12px;
            margin-bottom: 15px;
            font-size: 30px;
            text-align: right;
            padding: 15px;
            background: #fff;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            height: 65px;
            border: none;
            border-radius: 12px;
            font-size: 24px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            transform: scale(1.05);
        }

        .number {
            background: #444;
            color: white;
        }

        .operator {
            background: orange;
            color: white;
        }

        .clear {
            background: red;
            color: white;
        }

        .equal {
            background: green;
            color: white;
        }
    </style>
</head>
<body>

    <div class="calculator">
        <input type="text" id="display" disabled>

        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="operator" onclick="appendValue('/')">/</button>
            <button class="operator" onclick="appendValue('*')">*</button>
            <button class="operator" onclick="appendValue('-')">-</button>

            <button class="number" onclick="appendValue('7')">7</button>
            <button class="number" onclick="appendValue('8')">8</button>
            <button class="number" onclick="appendValue('9')">9</button>
            <button class="operator" onclick="appendValue('+')">+</button>

            <button class="number" onclick="appendValue('4')">4</button>
            <button class="number" onclick="appendValue('5')">5</button>
            <button class="number" onclick="appendValue('6')">6</button>
            <button class="equal" onclick="calculate()">=</button>

            <button class="number" onclick="appendValue('1')">1</button>
            <button class="number" onclick="appendValue('2')">2</button>
            <button class="number" onclick="appendValue('3')">3</button>
            <button class="number" onclick="appendValue('0')">0</button>

            <button class="number" onclick="appendValue('.')">.</button>
        </div>
    </div>

    <script>
        let display = document.getElementById("display");

        function appendValue(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
    </script>

</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}).listen(3000, () => {
    console.log('Server running on port 3000');
});

