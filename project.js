let Lorem_Ipsum_str=`Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and 
    scrambled it to make a type specimen book. It
    has survived not only five centuries, but
    also the leap into electronic typesetting, 
    remaining essent`;

let daily_selection_str="A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard";


let intro_obj = 
{
    name: 'intro',
    title_desktop: 'Keeping track of hundreds  of components website',    
    title_mobile: 'Multi Post Stories',
    description: Lorem_Ipsum_str,        
    featured: 'feature-2',
    image: './images/Snapshoot_Portfolio_big.png',
    technologies: [ 'css','html','bootstrap','Ruby','Ruby on rails'],
    link_to_live_version: 'https://edahigure.github.io/Portfolio-setup-and-mobile-first/',
    link_to_source: 'https://github.com/edahigure/Portfolio-setup-and-mobile-first',
    title_post: 'Multi Post Stories'
}



let project_array = [
    

     {
        name: 'card-0',
        title_desktop: 'Profesional Printing',
        title_mobile: 'Profesional Printing',
        description: Lorem_Ipsum_str,        
        featured: 'feature-2',
        image: './images/card-0-back.png',
        technologies: [ 'css','html','bootstrap','Ruby'],
        link_to_live_version: '#',
        link_to_source: '#',
        
     },
     {
        name: 'card-1',
        title_desktop: 'Keeping track of hundreds  of components website',
        title_mobile: 'Multi Post Stories',
        description: Lorem_Ipsum_str,
        featured: 'feature-2',
        image: './images/Snapshoot_Portfolio_big.png',
        technologies: [ 'css','html','bootstrap','Ruby'],
        link_to_live_version: '#',
        link_to_source: '#',
        title_post:'Profesional Art Printing Data',
        supporting_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        type_image: 'image-card'
     },
     {
        name: 'card-2',
        title_desktop: 'Keeping track of hundreds  of components website',
        title_mobile: 'Multi Post Stories',
        description: Lorem_Ipsum_str,
        featured: 'feature-2',
        image: './images/Snapshoot_Portfolio_big.png',
        technologies: [ 'css','html','bootstrap','Ruby'],
        link_to_live_version: '#',
        link_to_source: '#',
        title_post:'Data Dashboard Healthcare',
        supporting_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        type_image: 'image-card-B'
     },
     {
        name: 'card-3',
        title_desktop: 'Keeping track of hundreds  of components website',
        title_mobile: 'Multi Post Stories',
        description: Lorem_Ipsum_str,
        featured: 'feature-2',
        image: './images/Snapshoot_Portfolio_big.png',
        technologies: [ 'css','html','bootstrap','Ruby'],
        link_to_live_version: '#',
        link_to_source: '#',
        title_post:'Data Dashboard Healthcare',
        supporting_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        type_image: 'image-card-B'
     },
     {
        name: 'card-4',
        title_desktop: 'Keeping track of hundreds  of components website',
        title_mobile: 'Multi Post Stories',
        description: Lorem_Ipsum_str,
        featured: 'feature-2',
        image: './images/Snapshoot_Portfolio_big.png',
        technologies: [ 'css','html','bootstrap','Ruby'],
        link_to_live_version: '#',
        link_to_source: '#',
        title_post:'Website Protfolio',
        supporting_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        type_image: 'image-card-C'
     },
     {
        name: 'card-5',
        title_desktop: 'Keeping track of hundreds  of components website',
        title_mobile: 'Multi Post Stories',
        description: Lorem_Ipsum_str,
        featured: 'feature-2',
        image: './images/Snapshoot_Portfolio_big.png',
        technologies: [ 'css','html','bootstrap','Ruby'],
        link_to_live_version: '#',
        link_to_source: '#',
        title_post:'Website Protfolio',
        supporting_text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
        type_image: 'image-card-C'
     },
     


 ];


let bigString =`
    <header class="title">
        <div class="text" id="portfolio">My Recent Works</div>        
    </header>        
    
    <div class="container-duo-A" id='id-container-duo-A'>

        <img src="./images/img-work-desktop.png" class="image-work">

        <div class="extra-wrapper" > 

            <h3 class="title-multi" >
                Multi-Post Stories
            </h3>
    
            <p class="works-description">
                A daily selection of privately personalized 
                    reads; no accounts or sign-ups required. 
                    has been the industry's standard dummy text
                    ever since the 1500s, when an unknown
                    printer took a standard dummy text.
            </p>
    
            
            <ul class="button-container-A">
                <li class="button1">css</li>
                <li class="button1">html</li>
                <li class="button1">bootstrap</li>
                <li class=
                "button1">Ruby</li> 
                <button class="button2" id = "orange-button-A" >See Project</button>                                  
            </ul>  
        </div>            

    </div>
    <div class="wrapper-cards">

`;

for(let i = 0 ; i<project_array.length; i++ ) {
    console.log(i);
    
    
    if(i==0){
        bigString += ''; 
        bigString += `        <div class="card-${i}">
            <div class="up"></div>
            <div class="down" id="orange-button-${i}"> See project</div>
        </div>`; 
    }
    if(i>0){
        bigString += `
        <div class="card-${i}">
            
            <div class="${project_array[i].type_image}">  
    
                 <h2 class="title-post"> ${project_array[i].title_post} </h2>
                 <h3 class="supporting-text">${project_array[i].supporting_text}</h3>
    
                 <div class="button-container">                         
                 <button type="button" class="button3">${project_array[i].technologies[1]}</button>
                 <button type="button" class="button3">${project_array[i].technologies[2]}</button>
                 <button type="button" class="button3">${project_array[i].technologies[3]}</button>                
                 </div>       
                    
            </div>  

            <div class="orange-button" id="orange-button-${i}">
                See Project
            </div>        
        </div>
    `;        
    }    
}

bigString += '</div>\n';

console.log(bigString);

let wrapper_works = document.querySelector('.wrapper-works');
wrapper_works.innerHTML = bigString ;


function create_html_popup(card)
{       
    let html_str=`
    <div class="overlay">           
    </div>

    <div class="container-pop-up">
                     
    <div class="wrapper-0">        
        <div class="wrapper-1">        
            <div class="green"> 
                <h2 class="title-multi-popup-desktop" >
                    ${card.title_desktop}
                </h2>
                <h2 class="title-multi-popup-mobile" >
                    ${card.title_mobile}
                </h2>
            </div>                
            <div class="yellow"> 
                <div class="cross-popup">     
                <a  id="close-popup"><img src="./images/cross_2.png"></a>
                </div> 
            </div>            
        </div>

        <div class="wrapper-2">
            <div class="button1">${card.technologies[1]}</div>
            <div class="button1">${card.technologies[2]}</div>
            <div class="button1">${card.technologies[3]}</div>                                
        </div>  

        <div class="wrapper-3">        
            <div class="red"> 
                <img src="${card.image}" class="image-work-popup">
            </div>
            <div class="wrapper-4">                
                <div class="brown"> 
                   <p class="works-description-popup">
                ${card.description}
                   </p>
                </div>
                    <div class="wrapper-5">                       
                       <div class="orange-button-popup">  <a href="${card.link_to_live_version}" > See Live<img src="./images/live.png"></a> </div>
                       <div class="orange-button-popup">  <a href="${card.link_to_source}" > See Source  <img src="./images/git-source.png"></div>
                    </div>             
            </div>
        </div>    
    </div>  
    </div>            
    `;


        return html_str;
    

}

// Here a global variable I need

let close_popup;

function close_popup_func()
{
    let pop_up_window = document.querySelector('.pop-up-window');
    let overlay = document.querySelector('.overlay');
    let container_pop_up = document.querySelector('.container-pop-up');
    overlay.style.display = 'none';     
    container_pop_up.style.display = 'none';    
    pop_up_window.innerHTML='';

}

let card_intro = document.getElementById('orange-button-A');

function show_project_intro() {    
    let pop_up_window = document.querySelector('.pop-up-window');
    pop_up_window.innerHTML=create_html_popup(intro_obj);

    let overlay = document.querySelector('.overlay');
    let container_pop_up = document.querySelector('.container-pop-up');
    
    overlay.style.display = 'flex';     
    container_pop_up.style.display = 'flex';    

    close_popup = document.getElementById('close-popup');    

    close_popup.addEventListener('click',close_popup_func);    

}

card_intro.addEventListener('click',show_project_intro);





function show_card(card) {    
    let pop_up_window = document.querySelector('.pop-up-window');
    pop_up_window.innerHTML=create_html_popup(card);

    let overlay = document.querySelector('.overlay');
    let container_pop_up = document.querySelector('.container-pop-up');
    
    overlay.style.display = 'flex';     
    container_pop_up.style.display = 'flex';    

    close_popup = document.getElementById('close-popup');
    console.log(close_popup);

    close_popup.addEventListener('click',close_popup_func);    

}


let card_0 = document.getElementById('orange-button-0');
let card_1 = document.getElementById('orange-button-1');
let card_2 = document.getElementById('orange-button-2');
let card_3 = document.getElementById('orange-button-3');
let card_4 = document.getElementById('orange-button-4');
let card_5 = document.getElementById('orange-button-5');

function show_card_0() {
    show_card(project_array[0]);
}

function show_card_1() {
    show_card(project_array[1]);
}

function show_card_2() {
    show_card(project_array[2]);
}

function show_card_3() {
    show_card(project_array[3]);
}

function show_card_4() {
    show_card(project_array[4]);
}

function show_card_5() {
    show_card(project_array[5]);
}


card_0.addEventListener('click',show_card_0);
card_1.addEventListener('click',show_card_1);
card_2.addEventListener('click',show_card_2);
card_3.addEventListener('click',show_card_3);
card_4.addEventListener('click',show_card_4);
card_5.addEventListener('click',show_card_5);




