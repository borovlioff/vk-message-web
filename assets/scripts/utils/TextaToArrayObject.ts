export default function ({text,splitSymbol,keys}:{text:string, splitSymbol:string, keys:string[]}){
    let arrayObj = []
    if (text.indexOf('\n') == -1) {
            let line = text;
            let ArrayValue = line.split(splitSymbol);
            let obj = creatObj(keys, ArrayValue);
            arrayObj.push(obj);
        }
        else {
            let lines = text.split('\n');
            arrayObj = lines.map((line)=>{
                let ArrayValue = line.split(':');
                return creatObj(keys, ArrayValue);
            })
        }
        return arrayObj;;
}

function creatObj(keys:string[], values:any){
    let obj : Record<string, any> = {};
    for(let indexKey = 0; indexKey < keys.length; indexKey++){
        let key = keys[indexKey];
        obj[`${key}`] = values[indexKey]? values[indexKey]: undefined;
    }
    return obj;
}