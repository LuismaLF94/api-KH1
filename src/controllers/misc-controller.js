export function pingController(req, res) {
    res.send('pong');
}

export function htmlController(req, res) {
  const html = [
    '<html><body>',
    '<h1>Hello World!</h1>',
    '</body></html>'
  ].join('\n');

  res.send(html);
}
