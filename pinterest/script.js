function pintrest() {
    let arr = [
    {name: "fruits", image: "https://i.pinimg.com/1200x/ab/c7/e5/abc7e59a68eec830112b880e7dd72f00.jpg"},
    {name: "bike", image: "https://i.pinimg.com/1200x/87/56/cc/8756cc6733afb447d4e5a873d5ee71ff.jpg"},
    {name: "model", image: "https://i.pinimg.com/736x/f5/1b/f1/f51bf14cb51d18e07e66b53e8553a788.jpg"},
    {name: "krishna", image: "https://i.pinimg.com/736x/89/84/8c/89848cc148295fad38dcb47c1c965375.jpg"},
    {name: "car", image: "https://i.pinimg.com/1200x/85/ff/b2/85ffb2e353c5df3bdf27fd221afe49f4.jpg"},
    {name: "ironman", image: "https://i.pinimg.com/736x/01/37/3a/01373af962af80e8b33e7bd3c8cba218.jpg"},
];

function showImage(data = arr) {
    let clutter = "";
    data.forEach(dt => {
        clutter += `
        <div class="box">
            <img class="cursor-pointer" src="${dt.image}" alt="">
            <div class="caption">${dt.name}</div>
        </div>`;
    });

    document.querySelector(".container").innerHTML = clutter;
}

showImage();

// ⭐ Reusable function
function getFiltered(val) {
    val = val.toLowerCase();
    return arr.filter(obj => obj.name.toLowerCase().startsWith(val));
}

let searchinp = document.querySelector("#searchinput");
let overlay = document.querySelector(".overlay");
let searchdata = document.querySelector(".searchdata");

function showSearchResults(val) {
    let filterarr = getFiltered(val);

    let clutter = "";
    filterarr.forEach(ob => {
        clutter += `
        <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${ob.name}</h3>
        </div>`;
    });

    searchdata.style.display = "block";
    searchdata.innerHTML = clutter;
}

// Focus
searchinp.addEventListener("focus", function() {
    overlay.style.display = "block";
    setTimeout(() => showSearchResults(searchinp.value), 300);
});

// Input
searchinp.addEventListener("input", function() {
    showSearchResults(searchinp.value);
});

// Enter Search
searchinp.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        let filterarr = getFiltered(searchinp.value);
        showImage(filterarr);
        searchdata.style.display = "none";
        overlay.style.display = "none";
    }
});

// Blur
searchinp.addEventListener("blur", function() {
    overlay.style.display = "none";
    searchdata.style.display = "none";
});
}

pintrest()