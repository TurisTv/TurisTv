//PlayerJs
//vnd.apple.mpegurl
    var player = new Playerjs({
      id: "player",
      file: [
        {
          title: "Atv",
          poster: "",
          type: "application/vnd.apple.mpegurl",
          file: "https://ecanlitv3.etvserver.com/atv.m3u8?tkn=BqtS_ptPfeICqdVxrp6sWA&tms=1700584216"
        },
        {
          title: "Turis",
          poster: "",
          type: "application/dash+xml",
          file: "https://dogus-live.daioncdn.net/startv/startv.m3u8"
        },
        {
          title: "Show",
          poster: "",
          type: "application/dash+xml",
          file: "https://ciner-live.daioncdn.net/showtv/showtv.m3u8"
        }, 
          {
          title: "Trt 1",
          poster: "",
          type: "application/dash+xml",
          file: "https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8"
        } 
      ]
    });