
let ele_nav = document.querySelector('.hamburger-nav');
let ele_menu = document.querySelector('.mobile-menu');
let ele_main_page = document.querySelector('.wrapper');

function display() {
    ele_menu.style.display = 'flex';   
    ele_main_page.style.display='none';    
}

ele_nav.addEventListener('click',display);

let ele_portfolio = document.querySelector('.portfolio_item');

function click_portfolio() {
    ele_menu.style.display = 'none';
    ele_main_page.style.display='flex';
}

ele_portfolio.addEventListener('click',click_portfolio);

let ele_about = document.querySelector('.about_item');

function click_about() {
    ele_menu.style.display = 'none';
    ele_main_page.style.display='flex';
}

ele_about.addEventListener('click',click_about);


let ele_contact = document.querySelector('.contact_item');

function click_contact() {
    ele_menu.style.display = 'none';
    ele_main_page.style.display='flex';
}

ele_contact.addEventListener('click',click_contact);

let ele_close = document.querySelector('.close_item');

function click_close() {
    ele_menu.style.display = 'none';
    ele_main_page.style.display='flex';
}

ele_contact.addEventListener('click',click_close);
