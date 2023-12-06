
// mejorar
export const mergeArray = (a: any[], b: any[], clave: string) => {
    const seen = new Set();
    return [...a, ...b].filter((item) => {
        const valor = item[clave];
        if (!seen.has(valor)) {
            seen.add(valor);
            return true;
        }
        return false;
    });
}