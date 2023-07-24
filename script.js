const availableKits = [
    { id: 1, name: "Kit 1", price: 29.99 },
    { id: 2, name: "Kit 2", price: 39.99 },
    { id: 3, name: "Kit 3", price: 24.99 },
    // Add more kits here...
];

function generateKitsList() {
    const kitsList = document.getElementById('kits-list');

    availableKits.forEach(kit => {
        const kitItem = document.createElement('div');
        kitItem.innerHTML = `<p><strong>${kit.name}</strong> - $${kit.price}</p>`;
        kitItem.addEventListener('click', () => addToBasket(kit));
        kitsList.appendChild(kitItem);
    });
}

function addToBasket(selectedKit) {
    const basket = document.getElementById('basket');
    const kitInBasket = document.createElement('li');
    kitInBasket.innerHTML = `${selectedKit.name} - $${selectedKit.price}`;
    basket.appendChild(kitInBasket);
}

function showSellerContent() {
    document.getElementById('buyer-content').style.display = 'none';
    document.getElementById('seller-content').style.display = 'block';
}

function showBuyerContent() {
    document.getElementById('seller-content').style.display = 'none';
    document.getElementById('buyer-content').style.display = 'block';
}

const sellerButton = document.getElementById('seller-button');
const buyerButton = document.getElementById('buyer-button');

sellerButton.addEventListener('click', showSellerContent);
buyerButton.addEventListener('click', showBuyerContent);

generateKitsList();
