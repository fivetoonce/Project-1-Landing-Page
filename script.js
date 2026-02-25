//Kategori

const categories = [
    { category: "Pupuk Kalsium", item: "6 Item", image: "/assets/pupuk kalsium.jpg" },
    { category: "Perekat", item: "6 Item", image: "/assets/perekat.jpeg" },
    { category: "Pupuk KCL", item: "2 Item", image: "/assets/pupuk kcl.jpg" },
    { category: "PPC", item: "2 Item", image: "/assets/ppc.png" }
]

function displayCategory(category) {
    const categoriesGrid = document.getElementById("categoriesGrid")
    if (!categoriesGrid) {
        return;
    }
    categoriesGrid.innerHTML = categories.map((category) => {
        return `
        <div class="categoryCard">
            <img src="${category.image}" alt="${category.category}">
            <h3>${category.category}</h3>
            <p>${category.item}</p>
            <a href="allproducts.html">
                <button class="categoryButton">See Products</button>
            </a>
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
]

const productsNewAdded = [
    { id: 5, product: "HARA GARUDA Mesh 4000", category: "Pupuk Kalsium", image: "/assets/hara garuda.jpg" },
    { id: 6, product: "Dewa Dewi", category: "Pupuk KCL", image: "/assets/dewa dewi kcl.jpg" },
    { id: 3, product: "AFI Stick", category: "Perekat", image: "/assets/afi stick.jpg" },
    { id: 4, product: "Premium LJS", category: "Pupuk Kalsium", image: "/assets/premium ljs.jpg" },
]

function displayProducts(products) {
    const productsGrid = document.getElementById("productsGrid")
    if (!productsGrid) {
        return;
    }
    productsGrid.innerHTML = products.map((product) => {
        return `
        <div class="productCard">
            <img src="${product.image}" alt="${product.product}">
            <span>${product.category}</span>
            <a href="details.html#${product.id}">
                <h2 class="productName">${product.product}</h2>
            </a>
            <div class="productRating">
                ⭐⭐⭐⭐⭐
            </div>
        </div>
        `
    }).join("");
}

displayProducts(productsBestSeller);

const tabs = document.querySelectorAll(".tabButton")
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelector(".tabButton.active")?.classList.remove("active")
        tab.classList.add("active")
        const target = tab.dataset.target
        const products = target === "#bestSeller" ? productsBestSeller : productsNewAdded
        displayProducts(products)
    })
})

const detailProducts = [
    { id: 1, product: "ManoHARA Premium Mesh 4000", category: "Pupuk Kalsium", image1: "/assets/manohara premium.jpg", image2: "/assets/manohara premium.jpg" },
    { id: 2, product: "ManoHARA Mesh 2500", category: "Pupuk Kalsium", image1: "/assets/manohara mesh.jpg", image2: "/assets/manohara mesh.jpg" },
    { id: 3, product: "AFI Stick", category: "Perekat", image1: "/assets/afi stick.jpg", image2: "/assets/afi stick.jpg" },
    { id: 4, product: "Premium LJS", category: "Pupuk Kalsium", image1: "/assets/premium ljs.jpg", image1: "/assets/premium ljs.jpg" },
    { id: 5, product: "HARA GARUDA Mesh 4000", category: "Pupuk Kalsium", image1: "/assets/hara garuda.jpg", image1: "/assets/hara garuda.jpg" },
    { id: 6, product: "Dewa Dewi", category: "Pupuk KCL", image1: "/assets/dewa dewi kcl.jpg", image1: "/assets/hara garuda.jpg" },
]

/* Hamburger Menu */
const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");

if (hamburger && navBar) {
    hamburger.addEventListener("click", () => {
        navBar.classList.toggle("active");
    });

    // Close menu when link is clicked
    document.querySelectorAll(".navBar li a").forEach(n => n.addEventListener("click", () => {
        navBar.classList.remove("active");
    }));
}