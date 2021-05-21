import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

export function queryByCss(selector: string, de: DebugElement): DebugElement {
    return de.query(By.css(selector));
}

export function queryAllByCss(selector: string, de: DebugElement): DebugElement[] {
    return de.queryAll(By.css(selector));
}
