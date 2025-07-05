
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
       button.addEventListener("click",(e)=>{
            document.querySelectorAll('#categoryBtnContainer button').forEach(btn => {
                btn.classList = "btn flex justify-center items-center gap-2 py-10 px-10";
            });

            // Add active class to the clicked button
            e.currentTarget.classList = "btn flex justify-center items-center gap-2 py-10 px-10 rounded-full bg-[#0E7A811A] border-[#0E7A81]";
            loadCategoryPets(`${item.category}`);
       });
       container.append(button); 
    });
};

// pets load and show by category
const loadCategoryPets = async(category) =>{
    const url = `https://openapi.programming-hero.com/api/peddy/category/${category}`;
    const res = await fetch(url);
    const data = await res.json();
    showPets(data.data);
}

// pets load and show
const loadAllPets = async () => {
  const url = "https://openapi.programming-hero.com/api/peddy/pets";
  const res = await fetch(url);
  const data = await res.json();
  showPets(data.pets);
};

// pets like
function petsLike(h){
    const likedCardContainer = document.getElementById('likedCardContainer');
    const img = document.createElement('img');
    img.classList.add("h-[150px]", "w-full", "object-cover", "rounded");
    img.setAttribute("src",`${h}`);
    likedCardContainer.append(img);
}

// pets card show function
const showPets = (pets) =>{
    const petsCardContainer = document.getElementById('petsCardContainer');
    petsCardContainer.innerHTML = "";
    if(pets.length === 0){
        petsCardContainer.innerHTML = `
            <img src="images/error.webp" />
            <h1 class="text-2xl font-bold">No Information Available</h1>
            <p class="text-[#131313B3] text-center max-w-[700px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a.</p>
        `;
        petsCardContainer.classList.remove("grid");
        petsCardContainer.classList.add("flex","flex-col","gap-6","items-center","justify-center","py-[70px]","bg-[#13131308]","rounded","px-6");
        return;
    }else{
        petsCardContainer.classList.add("grid");
        petsCardContainer.classList.remove("py-[70px]","bg-[#13131308]","rounded","px-6");
    }
    pets.forEach((pet) =>{
        const div = document.createElement('div');
        div.classList = "p-5 border border-[#1313131A] rounded"
        div.innerHTML = `
            <div class="lg:h-[200px] md:h-[400px] w-full">
                <img class="h-full w-full object-cover rounded" src="${pet.image}" />
            </div>
            <div class="border-b border-[#1313131A] py-4 mb-4">
                <h2 class="font-bold text-[20px]">${pet.pet_name}</h2>
                <p class="text-[#131313B3]">Breed : ${pet.breed ? pet.breed : "Not Found"}</p>
                <p class="text-[#131313B3]">Birth : ${pet.date_of_birth ? pet.date_of_birth : "Not Found"}</p>
                <p class="text-[#131313B3]">Gender : ${pet.gender ? pet.gender : "Not Found"}</p>
                <p class="text-[#131313B3]">Price : $${pet.price ? pet.price : "Not Found"}</p>
            </div>
            <div class="flex items-center justify-center gap-4">
            <button class="btn flex-1" onclick="petsLike('${pet.image}')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
            </button>
            <button class="btn text-[#0E7A81] flex-1">Adopt</button>
            <button class="btn text-[#0E7A81] flex-1">Details</button>
            </div>
        `;
        petsCardContainer.append(div);
    });
};

// view button functionality 
  function scrollToBottom() {
    document.getElementById("text-content").scrollIntoView({ behavior: "smooth" });
  }

loadCategoryBtn();
loadAllPets(); 