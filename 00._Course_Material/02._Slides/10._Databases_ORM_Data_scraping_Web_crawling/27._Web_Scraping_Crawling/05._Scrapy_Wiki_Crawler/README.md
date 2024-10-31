# Wikipedia Spider

Inspired by this:
https://www.proxiesapi.com/blog/how-to-scrape-wikipedia-using-python-scrapy.html.php

Generate a new Scrapy project:

```bash
$ scrapy startproject wikicrawler
$ cd wikicrawler
```


## Method 1: Create a spider

Inside of the wikicrawler folder:

```bash
$ scrapy genspider WikiPageSpider https://en.wikipedia.org/wiki/List_of_common_misconceptions
```

Update the file /wikicrawler/wikicrawler/spiders/WikiPageSpider.py with the following code:

```python
import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

class WikipageSpider(CrawlSpider):
    name = 'WikiPageSpider'
    allowed_domains = ['en.wikipedia.org']
    start_urls = ['https://en.wikipedia.org/wiki/List_of_common_misconceptions']

    rules = (
        Rule(LinkExtractor(allow=r'/wiki/'), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        yield {
            'url': response.url,
            'title': response.css('h1::text').get(),
            'content': response.css('p::text').getall()
        }
```

Run spider and output content:
```bash
$ scrapy crawl WikiPageSpider -o output.json
```

## Method 2: Use the shell

Interact via shell:

```bash
$ scrapy shell https://en.wikipedia.org/wiki/List_of_common_misconceptions
```

To see response in the shell:
```bash
> response 
```

To get the title:

```bash
> response.css('h1').get()
```


To get the text content add ::text at the end of the selector:
```bash
> response.css('h1 > span ::text').get()
```