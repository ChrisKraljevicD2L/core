const puppeteer = require('puppeteer');
const VisualDiff = require('@brightspace-ui/visual-diff');

describe('d2l-list', function() {

	const visualDiff = new VisualDiff('list', __dirname);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.setViewport({width: 800, height: 800, deviceScaleFactor: 2});
		await page.goto(`${visualDiff.getBaseUrl()}/components/list/test/list.visual-diff.html`, {waitUntil: ['networkidle0', 'load']});
		await page.bringToFront();
	});

	after(() => browser.close());
	[842, 636, 580, 0].forEach(breakPoint => {
		describe(`List tests for breakpoint ${breakPoint}`, () => {
			[
				{ title: 'Basic list', fixture: `#list-bp${breakPoint}` }
			].forEach((testData) => {
				it(testData.title, async function() {
					const rect = await visualDiff.getRect(page, testData.fixture);
					await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
				});
			});
		});
	});

});
