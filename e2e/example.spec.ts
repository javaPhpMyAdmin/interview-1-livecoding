import { test, expect } from "@playwright/test"

const LOCALHOST_URL = 'http://localhost:5173'

test('app shows random fact ', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')

  const textContent = await text.textContent()

  expect(textContent?.length).toBeGreaterThan(0)
})

test('app shows random image ', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const image = page.getByRole('img')

  const imageSrc = await image.getAttribute('src')

  expect(imageSrc?.startsWith('https://cdn2.thecatapi')).toBeTruthy()
})

