function route(pathname, handle, response,productId) {
  console.log("pathname : " + pathname);

  if (typeof handle[pathname] == "function") {
    //타입이 function이라면 정상적 실행
    handle[pathname](response, productId);
  } else {
    //없는 경로를 찾는다면 404 페이지 실행
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }
}

exports.route = route;
