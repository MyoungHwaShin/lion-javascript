//라이브서버의 문법 (문서 검색 후 확인 해서 사용 가능)
const liveServer = require('live-server');


const params = {
  port:5500,
  host:'localhost',
  root:'./client',
  open:false
  
}

liveServer.start(params);

