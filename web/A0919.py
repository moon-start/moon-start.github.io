import  scrapy
print(scrapy.version_info)  ## 版本


class  Book(scrapy.Spider):
    #  每一個爬蟲的唯一名稱
    name = "books"

    # 定一爬取的起始點,起始點可以多個
    start_urls = ["http://books.toscrape.com/"]

    def  parse(self,response):

        # 提取數據
        # 每一本書的資訊在<article class="product_pod">
        # 使用css()方法找到所有這樣的article元素,並且代替

        # for  i  in  response.css("article.product_pod"):
        #     name  =  i.xpath("./3//@title").extract_first()
        #     prrr  =  i.css("p.price_color::text").extract_first()

        #     yield{
        #         "name":name,
        #         "price":prrr
        #     }  
        for book in response.css('article.product_pod'):
            name = book.xpath('./h3/a/@title').extract_first()
            price = book.css('p.price_color::text').extract_first()
            yield {
                'name': name,
                'price': price,
            }


        # # 提取link
        # # 下一頁的url在 ul.pager >  li.next  > a裡面

        # next_url  =  response.css("ul.pager li.next a::attr(href)").extract_first()

        # if  next_url:
        #     # 如果找到下一頁的url,得到絕對路徑,構成Doguests
        #     next_url  =  response.urljoin(next_url)
        #     yield scrapy.Request(next_url,callback=self.parse)
        
        next_url = response.css('ul.pager li.next a::attr(href)').extract_first()
        if next_url:
            # 如果找到下一页的 URL，得到绝对路径，构造新的 Request 对象
            next_url = response.urljoin(next_url)
            yield scrapy.Request(next_url, callback=self.parse)
        