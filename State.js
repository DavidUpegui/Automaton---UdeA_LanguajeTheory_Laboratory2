class State {
    _message;
    _func;
    _type;

    /**
     * 
     * @param {String} message The legend of the state 
     * @param {String} type Use INITIAL for the inital state, ACCEPTABLE for any acceptable state and NORMAL for any other  
     */
    constructor(message = '', type = false) {
        this._type = type
        this._message = message
    }
    /**
     * @param {Function} func function of the state. Need to return the next state depending of the variable passing through it
     */
    set func(func) {
        this._func = func
    }
    get func() {
        return this._func
    }
    get message() {
        return this._message
    }
    get type() {
        return this._type
    }
}

module.exports.State = State









// const state0 = new State('Unos pares', 'NORMAL')
// const state1 = new State('Unos impares', 'ACCEPTABLE')
// const state2 = new State('Ceros pares', 'ACCEPTABLE')
// const state3 = new State('Ceros impares', 'NORMAL')

// state0.func = (v) => {
//     return v === '1' ? state1 : state3
// }
// state1.func = (v) => {
//     return v === '1' ? state0 : state3
// }
// state2.func = (v) => {
//     return v === '1' ? state0 : state3
// }
// state3.func = (v) => {
//     return v === '1' ? state1 : state2
// }


// function automata(str) {
//     let currentState = state0
//     let global;
//     for (i = 0; i < str.length; i++) {
//         global = false
//         console.log(str[i])
//         currentState = currentState.func(str[i])
//         if (currentState.type === 'ACCEPTABLE') { 
//             console.log('Es aceptable con el valor', currentState.message)
//             global = true 
//         }
//     }
//     console.log(global)
// }

// automata('0001111100')