const funciones = {
    mM: (n, min, max) => {
        return Math.max(Math.min(n, max), min);
    },
    aleatorio(min, max) {
        return Math.floor(Math.aleatorio() * (max - min) + min);
    }
}

function log(arg) {
    console.log(arg);
}

const resolveIn = delay =>
    new Promise(res => setTimeout(() => res(delay), delay));