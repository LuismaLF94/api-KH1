export function pingController(req, res) {
    res.send('pong');
};

export function numeroAleatorioController(req, res) {
    const numeroAleatorio = Math.floor(Math.random() * 1000000);
    res.send(numeroAleatorio.toString());
};

function countBits(n) {
    const binaryStr = n.toString(2);
    let count = 0;
    for (let i = 0; i < binaryStr.length; i += 1) {
      if (binaryStr[i] === '1') {
        count += 1;
      }
    }
    return count;
  };

  export function countBitsController(req, res) {
    const { number } = req.params;
    const parsedNumber = parseInt(number);
    if (isNaN(parsedNumber)) {
      res.status(400).send('El parámetro proporcionado no es un número válido.');
      return;
    }
    const result = countBits(parsedNumber);
    res.send(`El número de bits establecidos en ${parsedNumber} es: ${result}`);
  };

  function digitalRoot(n) {
    function sumaDigitos(num) {
        let strNum = num.toString();
        let suma = 0;

        for (let i = 0; i < strNum.length; i++) {
            suma += parseInt(strNum[i]);
        }

        if (suma >= 10) {
            return sumaDigitos(suma);
        } else {
            return suma;
        }
    }

    return sumaDigitos(n);
};

export function digitalRootController(req, res) {
  const { number } = req.params;
  const n = parseInt(number);

  if (isNaN(n) || n < 0) {
      res.status(400).send('Invalid input. Please provide a non-negative integer.');
      return;
  }

  const root = digitalRoot(n);
  res.send(root.toString());
};

function dnaStrand(dna) {
  const complementos = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
  };
  const dnaMayusculas = dna.toUpperCase();
  const complemento = dnaMayusculas.split('').map(nucleotido => complementos[nucleotido]).join('');
  return complemento;
};

export function dnaController(req, res) {
  const dna = req.query.dna;
  const complemento = dnaStrand(dna);
  res.send(complemento);
};

export function findOdd(arr) {
  let frequency = {};

  for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num in frequency) {
      if (frequency[num] % 2 !== 0) {
          return parseInt(num);
      }
  }
};


export function findOddController(req, res) {
  const numbers = req.params.numbers.split(',').map(Number);
  if (!Array.isArray(numbers) || numbers.length === 0) {
      return res.status(400).json({ error: 'Missing array parameter.' });
  }
  const result = findOdd(numbers);
  res.json({ oddNumber: result });
};

function digPow(n, p){
  let digits = n.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(parseInt(digits[i]), p + i);
  }

  if (sum % n === 0) {
      return sum / n;
  } else {
      return -1;
  }
};

export function digPowController(req, res) {
  const { n, p } = req.query;

  if (!n || !p) {
      return res.status(400).json({ error: 'Missing parameters. Please provide both n and p.' });
  }

  const result = digPow(parseInt(n), parseInt(p));
  res.json({ result });
};

