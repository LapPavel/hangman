const gallows = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
gallows.setAttribute('width', '180');
gallows.setAttribute('height', '250');

gallows.innerHTML = `
<line x1="60" y1="20" x2="140" y2="20" style="stroke:#000; stroke-width:2"></line>
<line x1="140" y1="20" x2="140" y2="50" style="stroke:#000; stroke-width:2"></line>
<line x1="60" y1="20" x2="60" y2="230" style="stroke:#000; stroke-width:2"></line>
<line x1="20" y1="230" x2="100" y2="230" style="stroke:#000; stroke-width:2"></line>
`

export default gallows;
