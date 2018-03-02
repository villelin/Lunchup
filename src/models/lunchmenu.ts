import {LunchItem} from "./lunchitem";

export class LunchMenu {
    constructor(public name: string,
                public address: string,
                public items: LunchItem[],
                public location: any,
                public favourite: boolean = false) {
    }
}