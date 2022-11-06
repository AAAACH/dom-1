const div = dom.find('#test>.red')[0]
dom.style(test, 'color', 'red')
const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))