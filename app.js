var request = require('request');
var cheerio = require('cheerio');

request('https://twitter.com/suJJJan',(err,resp,body)=>{

    const $ = cheerio.load(body);
    $('p.TweetTextSize').each((index,item)=>{
        console.log(item.children[0].data);
        console.log("===========================================================================================================================================================================================================");
})
}   
)
