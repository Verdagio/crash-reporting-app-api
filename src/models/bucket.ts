import { CrashItem } from "./crashItem";

export class Bucket{
    public name: string;
    public items: CrashItem[];


    constructor(name: string, items: CrashItem[]){
        this.name = name;
        this.items = items;
    }
}