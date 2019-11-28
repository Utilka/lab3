var item1 = document.querySelector("#item1");
var item2 = document.querySelector("#item2");
var item3 = document.querySelector("#item3");
var item4 = document.querySelector("#item4");
var item5 = document.querySelector("#item5");
var item6 = document.querySelector("#item6");
var item7 = document.querySelector("#item7");
var curent_item = item1;


var item_content1 = document.querySelector("#item_content1");
var item_content2 = document.querySelector("#item_content2");
var item_content3 = document.querySelector("#item_content3");
var item_content4 = document.querySelector("#item_content4");
var item_content5 = document.querySelector("#item_content5");
var item_content6 = document.querySelector("#item_content6");
var item_content7 = document.querySelector("#item_content7");
var curent_item_content = item_content1;

console.log(curent_item_content);


function change_page(to_what_item_change, to_what_item_content_change) {
    console.log(curent_item_content);
    console.log(curent_item);
    curent_item.classList.remove('active');
    to_what_item_change.classList.add('active');
    curent_item = to_what_item_change;
    curent_item_content.classList.remove('active');
    to_what_item_content_change.classList.add('active');
    curent_item_content = to_what_item_content_change;
    console.log(curent_item_content);
    console.log(curent_item);
}

item1.addEventListener("click", function() { change_page(item1, item_content1) });
item2.addEventListener("click", function() { change_page(item2, item_content2) });
item3.addEventListener("click", function() { change_page(item3, item_content3) });
item4.addEventListener("click", function() { change_page(item4, item_content4) });
item5.addEventListener("click", function() { change_page(item5, item_content5) });
item6.addEventListener("click", function() { change_page(item6, item_content6) });
item7.addEventListener("click", function() { change_page(item7, item_content7) });