function presses(phrase) {
  let buttons = new Proxy({
    '1|A|D|G|J|M|P|T|W| ': 1,
    'B|E|H|K|N|Q|U|X|0': 2,
    'C|F|I|L|O|R|V|Y': 3,
    'S|Z|2|3|4|5|6|8': 4,
    '7|9': 5,
  }, {
    get: function(target, property, receiver) {
        for (let k in target)
            if (new RegExp(k).test(property))
                return target[k]
        return null
    }
})
let buttonPresses = 0;
[...phrase.toUpperCase()].forEach(item => buttonPresses += buttons[item]);
return buttonPresses;
}
