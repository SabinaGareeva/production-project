type Mods=Record<string,boolean|string>
const obj:Mods={

}
export function classNames(cls: string, mods:Mods, additional: string[]): string {
    return [cls,...additional,...Object.entries(mods).filter(([classNames,value])=>Boolean(value)).map(([classNames,value])=>classNames)].join(' ')
}
