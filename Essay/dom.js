// menghitung jumlah bunga di keranjang
let flowerCount = 0;

// Fungsi yang dijalankan setelah DOM selesai dimuat
window.onload = function() {
    // Menambahkan event listener untuk gambar bunga di bagian atas
    document.getElementById('img1').addEventListener('click', function() {
        addFlowerToBasket('thumbnails\\flo1.jpg');
    });
    
    document.getElementById('img2').addEventListener('click', function() {
        addFlowerToBasket('thumbnails\\flo2.jpg');
    });
    
    document.getElementById('img3').addEventListener('click', function() {
        addFlowerToBasket('thumbnails\\flo3.jpg');
    });
    
    // Menambahkan event listener untuk tombol ubah warna teks
    document.getElementById('chtext').addEventListener('click', function() {
        showColorDialog('text');
    });
    
    // Menambahkan event listener untuk tombol ubah warna background
    document.getElementById('bccol').addEventListener('click', function() {
        showColorDialog('background');
    });
};

// Fungsi untuk menambahkan bunga ke keranjang
function addFlowerToBasket(imageSrc) {
    // Membuat elemen img baru
    let newFlower = document.createElement('img');
    newFlower.src = imageSrc;
    
    // Menambahkan event listener untuk menghapus bunga ketika diklik
    newFlower.addEventListener('click', function() {
        removeFlowerFromBasket(this);
    });
    
    // Menambahkan style cursor pointer agar terlihat bisa diklik
    newFlower.style.cursor = 'pointer';
    
    // Menambahkan bunga ke dalam basket (setelah paragraf status)
    let basket = document.getElementById('basket');
    basket.appendChild(newFlower);
    
    // Update jumlah bunga
    flowerCount++;
    updateBasketStatus();
}

// Fungsi untuk menghapus bunga dari keranjang
function removeFlowerFromBasket(flowerElement) {
    // Menghapus elemen bunga dari DOM
    flowerElement.remove();
    
    // Update jumlah bunga
    flowerCount--;
    updateBasketStatus();
}

// Fungsi untuk mengupdate status keranjang
function updateBasketStatus() {
    let basketStat = document.getElementById('basketstat');
    basketStat.textContent = 'The flower basket currently contains ' + flowerCount + ' flowers.';
}

// Fungsi untuk menampilkan dialog custom
function showColorDialog(type) {
    // Membuat overlay
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    
    // Membuat dialog box
    let dialog = document.createElement('div');
    dialog.style.backgroundColor = '#F0F0F0';
    dialog.style.borderRadius = '8px';
    dialog.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
    dialog.style.width = '380px';
    dialog.style.fontFamily = 'Segoe UI, Arial, sans-serif';
    dialog.style.overflow = 'hidden';
    
    // Header bar (dark bar dengan JavaScript title dan X button)
    let headerBar = document.createElement('div');
    headerBar.style.backgroundColor = '#4D4D4D';
    headerBar.style.color = 'white';
    headerBar.style.padding = '8px 12px';
    headerBar.style.display = 'flex';
    headerBar.style.justifyContent = 'flex-start';
    headerBar.style.alignItems = 'center';
    headerBar.style.gap = '8px';
    
    let closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.backgroundColor = '#E74C3C';
    closeBtn.style.border = 'none';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.padding = '0';
    closeBtn.style.width = '20px';
    closeBtn.style.height = '20px';
    closeBtn.style.lineHeight = '20px';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.display = 'flex';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.alignItems = 'center';
    
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    closeBtn.addEventListener('mouseenter', function() {
        closeBtn.style.backgroundColor = '#C0392B';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        closeBtn.style.backgroundColor = '#E74C3C';
    });
    
    let headerTitle = document.createElement('div');
    headerTitle.textContent = 'JavaScript';
    headerTitle.style.fontSize = '13px';
    headerTitle.style.fontWeight = 'normal';
    
    headerBar.appendChild(closeBtn);
    headerBar.appendChild(headerTitle);
    
    // Content area
    let content = document.createElement('div');
    content.style.padding = '20px';
    content.style.backgroundColor = '#F0F0F0';
    
    // Icon dan message container
    let messageContainer = document.createElement('div');
    messageContainer.style.display = 'flex';
    messageContainer.style.alignItems = 'flex-start';
    messageContainer.style.marginBottom = '20px';
    
    let icon = document.createElement('div');
    icon.textContent = '?';
    icon.style.backgroundColor = '#5B9BD5';
    icon.style.color = 'white';
    icon.style.width = '45px';
    icon.style.height = '45px';
    icon.style.borderRadius = '50%';
    icon.style.display = 'flex';
    icon.style.justifyContent = 'center';
    icon.style.alignItems = 'center';
    icon.style.fontSize = '28px';
    icon.style.fontWeight = 'bold';
    icon.style.marginRight = '15px';
    icon.style.flexShrink = '0';
    
    let messageBox = document.createElement('div');
    messageBox.style.flex = '1';
    messageBox.style.paddingTop = '5px';
    
    let label = document.createElement('div');
    label.textContent = 'Input your color';
    label.style.marginBottom = '8px';
    label.style.fontSize = '13px';
    label.style.color = '#333';
    
    // Input field
    let input = document.createElement('input');
    input.type = 'text';
    input.style.width = '100%';
    input.style.padding = '6px 8px';
    input.style.border = '1px solid #ABABAB';
    input.style.fontSize = '13px';
    input.style.boxSizing = 'border-box';
    input.style.outline = 'none';
    
    input.addEventListener('focus', function() {
        input.style.border = '1px solid #d78100ff';
    });
    
    input.addEventListener('blur', function() {
        input.style.border = '1px solid #ABABAB';
    });
    
    messageBox.appendChild(label);
    messageBox.appendChild(input);
    
    messageContainer.appendChild(icon);
    messageContainer.appendChild(messageBox);
    
    // Tombol container
    let buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '8px';
    buttonContainer.style.marginTop = '20px';
    
    // Tombol Cancel
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.padding = '7px 24px';
    cancelBtn.style.backgroundColor = '#E1E1E1';
    cancelBtn.style.border = '1px solid #ADADAD';
    cancelBtn.style.borderRadius = '3px';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.style.fontSize = '13px';
    cancelBtn.style.color = '#000';
    cancelBtn.style.minWidth = '80px';
    
    cancelBtn.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
    
    cancelBtn.addEventListener('mouseenter', function() {
        cancelBtn.style.backgroundColor = '#D5D5D5';
    });
    
    cancelBtn.addEventListener('mouseleave', function() {
        cancelBtn.style.backgroundColor = '#E1E1E1';
    });
    
    // Tombol OK
    let okBtn = document.createElement('button');
    okBtn.textContent = 'OK';
    okBtn.style.padding = '7px 24px';
    okBtn.style.backgroundColor = '#FFB366';
    okBtn.style.border = '1px solid #E09950';
    okBtn.style.borderRadius = '3px';
    okBtn.style.cursor = 'pointer';
    okBtn.style.fontSize = '13px';
    okBtn.style.color = '#000';
    okBtn.style.minWidth = '80px';
    
    okBtn.addEventListener('click', function() {
        let color = input.value;
        if (color) {
            if (type === 'text') {
                // Mengubah warna paragraf
                document.getElementById('text1').style.color = color;
                // Mengubah warna heading h1
                document.querySelector('h1').style.color = color;
            } else if (type === 'background') {
                document.getElementById('bd').style.backgroundColor = color;
            }
        }
        document.body.removeChild(overlay);
    });
    
    okBtn.addEventListener('mouseenter', function() {
        okBtn.style.backgroundColor = '#FFA347';
    });
    
    okBtn.addEventListener('mouseleave', function() {
        okBtn.style.backgroundColor = '#FFB366';
    });
    
    // Menambahkan event listener untuk Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            okBtn.click();
        }
    });
    
    // Menyusun semua elemen
    buttonContainer.appendChild(cancelBtn);
    buttonContainer.appendChild(okBtn);
    
    content.appendChild(messageContainer);
    content.appendChild(buttonContainer);
    
    dialog.appendChild(headerBar);
    dialog.appendChild(content);
    
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    
    // Auto focus pada input
    input.focus();
    
    // Menutup dialog ketika klik overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}