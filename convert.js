var valueInDolarText = prompt("Qual o valor em dólar que você quer converter?")

var valueInDolarNumber = parseInt(valueInDolarText)

var valueInReal = valueInDolarNumber * 5.51 
var real = "R$"

alert(real + valueInReal)