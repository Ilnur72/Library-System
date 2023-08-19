super admin :
    username: "superadmin",
    password: super1234

/loan yo'liga deu_date maydoniga kitobni necha kunga berilganligini jo'natish kerak misol: 20

ADMINS
POST /login | Adminlar login qilishi uchun API    
POST /admins + TOKEN | Yangi admin qo’shish uchun API
GET /admins + TOKEN | Adminlarni ro’yxatini olish uchun API
GET /admins/:id + TOKEN | Bitta adminni ko’rish uchun API
PATCH /admins/:id + TOKEN + SUPER | Adminning ma’lumotini tahrirlash uchun API, Faqat full_name, username, password, maydonlarini tahrirlash mumkin
PATCH /admins/me+ TOKEN | Adminning o’zining ma’lumotini tahrirlash uchun API, Faqat full_name, username, password, maydonlarini tahrirlash mumkin
DELETE /admins/:id + TOKEN + SUPER | Adminning o’chirish uchun API

BORROWERS
POST /borrowers + TOKEN | Kitobxon qo’shish uchun API
GET /borrowers + TOKEN | Kitobxonlar ro’yxatini olish uchun API
GET /borrowers/:id + TOKEN | Bitta kitobxonni ko’rish uchun API
PATCH /borrowers/:id + TOKEN | Kitobxonning ma’lumotini tahrirlash uchun API
DELETE /borrowers/:id + TOKEN | Kitobxonni o’chirish uchun API
Book Schema: {
    full_name
    address
    phone
}

PUBLISHERS
POST /publishers + TOKEN | Nashriyot qo’shish uchun API
GET /publishers + TOKEN | Nashriyotlar ro’yxatini olish uchun API
GET /publishers/:id + TOKEN | Bitta Nashriyotni ko’rish uchun API
PATCH /publishers/:id + TOKEN | Nashriyotning ma’lumotini tahrirlash uchun API
DELETE /publishers/:id + TOKEN | Nashriyotni o’chirish uchun API
Publisher Schema: {
    name
    address
    phone
}

AUTHORS
POST /authors + TOKEN | Mualliflar qo’shish uchun API
GET /authors + TOKEN | Mualliflarlar ro’yxatini olish uchun API
GET /authors/:id + TOKEN | Bitta Mualliflarni ko’rish uchun API
PATCH /authors/:id + TOKEN | Mualliflarning ma’lumotini tahrirlash uchun API
DELETE /authors/:id + TOKEN | Mualliflarni o’chirish uchun API
Author Schema: {
    name
}

BOOKS
POST /books + TOKEN | Kitoblar qo’shish uchun API
GET /books + TOKEN | Kitoblarlar ro’yxatini olish uchun API
GET /books/:id + TOKEN | Bitta Kitoblarni ko’rish uchun API
PATCH /books/:id + TOKEN | Kitoblarning ma’lumotini tahrirlash uchun API
DELETE /books/:id + TOKEN | Kitoblarni o’chirish uchun API
Book Schema: {
    title
    publisher: Nashriyotning IDsi saqlanadi
    author: Authorning IDsi saqlanadi
    copies: Manashu kitob kutubxonada nechta bor ekanligi
}

LOANS
POST /loan + TOKEN | Ijaraga olingan kitob ma’lumotlarini tizimga kiritish,kitob maximal 2 oyga berib turiladi
GET /loan + TOKEN | Ijaraga olingan kitoblar ro’yxatini olish uchun API
GET /loan/:id + TOKEN | Bitta Ijaraga olingan kitoblarni ko’rish uchun API
PATCH /loan/:id + TOKEN | Ijaraga olingan kitoblarni ma’lumotini tahrirlash uchun API
DELETE /loan/:id + TOKEN | Ijaraga olingan kitoblarni o’chirish uchun API
Loan Schema: {
    book: Kitobning IDsi
    out_date: Berilgan sana, olib ketilgan sana
    due_date: Olib kelinishi kerak bo’lgan sana
    borrower: Kitobxon IDsi
}# Library-System-Backend
