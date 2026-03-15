export const bilgiIcerikleri = {
  nodejs: {
    baslik: "Node.js",
    altBaslik: "Sunucu Taraflı JavaScript",
    renk: "green",
    renkKodu: "#22c55e",
    ikon: "N",
    tapinak: "text-green-400",
    arkaPlan: "from-green-500/20 to-green-900/10",
    kenarRenk: "border-green-500/30",
    bolumler: [
      {
        baslik: "Node.js Nedir?",
        icerik:
          "Node.js, Chrome'un V8 JavaScript motorunu kullanarak JavaScript'i tarayıcı dışında, sunucu tarafında çalıştırmanızı sağlayan açık kaynaklı bir çalışma ortamıdır. Ryan Dahl tarafından 2009 yılında geliştirilmiştir. Olay tabanlı (event-driven), engellemesiz I/O (non-blocking I/O) mimarisi sayesinde yüksek performanslı ve ölçeklenebilir ağ uygulamaları geliştirmek için idealdir.",
      },
      {
        baslik: "Modül Sistemi",
        icerik:
          "Node.js, kodunuzu modüller halinde organize etmenizi sağlar. CommonJS (require) ve ES Modules (import) olmak üzere iki modül sistemi desteklenir.",
        kod: true,
        kodIcerigi: `// commonjs (geleneksel node.js yontemi)
const fs = require("fs");
const yardimcilar = require("./yardimcilar");

// es modüls (modern yontem — package.json'da "type": "modül")
import fs from "fs";
import { topla, cikar } from "./matematik.js";

// kendi modulunuzu olusturma
// matematik.js
export const topla = (a, b) => a + b;
export const cikar = (a, b) => a - b;`,
      },
      {
        baslik: "HTTP Sunucu Oluşturma",
        icerik:
          "Node.js'in dahili 'http' modülü ile birkaç satır kodla web sunucusu oluşturabilirsiniz. Daha karmaşık uygulamalar için Express.js gibi çatılar (framework) tercih edilir.",
        kod: true,
        kodIcerigi: `// dahili http modulu ile basit sunucu
const http = require("http");

const sunucu = http.createServer((istek, cevap) => {
  cevap.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  cevap.end("<h1>Merhaba Dünya!</h1>");
});

sunucu.listen(3000, () => {
  console.log("Sunucu 3000 portunda calisiyor...");
});

// express.js ile daha temiz bir yaklasim
const express = require("express");
const uygulama = express();

uygulama.get("/", (istek, cevap) => {
  cevap.json({ mesaj: "API calisiyor!" });
});

uygulama.listen(3000);`,
      },
      {
        baslik: "Dosya Sistemi (fs)",
        icerik:
          "Node.js'in 'fs' modülü, dosya okuma, yazma, silme ve dizin işlemleri gibi dosya sistemi operasyonlarını gerçekleştirmenizi sağlar. Hem senkron hem de asenkron versiyonları mevcuttur.",
        kod: true,
        kodIcerigi: `const fs = require("fs");

// dosya okuma (asenkron)
fs.readFile("veri.txt", "utf-8", (hata, icerik) => {
  if (hata) throw hata;
  console.log(icerik);
});

// dosya yazma
fs.writeFile("cikti.txt", "Merhaba Node.js!", (hata) => {
  if (hata) throw hata;
  console.log("Dosya yazildi!");
});

// promise tabanli modern kullanim
const fsPromises = require("fs").promises;

async function dosyaIslemleri() {
  const icerik = await fsPromises.readFile("veri.txt", "utf-8");
  await fsPromises.writeFile("kopya.txt", icerik);
  console.log("Kopyalama tamamlandi!");
}`,
      },
      {
        baslik: "NPM Paket Yöneticisi",
        icerik:
          "NPM (Node Package Manager), Node.js ile birlikte gelen ve dünyada en çok kullanılan paket yöneticisidir. Milyonlarca açık kaynak pakete erişim sağlar. Projelerinize kolayca bağımlılık ekleyebilir, scriptler tanımlayabilir ve kendi paketlerinizi yayınlayabilirsiniz.",
        kod: true,
        kodIcerigi: `// yeni proje baslatma
// terminal: npm init -y

// paket yukleme
// terminal: npm install express

// package.json ornek
{
  "name": "benim-projem",
  "version": "1.0.0",
  "scripts": {
    "baslat": "node index.js",
    "gelistir": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}`,
      },
      {
        baslik: "Express.js Middleware",
        icerik:
          "Middleware, Express.js'te istek (request) ve yanıt (response) arasında çalışan fonksiyonlardır. Kimlik doğrulama, loglama, hata yönetimi, CORS ayarları gibi işlemler middleware olarak yazılır. Her middleware next() fonksiyonunu çağırarak bir sonrakine geçer.",
        kod: true,
        kodIcerigi: `// loglama middleware
const loglamaMiddleware = (req, res, next) => {
  console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);
  next(); // bir sonraki middleware'e geç
};

// kimlik doğrulama middleware
const kimlikDogrula = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ hata: "Yetkilendirme gerekli" });
  }
  // token doğrulama işlemi...
  next();
};

// hata yönetimi middleware (4 parametre)
const hataYonetimi = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ hata: "Sunucu hatası" });
};

app.use(loglamaMiddleware);
app.get("/api/gizli", kimlikDogrula, (req, res) => {
  res.json({ mesaj: "Gizli veri" });
});
app.use(hataYonetimi);`,
      },
      {
        baslik: "Veritabanı Bağlantısı",
        icerik:
          "Node.js, MySQL, PostgreSQL, MongoDB, SQLite gibi farklı veritabanı sistemleriyle bağlantı kurabilir. Her veritabanı için özel npm paketleri mevcuttur. ORM (Object-Relational Mapping) araçları olarak Sequelize, Prisma veya Mongoose kullanılabilir.",
        kod: true,
        kodIcerigi: `// prisma orm ile veritabani işlemleri
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// kullanici oluşturma
const yeniKullanici = await prisma.kullanici.create({
  data: {
    isim: "Eren",
    email: "eren@ornek.com",
    yas: 22,
  },
});

// tüm kullanicilari getirme
const kullanicilar = await prisma.kullanici.findMany({
  where: { yas: { gte: 18 } },
  orderBy: { isim: "asc" },
});

// güncelleme
await prisma.kullanici.update({
  where: { id: 1 },
  data: { email: "yeni@ornek.com" },
});`,
      },
      {
        baslik: "Stream ve Buffer",
        icerik:
          "Stream'ler, veriyi parça parça (chunk) işlemeyi sağlayan yapılardır. Büyük dosyaları okurken veya ağ üzerinden veri aktarırken bellek verimliliği sağlar. Buffer ise ham ikili (binary) veriyi temsil eden bir yapıdır.",
        kod: true,
        kodIcerigi: `const fs = require("fs");

// stream ile büyük dosya okuma
const okumaStream = fs.createReadStream("buyuk_dosya.txt", {
  encoding: "utf-8",
  highWaterMark: 64 * 1024, // 64kb parçalar
});

okumaStream.on("data", (parca) => {
  console.log("Parça boyutu:", parca.length);
});

okumaStream.on("end", () => {
  console.log("Dosya tamamen okundu");
});

// pipe ile dosya kopyalama
const kaynak = fs.createReadStream("kaynak.txt");
const hedef = fs.createWriteStream("hedef.txt");
kaynak.pipe(hedef);

// transform stream
const { Transform } = require("stream");
const buyukHarf = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});
process.stdin.pipe(buyukHarf).pipe(process.stdout);`,
      },
      {
        baslik: "JWT ile Kimlik Doğrulama",
        icerik:
          "JSON Web Token (JWT), sunucu taraflı oturum tutmadan kullanıcı kimlik doğrulaması yapmak için kullanılır. Token içinde kullanıcı bilgileri şifreli olarak saklanır ve her istekte doğrulanır. Bu yaklaşım, özellikle API tabanlı uygulamalarda yaygındır.",
      },
      {
        baslik: "Hata Yönetimi ve Loglama",
        icerik:
          "Node.js uygulamalarında doğru hata yönetimi kritik öneme sahiptir. Express'te hata middleware'leri, async/await ile try-catch blokları, ve process.on('uncaughtException') gibi global hata yakalayıcılar kullanılır. Loglama için Winston veya Pino gibi kütüphaneler tercih edilir.",
      },
      {
        baslik: "Validation & Sanitization",
        icerik:
          "İstek doğrulama, güvenli bir API'nin temel taşıdır. Joi, Zod veya Express Validator ile gelen verinin şemasını tanımlayıp doğrulayabilirsiniz. Sanitization ise gelen veriden zararlı içeriği (XSS, SQL injection) temizleme işlemidir. Her iki işlem de middleware olarak uygulanabilir.",
      },
      {
        baslik: "Docker ile Containerization",
        icerik:
          "Docker, uygulamanızı tüm bağımlılıklarıyla birlikte container içinde paketlemenizi sağlar. Dockerfile ile imaj oluşturur, Docker Compose ile birden fazla servisi (Node.js + veritabanı) birlikte yönetirsiniz. CI/CD pipeline'ları ile otomatik test ve deploy süreçleri kurulabilir.",
      },
      {
        baslik: "GraphQL",
        icerik:
          "GraphQL, REST'e alternatif bir API sorgu dilidir. İstemci tam olarak ihtiyacı olan veriyi talep edebilir (over-fetching/under-fetching yok). Schema'da tip tanımları yapılır, Resolver fonksiyonları ile veri kaynağından veri getirilir. Mutation ile CRUD işlemleri, Subscription ile gerçek zamanlı veri akışı sağlanır. Apollo Server, Node.js için en popüler GraphQL sunucusudur.",
      },
      {
        baslik: "Rate Limiting & Güvenlik",
        icerik:
          "Rate limiting, belirli sürede yapılabilecek istek sayısını sınırlayarak DDoS ve brute force saldırılarını önler. express-rate-limit paketi ile kolayca uygulanır. Üretim ortamında Redis store kullanılmalıdır. 429 Too Many Requests kodu döndürülür. Helmet.js ile HTTP başlık güvenliği, CORS ile çapraz kaynak kontrolü sağlanır.",
      },
    ],
  },
javascript: {
    baslik: "JavaScript",
    altBaslik: "Web'in Programlama Dili",
    renk: "yellow",
    renkKodu: "#eab308",
    ikon: "JS",
    tapinak: "text-yellow-400",
    arkaPlan: "from-yellow-500/20 to-yellow-900/10",
    kenarRenk: "border-yellow-500/30",
    bolumler: [
      {
        baslik: "JavaScript Nedir?",
        icerik:
          "JavaScript, web sayfalarına etkileşim ve dinamik içerik eklemek için kullanılan, dünyanın en popüler programlama dillerinden biridir. 1995 yılında Brendan Eich tarafından Netscape için sadece 10 günde geliştirilmiştir. Başlangıçta yalnızca tarayıcılarda çalışan basit bir betik dili olarak tasarlanmış olsa da, bugün sunucu tarafında (Node.js), mobil uygulamalarda (React Native), masaüstü uygulamalarda (Electron) ve hatta yapay zekâ projelerinde bile kullanılmaktadır.",
      },
      {
        baslik: "Temel Veri Tipleri",
        kod: true,
        icerik: `// string (metin)
let isim = "Ahmet";

// number (sayi)
let yas = 25;

// boolean (mantiksal)
let aktifMi = true;

// array (dizi)
let renkler = ["kirmizi", "mavi", "yesil"];

// object (nesne)
let kullanici = {
  isim: "Ahmet",
  yas: 25,
  sehir: "Istanbul"
};`,
      },
      {
        baslik: "Fonksiyonlar",
        icerik:
          "Fonksiyonlar, belirli bir görevi yerine getirmek için bir araya getirilmiş kod bloklarıdır. JavaScript'te fonksiyonlar birinci sınıf vatandaştır, yani bir değişkene atanabilir, başka bir fonksiyona parametre olarak geçilebilir veya bir fonksiyondan döndürülebilir.",
        kod: true,
        kodIcerigi: `// klasik fonksiyon
function selamVer(isim) {
  return "Merhaba, " + isim + "!";
}

// arrow (ok) fonksiyonu — modern es6+ sözdizimi
const topla = (a, b) => a + b;

// callback fonksiyon kullanimi
const sayilar = [1, 2, 3, 4, 5];
const ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0);
// sonuc: [2, 4]`,
      },
      {
        baslik: "DOM Manipülasyonu",
        icerik:
          "DOM (Document Object Model), HTML belgelerinin programatik olarak değiştirilmesine olanak tanıyan bir arayüzdür. JavaScript ile sayfadaki elementleri seçebilir, içeriklerini değiştirebilir, stil ekleyebilir ve kullanıcı etkileşimlerini dinleyebilirsiniz.",
        kod: true,
        kodIcerigi: `// element secme
const baslik = document.getElementById("baslik");
const kutular = document.querySelectorAll(".kutu");

// icerik ve stil degistirme
baslik.textContent = "Yeni Baslik";
baslik.style.color = "blue";

// olay dinleyici (event listener)
baslik.addEventListener("click", () => {
  alert("Basliga tiklandi!");
});`,
      },
      {
        baslik: "Asenkron Programlama",
        icerik:
          "JavaScript tek iş parçacıklı (single-threaded) bir dildir, ancak asenkron programlama ile uzun süren işlemleri (API çağrıları, dosya okuma vb.) engellemeden yönetebilirsiniz. Modern JavaScript'te Promises ve async/await yapıları bu amaçla kullanılır.",
        kod: true,
        kodIcerigi: `// promise kullanimi
fetch("https:// api.example.com/veri")
  .then(cevap => cevap.json())
  .then(veri => console.log(veri))
  .catch(hata => console.error(hata));

// async/await — daha okunakli modern sözdizimi
async function veriGetir() {
  try {
    const cevap = await fetch("https:// api.example.com/veri");
    const veri = await cevap.json();
    console.log(veri);
  } catch (hata) {
    console.error("Hata:", hata);
  }
}`,
      },
      {
        baslik: "ES6+ Özellikler",
        icerik:
          "ECMAScript 2015 (ES6) ve sonraki sürümler, JavaScript'e devrim niteliğinde özellikler kazandırmıştır. Destructuring ile dizilerden ve objelerden değerleri kolayca çıkarabilir, spread/rest operatörleri ile verileri esnek şekilde yönetebilir, template literals ile string interpolation yapabilirsiniz.",
        kod: true,
        kodIcerigi: `// destructuring
const [a, b, ...kalan] = [1, 2, 3, 4, 5];
const { isim, yas, ...diger } = kullanici;

// spread operatörü
const yeniDizi = [...dizi1, ...dizi2];
const yeniObje = { ...obje1, ...obje2 };

// optional chaining ve nullish coalescing
const sehir = kullanici?.adres?.sehir ?? "Bilinmiyor";

// array destructuring ile swap
let x = 1, y = 2;
[x, y] = [y, x]; // x=2, y=1`,
      },
      {
        baslik: "Hata Yönetimi",
        icerik:
          "JavaScript'te hata yönetimi, uygulamanızın kararlılığını sağlamak için kritik öneme sahiptir. try-catch-finally bloğu ile hataları yakalayabilir, throw ile özel hatalar fırlatabilir, ve Error sınıfını genişleterek kendi hata tiplerinizi oluşturabilirsiniz.",
        kod: true,
        kodIcerigi: `// try-catch-finally
try {
  const veri = JSON.parse(gelen);
  islemYap(veri);
} catch (hata) {
  console.error("Parse hatası:", hata.message);
} finally {
  console.log("İşlem tamamlandı");
}

// özel hata sinifi
class DogrulamaHatasi extends Error {
  constructor(alan, mesaj) {
    super(mesaj);
    this.alan = alan;
    this.name = "DogrulamaHatasi";
  }
}

throw new DogrulamaHatasi("email", "Geçersiz email");`,
      },
      {
        baslik: "Dizi Yüksek Seviye Metodları",
        icerik:
          "JavaScript dizileri, fonksiyonel programlama tarzında veri işlemeyi mümkün kılan güçlü metodlara sahiptir. map(), filter(), reduce(), find(), some(), every() gibi metodlar, döngü yazmadan verileri dönüştürmenizi ve filtrelemenizi sağlar.",
        kod: true,
        kodIcerigi: `const urunler = [
  { isim: "Laptop", fiyat: 25000, stok: 5 },
  { isim: "Telefon", fiyat: 15000, stok: 0 },
  { isim: "Tablet", fiyat: 10000, stok: 3 },
];

// filter: stokta olan ürünler
const stoktakiler = urunler.filter(u => u.stok > 0);

// map: sadece isimleri al
const isimler = urunler.map(u => u.isim);

// reduce: toplam stok değeri
const toplamDeger = urunler.reduce(
  (toplam, u) => toplam + (u.fiyat * u.stok), 0
);

// find: i̇lk pahali ürün
const pahali = urunler.find(u => u.fiyat > 20000);

// some: herhangi biri stokta mi?
const stokVar = urunler.some(u => u.stok > 0); // true`,
      },
      {
        baslik: "Web API'leri",
        icerik:
          "Tarayıcılar, JavaScript ile kullanabileceğiniz zengin API'ler sunar. localStorage/sessionStorage ile veri saklayabilir, Fetch API ile HTTP istekleri yapabilir, Geolocation API ile konum bilgisi alabilir, Notification API ile bildirim gönderebilirsiniz.",
        kod: true,
        kodIcerigi: `// localstorage
localStorage.setItem("tema", "karanlik");
const tema = localStorage.getItem("tema");
localStorage.removeItem("tema");

// fetch api ile post isteği
const cevap = await fetch("/api/kullanici", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ isim: "Eren", yas: 22 }),
});

// intersection observer (lazy loading için)
const gozlemci = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
    }
  });
});`,
      },
      {
        baslik: "Class ve OOP",
        icerik:
          "ES6 ile gelen class sözdizimi, JavaScript'te nesne yönelimli programlamayı (OOP) daha temiz ve anlaşılır hale getirmiştir. Kalıtım (inheritance), kapsülleme (encapsulation) ve çok biçimlilik (polymorphism) gibi OOP prensiplerini uygulayabilirsiniz.",
        kod: true,
        kodIcerigi: `class Hayvan {
  #ses; // private alan

  constructor(isim, ses) {
    this.isim = isim;
    this.#ses = ses;
  }

  sesCikar() {
    return \`\${this.isim}: \${this.#ses}\`;
  }

  static turleriListele() {
    return ["Kedi", "Köpek", "Kuş"];
  }
}

class Kedi extends Hayvan {
  constructor(isim) {
    super(isim, "Miyav");
  }

  tirmanla() {
    return \`\${this.isim} ağaca tırmanıyor!\`;
  }
}

const kedi = new Kedi("Boncuk");
console.log(kedi.sesCikar()); // "boncuk: miyav"`,
      },
      {
        baslik: "Event Loop & Çalışma Mekanizması",
        icerik:
          "JavaScript tek iş parçacıklıdır (single-threaded) ancak Event Loop sayesinde asenkron işlemleri verimli şekilde yönetir. Call Stack fonksiyon çağrılarını, Callback Queue (Task Queue) zamanlayıcı ve I/O olaylarını, Microtask Queue ise Promise.then ve MutationObserver'ları tutar. Microtask'lar her zaman macrotask'lardan önce çalışır.",
        kod: true,
        kodIcerigi: `console.log("1: Senkron");

setTimeout(() => {
  console.log("2: Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Microtask (Promise)");
});

console.log("4: Senkron");

// çikti sirasi: 1, 4, 3, 2
// senkron kod ilk, sonra microtask, en son macrotask`,
      },
      {
        baslik: "this Bağlamı ve call/apply/bind",
        icerik:
          "JavaScript'te 'this' anahtar kelimesi, fonksiyonun nasıl çağrıldığına bağlı olarak farklı değerler alır. Global scope'ta window/global'ı, obje metodu olarak çağırıldığında objeyi işaret eder. Arrow function'lar kendi this'ini oluşturmaz, tanımlandığı bağlamın this'ini kullanır. call(), apply() ve bind() ile this bağlamı değiştirilebilir.",
        kod: true,
        kodIcerigi: `const kisi = {
  isim: "Ahmet",
  selamla() {
    console.log(\`Merhaba, \${this.isim}\`);
  }
};

kisi.selamla(); // "merhaba, ahmet"

const selamla = kisi.selamla;
selamla(); // "merhaba, undefined" (this kayboldu!)

// bind ile this'i sabitle
const bagliSelamla = kisi.selamla.bind(kisi);
bagliSelamla(); // "merhaba, ahmet"

// call ile farkli this
kisi.selamla.call({ isim: "Zeynep" }); // "merhaba, zeynep"`,
      },
      {
        baslik: "Design Patterns",
        icerik:
          "JavaScript'te yaygın tasarım desenleri kodunuzun kalitesini artırır. Singleton (tek örnek), Observer (gözlemci deseni — EventEmitter), Factory (fabrika — koşula göre obje üretme) ve Module (kapsülleme) en çok kullanılanlardır. Debounce/throttle gibi performans pattern'leri de arama ve scroll olaylarında kritik öneme sahiptir.",
      },
      {
        baslik: "Performans Optimizasyonu",
        icerik:
          "JavaScript performansı için memory leak'lerden kaçının: event listener'ları temizleyin, timer'ları clearInterval/clearTimeout ile durdurun. requestAnimationFrame() animasyonlar için setTimeout'tan daha verimlidir. Web Worker'lar ağır hesaplamaları ana thread'den ayırır. Chrome DevTools Performance sekmesiyle profiling yapabilirsiniz.",
      },
      {
        baslik: "Execution Context & Hoisting",
        icerik:
          "JavaScript kodu çalıştırılmadan önce bir Execution Context oluşturulur. İki aşaması vardır: Creation Phase (değişken ve fonksiyon bildirimleri belleğe alınır — hoisting) ve Execution Phase (kod satır satır çalışır). var ile tanımlanan değişkenler undefined olarak hoisting yapılırken, let/const Temporal Dead Zone'da kalır. Scope Chain ise iç scope'tan dış scope'a doğru değişken arama mekanizmasıdır.",
        kod: true,
        kodIcerigi: `// hoisting örneği
console.log(x); // undefined (var hoisting)
// console.log(y); // referenceerror! (tdz)
var x = 5;
let y = 10;

// fonksiyon hoisting
selamla(); // "merhaba!" (fonksiyon hoisting)
function selamla() { console.log("Merhaba!"); }

// scope chain
const dis = "dış";
function a() {
  const orta = "orta";
  function b() {
    const ic = "iç";
    console.log(dis, orta, ic); // hepsine erişebilir
  }
  b();
}`,
      },
      {
        baslik: "Execution Stack (Call Stack)",
        icerik:
          "JavaScript kodunun nasıl çalıştığını yöneten LIFO (Son Giren İlk Çıkar) mantığıyla çalışan bir veri yapısıdır. Bir fonksiyon çağrıldığında stack'in en üstüne eklenir (push). Fonksiyon çalışmasını bitirdiğinde ise stack'ten çıkarılır (pop). Çok fazla iç içe veya sonsuz döngü şeklinde fonksiyon çağrısı yapılırsa 'Maximum call stack size exceeded' hatası alınır.",
        kod: true,
        kodIcerigi: `function ucuncu() {
  console.log("En içteki");
}
function ikinci() {
  ucuncu(); // call stack'e 3. eklendi
}
function birinci() {
  ikinci(); // call stack'e 2. eklendi
}
birinci(); // call stack'e 1. eklendi`,
      },
      {
        baslik: "Debounce & Throttle",
        icerik:
          "Performans odaklı tasarım kalıplarıdır. Arama motorları veya pencere boyutlandırma (resize, scroll) gibi art arda çok hızlı tetiklenen olayların, gereksiz yere fonksiyon koşturmasını engellemek için kullanılır. Debounce: Bekleme süresi tamamen bitince 1 kez çalışır. Throttle: Belirli zaman aralığında düzenli olarak en fazla 1 kez çalışır.",
        kod: true,
        kodIcerigi: `// debounce: klavyeden yazmayi bitirince api isteği atmak için
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const aramaYap = debounce((kelime) => {
  console.log(kelime + " aranıyor...");
}, 500);

// kullanici hizlica "react" yazdiğinda sadece son harfte istek gider`,
      },
      {
        baslik: "Currying",
        icerik:
          "Çok parametre alan bir fonksiyonu, her biri tek parametre alan iç içe fonksiyonlar zincirine dönüştürme işlemidir. Daha önceden tanımlı yapılandırma (configuration) fonksiyonları üretmek ve fonksiyonları kompoze ederek yeniden kullanılabilirlik sağlamak için harikadır.",
        kod: true,
        kodIcerigi: `// klasik fonksiyon
function topla(a, b, c) { return a + b + c; }

// currying versiyonu
function curryTopla(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
// veya arrow function ile çok daha kisa:
const okTopla = a => b => c => a + b + c;

console.log(okTopla(1)(2)(3)); // 6`,
      },
      {
        baslik: "Partial Application",
        icerik:
          "Currying'e çok benzer ancak parametrelerin hepsini tamamen tek tek parçalamak zorunda değildir. Çok parametreli bir fonksiyonun, BAZI parametrelerini önceden sabit (bind) ederek, daha az parametre bekleyen yeni bir fonksiyon oluşturma (kısmi olarak uygulama) yöntemidir.",
        kod: true,
        kodIcerigi: `function logMessage(level, asama, mesaj) {
  console.log(\`[\${level}] \${asama}: \${mesaj}\`);
}

// partial application: ilk iki argümani sabitleyen yeni bir fonksiyon üretiyoruz.
// sadece 3. argümani (mesaj) alacak.
const errorLogDB = logMessage.bind(null, "ERROR", "Veritabanı");

// artik sadece mesaj vererek kullanabiliriz
errorLogDB("Bağlantı koptu"); // [error] veritabani: bağlanti koptu
errorLogDB("Tablo bulunamadı"); // [error] veritabani: tablo bulunamadi`,
      },
      {
        baslik: "Memoization",
        icerik:
          "Bir fonksiyonun (özellikle matematiksel/ağır algoritmaların) belirli bir girdi (parametre) ile çalıştığında ürettiği sonucu belleğe (cache) alarak; AYNI girdi ile tekrar çağrıldığında işlemi yeniden yapmak yerine bellekteki eski sonucu dönmesini sağlayan optimizasyon yöntemidir.",
        kod: true,
        kodIcerigi: `function cokYavasHesaplama(n) {
  // diyelim ki saniyeler süren işlem
  return n * 2;
}

const memoizedHesapla = (function () {
  const cache = {}; // bellek
  return function (n) {
    if (n in cache) {
      console.log("Bellekten okunuyor");
      return cache[n];
    }
    console.log("İlk kez hesaplanıyor");
    let sonuc = cokYavasHesaplama(n);
    cache[n] = sonuc;
    return sonuc;
  };
})();

memoizedHesapla(5); // i̇lk kez hesaplaniyor
memoizedHesapla(5); // bellekten okunuyor`,
      },
      {
        baslik: "Deep vs Shallow Copy",
        icerik:
          "JavaScript'te referans tipler (Object, Array) kopyalanırken sığ kopyalama (Shallow Copy) yapıldığında bellekteki referans ucu değişmez; yani kopya değiştirilirse orijinal veri de bozulur. Bütün iç içe (nested) verileri birbirinden TAMAMEN koparmak için Deep Copy (Derin Kopyalama) yapılmalıdır.",
        kod: true,
        kodIcerigi: `const orjinal = { isim: "Eren", adres: { sehir: "İstanbul" } };

// shallow copy (siğ kopya) - sadece ilk seviyeyi kopyalar
const sigKopya = { ...orjinal };
sigKopya.adres.sehir = "Ankara"; 
// di̇kkat: orjinal.adres.sehir de "ankara" oldu!

// deep copy (derin kopya) - eski ama yaygin yöntem
const derinKopya = JSON.parse(JSON.stringify(orjinal));

// deep copy - modern yerleşik yöntem (node v17+ / güncel tarayicilar)
const modernDerinKopya = structuredClone(orjinal);`,
      },
      {
        baslik: "Immutable Data",
        icerik:
          "Oluşturulduktan sonra durumu/içeriği DEĞİŞTİRİLEMEYEN verilerdir. Redux ve React tabanlı modern uygulamalarda 'veriyi asla doğrudan ezme/düzenleme, yeni bir kopyasını oluştur' felsefesi esastır. Hata takibini kolaylaştırır, state'in beklenmedik yan etkiler (side effect) ile bozulmasını önler.",
        kod: true,
        kodIcerigi: `const kullanici = { id: 1, puan: 50 };

// kötü ve mutable yaklaşim (orijinali bozar)
// kullanici.puan = 100;

// i̇yi̇ ve immutable yaklaşim (yeni obje döndürür)
const güncelKullanici = {
  ...kullanici,
  puan: 100
};

// objenin değişmesini tamamen kitlemek
const dondurulmus = Object.freeze({ aktif: true });
// dondurulmus.aktif = false; // "strict mode" kullanilmazsa hata vermez ama değişmez`,
      },
      {
        baslik: "Optional Chaining (?.)",
        icerik:
          "Bir nesnenin iç içe özelliklerine o özellik gerçekten VAR MI? diye sormadan güvenle erişebilmemizi sağlar. Aksi takdirde, var olmayan (undefined/null) bir nesnenin alt özelliğine okumak 'TypeError: Cannot read properties of undefined' hatası vererek programı çökertecektir.",
        kod: true,
        kodIcerigi: `const kullanici = { 
  isim: "Ali",
  // iletisim nesnesi yok (undefined)
};

// eski yöntem (uzun ve okumasi zor)
const sehir1 = kullanici && kullanici.iletisim && kullanici.iletisim.sehir;

// optional chaining (?.) ile modern kullanim
const sehir2 = kullanici?.iletisim?.sehir;
// hata vermez, güvenli bir şekilde döner: undefined`,
      },
      {
        baslik: "Nullish Coalescing (??)",
        icerik:
          "Sadece NULL veya UNDEFINED olan durumlarda varsayılan sağdaki değeri kullanmak için geliştirilen bir operatördür. Eski || (OR) operatöründen farkı; 0 (Sıfır), '' (boş string) veya false gibi JavaScript'in teknik anlamda sahte (falsy) saydığı ama bizim için 'gerçek bir değer/rakam' olan verileri EZMEZ.",
        kod: true,
        kodIcerigi: `const miktar = 0;

// || (or) operatörü 0'i falsy görür ve ezer
const eskiHesap = miktar || 10; 
console.log(eskiHesap); // 10 çikar! (0 silindi)

// ?? (nullish) sadece null ve undefined siler
const yeniHesap = miktar ?? 10; 
console.log(yeniHesap); // 0 çikar. doğru çalişti.

const bosDeger = null ?? "Varsayılan"; // "varsayilan"`,
      },
      {
        baslik: "Dynamic import()",
        icerik:
          "JavaScript'te geleneksel 'import' komutları dosya en tepesinde ve senkron olarak çalışır. Dynamic import (import()) ise ES2020 ile gelen bir özelliktir. İlgili modülü yalnızca istendiği anda (örneğin bir butona tıklanınca) GECİKMELİ (Lazy load) yükleyerek uygulamanın ilk açılış süresini (initial load time) ciddi şekilde hızlandırır. Geriye bir Promise döner.",
        kod: true,
        kodIcerigi: `// geleneksel (statik) i̇çe aktarma - sayfa açilirken yüklenir
// import { agirmatematik } from './hesap.js';

document.getElementById('hesaplaBtn').addEventListener('click', async () => {
  try {
    // sadece butona tiklandiğinda dosyayi (hesap.js) ağdan indirir!
    const module = await import('./hesap.js');
    module.agirMatematik(500);
  } catch (err) {
    console.error("Modül yüklenemedi", err);
  }
});`,
      },
      {
        baslik: "Tree Shaking",
        icerik:
          "Uygulamanın çalıştırılabilir kod pakedi (bundle) oluşturulurken (build aşamasında), projede hiçbir zaman KULLANILMAYAN, çağrılmayan ölü kodların (dead code) tespit edilip paket dosyasının içinden tamamen SİLİNMESİ işlemidir. Webpack, Rollup veya Vite gibi araçlar ES Modülleri (import/export) üzerinden statik analiz yaparak Tree Shaking gerçekleştirir.",
        kod: true,
        kodIcerigi: `// araclar.js
export const kullanilan = () => "Ben çalıştırıldım!";
export const gereksiz = () => "Beni kimse çağırmadı"; // bu fonk. silinecek

// main.js
import { kullanilan } from './araclar.js';
console.log(kullanilan());

// build alindiğinda "gereksiz" fonksiyonu final .js dosyasina asla dahil edilmez.`,
      },
      {
        baslik: "Module Bundling Mantığı",
        icerik:
          "Modern web projeleri yüzlerce farklı .js parçasına, kütüphanelere, css dosyalarına, görsellere bölünmüştür. Tarayıcı tüm bu yüzlerce dosyaya tek tek istek atıp indiremez (çok yavaşlar). Module Bundler (Webpack, Parcel, Vite, Rollup), projeyi okur ve tarayıcının kolayca anlayabileceği 1 veya birkaç tane sıkıştırılmış dev JS (ve CSS) paketi 'bundle' haline getirir.",
      },
      {
        baslik: "LocalStorage vs SessionStorage",
        icerik:
          "İkisi de kullanıcının tarayıcısında (client-side) veri tutmak için oluşturulmuş Web Storage API özellikleridir. Aralarındaki TEK FARK yaşam ömrüdür. LocalStorage, kullanıcı eliyle silene kadar tarayıcıyı kapatsa bile yıllarca kalır (Oturum kaydetme, tema tercihleri). SessionStorage ise o anki tarayıcı sekmesi (tab) kapatıldığında anında SİLİNİR (Tek kullanımlık form verileri). Her ikisi de sadece String kaydeder ve ortalama 5MB kapasiteleri vardır.",
      },
      {
        baslik: "Cookies (Çerezler)",
        icerik:
          "Storage mekanizmalarından farklı olarak Cookies (Çerezler), sadece frontend'de durmakla kalmaz; o domaine yapılan HER HTTP İSTEĞİNDE sunucuya OTOMATİK olarak yollanır (Header içinde). Kapasiteleri çok küçüktür (4KB). Bu yüzden performans düşürmemesi için sadece JWT token'ları, oturum kimliği (Session ID) gibi sunucunun bilmesi GEREKEN şeyler yazılmalıdır. 'HttpOnly' bayrağı ile Javascript'ten okumaya kapatılıp XSS saldırısına karşı güvenli hale getirilebilir.",
        kod: true,
        kodIcerigi: `// localstorage - json dönüşümü şart
localStorage.setItem("user", JSON.stringify({id: 1}));
const user = JSON.parse(localStorage.getItem("user"));

// cookies okuma / yazma (çok ilkel bir sözdizimi vardir)
document.cookie = "tema=karanlik; max-age=3600; path=/"; 
// 1 saat (3600 sn) ömürlü çerez`,
      },
      {
        baslik: "Fetch API Derin Anlatım",
        icerik:
          "Eski XMLHttpRequest(AJAX)'in modern, Promise yapısına sahip alternatifidir. fetch() sunucudan bir cevap aldığında, HTTP 404 (Bulunamadı) veya 500 (Sunucu Hatası) kodu gelse BİLE Promise'i başarlı (resolve) olarak döner! Fetch'in hata fırlattığı (reject) TEK DURUM internet/ağ kesintisidir. O yüzden gelen cevabın 'response.ok' (durum 200-299 arası) olup olmadığını mutlaka kontrol etmek gerekir.",
        kod: true,
        kodIcerigi: `fetch("https:// api.ornek.com/veriler")
  .then(response => {
    // 404 gelse bile buraya girer! manuel kontrol edilmeli:
    if (!response.ok) {
      throw new Error("HTTP Hatası: " + response.status);
    }
    return response.json(); // stream bitene okuyup json'a çevir (promise döner)
  })
  .then(data => console.log(data))
  .catch(error => console.error("Bağlantı/Parse hatası:", error));`,
      },
      {
        baslik: "AbortController",
        icerik:
          "Uzun süren bir olay dinleyicisini veya bir Ağ İsteğini (Fetch Request) iptal etmeye yarayan yerleşik bir sınıftır. Örneğin: Kullanıcı 'Kaydet' butonuna bastı ama işlem çok sürdü, vazgeçip 'İptal'e bastı. Bu durumda asılı kalan Fetch isteğini arka planda kapatmak sunucu ve cihaz kaynaklarını koruyacaktır.",
        kod: true,
        kodIcerigi: `// 1. controller oluştur
const controller = new AbortController();
const signal = controller.signal;

// 2. fetch'e sinyali bağla
fetch('https:// yavas-api.com/veri', { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') console.log("İstek kullanıcı tarafından iptal edildi!");
  });

// 3. i̇stediğin bir komutta iptal et
document.getElementById("iptalBtn").addEventListener("click", () => {
  controller.abort(); // i̇şte burasi fetch'i öldürür
});`,
      },
      {
        baslik: "Service Workers",
        icerik:
          "Tarayıcı ile Ağ İstekleri arasına giren bir Proxy (Vekil) gibidir. Sitenin arka planında, sayfadan tamamen yalıtılmış bir thread (iş parçacığı) olarak koşturur (DOM erişimi YOKTUR). İnternet gittiğinde kullanıcıya eski sayfaları ve 'Dinazor oyunu' yerine tamamen Çevrimdışı (Offline) çalışan siteler (PWA - Progressive Web App) yapmamıza ve bildirim göndermemize (Push Notifications) olanak tanır. Yalnızca HTTPS üzerinden çalışır.",
      },
      {
        baslik: "WebSockets",
        icerik:
          "Klasik HTTP modeli tek yönlüdür: İstemci istek atar, Sunucu yanıt döner ve bağlantı kopar. WebSockets ise WSS veya WS protokolü üstünde İstemci ve Sunucu arasında Kapanmayan, İki Yönlü, Gerçek Zamanlı bir tüp (TCP bağlantısı) oluşturur. Canlı maç sonuçları borsa grafik güncellemeleri, veya chat (sohbet) uygulamalarında sunucunun anlık olarak frontend'i dürtmesini sağlar.",
        kod: true,
        kodIcerigi: `// bağlantiyi aç
const socket = new WebSocket('wss:// api.sohbet.com');

// bağlanti başarili olunca
socket.addEventListener('open', function (event) {
    socket.send('Kullanıcı sunucuya giriş yaptı!');
});

// sunucudan anlik yepyeni mesaj gelirse yakala ve çaliştir
socket.addEventListener('message', function (event) {
    console.log('Sunucudan gelen mesaj: ', event.data);
    ekranaEkle(event.data);
});`,
      },
      {
        baslik: "Streams API",
        icerik:
          "Streaming (Akış), devasa boyutlardaki (örn. 5 GB) bir veriyi işlerken bilgisayarın o verinin tamamını belleğe (RAM) indirene kadar beklemesi problemini çözer. Veriyi tıpkı bir YouTube videosu izler gibi Parçalar (Chunks) halinde okumanıza ve o anda işlemeye başlamanıza imkan tanır. Fetch işlemlerinin `.body` kısmında ReadableStream verilir ve bir döngü ile okuyucu alınarak parça parça işlenir.",
      },
    ],
  },

  react: {
    baslik: "React",
    altBaslik: "Kullanıcı Arayüzü Kütüphanesi",
    renk: "sky",
    renkKodu: "#0ea5e9",
    ikon: "⚛️",
    tapinak: "text-sky-400",
    arkaPlan: "from-sky-500/20 to-sky-900/10",
    kenarRenk: "border-sky-500/30",
    bolumler: [
      {
        baslik: "React Nedir?",
        icerik:
          "React, Facebook (Meta) tarafından geliştirilen, kullanıcı arayüzleri oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Bileşen (component) tabanlı mimarisi sayesinde, karmaşık arayüzleri küçük, yeniden kullanılabilir parçalara bölerek geliştirmenizi sağlar. Virtual DOM kullanarak yalnızca değişen kısımları günceller, bu da onu son derece performanslı kılar.",
      },
      {
        baslik: "JSX Sözdizimi",
        icerik:
          "JSX (JavaScript XML), React'te HTML benzeri sözdizimi kullanmanızı sağlayan bir uzantıdır. JavaScript kodunuzun içinde doğrudan UI yapınızı tanımlayabilirsiniz.",
        kod: true,
        kodIcerigi: `// jsx ile bir react bileseni
function KarsilamaKarti({ isim, mesaj }) {
  return (
    <div className="kart">
      <h2>Merhaba, {isim}!</h2>
      <p>{mesaj}</p>
      <button onClick={() => alert("Tiklandi!")}>
        Tikla
      </button>
    </div>
  );
}`,
      },
      {
        baslik: "Hooks (Kancalar)",
        icerik:
          "React Hooks, fonksiyonel bileşenlerde state (durum) ve yaşam döngüsü özelliklerini kullanmanızı sağlar. En çok kullanılan iki hook useState ve useEffect'tir.",
        kod: true,
        kodIcerigi: `import { useState, useEffect } from "react";

function Sayac() {
  // usestate: bilesende durum yonetimi
  const [sayi, sayiAyarla] = useState(0);

  // useeffect: yan etkiler (api cagrilari, abonelikler vb.)
  useEffect(() => {
    document.title = \`Sayac: \${sayi}\`;
  }, [sayi]); // sayi degistiginde calisir

  return (
    <div>
      <p>Sayi: {sayi}</p>
      <button onClick={() => sayiAyarla(sayi + 1)}>
        Artir
      </button>
    </div>
  );
}`,
      },
      {
        baslik: "Props ve State",
        icerik:
          "Props (özellikler), üst bileşenden alt bileşene veri aktarmak için kullanılır ve salt okunurdur. State (durum) ise bileşenin kendi iç verisini temsil eder ve değiştirilebilir. Bu ikisi birlikte React'in veri akışının temelini oluşturur.",
        kod: true,
        kodIcerigi: `// props: ust bilesenden alt bilesene veri akisi
function KullaniciBilgisi({ isim, yas }) {
  return <p>{isim} - {yas} yasinda</p>;
}

// state: bilesenin kendi ic durumu
function GirisFormu() {
  const [email, emailAyarla] = useState("");

  return (
    <input
      value={email}
      onChange={(e) => emailAyarla(e.target.value)}
      placeholder="E-posta adresiniz"
    />
  );
}

// kullanim
<KullaniciBilgisi isim="Eren" yas={22} />`,
      },
      {
        baslik: "Koşullu Render ve Listeler",
        icerik:
          "React'te koşullu render ile belirli durumlarla farklı UI gösterebilir, dizileri map() ile listeleyebilirsiniz.",
        kod: true,
        kodIcerigi: `function GorevListesi({ gorevler }) {
  if (gorevler.length === 0) {
    return <p>Gorev bulunmuyor</p>;
  }

  return (
    <ul>
      {gorevler.map((gorev) => (
        <li key={gorev.id}>
          {gorev.tamamlandi ? "✅" : "⬜"} {gorev.baslik}
        </li>
      ))}
    </ul>
  );
}`,
      },
      {
        baslik: "useContext ile Veri Paylaşımı",
        icerik:
          "Context API, React uygulamalarında bileşen ağacının derinliklerindeki bileşenlere veri aktarmak için kullanılır. Tema, dil tercihi, kullanıcı oturumu gibi küresel verileri, prop drilling yapmadan paylaşmanızı sağlar.",
        kod: true,
        kodIcerigi: `import { createContext, useContext, useState } from "react";

// context oluştur
const TemaContext = createContext();

// provider bileşeni
function TemaProvider({ children }) {
  const [tema, temaAyarla] = useState("karanlik");

  return (
    <TemaContext.Provider value={{ tema, temaAyarla }}>
      {children}
    </TemaContext.Provider>
  );
}

// alt bileşende kullanim
function TemaDugmesi() {
  const { tema, temaAyarla } = useContext(TemaContext);
  return (
    <button onClick={() => temaAyarla(
      tema === "karanlik" ? "aydinlik" : "karanlik"
    )}>
      Tema: {tema}
    </button>
  );
}`,
      },
      {
        baslik: "React Router ile Sayfa Yönlendirme",
        icerik:
          "React Router, tek sayfa uygulamalarında (SPA) çoklu sayfa navigasyonu sağlayan en popüler yönlendirme kütüphanesidir. URL'e göre farklı bileşenleri render eder ve sayfa yenilenmeden geçiş yapmanızı sağlar.",
        kod: true,
        kodIcerigi: `import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Uygulama() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/hakkimizda">Hakkımızda</Link>
        <Link to="/kullanici/123">Profil</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/kullanici/:id" element={<Profil />} />
        <Route path="*" element={<Sayfa404 />} />
      </Routes>
    </BrowserRouter>
  );
}

// url parametresi kullanimi
function Profil() {
  const { id } = useParams();
  return <h1>Kullanıcı ID: {id}</h1>;
}`,
      },
      {
        baslik: "State Yönetimi Stratejileri",
        icerik:
          "React uygulamalarında state yönetimi, uygulamanın karmaşıklığına göre farklı stratejiler gerektirir. Küçük uygulamalar için useState ve useReducer yeterli olabilir. Orta ölçekli uygulamalarda Context API, büyük uygulamalarda ise Redux, Zustand veya Recoil gibi harici state yönetim kütüphaneleri tercih edilir.",
      },
      {
        baslik: "Performans Optimizasyonu",
        icerik:
          "React uygulamalarının performansını artırmak için birçok teknik mevcuttur. React.memo() ile gereksiz render'ları önleyebilir, useMemo ve useCallback ile pahalı hesaplamaları ve fonksiyon referanslarını cache'leyebilir, React.lazy() ve Suspense ile code splitting uygulayabilirsiniz.",
        kod: true,
        kodIcerigi: `import { memo, useMemo, useCallback } from "react";

// react.memo ile gereksiz render'lari önleme
const KartBileseni = memo(function Kart({ baslik, icerik }) {
  return (
    <div className="kart">
      <h3>{baslik}</h3>
      <p>{icerik}</p>
    </div>
  );
});

// usememo ile pahali hesaplama
function Istatistikler({ veriler }) {
  const ortalama = useMemo(() => {
    return veriler.reduce((t, v) => t + v, 0) / veriler.length;
  }, [veriler]);

  return <p>Ortalama: {ortalama}</p>;
}

// usecallback ile fonksiyon referansi
function EbeveynBilesen() {
  const islemYap = useCallback((id) => {
    console.log("İşlem:", id);
  }, []);

  return <AltBilesen onIslem={islemYap} />;
}`,
      },
      {
        baslik: "Custom Hooks",
        icerik:
          "Custom hooks, React'ta tekrar eden mantığı çıkarmanın ve paylaşmanın en güçlü yoludur. 'use' ile başlayan fonksiyonlar olarak tanımlanır ve içlerinde diğer hook'ları kullanabilirler. Örneğin fetch işlemleri, form yönetimi veya localStorage senkronizasyonu gibi ortak kalıpları hook olarak soyutlayabilirsiniz.",
        kod: true,
        kodIcerigi: `// özel hook: api'den veri çekme
function useVeriGetir(url) {
  const [veri, veriAyarla] = useState(null);
  const [yukleniyor, yukleniyorAyarla] = useState(true);
  const [hata, hataAyarla] = useState(null);

  useEffect(() => {
    async function getir() {
      try {
        yukleniyorAyarla(true);
        const cevap = await fetch(url);
        const json = await cevap.json();
        veriAyarla(json);
      } catch (e) {
        hataAyarla(e.message);
      } finally {
        yukleniyorAyarla(false);
      }
    }
    getir();
  }, [url]);

  return { veri, yukleniyor, hata };
}

// kullanimi
function KullaniciListesi() {
  const { veri, yukleniyor } = useVeriGetir("/api/kullanicilar");
  if (yukleniyor) return <p>Yükleniyor...</p>;
  return veri.map(k => <p key={k.id}>{k.isim}</p>);
}`,
      },
      {
        baslik: "Olay Yönetimi (Events)",
        icerik:
          "React'te olaylar camelCase ile yazılır (onClick, onChange). Event handler'lara parametre geçmek için arrow function kullanılır. SyntheticEvent, React'ın tarayıcılar arası tutarlılık sağlayan olay sarmalayıcısıdır. e.preventDefault() varsayılan davranışı, e.stopPropagation() olay yayılımını engeller.",
      },
      {
        baslik: "State Kaldırma (Lifting State Up)",
        icerik:
          "İki kardeş bileşen aynı veriye ihtiyaç duyduğunda, state ortak üst bileşene taşınır ve props ile alt bileşenlere aktarılır. Alt bileşenler, üst bileşenden aldıkları callback fonksiyonları aracılığıyla state'i güncelleyebilir. Bu pattern React'ın tek yönlü veri akışının temelidir.",
      },
      {
        baslik: "Erişilebilirlik (Accessibility)",
        icerik:
          "Web erişilebilirliği (a11y), engelli bireylerin de uygulamanızı kullanabilmesini sağlar. Semantik HTML etiketleri (<button>, <nav>, <main>) kullanın. aria-label, aria-hidden gibi ARIA attribute'ları ekran okuyuculara bilgi verir. tabIndex ile klavye navigasyonunu destekleyin. React'ta eslint-plugin-jsx-a11y ile erişilebilirlik kontrolleri yapabilirsiniz.",
      },
      {
        baslik: "Composition Pattern & HOC",
        icerik:
          "React'ta inheritance yerine composition tercih edilir. children prop'u ile bileşenler esnek içerik alabilir. Render props, bir fonksiyonu prop olarak geçerek render mantığını paylaşmayı sağlar. Higher-Order Component (HOC), bir bileşeni alıp genişletilmiş yeni bileşen döndüren fonksiyondur. Custom Hook'lar modern React'ta HOC'lerin yerini büyük ölçüde almıştır.",
      },
    ],
  },

  sql: {
    baslik: "SQL",
    altBaslik: "Veritabanı Sorgulama Dili",
    renk: "purple",
    renkKodu: "#a855f7",
    ikon: "DB",
    tapinak: "text-purple-400",
    arkaPlan: "from-purple-500/20 to-purple-900/10",
    kenarRenk: "border-purple-500/30",
    bolumler: [
      {
        baslik: "SQL Nedir?",
        icerik:
          "SQL (Structured Query Language — Yapılandırılmış Sorgu Dili), ilişkisel veritabanlarıyla iletişim kurmak için kullanılan standart bir sorgulama dilidir. 1970'lerde IBM'de geliştirilmiş olup, bugün MySQL, PostgreSQL, SQLite, Microsoft SQL Server ve Oracle gibi tüm büyük veritabanı yönetim sistemleri tarafından desteklenmektedir. Veri eklemek, sorgulamak, güncellemek ve silmek için kullanılır.",
      },
      {
        baslik: "Temel CRUD İşlemleri",
        icerik:
          "CRUD, veritabanı işlemlerinin dört temel operasyonunu temsil eder: Create (Oluştur), Read (Oku), Update (Güncelle), Delete (Sil).",
        kod: true,
        kodIcerigi: `-- CREATE: Veri ekleme
INSERT INTO kullanicilar (isim, email, yas)
VALUES ('Ahmet', 'ahmet@ornek.com', 25);

-- READ: Veri sorgulama
SELECT * FROM kullanicilar;
SELECT isim, email FROM kullanicilar WHERE yas > 20;

-- UPDATE: Veri guncelleme
UPDATE kullanicilar
SET email = 'yeni@ornek.com'
WHERE isim = 'Ahmet';

-- DELETE: Veri silme
DELETE FROM kullanicilar WHERE isim = 'Ahmet';`,
      },
      {
        baslik: "Tablo Oluşturma ve Veri Tipleri",
        icerik:
          "SQL'de veriler tablolarda saklanır. Her tablonun sütunları (kolonları) ve her sütunun bir veri tipi vardır. CREATE TABLE komutuyla yeni tablolar oluşturabilirsiniz.",
        kod: true,
        kodIcerigi: `-- Yeni tablo olusturma
CREATE TABLE ogrenciler (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  isim      VARCHAR(100) NOT NULL,
  email     VARCHAR(255) UNIQUE,
  yas       INTEGER,
  bolum     VARCHAR(50) DEFAULT 'Belirsiz',
  kayit_tarihi DATE DEFAULT CURRENT_DATE
);

-- Tablo yapisi degistirme
ALTER TABLE ogrenciler
ADD COLUMN telefon VARCHAR(15);

-- Tabloyu silme
DROP TABLE IF EXISTS ogrenciler;`,
      },
      {
        baslik: "JOIN İşlemleri",
        icerik:
          "JOIN, birden fazla tabloyu ortak sütunlar üzerinden birleştirerek tek bir sonuç kümesi elde etmenizi sağlar. En çok kullanılan türleri INNER JOIN, LEFT JOIN, RIGHT JOIN ve FULL JOIN'dir.",
        kod: true,
        kodIcerigi: `-- INNER JOIN: Her iki tabloda da eslesen kayitlar
SELECT s.isim, d.ders_adi, n.puan
FROM ogrenciler s
INNER JOIN notlar n ON s.id = n.ogrenci_id
INNER JOIN dersler d ON d.id = n.ders_id;

-- LEFT JOIN: Sol tablodaki tum kayitlar + sagdaki eslesenler
SELECT s.isim, n.puan
FROM ogrenciler s
LEFT JOIN notlar n ON s.id = n.ogrenci_id;

-- Ornek: Hic notu olmayan ogrenciler
SELECT s.isim
FROM ogrenciler s
LEFT JOIN notlar n ON s.id = n.ogrenci_id
WHERE n.id IS NULL;`,
      },
      {
        baslik: "Gruplama ve Aggregate Fonksiyonlar",
        icerik:
          "SQL'de GROUP BY ile verileri gruplandırabilir, SUM, COUNT, AVG, MIN, MAX gibi aggregate fonksiyonlarla özet bilgiler çıkarabilirsiniz.",
        kod: true,
        kodIcerigi: `-- Her bolumdeki ogrenci sayisi
SELECT bolum, COUNT(*) AS ogrenci_sayisi
FROM ogrenciler
GROUP BY bolum
ORDER BY ogrenci_sayisi DESC;

-- Her ogrencinin not ortalamasi
SELECT s.isim, AVG(n.puan) AS ortalama
FROM ogrenciler s
JOIN notlar n ON s.id = n.ogrenci_id
GROUP BY s.isim
HAVING AVG(n.puan) > 70;

-- En basarili ogrenci
SELECT s.isim, SUM(n.puan) AS toplam_puan
FROM ogrenciler s
JOIN notlar n ON s.id = n.ogrenci_id
GROUP BY s.isim
ORDER BY toplam_puan DESC
LIMIT 1;`,
      },
      {
        baslik: "Alt Sorgular (Subqueries)",
        icerik:
          "Alt sorgular, başka bir sorgunun içine gömülen SELECT sorgularıdır. WHERE, FROM veya SELECT ifadelerinin içinde kullanılabilirler. Karşılaştırma, filtreleme veya hesaplama amaçlı kullanımı yaygındır.",
        kod: true,
        kodIcerigi: `-- Ortalamanın üstündeki öğrenciler (WHERE alt sorgu)
SELECT isim, puan
FROM ogrenciler
WHERE puan > (SELECT AVG(puan) FROM ogrenciler);

-- En yüksek puana sahip öğrenci
SELECT isim, puan
FROM ogrenciler
WHERE puan = (SELECT MAX(puan) FROM ogrenciler);

-- Siparişi olan müşteriler (EXISTS)
SELECT * FROM musteriler m
WHERE EXISTS (
  SELECT 1 FROM siparisler s
  WHERE s.musteri_id = m.id
);`,
      },
      {
        baslik: "View (Görünüm) Oluşturma",
        icerik:
          "View, sık kullanılan karmaşık sorguları kaydederek sanal bir tablo olarak erişmenizi sağar. Güvenlik açısından hassas sütunları gizlemek için de kullanılır.",
        kod: true,
        kodIcerigi: `-- Görünüm oluşturma
CREATE VIEW aktif_ogrenciler AS
SELECT o.isim, o.email, b.bolum_adi
FROM ogrenciler o
JOIN bolumler b ON o.bolum_id = b.id
WHERE o.aktif = true;

-- Görünümü kullanma (normal tablo gibi)
SELECT * FROM aktif_ogrenciler
WHERE bolum_adi = 'Bilgisayar Mühendisliği';

-- Görünümü silme
DROP VIEW IF EXISTS aktif_ogrenciler;`,
      },
      {
        baslik: "Transaction (Işlem) Yönetimi",
        icerik:
          "Transaction, birden fazla SQL komutunun atomik olarak çalıştırılmasını sağlar. 'Ya hepsi ya hiçbiri' prensibiyle çalışır. Banka transferleri gibi kritik işlemlerde veri bütünlüğünü korur.",
        kod: true,
        kodIcerigi: `-- Para transferi örneği
BEGIN TRANSACTION;

-- Gönderenin bakiyesini azalt
UPDATE hesaplar
SET bakiye = bakiye - 1000
WHERE hesap_no = 'A001';

-- Alıcının bakiyesini artır
UPDATE hesaplar
SET bakiye = bakiye + 1000
WHERE hesap_no = 'B002';

-- Her şey başarılıysa onayla
COMMIT;

-- Hata olursa geri al
-- ROLLBACK;`,
      },
      {
        baslik: "Window Functions",
        icerik:
          "Window Functions (Pencere Fonksiyonları), GROUP BY gibi satırları birleştirmeden, her satır için hesaplama yapmanızı sağlar. Sıralama, kimin sıralı toplamları, yüzdelik dilimler gibi gelişmiş analizler için kullanılır.",
        kod: true,
        kodIcerigi: `-- Her öğrencinin sıralaması (bölüm içinde)
SELECT isim, bolum, puan,
  RANK() OVER (PARTITION BY bolum ORDER BY puan DESC) AS siralama
FROM ogrenciler;

-- Kümülatif toplam
SELECT tarih, tutar,
  SUM(tutar) OVER (ORDER BY tarih) AS kumulatif_toplam
FROM satislar;

-- Her satır için ortalamaya göre karşılaştırma
SELECT isim, puan,
  AVG(puan) OVER () AS genel_ortalama,
  puan - AVG(puan) OVER () AS fark
FROM ogrenciler;`,
      },
      {
        baslik: "Normalizasyon",
        icerik:
          "Veritabanı normalizasyonu, veri tekrarını azaltmak ve veri bütünlüğünü sağlamak için tabloları organize etme sürecidir. 1NF (Birinci Normal Form), 2NF, 3NF ve BCNF gibi seviyeleri vardır. Her seviye, belirli türde veri anomalilerini önler.",
      },
      {
        baslik: "CASE WHEN İfadeleri",
        icerik:
          "CASE WHEN, SQL sorgularında koşullu mantık uygulamanın yoludur. Programlama dillerindeki if-else yapısına benzer. SELECT, UPDATE, ORDER BY ve WHERE ifadelerinin içinde kullanılabilir. Veri kategorilendirme, koşullu güncelleme ve dinamik sıralama için vazgeçilmezdir.",
        kod: true,
        kodIcerigi: `-- Not hesaplama
SELECT isim, puan,
  CASE
    WHEN puan >= 90 THEN 'A'
    WHEN puan >= 70 THEN 'B'
    WHEN puan >= 50 THEN 'C'
    ELSE 'F'
  END AS harf_notu
FROM ogrenciler;

-- Koşullu güncelleme
UPDATE urunler
SET fiyat = CASE
  WHEN kategori = 'elektronik' THEN fiyat * 1.10
  WHEN kategori = 'gida' THEN fiyat * 1.05
  ELSE fiyat
END;`,
      },
      {
        baslik: "CTE (Common Table Expressions)",
        icerik:
          "CTE (WITH ifadesi), karmaşık sorguları daha okunabilir parçalara ayırmanızı sağlar. Alt sorguların aksine, aynı CTE birden fazla yerde kullanılabilir. Recursive CTE ise hiyerarşik verileri (organizasyon şeması, kategori ağacı) sorgulamak için güçlü bir araçtır.",
        kod: true,
        kodIcerigi: `-- Basit CTE
WITH yuksek_puanlilar AS (
  SELECT isim, puan
  FROM ogrenciler
  WHERE puan > 80
)
SELECT * FROM yuksek_puanlilar
ORDER BY puan DESC;

-- Recursive CTE: çalışan hiyerarşisi
WITH RECURSIVE hiyerarsi AS (
  SELECT id, isim, yonetici_id, 1 AS seviye
  FROM calisanlar
  WHERE yonetici_id IS NULL
  UNION ALL
  SELECT c.id, c.isim, c.yonetici_id, h.seviye + 1
  FROM calisanlar c
  JOIN hiyerarsi h ON c.yonetici_id = h.id
)
SELECT * FROM hiyerarsi;`,
      },
      {
        baslik: "Triggers",
        icerik:
          "Trigger'lar, belirli tablo olaylarında (INSERT, UPDATE, DELETE) otomatik çalışan veritabanı nesneleridir. BEFORE trigger olay öncesi, AFTER trigger olay sonrası çalışır. NEW (yeni satır) ve OLD (eski satır) ile verilere erişilir. Audit log tutma, otomatik tarih güncelleme ve veri doğrulama için idealdir. Ancak gizli mantık oluşturabilir, dikkatli kullanılmalıdır.",
      },
      {
        baslik: "SQL vs NoSQL Karşılaştırması",
        icerik:
          "SQL veritabanları (PostgreSQL, MySQL) ilişkisel modelle çalışır: tablolar, satırlar, sütunlar, foreign key ve ACID garantisi. NoSQL veritabanları (MongoDB, Redis, Cassandra) esnek şema, yatay ölçeklenme ve büyük veri için uygundur. SQL karmaşık ilişkiler ve tutarlılık gerektiren projelerde, NoSQL ise hızlı prototipleme ve büyük ölçekli uygulamalarda tercih edilir.",
      },
      {
        baslik: "ACID Prensipleri",
        icerik:
          "İyi bir veritabanının Transactions yönetiminde sağlaması gereken 4 kuraldır. 1) Atomicity (Bölünemezlik): İşlem ya tamamen uygulanır ya da hiç uygulanmaz. 2) Consistency (Tutarlılık): Veritabanı kuralları, işlem öncesi ve sonrasında hiç bozulmaz. 3) Isolation (İzolasyon): Aynı anda çalışan farklı işlemler birbirini etkilemez. 4) Durability (Kalıcılık): Commit (mühür) edildikten sonra elektrik kesilse bile veri kaybolmaz.",
      },
      {
        baslik: "Indexes (İndeksleme)",
        icerik:
          "Milyonlarca satırlık bir tabloda belirli bir kaydı aramak (Full Table Scan) dakikalar sürebilir. İndeksler, tıpkı kalın bir kitabın arkasındaki 'İçindekiler/Dizin' sayfası gibidir. Aranan verinin yerini B-Tree yapısında tutarak saniyelerden milisaniyelere düşürür. SELECT'i muazzam uçurur ancak tabloya her yeni veri EKLENDİĞİNDE (INSERT/UPDATE) indeksin de güncellenmesi gerektiği için yazma işlemlerini yavaşlatır.",
        kod: true,
        kodIcerigi: `-- Email kolonu üzerine hızlı arama indeksi oluştur
CREATE INDEX idx_kullanici_email ON Kullanicilar (email);

-- Bu sorgu şimdi kitabı baştan okumaz, indeksten yerini şıp diye bulur
SELECT * FROM Kullanicilar WHERE email = 'eren@example.com';`,
      },
      {
        baslik: "Query Optimization",
        icerik:
          "SQL sunucuyu yormamak için uygulanan taktiklerdir. Altın kurallar: 1) Asla 'SELECT *' kullanma, sadece istediğin kolonu yaz. 2) 'LIKE %kelime%' indeksi kilitlediği için kullanılmamalı, arama motorları kullanılmalı (ElasticSearch vs). 3) Karmaşık View'lar yerine düzenli tabloları hedefle. 4) EXPLAIN komutu ile yazdığın sorgunun veritabanı motoru tarafından nasıl çalıştırılacağını (hangi indeksi kullandığını, nerelerde zorlandığını) görerek optimize et.",
        kod: true,
        kodIcerigi: `EXPLAIN QUERY PLAN 
SELECT isim, maas FROM Calisanlar WHERE yas > 30;

-- Çıktısı sana şunu der:
-- "Calisanlar tablosu üzerinde SCAN TABLE (tam tarama) yapıldı!"
-- Biz de anlarız ki 'yas' kolonuna acilen indeks lazım.`,
      },
      {
        baslik: "Window Functions",
        icerik:
          "Klasik GROUP BY komutu tablodaki satırları sıkıştırarak/ezerek tek satıra indirir (Örn: Bütün okuldaki notların toplamı). Pencere Fonksiyonları (Window Functions) ise Orijinal Satırları silmeden yanına o toplamları/analizleri eklemeni sağlar. Hem kişilerin orijinal notunu hem de her bir kişinin yanına sınıf ortalamasını görmek istediğimizde hayat kurtarır. 'OVER()' anahtar kelimesi ile yazılır.",
        kod: true,
        kodIcerigi: `-- GROUP BY kullansak tek bir ortalama sonuç çıkardı.
-- Ancak Window sayesinde her öğrenci satırı korunarak işlenir:
SELECT 
  isim, 
  notu, 
  AVG(notu) OVER() as sinif_ortalamasi
FROM Ogrenciler;`,
      },
      {
        baslik: "Partition By",
        icerik:
          "Window Fonksiyonlarının kalbidir. Aynı OVER() parantezi içinde kullanılır. Bütün tabloya değil de tablodaki verileri kendi içinde küçük kümeciklere/gruplara (Pencerelere) ayırarak işlem yapmaya yarar. GROUP BY'ın pencere versiyonu gibidir.",
        kod: true,
        kodIcerigi: `-- Şirkette Hangi Departmanın Ortalama Maaşı Ne Kadar?
-- Ahmet - 5000 - IT (IT Ortalaması: 5500)
-- Ayşe  - 6000 - IT (IT Ortalaması: 5500)
-- Can   - 4000 - IK (IK Ortalaması: 4000)

SELECT 
  isim, 
  maas, 
  departman,
  AVG(maas) OVER(PARTITION BY departman) as departman_ortalamasi
FROM Calisanlar;`,
      },
      {
        baslik: "Ranking Functions (Sıralama)",
        icerik:
          "Pencere fonksiyonları arasında en çok kullanılanlardır. Belirli bir düzene göre sıralama numarası / madalya takmaya yarar. ROW_NUMBER(): Satırlara 1,2,3,4 diye kesin bir TC kimlik no gibi benzersiz sıra verir. RANK() Puanı aynı olana aynı rakamı verir ama sonrakini atlar (1,1,3). DENSE_RANK() ise atlamaz (1,1,2).",
        kod: true,
        kodIcerigi: `SELECT 
  isim, 
  puan,
  -- En yüksek puan alan öğrenciye 1 verip sıralayarak git:
  ROW_NUMBER() OVER(ORDER BY puan DESC) as siralama,
  
  -- Puanları aynı alanlara aynı numarayı ver (Sıkı Sıralama)
  DENSE_RANK() OVER(ORDER BY puan DESC) as esit_siralama
FROM Ogrenciler;`,
      },
      {
        baslik: "Data Modelling (Normalizasyon vs Denormalizasyon)",
        icerik:
          "Normalizasyon, veritabanını minimum tekrar (duplicate) ile tasarlamak için tabloları sürekli id'ler ile dışarı bölme sanatıdır. Örneğin adres bilgisini sürekli tabloya yazmak yerine 'Iller' ve 'Ilceler' diye ayrı bir tablo yapıp id'lerini tutarız. Böylece İstanbul adı bir gün değişirse sadece 1 yerde değişir. Ancak çok fazla bölmek de SELECT anında milyonlarca JOIN attırıp sistemi kitleyebilir. İşte bu performansı toplamak adına araya bilerek biraz veri tekrarı (redundancy) sokma işlemine Denormalizasyon denir.",
      },
      {
        baslik: "Production SQL (Deadlocks & Isolation)",
        icerik:
          "Aynı saniye içerisinde Amazon'da kalan son ayakkabıyı aynı anda 10.000 kişi almaya çalışırsa büyük bir Database Faciası çıkar. Veritabanı motoru Lock (Kilit) mekanizması ile sıradaki işlemi dondurur. Ancak bazen İşlem A, B'nin serbest bırakacağı tabloyu beklerken; İşlem B'de, A'nın çıkaracağı tabloyu beklerse sistem sonsuza kadar kilitlenir (Deadlock). Bu seviyeleri (Senaryoları) belirlemek için Transaction Isolation Levels (İzolasyon Seviyesi - Örn: Serializable) ayarlanmak zorundadır.",
      },
    ],
  },
};
