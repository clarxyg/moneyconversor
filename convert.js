var valueInDolarText = prompt("Qual o valor em dólar que você quer converter?")

var valueInDolarNumber = parseFloat(valueInDolarText)

var valueInReal = valueInDolarNumber * 5.51 
var real = "R$"
var toFixed = valueInReal.toFixed(2)

alert(real + toFixed)
