var products = [
  {"filterCode": "flowerpot", "code": "花盆-001", "name": "玫瑰花盆", "img": "https://gitee.com/revertXc/revertXc/raw/master/images/a/1.jpg"},
  {"filterCode": "flowerpot", "code": "花盆-002", "name": "花盆", "img": "https://gitee.com/revertXc/revertXc/raw/master/images/a/2.jpg"},
  {"filterCode": "flowerpot", "code": "花盆-003", "name": "石榴", "img": "https://gitee.com/revertXc/revertXc/raw/master/images/a/3.jpg"},
]



$(document).ready(function(){
  var template = "<div class='iso-box #filterCode col-md-4 col-sm-6'>" +
                    "<div class='portfolio-thumb'>" +
                      "<img src='#img' class='img-responsive index-img-product' alt='#name'>" +
                      "<div class='portfolio-overlay'>" +
                        "<div class='portfolio-item'>" +
                          "<a href='single-project.html'><i class='fa fa-link'></i></a>" +
                          "<h2>#name</h2>" +
                        "</div>" +
                      "</div>" +
                      "<div class='index-code'>编号：#code</div>" +
                    "</div>" +
                  "</div>"

  var body = $("#productContent")
  products.forEach(item => {
    var tmpVal = template.replace("#filterCode", item.filterCode)
                          .replace("#img", item.img)
                          .replace("#name", item.name)
                          .replace("#code", item.code)
    body.append(tmpVal)
  })
                  
});