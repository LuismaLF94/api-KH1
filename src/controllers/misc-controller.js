export function pingController(req, res) {
    res.send('pong');
}

export function numeroAleatorioController(req, res) {
    const numeroAleatorio = Math.floor(Math.random() * 1000000);
    res.send(numeroAleatorio.toString());
}

function countBits(n) {
    const binaryStr = n.toString(2);
    let count = 0;
    for (let i = 0; i < binaryStr.length; i += 1) {
      if (binaryStr[i] === '1') {
        count += 1;
      }
    }
    return count;
  }

  export function countBitsController(req, res) {
    const { number } = req.params;
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber)) {
      res.status(400).send('El parámetro proporcionado no es un número válido.');
      return;
    }
    const result = countBits(parsedNumber);
    res.send(`El número de bits establecidos en ${parsedNumber} es: ${result}`);
  }