declare global {
    function scanf(fmt: string, point: string): void
    function printf(format: string, ...a: Array<any>):boolean | void
    var scanfIterations: number
    var input: Array<string>
}

import {transformFileSync} from "@babel/core"
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

let filePath;
switch(action) {
    case "build":
        filePath = dryArgs[1];
        console.log(filePath)
        let out = argv["output"] ?? "./output__legacy.js"
        let res;
        try {
            res = transformFileSync(filePath);
        } catch (err) {
            console.log(err)
            exit(1)
        }
        fs.writeFileSync(out, res!.code!.replace(`"use strict";${EOL}`, ""))
        console.log(`Compilado para ES3: ${out}`)
        exit(0)
    case "run":
         filePath = dryArgs[1];
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
