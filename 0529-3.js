const $popup = document.querySelector('#popup');
$popup.children[1].addEventListener("click",dat);

const aaaa = document.querySelector('footer');
aaaa.addEventListener("click",dd);

//첫번째 방법 const red12 = document.querySelector('nav li:first-child a:last-child');///////////////////////////////////

//두번째 방법//
const ob = document.querySelector('#blue');
ob.addEventListener("click",ns)

//id="log" onclick="tr()"
const log1 = document.querySelector('#log');



function dat()
{
    $popup.style.display = 'none';
}
function dd()
{
    $popup.style.display = 'block';
}
function red()
{
    
 // 첫번째 방법  red12.style.background='red';  //////////////////////////////////////

    document.querySelector('nav>ul>li:nth-child(1) .subMenu a:nth-child(2)').style.background = 'blue';
}
function ns()
{
    ob.style.background = 'blue';
}
function sss()
{
    document.querySelector('nav>ul>li:nth-child(4) .subMenu a:nth-child(1)').style.color = 'blue';
}
function tr()
{
    log1.style.background ='red';
    log1.style.textDecoration = 'none'; // 이건 -가 안되고 대문자를 표시 ex) text-decoration이면 -가 안되서 -앞에 d를 D로 하면 된다

}
   $popup.addEventListener("click", bz);
function bz()
{
    $popup.style.background = 'skyblue';
}

//alert( $button);
