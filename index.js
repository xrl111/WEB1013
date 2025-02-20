const a = document.getElementById('container');
// Tạo phần tử img
const img = document.createElement('img');
// Thiết lập thuộc tính src và alt cho ảnh
img.src = 'dethi.jpg';
img.alt = 'Mô tả ảnh';

// Thêm các biện pháp bảo vệ ảnh
img.style.userSelect = 'none';
img.style.width = '100%'; // Ngăn chặn việc bôi đen
img.draggable = false; // Vô hiệu hóa kéo thả
img.addEventListener('contextmenu', (e) => e.preventDefault()); // Vô hiệu hóa menu chuột phải

// Thêm ảnh vào container
a.appendChild(img);
