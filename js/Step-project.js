    let target = ".services-menu"; //создаем переменную в которую помещаем селектор по классу, который относится к списку, в
    // котором лежат заголовки-табы
    let elemTabs = (typeof target === "string" ? document.querySelector(target) : target); // проверяем тип
    // информации, лежащей в переменной target, и, если это строка, ищем в документе по селектору переменную target и
    // выводим, или же выводим значение переменной target. Помещаем это в переменную elemTabs
    function hideTabs () { //создаем функцию чтобы скрывать вкладки
    let removeTabs = document.querySelector(".tabs-show"); // находим по селектору элемент с классом tabs-show и
    // помещаем его в переменную removeTabs
    if (removeTabs != null) { // если значение в переменной removeTabs не равняется нулю, то...
    removeTabs.classList.remove("tabs-show"); // находим и удаляем класс tabs-show, который содержится в
    // элементе, который мы нашли и записали в переменную removeTabs
}
    let activeTitle = document.querySelector(".active"); // находим по селектору элемент с классом active и
    // записываем его в переменную activeTitle
    if (activeTitle != null) { // если значение в переменной activeTitle не равно нулю, то...
    activeTitle.classList.remove("active"); // находим и удаляем класс active, который содержится в элементе,
    // который мы нашли и записали в переменную activeTitle
}
}
let tabsFilterTarget = ".works-menu";
let elemTabsFilter = (typeof tabsFilterTarget === "string" ? document.querySelector(tabsFilterTarget) : tabsFilterTarget);

function filterPhotoTabs (filterOptionId) {
    let images = TabViewModel.GalleryItems;
    for(let img of images) {
        img.IsVisible = img.filterOptions.indexOf(filterOptionId) >= 0; // показываем(присваиваем IsVisible) в
        // случае, если элемент >=0
    }
}
    let menuHolder = document.getElementById("menuHolder");
    
    let contentHolder = document.getElementById("contentHolder");
    let galleryMenuHolder = document.getElementById("galleryMenuHolder");
    let galleryContentHolder = document.getElementById("galleryContentHolder");
    
    let galleryContentBestImages = document.getElementById("galleryContentBestImages");
    let buttonAddNewPhoto = document.querySelector(".work-button");
    let buttonAddBestPhoto = document.querySelector(".best-photo");
    
    let personQuoteHolder = document.getElementById("personQuote");
    let personNameHolder = document.getElementById("personName");
    let personPositionHolder = document.getElementById("personPosition");
    let personImageHolder = document.getElementById("personImage");

    let personCarouselItems = document.getElementById("CarouselItemsHolder");
    let scrollLeft = document.querySelector(".checkMark-left");
    let scrollRight = document.querySelector(".checkMark-right");

    let TabViewModel = {
        "menuItems":[
        {"Id":"web","Title":"Web Design"},
        {"Id":"graphic","Title":"Graphic"},
        {"Id":"support","Title":"Online Support"},
        {"Id":"app","Title":"App Design"},
        {"Id":"marketing","Title":"Online Marketing"},
        {"Id":"seo","Title":"Seo Service"}
            ],
        "contentItems":[
            {"Id":"web","Content":"Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
                    "                                elit. Ab aliquam blanditiis delectus dolorem doloremque earum eligendi est eum ex\n" +
                    "                                facere facilis fuga fugit illo impedit ipsa iure laborum magnam maiores, nam\n" +
                    "                                necessitatibus  nemo nesciunt non odio placeat porro praesentium provident quaerat\n" +
                    "                                quas quia reprehenderit rerum sapiente sint suscipit." +
                    " Necessitatibus, nobis? Какой-то текст №1", "Image":"images/post6.png"},
            {"Id":"graphic","Content":"Necessitatibus, nobis? Какой-то текст №2", "Image":"images/post5.png"},
            {"Id":"support","Content":"Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
                    "                                elit. Ab aliquam blanditiis delectus dolorem doloremque earum eligendi est eum ex\n", "Image":"images/post7.png"},
            {"Id":"app","Content":"Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
                    "                                elit. Ab aliquam blanditiis delectus dolorem doloremque earum eligendi est eum ex\n" +
                    "                                facere facilis fuga fugit illo impedit ipsa iure laborum magnam maiores, nam\n" +
                    "                                necessitatibus  nemo nesciunt non odio placeat porro praesentium provident quaerat\n" +
                    "                                quas quia reprehenderit rerum sapiente sint suscipit." +
                    " Necessitatibus, nobis? Какой-то текст №4", "Image":"images/post3.png"},
            {"Id":"marketing","Content":"Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
                    "                                elit. Ab aliquam blanditiis delectus dolorem doloremque earum eligendi est eum ex\n" +
                    "                                facere facilis fuga fugit illo impedit ipsa iure laborum magnam maiores, nam\n" +
                    "                                necessitatibus  nemo nesciunt non odio placeat porro praesentium provident quaerat\n" +
                    "                                quas quia reprehenderit rerum sapiente sint suscipit." +
                    " Necessitatibus, nobis? Какой-то текст №5", "Image":"images/post2.png"},
            {"Id":"seo","Content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim sed reprehenderit blanditiis sequi, animi minus impedit quisquam labore id asperiores. Dolores ducimus quas, veritatis deserunt incidunt consequatur quam voluptatibus fuga esse et velit corporis molestias libero quod quo, rerum officiis, laudantium eius vel. Dolor temporibus magni deserunt tempora nam in fugiat perferendis voluptates ullam quos error enim voluptatem doloribus accusantium dolores explicabo, necessitatibus est unde cumque? Deserunt nemo debitis quibusdam quis neque rem dolores fugiat aspernatur et tempore pariatur libero perferendis consequatur eligendi, dicta quod veniam sapiente provident temporibus deleniti ipsam illo culpa iure commodi? Corporis quo necessitatibus voluptas.", "Image":"images/post1.png"}
        ],
        "FilterOptions":[
            {"Id":"all", "Title":"All"},
            {"Id":"graphicDesign", "Title":"Graphic Design"},
            {"Id":"webDesign", "Title":"Web Design"},
            {"Id":"landingPages", "Title":"Landing Pages"},
            {"Id":"wordpress", "Title":"Wordpress"},
        ],
        "buttonAddNewPhoto": {
            "ClickCounter" : 0,
            "IsVisible": true,
        },
        "DisplayCount": 12,
        "GalleryItems" :[
            {"IsVisible":true, "Content": "creative design1", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-1-2.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web1", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-1-2.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing1", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-3.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress1", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-4.png", "filterOptions":["all", "wordpress"]},
            {"IsVisible":true, "Content": "creative design2", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-5.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web2", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-6.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing2", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-7.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress2", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-8.png", "filterOptions":["all", "wordpress"]},
            {"IsVisible":true, "Content": "creative design3", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-9.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web3", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-10.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing3", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-11.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress3", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-12.png", "filterOptions":["all", "wordpress"]},

            {"IsVisible":true, "Content": "creative design1", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-1-2.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web1", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-1-2.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing1", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-3.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress1", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-4.png", "filterOptions":["all", "wordpress"]},
            {"IsVisible":true, "Content": "creative design2", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-5.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web2", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-6.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing2", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-7.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress2", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-8.png", "filterOptions":["all", "wordpress"]},
            {"IsVisible":true, "Content": "creative design3", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-9.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web3", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-10.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing3", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-11.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible": true, "Content": "Wordpress3", "Category": "Wordpress", "Id": "wordpress", "Image": "images/work-12.png", "filterOptions": ["all", "wordpress"] },
            
            {"IsVisible":true, "Content": "creative design1", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-1-2.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web1", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-1-2.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing1", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-3.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress1", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-4.png", "filterOptions":["all", "wordpress"]},
            {"IsVisible":true, "Content": "creative design2", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-5.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web2", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-6.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing2", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-7.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress2", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-8.png", "filterOptions":["all", "wordpress"]},
            {"IsVisible":true, "Content": "creative design3", "Category": "Graphic Design", "Id":"graphicDesign", "Image":"images/work-9.png", "filterOptions":["all", "graphicDesign"]},
            {"IsVisible":true, "Content": "web3", "Category": "Web Design", "Id":"webDesign", "Image":"images/work-10.png", "filterOptions":["all", "webDesign"]},
            {"IsVisible":true, "Content": "Landing3", "Category": "Landing Pages", "Id":"landingPages", "Image":"images/work-11.png", "filterOptions":["all", "landingPages"]},
            {"IsVisible":true, "Content": "Wordpress3", "Category": "Wordpress", "Id":"wordpress", "Image":"images/work-12.png", "filterOptions":["all", "wordpress"]},

        ],
        "buttonAddBestPhoto": {
            "ClickCounter" : 0,
            "IsVisible" : true,
        },
        "DisplayCountBestImg": 7,
        "BestImages" :[
            {"IsVisible":true, "Id":"Vanglo", "Image":"images/Vanglo.png"},
            {"IsVisible":true, "Id": "Sunrise", "Image": "images/Sunrise.png"},
            {"IsVisible":true, "Id":"Royal", "Image":"images/Royal.png"},
            {"IsVisible":true, "Id":"Sunset", "Image":"images/Sunset.png"},
            {"IsVisible":true, "Id":"Glorious", "Image":"images/Glorious.png"},
            {"IsVisible":true, "Id":"Stargaze", "Image":"images/Stargaze.png"},
            {"IsVisible":true, "Id":"Vanglo", "Image": "images/Vanglo.png"},
            
            {"IsVisible":true, "Id":"Vanglo", "Image":"images/Vanglo.png"},
            { "IsVisible": true, "Id": "Sunrisen", "Image": "images/Sunrise.png" },
            {"IsVisible":true, "Id":"Glorious", "Image":"images/Glorious.png"},
            {"IsVisible":true, "Id":"Royal", "Image":"images/Royal.png"},
            {"IsVisible":true, "Id":"Sunset", "Image":"images/Sunset.png"},
            {"IsVisible":true, "Id":"Glorious", "Image":"images/Glorious.png"},
            {"IsVisible":true, "Id":"Stargaze", "Image":"images/Stargaze.png"},
            {"IsVisible": true,"Id":"Vanglo", "Image": "images/Vanglo.png"},
            
            {"IsVisible":true, "Id":"Vanglo", "Image":"images/Vanglo.png"},
            { "IsVisible": true, "Id": "Sunrises", "Image": "images/Sunrise.png" },
            {"IsVisible":true, "Id":"Glorious", "Image":"images/Glorious.png"},
            {"IsVisible":true, "Id":"Royal", "Image":"images/Royal.png"},
            {"IsVisible":true, "Id":"Sunset", "Image":"images/Sunset.png"},
            {"IsVisible":true, "Id":"Glorious", "Image":"images/Glorious.png"},
            {"IsVisible":true, "Id":"Stargaze", "Image":"images/Stargaze.png"},
            {"IsVisible":true, "Id":"Vanglo", "Image":"images/Vanglo.png"},
        ],
    };
    
let PersonsViewModel = {
    "People": [
        {
            "Quote": "0 Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi qui massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.",
            "Name": "HASAN ALI", "Position": "UX Designer", "Selected": true, "Image": "images/Glorious.png", "Class": "item-carousel", "IsVisible": true, "Id": "pers1", "Image": "images/Layer5.png"
        },
        {
            "Quote": "1 Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi qui massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. EWFVWGEgvk3rjgkhfjehfjjhjlkwhjefjkhjjflfjnnkxjiqwuijfwkjklfjekmfekfejjdkf",
            "Name": "LARA KROFT", "Position": "UI Designer", "Selected": false, "Image": "images/Royal.png", "Class": "item-carousel", "IsVisible": true, "Id": "pers2", "Image": "images/Layer6.png"
        },
        {
            "Quote": "2 Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi qui massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
            "Name": "GARY SOFT", "Position": "SOFTWARE Developer", "Selected": false, "Image": "images/Stargaze.png", "Class": "item-carousel", "IsVisible": true, "Id": "pers3", "Image": "images/Layer7.png"
        },
        {
            "Quote": "3 Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi qui massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx",
            "Name": "MARY KLINGHTON", "Position": "Tester", "Selected": false, "Image": "images/Sunrise.png", "Class": "item-carousel", "IsVisible": true, "Id": "pers4", "Image": "images/Layer8.png"
        },
        {
            "Quote": "4 Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi qui massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
            "Name": "SOMEONE", "Position": "Junior JS Angular Developer", "Selected": false, "Image": "images/Sunset.png", "Class": "item-carousel", "IsVisible": true, "Id": "pers5", "Image": "images/Layer6.png"
        },
        {
            "Quote": "2 Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi qui massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
            "Name": "GARY SOFT", "Position": "SOFTWARE Developer", "Selected": false, "Image": "images/Stargaze.png", "Class": "item-carousel", "IsVisible": true, "Id": "pers3", "Image": "images/Layer7.png"
        },
    ],
}

let loadBlock = document.querySelector(".animation-loader");
function animationLoader() {
    loadBlock.style.display = "flex";
};
setInterval(() => loadBlock.style.display = "", 5500);

let loadBlockBest = document.querySelector(".animation-loader-best");
function animationLoaderBest() {
    loadBlockBest.style.display = "flex";
};
setInterval(() => loadBlockBest.style.display = "", 5500);

function addPhoto() {
    TabViewModel.DisplayCount += 12;

    if (TabViewModel.DisplayCount >= 36) {
        TabViewModel.buttonAddNewPhoto.IsVisible = false;
    }
};

function addBestPhoto() {
    TabViewModel.DisplayCountBestImg += 8;

    if (TabViewModel.DisplayCountBestImg >= 24) {
        TabViewModel.buttonAddBestPhoto.IsVisible = false;
    }
}

function changeTabState(targetTab){
    hideTabs();
    let idSelector = targetTab.getAttribute("href");
    let tab = document.querySelector(idSelector);
    tab.classList.add("tabs-show");
    targetTab.classList.add("active");
}

let offset = 0;
let countViewPeople = 4;
let itemOfCarousel = document.querySelector(".item-carousel");

let widthItem = 61 * (PersonsViewModel.People.length - countViewPeople);
let marginLeftItem = 15 * (PersonsViewModel.People.length - countViewPeople);
let marginRightItem = 15 * (PersonsViewModel.People.length - countViewPeople);

let lenghtCarousel = widthItem + marginLeftItem + marginRightItem;
function scrollByCSS() {
    personCarouselItems.style.left = -offset + "px";
}
function buttonsScrollRight() {
    offset = offset + 95;
    if (offset > lenghtCarousel) {
        offset = lenghtCarousel;
    };
    scrollByCSS();
};
function buttonsScrollLeft() {
    offset = offset - 95;
    if (offset < 0) {
        offset = 0;
    }
    scrollByCSS();
};

function createElementFromHTML(htmlString) { //функция, которая создает элемент
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}

function renderMenuItems (viewModel) {
    for (let item of viewModel.menuItems) {
        let listItemStr = document.getElementById("menuItemView");
        let listItem = createElementFromHTML(listItemStr.innerHTML);
        listItem.firstElementChild.innerHTML = item.Title;
        listItem.firstElementChild.setAttribute("href","#" + item.Id);
        menuHolder.appendChild(listItem);
    }
}
function renderContentItems (viewModel) {
    for (let item of viewModel.contentItems) {
        let listItemStr = document.getElementById("contentItemView");
        let listItem = createElementFromHTML(listItemStr.innerHTML);
        listItem.lastElementChild.innerHTML = item.Content;
        listItem.setAttribute("id", item.Id);
        listItem.firstElementChild.setAttribute("alt",item.Id);
        listItem.firstElementChild.setAttribute("src",item.Image);
        contentHolder.appendChild(listItem);
    }
}
function renderFilterOptions (viewModel) {
    for (let item of viewModel.FilterOptions) {
        let listItemStr = document.getElementById("galleryMenuItemView");
        let listItem = createElementFromHTML(listItemStr.innerHTML);
        listItem.firstElementChild.innerHTML = item.Title;
        listItem.firstElementChild.setAttribute("href","#" + item.Id);
        listItem.firstElementChild.setAttribute("Id", item.Id);

        galleryMenuHolder.appendChild(listItem);
    }
}



function renderGalleryItems(viewModel) {
    
    let listItemStr = document.getElementById("galleryContentItemView");
    for (let item of viewModel.GalleryItems.slice(0, viewModel.DisplayCount)) {
        if (item.IsVisible) {
            let listItem = createElementFromHTML(listItemStr.innerHTML);

            listItem.setAttribute("id", item.Id);
            listItem.firstElementChild.setAttribute("alt", item.Id);
            listItem.firstElementChild.setAttribute("src", item.Image);
            
            let listItemContent = listItem.querySelector(".backside-header");
            let listItemCategory = listItem.querySelector(".backside-filter");
            
            listItemContent.innerText = item.Content;
            listItemCategory.innerText = item.Category;

            listItem.firstElementChild.setAttribute("class", "content-image");
            galleryContentHolder.appendChild(listItem);
        }
    }

}

function renderBestImages(viewModel) {
    let listItemStr = document.getElementById("galleryOfBestImages");
    for (let item of viewModel.BestImages.slice(0, viewModel.DisplayCountBestImg)) {
        if (item.IsVisible) {
            let listItem = createElementFromHTML(listItemStr.innerHTML);

            listItem.setAttribute("id", item.Id);
            listItem.firstElementChild.setAttribute("alt", item.Id);
            listItem.firstElementChild.setAttribute("src", item.Image);

            galleryContentBestImages.appendChild(listItem);
        }
    };
    let listItemBestImg = document.getElementById("galleryOfBestImagesInside");
    let blockContentImgs = createElementFromHTML(listItemBestImg.innerHTML);

    let blockImgSunrise = document.getElementById("Sunrise");
    blockImgSunrise.after(blockContentImgs);
}

function renderAddPhoto(viewModel) {
    if (!viewModel.buttonAddNewPhoto.IsVisible) {
        buttonAddNewPhoto.style.display = "none";   
    } else {
        buttonAddNewPhoto.style.display = "flex";
    }
};
function renderAddBestPhoto(viewModel) {
    if (!viewModel.buttonAddBestPhoto.IsVisible) {
        buttonAddBestPhoto.style.display = "none";   
    }
    else {
        buttonAddBestPhoto.style.display = "flex";
    }
};

function renderSelectedPerson(person){
    personQuoteHolder.innerHTML = person.Quote;
    personNameHolder.innerHTML = person.Name;
    personPositionHolder.innerHTML = person.Position;
    personImageHolder.setAttribute("src", person.Image);
}

function renderAllPeople(people, offSet, lenght) {
    
}

function renderPersons(personsViewModel) { // находит в JSON 
    //personsViewModel.SelectedPerson = personsViewModel.People[0];//personsViewModel.People find selected
    renderSelectedPerson(personsViewModel.SelectedPerson);
    
    renderAllPeople(personsViewModel.People);
}

function SelectPerson(person) {
    PersonsViewModel.SelectedPerson = person;

}

let listItemStr = document.getElementById("carouselItemsView");
function renderCarouselItems (personsViewModel) {
    for (let item of personsViewModel.People) {
        if (item.IsVisible) {
            let listItem = createElementFromHTML(listItemStr.innerHTML); // person/item - каждый/один человек из карусели 
            listItem.setAttribute("id", item.Id);
            listItem.firstElementChild.setAttribute("alt", item.Id);
            listItem.firstElementChild.setAttribute("src", item.Image);

            listItem.setAttribute("class", "item-carousel");

            listItem.onclick = function () {
                SelectPerson(item);
                renderPersons(personsViewModel);
            }
            personCarouselItems.appendChild(listItem);
        }
    }

}

function clearGalleryItems() {
    galleryContentHolder.innerHTML = "";
}

function clearCarouselItems() {
    personCarouselItems.innerHTML = "";
}

function clearBestGalleryItems() {
    galleryContentBestImages.innerHTML = "";
}

function addedPhotos() {
    addPhoto();
    renderAddPhoto(TabViewModel);
    clearGalleryItems();
    renderGalleryItems(TabViewModel);
}
function addedBestPhotos() {
    addBestPhoto();
    renderAddBestPhoto(TabViewModel);
    clearBestGalleryItems();
    renderBestImages(TabViewModel);
}
    function render (viewModel, personsViewModel)
    {
        renderMenuItems(viewModel);
        renderContentItems (viewModel);
        renderFilterOptions (viewModel);
        renderGalleryItems (viewModel);
        renderAddPhoto(viewModel);
        renderBestImages(viewModel);
        renderAddBestPhoto(viewModel);
        renderPersons(personsViewModel);
        renderCarouselItems(personsViewModel);
    }

// // my work
// function clearSelectedPersons() {
//     personQuoteHolder.innerHTML = '';
//     personNameHolder.innerHTML = '';
//     personPositionHolder.innerHTML = '';
//     personImageHolder.setAttribute("src", person.Image = '');
// }
// //

    function init() { // функция для всех событий, которые используют (ссылаются на) другие функции, которые меняют...
        elemTabs.addEventListener("click", function (e) {
            e.preventDefault();
            changeTabState(e.target);
        });
        elemTabsFilter.addEventListener("click", function (e) {

            e.preventDefault();

            let filterOptionId = e.target.getAttribute("id");
            filterPhotoTabs(filterOptionId);
            clearGalleryItems();
            renderGalleryItems(TabViewModel);
        });
        buttonAddNewPhoto.addEventListener("click", function () {
            animationLoader();
            setTimeout(addedPhotos, 2430);
        });

        buttonAddBestPhoto.addEventListener("click", function () {
            animationLoaderBest();

            function fooo() {
                let imageContainer = document.querySelector('.image-container');
                let sizer = document.querySelector(".size1");
                new Masonry(imageContainer, {
                    columnWidth: sizer,
                    itemSelector: '.item-masonry',
                });
            };
            setTimeout(addedBestPhotos, 2430);
            setTimeout(fooo, 2430);
        });

        scrollRight.addEventListener("click", function () {
            buttonsScrollRight();
        });

        scrollLeft.addEventListener("click", function () {
            buttonsScrollLeft();
        });
    }
    let x = init();
    console.log(x);

    SelectPerson(PersonsViewModel.People[0]);

    let result = render(TabViewModel, PersonsViewModel);
   
    changeTabState (menuHolder.firstElementChild.firstElementChild);

window.onload = function msnry() {
    let imageContainer = document.querySelector('.image-container');
    let sizer = document.querySelector(".size1");
    new Masonry(imageContainer, {
        columnWidth: sizer,
        itemSelector: '.item-masonry',
        personPosition: true,
    });
};

    