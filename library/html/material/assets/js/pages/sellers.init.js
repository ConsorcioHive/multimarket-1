function getChartColorsArray(e){if(null!==document.getElementById(e)){var t=document.getElementById(e).getAttribute("data-colors");if(t)return(t=JSON.parse(t)).map(function(e){var t=e.replace(" ","");return-1===t.indexOf(",")?getComputedStyle(document.documentElement).getPropertyValue(t)||t:2==(e=e.split(",")).length?"rgba("+getComputedStyle(document.documentElement).getPropertyValue(e[0])+","+e[1]+")":t});console.warn("data-colors Attribute not found on:",e)}}function loadCharts(){var e=getChartColorsArray("chart-seller1"),e=(e&&(e={series:[{data:[12,14,2,47,42,15,47,75,65,19,14]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller1"),e).render()),getChartColorsArray("chart-seller2")),e=(e&&(e={series:[{data:[12,14,2,47,42,15,35,75,20,67,89]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller2"),e).render()),getChartColorsArray("chart-seller3")),e=(e&&(e={series:[{data:[45,20,8,42,30,5,35,79,22,54,64]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller3"),e).render()),getChartColorsArray("chart-seller4")),e=(e&&(e={series:[{data:[26,15,48,12,47,19,35,19,85,68,50]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller4"),e).render()),getChartColorsArray("chart-seller5")),e=(e&&(e={series:[{data:[60,67,12,49,6,78,63,51,33,8,16]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller5"),e).render()),getChartColorsArray("chart-seller6")),e=(e&&(e={series:[{data:[78,63,51,33,8,16,60,67,12,49]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller6"),e).render()),getChartColorsArray("chart-seller7")),e=(e&&(e={series:[{data:[15,35,75,20,67,8,42,30,5,35]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller7"),e).render()),getChartColorsArray("chart-seller8"));e&&(e={series:[{data:[45,32,68,55,36,10,48,25,74,54]}],chart:{type:"area",height:50,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[20,100,100,100]}},stroke:{curve:"smooth",width:2},colors:e,tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},new ApexCharts(document.querySelector("#chart-seller8"),e).render())}var url="http://localhost/multimarket/library/html/material/assets/json/",sellerListData="",editList=!1,prevButton=document.getElementById("page-prev"),nextButton=document.getElementById("page-next"),currentPage=1,itemsPerPage=8,getJSON=function(e,t){var r=new XMLHttpRequest;r.open("GET",url+e,!0),r.responseType="json",r.onload=function(){var e=r.status;t(200===e?null:e,r.response)},r.send()};function loadSellerList(e,t){var r=Math.ceil(e.length/itemsPerPage);r<(t=t<1?1:t)&&(t=r),document.getElementById("seller-list").innerHTML="";for(var a,s=(t-1)*itemsPerPage;s<t*itemsPerPage&&s<e.length;s++)e[s]&&(a=e[s].trending?'<div class="ribbon ribbon-info ribbon-shape trending-ribbon"><i class="ri-flashlight-fill text-white align-bottom"></i> <span class="trending-ribbon-text">Trending</span></div>':"",document.getElementById("seller-list").innerHTML+='<div class="col-xl-3 col-lg-6">        <div class="card ribbon-box right overflow-hidden">            <div class="card-body text-center p-4">                '+a+'                <img src="'+e[s].shop[0].img+'" alt="'+e[s].shop[0].img_alt+'" height="45">                <h5 class="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" class="link-primary">'+e[s].shop[0].name+'</a></h5>                <p class="text-muted mb-4">'+e[s].seller+'</p>                <div class="row justify-content-center">                    <div class="col-lg-8">                        <div id="chart-seller'+e[s].id+'" data-colors=\'["'+e[s].chartColor+'"]\'  dir="ltr"></div>                    </div>                </div>                <div class="row mt-4">                    <div class="col-lg-6 border-end-dashed border-end">                        <h5>'+e[s].stock+'</h5>                        <span class="text-muted">Item Stock</span>                    </div>                    <div class="col-lg-6">                        <h5>'+e[s].wallet_balance+'</h5>                        <span class="text-muted">Wallet Balance</span>                    </div>                </div>                <div class="mt-4">                    <a href="apps-ecommerce-seller-details.html" class="btn btn-light w-100">View Details</a>                </div>            </div>        </div>    </div>');paginationEvents(),pageEvent(e),selectedPage(),1==currentPage?prevButton.parentNode.classList.add("disabled"):prevButton.parentNode.classList.remove("disabled"),currentPage==r?nextButton.parentNode.classList.add("disabled"):nextButton.parentNode.classList.remove("disabled"),loadCharts()}function fetchIdFromObj(e){return parseInt(e.id)}function findNextId(){var e,t;return 0===sellerListData.length?0:(e=fetchIdFromObj(sellerListData[sellerListData.length-1]))<=(t=fetchIdFromObj(sellerListData[0]))?t+1:e+1}function sortElementsById(){loadSellerList(sellerListData.sort(function(e,t){e=fetchIdFromObj(e),t=fetchIdFromObj(t);return t<e?-1:e<t?1:0}),currentPage)}function selectedPage(){for(var e=document.getElementById("page-num").getElementsByClassName("clickPageNumber"),t=0;t<e.length;t++)t==currentPage-1?e[t].parentNode.classList.add("active"):e[t].parentNode.classList.remove("active")}function paginationEvents(){function e(){return Math.ceil(sellerListData.length/itemsPerPage)}prevButton.addEventListener("click",function(){1<currentPage&&loadSellerList(sellerListData,--currentPage)}),nextButton.addEventListener("click",function(){currentPage<e()&&loadSellerList(sellerListData,++currentPage)});var t=document.getElementById("page-num");t.innerHTML="";for(var r=1;r<e()+1;r++)t.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+r+"</a></div>";document.addEventListener("click",function(e){"A"==e.target.nodeName&&e.target.classList.contains("clickPageNumber")&&(currentPage=e.target.textContent,loadSellerList(sellerListData,currentPage))}),selectedPage()}function pageEvent(e){0==e.length?(document.getElementById("pagination-element").style.display="none",document.getElementById("noresult").classList.remove("d-none")):(document.getElementById("pagination-element").style.display="flex",document.getElementById("noresult").classList.add("d-none"));for(var t=document.getElementById("page-num"),r=(t.innerHTML="",Math.ceil(e.length/itemsPerPage)),a=1;a<r+1;a++)t.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+a+"</a></div>"}getJSON("seller-list.json",function(e,t){null!==e?console.log("Something went wrong: "+e):(loadSellerList(sellerListData=t,currentPage),sortElementsById())});var searchResultList=document.getElementById("searchResultList"),categoryInput=(searchResultList.addEventListener("keyup",function(){var t,e=searchResultList.value.toLowerCase();t=e,loadSellerList(sellerListData.filter(function(e){return-1!==e.shop[0].name.toLowerCase().indexOf(t.toLowerCase())||-1!==e.seller.toLowerCase().indexOf(t.toLowerCase())}),currentPage)}),new Choices(document.getElementById("category-select"),{searchEnabled:!1}));categoryInput.passedElement.element.addEventListener("change",function(e){var t=e.detail.value;loadSellerList("All"!=e.detail.value?sellerListData.filter(e=>e.category==t):sellerListData,currentPage)},!1);