import toDecimal  from "./romans/romanConverter";
import prompt from "prompt-sync";

const main = () => {
    const myPrompt = prompt();
    let stdout: string = "" ;
    stdout = myPrompt("Hello, please write a roman number or STOP: ");
    while(stdout.toLowerCase() !== "stop"){
        let result = toDecimal(stdout);
        console.log("The number is ", result );
        stdout = myPrompt("Anthoer roman to convert? Or try STOP: ");
    }
}

main();