export async function loadHomePage(page) {
    await page.goto('https://wikipedia.dk')
}

export async function search(page) {
    await page.type('')
}