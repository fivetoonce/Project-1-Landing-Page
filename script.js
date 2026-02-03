//Kategori

const categories = [
    { category: "Pupuk Kalsium", item: "6 Item", image: "/assets/pupuk kalsium.jpg" },
    { category: "Perekat", item: "6 Item", image: "/assets/perekat.jpeg" },
    { category: "Pupuk KCL", item: "2 Item", image: "/assets/pupuk kcl.jpg" },
    { category: "PPC", item: "2 Item", image: "/assets/ppc.png" }
]

const categoriesGrid = document.getElementById("categoriesGrid")

function displayCategory(category) {
    categoriesGrid.innerHTML = categories.map((category) => {
        return `
        <div class="categoryCard">
            <img src="${category.image}" alt="${category.category}">
            <h3>${category.category}</h3>
            <p>${category.item}</p>
            <button class="categoryButton">See Products</button>
        </div>
        `
    }).join("");
}

displayCategory(categories);

const productsBestSeller = [
    { id: 1, product: "ManoHARA Premium Mesh 4000", category: "Pupuk Kalsium", image: "/assets/manohara premium.jpg" },
    { id: 2, product: "ManoHARA Mesh 2500", category: "Pupuk Kalsium", image: "/assets/manohara mesh.jpg" },
    { id: 3, product: "AFI Stick", category: "Perekat", image: "/assets/afi stick.jpg" },
    { id: 4, product: "Premium LJS", category: "Pupuk Kalsium", image: "/assets/premium ljs.jpg" },
    { id: 5, product: "HARA GARUDA Mesh 4000", category: "Pupuk Kalsium", image: "/assets/hara garuda.jpg" },
    { id: 6, product: "Dewa Dewi", category: "Pupuk KCL", image: "/assets/dewa dewi kcl.jpg" },
]

const productsNewAdded = [
    { id: 1, product: "Laba-laba", category: "Pupuk Kalsium", image: "/assets/manohara mesh.jpg" },
    { id: 2, product: "Seper Soil", category: "KCL", image: "/assets/manohara mesh.jpg" },
    { id: 3, product: "Seper Soil", category: "KCL", image: "/assets/manohara mesh.jpg" },
    { id: 4, product: "Seper Soil", category: "KCL", image: "/assets/manohara mesh.jpg" },
    { id: 5, product: "Seper Soil", category: "KCL", image: "/assets/manohara mesh.jpg" },
    { id: 6, product: "Seper Soil", category: "KCL", image: "/assets/manohara mesh.jpg" },
]

const productsGrid = document.getElementById("productsGrid")

function displayProducts(products) {
    productsGrid.innerHTML = products.map((product) => {
        return `
        <div class="productCard">
            <img src="${product.image}" alt="${product.product}">
            <span>${product.category}</span>
            <a href="details.html">
                <h2 class="productName">${product.product}</h2>
            </a>
            <div class="productRating">
                <i class = "fi fi-rs-star"></i>
                <i class = "fi fi-rs-star"></i>
                <i class = "fi fi-rs-star"></i>
                <i class = "fi fi-rs-star"></i>
                <i class = "fi fi-rs-star"></i>
            </div>
        </div>
        `
    }).join("");
}

displayProducts(productsBestSeller);

const tabs = document.querySelectorAll(".tabButton")
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // 1. Remove "active" class from the previous active tab
        document.querySelector(".tabButton.active")?.classList.remove("active")
        // 2. Add "active" class to the clicked tab
        tab.classList.add("active")
        const target = tab.dataset.target
        const products = target === "#bestSeller" ? productsBestSeller : productsNewAdded
        displayProducts(products)
    })
})

