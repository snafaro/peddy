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

// pets load and show
const loadAllPets = async() =>{
    const url = "https://openapi.programming-hero.com/api/peddy/pets";
    const res = await fetch(url);
    const data = await res.json();
    showPets(data.pets);
};

const showPets = async(pets) =>{
    const petsCardContainer = document.getElementById('petsCardContainer');
    pets.forEach((pet) =>{
        const div = document.createElement('div');
        div.classList = "p-5 border border-[#1313131A] rounded"
        div.innerHTML = `
            <div class="h-[200px] w-full">
                <img class="h-full w-full object-cover rounded" src="${pet.image}" />
            </div>
            <div class="border-b border-[#1313131A] py-4 mb-4">
                <h2 class="font-bold text-[20px]">${pet.pet_name}</h2>
                <p class="text-[#131313B3]">Breed : ${pet.breed}</p>
                <p class="text-[#131313B3]">Birth : ${pet.date_of_birth}</p>
                <p class="text-[#131313B3]">Gender : ${pet.gender}</p>
                <p class="text-[#131313B3]">Price : ${pet.price}</p>
            </div>
            <div>
            <button class="btn">Like</button>
            <button class="btn text-[#0E7A81]">Adopt</button>
            <button class="btn text-[#0E7A81]">Details</button>
            </div>
        `;
        petsCardContainer.append(div);
    });
};

loadCategoryBtn();
loadAllPets();