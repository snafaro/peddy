// category button load and show
const loadCategoryBtn = async() =>{
    const url = "https://openapi.programming-hero.com/api/peddy/categories";
    const res = await fetch(url);
    const data = await res.json();
    showCategoryBtn(data.categories);
};

const showCategoryBtn = (arr) =>{
    const container = document.getElementById('categoryBtnContainer');
    arr.forEach((item) => {
       const button = document.createElement('button');
       button.classList = "btn flex justify-center items-center gap-2 py-10 px-10"
       button.innerHTML = `
            <img class="w-10" src="${item.category_icon}"/>
            <span class="text-2xl font-bold">${item.category}</span>
       `;
       container.append(button); 
    });
};

loadCategoryBtn();