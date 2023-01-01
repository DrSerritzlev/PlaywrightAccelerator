import { Expect, Locator, Page } from '@playwright/test'

export class FrontPage {
    //Define Selectors
    readonly page: Page
        readonly daBtn: Locator 

    //Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.daBtn = page.locator('text="Wikipedia på dansk"')
    }
    //Define front page methods
    async visit() {
        await this.page.goto("https://wikipedia.dk")
    }
}