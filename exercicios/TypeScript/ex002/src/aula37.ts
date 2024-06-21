console.clear()

class global {
    static test=0
    constructor(v: number){
        global.test=v
    }
}

export {global}