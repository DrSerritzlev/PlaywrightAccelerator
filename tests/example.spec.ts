import { test, expect } from '@playwright/test'

import { loadHomePage } from '../helper'
import { FrontPage } from '../page-objects/FrontPage'

test.describe.parallel('My first test suite', () => {
    let frontPage: FrontPage

    test.beforeEach(async ({ page }) => {
    frontPage = new FrontPage(page)

    frontPage.visit()
})

test ("Clicking on Elements", async ({ page }) => {
    await page.click('text="Wikipedia på dansk"')
    
    const pageTitle = await page.locator('#firstHeading')
    await expect(pageTitle).toContainText('Forside')
})
})