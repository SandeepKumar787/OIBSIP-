function convertTemp(source) {
  let celsius, fahrenheit, kelvin;
  
  switch(source) {
      case 'celsius':
          celsius = parseFloat(document.getElementById('celsius').value);
          fahrenheit = (celsius * 9/5) + 32;
          kelvin = celsius + 273.15;
          break;
          
      case 'fahrenheit':
          fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
          celsius = (fahrenheit - 32) * 5/9;
          kelvin = celsius + 273.15;
          break;
          
      case 'kelvin':
          kelvin = parseFloat(document.getElementById('kelvin').value);
          celsius = kelvin - 273.15;
          fahrenheit = (celsius * 9/5) + 32;
          break;
          
      default:
          if (!document.getElementById(source).value) {
              document.getElementById('celsius').value = '';
              document.getElementById('fahrenheit').value = '';
              document.getElementById('kelvin').value = '';
              return;
          }
  }
  if (source !== 'celsius') {
      document.getElementById('celsius').value = celsius.toFixed(2);
  }
  if (source !== 'fahrenheit') {
      document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  }
  if (source !== 'kelvin') {
      document.getElementById('kelvin').value = kelvin.toFixed(2);
  }
}