var inject_num = 0;var temp = document.getElementsByClassName("style-scope ytd-comment-renderer");for(var i = 0; i < temp.length ; i++){if(temp[i].innerHTML.indexOf("good")>4 || temp[i].innerHTML.indexOf("best")>4 || temp[i].innerHTML.indexOf("well")>4 || temp[i].innerHTML.indexOf("epic")>4 || temp[i].innerHTML.indexOf("great") >4 || temp[i].innerHTML.indexOf("interest") >4 ||  temp[i].innerHTML.indexOf("amaz") >4 || temp[i].innerHTML.indexOf("ncredible") >4 || temp[i].innerHTML.indexOf("antastic") >4 || temp[i].innerHTML.indexOf("egend") >4 || temp[i].innerHTML.indexOf("three body") >4 || temp[i].innerHTML.indexOf("forward") >4 || temp[i].innerHTML.indexOf("onderful") >4 ){inject_num++;continue;}} inject_num = inject_num/2;console.log(inject_num);
//英文好评数量
var inject_num = 0;var temp = document.getElementsByClassName("style-scope ytd-comment-renderer");for(var i = 0; i < temp.length ; i++){if(temp[i].innerHTML.indexOf("，")>1 || temp[i].innerHTML.indexOf("。")>1 || temp[i].innerHTML.indexOf("！")>1 || temp[i].innerHTML.indexOf("：")>1 ||  temp[i].innerHTML.indexOf("？")>1 ||  temp[i].innerHTML.indexOf("（")>1 ){inject_num++;continue;}} inject_num = inject_num/2;console.log(inject_num);
//中文评论数量
var inject_num = 0;var temp = document.getElementsByClassName("style-scope ytd-button-renderer style-text size-default");for(var i = 0; i < temp.length ; i++){if(1 == 1){inject_num++;continue;}} inject_num = inject_num/2;console.log(inject_num);
//不折叠评论总量

var inject_num = 0;
var temp = document.getElementsByClassName("style-scope ytd-comment-renderer");
for(var i = 0; i < temp.length ; i++)
{ 
for(var j = 0; j < word_corpus.length; j++)
{
{if(temp[i].innerHTML.indexOf(word_corpus[j]) > 1)
{inject_num++;continue;}
}
} 
inject_num = inject_num/2;console.log(inject_num);

//实际上原理就是选择所有class为评论区的元素
//利用正面词汇语料库word_corpus来匹配innerHTML中符合条件的元素
//除以2是因为元素包含导致的重复计算
//放在浏览器地址栏中，输入javascript: (代码)就能使用了，按F12查看控制台可以得知结果。
//非常弱智的
//懒的写python
