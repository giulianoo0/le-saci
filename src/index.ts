declare global {
    function scanf(fmt: string, point: string): void
    function printf(format: string, ...a: Array<any>):boolean | void
    var scanfIterations: number
    var input: Array<string>
}

import minimist from "minimist";
import { EOL } from "os";
import { exit } from "process";
import { scanf } from "./lib/scanf"
import fs from "fs"
import {printf} from "@paydirt/fmt"
global.scanf = scanf;
global.printf = printf
global.scanfIterations = 0;
const argv = minimist(process.argv.slice(2));

const dryArgs = argv["_"]
const action: "run" | "build" | undefined  = dryArgs[0] === "run" ? "run" : dryArgs[0] === "build" ? "build" : undefined

switch(action) {
    case "build":
        console.log("Em desenvolvimento")
        exit(0)
    case "run":
        const filePath = dryArgs[1];
        try {
            global.input = fs.readFileSync((argv.input), 'utf-8').toString().split(EOL);
        } catch (err) {
            console.log("Entrada inválida")
            exit(1)
        }
        
        fs.readFile(filePath, (err, data) => {
            if (err !== null) {
                console.log("Arquivo inválido")
                exit(1)
            }
            eval(data.toString("utf-8").replace(/var/g, "global."))
        })
        break;
    default:
        console.log("Ação inválida. Esta deve ser 'run' ou 'build'")
        exit(1)
}
