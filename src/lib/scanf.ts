import { exit } from "process";
import fmt from "@paydirt/fmt";
const scanf = (formatters: string, ...points: string[]) => {
    formatters = formatters.replace(/\s/g, "");
    const splitFmt = formatters.split(/(%(?:\.\d+)?[fds])/).filter(Boolean);
    if (splitFmt.length !== points.length) {
        console.log("Erro do scanf (não há argumentos suficientes ou vice-versa)")
        exit(1)
    }

    for (let i = 0; i < points.length; i++) {
        const formatter = splitFmt[i]
        const point = points[i]
        if (global.scanfIterations >= global.input.length) {
            console.log("Erro do scanf (não há mais linhas para ler)")
            exit(1)
        }
        let v;
        let exp;
        switch (formatter) {
            case "%s":
                v = global.input[global.scanfIterations].replace(/(['"])/g, "\\$1");
                exp = String.raw`global['${point}']="${v}";`
                eval(exp)
                global.scanfIterations++
                continue
            case "%d":
                v = parseInt(global.input[global.scanfIterations])
                if (isNaN(v)) {
                    console.log("Argumento scanf inválido (NaN)")
                    exit(1)
                }
                exp = String.raw`global['${point}'] = ${global.input[global.scanfIterations]};`
                eval(exp)
                global.scanfIterations++
                continue
            default:
                if (formatter.includes("f")) {
                    v = parseFloat(global.input[global.scanfIterations])
                    if (isNaN(v)) {
                        console.log("Argumento scanf inválido (NaN)")
                        exit(1)
                    }
    
                    exp = String.raw`global['${point}'] = ${fmt.sprintf(formatter, v)};`
                    eval(exp)
                    global.scanfIterations++
                    continue
                }
                console.log("Argumento do scanf inválido");
                exit(1)
        }
    }
}
export { scanf }