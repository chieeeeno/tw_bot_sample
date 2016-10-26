var twitter = require('twitter');
var fs = require('fs');
var file = 'twitter.json';

// setup express server
var express = require("express");
var app = express();
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});




app.get("/search", function(req, res, next){
  console.log(req)
  var params = {q: '#エビシー #京都'};
  // searchTw(params).then(function(tweet){
  //   res.json(tweet);
  // })
});


var residenceArray = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "静岡県",
  "愛知県",
  "岐阜県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "愛媛県",
  "高知県",
  "香川県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県"
]



function searchTw(params){
  var tw = new twitter({
    consumer_key:        'iXCEG3aGFAms54KPr0OWLR1nw',
    consumer_secret:     'u7DiWZFXCZlLgDm08eWbBrqQmXaaM1fMkGkmUxR49K3HvA4dCH',
    access_token_key:    '2742348426-cqFfE4IrgzqnTmDQDMpwo4IV3FVNUfa2bW3vRf2',
    access_token_secret: 'n636muDrbksBAIrie2mK0eG3D4kYikdqa5Pj5PTlrY5AV',
  });

  var promise = new Promise(function(resolve, reject){
    // 非同期処理
    tw.get('search/tweets', params, function(error, tweets, response){
      if (error) {
        reject(error);
      }else{
        console.log(tweets.statuses.length);
        fs.writeFile(file, JSON.stringify(tweets), null, null);
        fs.readFile(file, 'utf8', function (err, tweets) {
          // console.log(tweets);
          resolve(tweets);
        });
      }
    });
  });
  return promise;

}
