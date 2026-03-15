// uygulamanin mufredati — kapsamli icerik (javascript, react, node.js ve sql konulari)
export const mufredat = {
    javascript: [
        {
            id: "js_1",
            tur: "js",
            ikon: "JS",
            isim: "Değişkenler",
            sorular: [
                {
                    soru: "Modern JavaScript'te değeri daha sonra değiştirilemeyecek bir sabit tanımlamak için hangi kelime kullanılır?",
                    secenekler: ["var", "let", "const", "static"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Aşağıdaki kodun çıktısı nedir?\n\nlet x = 5;\nx = 10;\nconsole.log(x);",
                    secenekler: ["5", "10", "Hata verir", "undefined"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'let' ile tanımlanan bir değişken hakkında hangisi doğrudur?",
                    secenekler: [
                        "Blok kapsamına (scope) sahiptir",
                        "Global kapsamda tanımlanır",
                        "Değeri değiştirilemez",
                        "Fonksiyon kapsamına sahiptir",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "const ile tanımlanan bir dizi (array) için hangisi doğrudur?",
                    secenekler: [
                        "Diziye eleman eklenemez",
                        "Dizi tamamen değiştirilemez",
                        "Dizinin içeriği değiştirilebilir, referansı değiştirilemez",
                        "const ile dizi tanımlanamaz",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "'var' ile tanımlanan değişkenler hangi kapsama sahiptir?",
                    secenekler: [
                        "Blok kapsamı",
                        "Fonksiyon kapsamı",
                        "Modül kapsamı",
                        "Sınıf kapsamı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Hoisting (yukarı taşıma) kavramı hangi tanımlama yöntemiyle ilgilidir?",
                    secenekler: [
                        "Sadece let",
                        "Sadece const",
                        "var (tanım yukarı taşınır, değer taşınmaz)",
                        "Hiçbiri ile ilgili değildir",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "JavaScript'te değişken isimlendirirken hangisi geçersizdir?",
                    secenekler: ["_degisken", "$tutar", "1sayi", "sayi1"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "'const' ile tanımlanan bir objenin içindeki bir özelliği değiştirebilir miyiz?",
                    secenekler: ["Hayır, hiçbir şey değişemez", "Evet, sadece objenin referansı sabittir", "Sadece dizilerde değişebilir", "Dondurulmuş (frozen) ise değişebilir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Strict mode kapalıyken, tanımlanmamış bir değişkene değer atamak neye sebep olur?",
                    secenekler: ["Hata verir", "Global bir değişken oluşturur", "Değişkeni siler", "undefined döner"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Aynı scope içinde 'let' ile aynı isimde iki değişken tanımlamak neye sebep olur?",
                    secenekler: ["SyntaxError fırlatır", "İlk değişken silinir", "İkisi de global olur", "Sadece console uyarısı verir"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "JavaScript'te 'static' anahtar kelimesi değişkenler için nerede kullanılır?",
                    secenekler: ["Her yerde", "Sadece fonksiyon içinde", "Sınıf (class) tanımları içinde", "Statik dosyalarda"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_2",
            tur: "js",
            ikon: "📦",
            isim: "Veri Tipleri",
            sorular: [
                {
                    soru: "JavaScript'te typeof null ifadesinin sonucu nedir?",
                    secenekler: ["'null'", "'undefined'", "'object'", "'boolean'"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Hangisi JavaScript'te ilkel (primitive) bir veri tipi DEĞİLDİR?",
                    secenekler: ["string", "number", "array", "boolean"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "NaN (Not a Number) değerinin tipi nedir?",
                    secenekler: ["'NaN'", "'undefined'", "'number'", "'string'"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "JavaScript'te BigInt veri tipi ne için kullanılır?",
                    secenekler: [
                        "Büyük metin verileri için",
                        "Çok büyük tam sayıları temsil etmek için",
                        "Büyük diziler için",
                        "Büyük dosyalar için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "undefined ve null arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "undefined: değer atanmamış; null: bilinçli olarak boş bırakılmış",
                        "null: değer atanmamış; undefined: bilinçli olarak boş",
                        "İkisi de hata durumunu temsil eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Symbol veri tipi ne için kullanılır?",
                    secenekler: [
                        "Matematiksel semboller için",
                        "Emoji desteği için",
                        "Benzersiz ve değiştirilemez tanımlayıcı oluşturmak için",
                        "Şifreleme için",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Aşağıdakilerden hangisi bir 'falsy' (sahte) değer DEĞİLDİR?",
                    secenekler: ["0", "'' (boş string)", "[] (boş dizi)", "false"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "String bir ifadeyi sayıya çevirmek için hangi global fonksiyon kullanılabilir?",
                    secenekler: ["String()", "toInt()", "parseInt()", "toNumber()"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Infinity değerinin veri tipi nedir?",
                    secenekler: ["'number'", "'infinity'", "'undefined'", "'object'"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Boolean(undefined) ifadesinin sonucu nedir?",
                    secenekler: ["true", "false", "undefined", "null"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'10' + 5 ifadesinin sonucu nedir?",
                    secenekler: ["15", "105", "Hata", "NaN"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_3",
            tur: "js",
            ikon: "{}",
            isim: "Diziler",
            sorular: [
                {
                    soru: "Bir diziye (array) yeni bir eleman eklemek için hangi metod kullanılır?",
                    secenekler: [".push()", ".add()", ".insert()", ".append()"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Dizinin uzunluğunu bulmak için hangi özellik (property) kullanılır?",
                    secenekler: [".size", ".length", ".count", ".boyut"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "[1, 2, 3].map(x => x * 2) ifadesinin sonucu nedir?",
                    secenekler: ["[1, 2, 3]", "[2, 4, 6]", "6", "[1, 4, 9]"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "filter() metodu ne döndürür?",
                    secenekler: [
                        "İlk eşleşen elemanı",
                        "Boolean değer",
                        "Koşulu sağlayan elemanlardan oluşan yeni bir dizi",
                        "Orijinal diziyi değiştirir",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "reduce() metodu ne işe yarar?",
                    secenekler: [
                        "Diziyi küçültür",
                        "Dizinin elemanlarını tek bir değere indirger",
                        "Diziden eleman siler",
                        "Diziyi tersine çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Spread operatörü (...) ile iki diziyi birleştirmek için doğru kullanım hangisidir?",
                    secenekler: [
                        "[dizi1 + dizi2]",
                        "[...dizi1, ...dizi2]",
                        "dizi1.merge(dizi2)",
                        "dizi1.concat[dizi2]",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir dizinin son elemanını silen ve o elemanı döndüren metod hangisidir?",
                    secenekler: [".shift()", ".pop()", ".delete()", ".remove()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir dizinin başına yeni bir eleman eklemek için hangi metod kullanılır?",
                    secenekler: [".push()", ".unshift()", ".prepend()", ".start()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Orijinal diziyi değiştirmeden (immutable) bir kısmını kopyalayan metod hangisidir?",
                    secenekler: [".splice()", ".slice()", ".cut()", ".copy()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dizide bir elemanın olup olmadığını kontrol eden ve boolean dönen metod hangisidir?",
                    secenekler: [".has()", ".exists()", ".includes()", ".find()"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bir dizideki tüm elemanların bir koşulu sağlayıp sağlamadığını kontrol eden metod hangisidir?",
                    secenekler: [".every()", ".some()", ".all()", ".check()"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "js_4",
            tur: "js",
            ikon: "=>",
            isim: "Fonksiyonlar",
            sorular: [
                {
                    soru: "Arrow function (ok fonksiyonu) sözdizimi hangisidir?",
                    secenekler: [
                        "function() => {}",
                        "() => {}",
                        "() -> {}",
                        "=> function()",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir fonksiyon hiçbir değer döndürmezse ne döner?",
                    secenekler: ["null", "0", "undefined", "false"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Varsayılan parametre (default parameter) ne işe yarar?",
                    secenekler: [
                        "Fonksiyona argüman girilmezse kullanılacak değeri belirler",
                        "Fonksiyonun çalışmasını önler",
                        "Parametrenin tipini belirler",
                        "Fonksiyonu otomatik çağırır",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Rest parametresi (...args) ne işe yarar?",
                    secenekler: [
                        "Fonksiyonu duraklatır",
                        "Belirsiz sayıda argümanı bir dizi olarak toplar",
                        "Fonksiyonu kopyalar",
                        "Hata yakalar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "IIFE (Immediately Invoked Function Expression) ne anlama gelir?",
                    secenekler: [
                        "İçe aktarılan fonksiyon",
                        "Tanımlandığı anda çalıştırılan fonksiyon",
                        "Asenkron fonksiyon",
                        "Generator fonksiyon",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Arrow function ile normal function arasındaki en önemli fark nedir?",
                    secenekler: [
                        "Arrow function daha yavaştır",
                        "Arrow function kendi 'this' bağlamını oluşturmaz",
                        "Normal function parametre alamaz",
                        "Hiçbir farkı yoktur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir fonksiyonun 'arguments' objesi hakkında hangisi doğrudur?",
                    secenekler: [
                        "Gerçek bir dizidir (Array)",
                        "Dizi benzeri (array-like) bir objedir",
                        "Sadece arrow function'larda vardır",
                        "Sadece ilk argümanı tutar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Callback (geri çağırma) fonksiyonu tam olarak nedir?",
                    secenekler: [
                        "Hataları geri çeviren fonksiyon",
                        "Başka bir fonksiyona argüman olarak geçilen fonksiyon",
                        "Sadece asenkron kodda kullanılan fonksiyon",
                        "Kendini silen fonksiyon",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Recursive (özyinelemeli) fonksiyonun tanımı nedir?",
                    secenekler: [
                        "Hızlı çalışan fonksiyon",
                        "Kendi kendini çağıran fonksiyon",
                        "Sadece bir kere çalışan fonksiyon",
                        "Döngü içindeki fonksiyon",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Tanımlandığı anda çalışan fonksiyonlara ne ad verilir?",
                    secenekler: ["IIFE", "Async", "Generator", "Callback"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Fonksiyonlarda varsayılan geri dönüş değeri nedir?",
                    secenekler: ["null", "0", "undefined", "false"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_5",
            tur: "js",
            ikon: "?",
            isim: "Koşullar",
            sorular: [
                {
                    soru: "'===' operatörü '==' operatöründen ne farkı vardır?",
                    secenekler: [
                        "Hiçbir farkı yoktur",
                        "=== hem değeri hem tipi karşılaştırır",
                        "=== sadece tipi karşılaştırır",
                        "== daha güvenlidir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "switch-case yapısında 'break' yazılmazsa ne olur?",
                    secenekler: [
                        "Hata verir",
                        "Sadece eşleşen case çalışır",
                        "Sonraki case'ler de çalışır (fall-through)",
                        "Fonksiyon durur",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Ternary operatörünün doğru kullanımı hangisidir?",
                    secenekler: [
                        "kosul ? dogruDeger : yanlisDeger",
                        "kosul : dogruDeger ? yanlisDeger",
                        "kosul && dogruDeger || yanlisDeger",
                        "if kosul then dogruDeger else yanlisDeger",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Nullish coalescing (??) operatörü ne yapar?",
                    secenekler: [
                        "İki değeri toplar",
                        "Sol taraf null veya undefined ise sağ taraftaki değeri döner",
                        "Her zaman sol tarafı döner",
                        "Hata fırlatır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Optional chaining (?.) operatörü ne işe yarar?",
                    secenekler: [
                        "Zincir oluşturur",
                        "Nesne özelliğine güvenli erişim sağlar, hata vermez",
                        "Diziyi zincirleme birleştirir",
                        "Fonksiyonları sıralar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "if...else if...else yapısında hangi blok çalışır?",
                    secenekler: [
                        "Tüm bloklar çalışır",
                        "İlk doğru (true) olan koşulun bloğu çalışır",
                        "Son blok her zaman çalışır",
                        "Rastgele bir blok çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "if(x = 10) {} (atama operatörü) kullanımı için hangisi doğrudur?",
                    secenekler: [
                        "Sözdizimi hatasıdır",
                        "x'e 10 atar ve 10 truthy olduğu için blok çalışır",
                        "x 10 ise çalışır",
                        "Çalışmaz, 0 döner",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "switch-case yapısında 'default' bloğu ne zaman tetiklenir?",
                    secenekler: [
                        "Daima çalışır",
                        "Hiçbir case ile eşleşme olmadığında",
                        "Sadece hata olduğunda",
                        "En başta çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Mantıksal VE (&&) operatörü ne zaman true sonucunu verir?",
                    secenekler: [
                        "Tüm koşullar true olduğunda",
                        "En az bir koşul true olduğunda",
                        "Tüm koşullar false olduğunda",
                        "İki taraf farklı olduğunda",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Mantıksal VEYA (||) operatörü ne zaman false sonucunu verir?",
                    secenekler: [
                        "Hiçbir taraf true değilse (tüm taraflar false ise)",
                        "En az bir taraf false ise",
                        "İlk taraf false ise",
                        "Asla false vermez",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "!true (mantıksal değil) ifadesinin sonucu nedir?",
                    secenekler: ["true", "false", "undefined", "null"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_6",
            tur: "js",
            ikon: "🔄",
            isim: "Döngüler",
            sorular: [
                {
                    soru: "for...of döngüsü ne üzerinde iterasyon yapar?",
                    secenekler: [
                        "Nesnenin anahtarları",
                        "Yinelenebilir (iterable) veri yapıları",
                        "Sadece sayılar",
                        "DOM elementleri",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "while ve do...while döngüsünün farkı nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "do...while en az bir kez çalışır",
                        "while daha hızlıdır",
                        "do...while sadece dizilerde çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "for...in döngüsü ne üzerinde iterasyon yapar?",
                    secenekler: [
                        "Dizinin değerleri",
                        "Nesnenin enumerable özellikleri (anahtarları)",
                        "Sadece sayılar",
                        "Set veri yapıları",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "break ve continue arasındaki fark nedir?",
                    secenekler: [
                        "İkisi de aynı işi yapar",
                        "break döngüyü sonlandırır, continue bir sonraki iterasyona geçer",
                        "continue döngüyü sonlandırır",
                        "break sadece for döngüsünde çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "forEach() metodu ile for...of döngüsü arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "forEach() içinde break kullanamazsınız",
                        "for...of daha yavaştır",
                        "forEach() sadece objelerde çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Döngüyü tamamen sonlandırmak için hangi anahtar kelime kullanılır?",
                    secenekler: ["continue", "stop", "break", "return"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Döngünün bir adımını atlayıp sonrakine geçmek için ne kullanılır?",
                    secenekler: ["skip", "jump", "continue", "next"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Array.map() metodu hakkında hangisi doğrudur?",
                    secenekler: [
                        "Orijinal diziyi kalıcı olarak değiştirir",
                        "Geriye hiçbir şey döndürmez",
                        "Her elemana işlem uygulayarak yeni bir dizi döndürür",
                        "Sadece filtreleme yapar",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "for...of döngüsü ile hangisi üzerinde gezilebilir?",
                    secenekler: ["Diziler (Arrays)", "Düz Objeler (Objects)", "Sadece sayılar", "Sadece stringler"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Do-while döngüsünün while döngüsünden en büyük farkı nedir?",
                    secenekler: [
                        "Daha hızlıdır",
                        "Koşul yanlış olsa bile en az bir kez çalışması garantidir",
                        "Koşul sonda değil baştadır",
                        "Daha az bellek harcar",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_7",
            tur: "js",
            ikon: "🏗️",
            isim: "Objeler",
            sorular: [
                {
                    soru: "Bir objenin tüm anahtarlarını dizi olarak almak için ne kullanılır?",
                    secenekler: [
                        "Object.keys()",
                        "Object.values()",
                        "Object.entries()",
                        "Object.list()",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Destructuring (yapı bozma) ile obje özelliklerine erişim hangisidir?",
                    secenekler: [
                        "const {isim, yas} = kullanici",
                        "const [isim, yas] = kullanici",
                        "const isim = kullanici.get('isim')",
                        "const isim, yas = kullanici",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Spread (...) operatörü objelerle ne yapar?",
                    secenekler: [
                        "Objeyi siler",
                        "Objenin bir kopyasını veya birleşimini oluşturur",
                        "Objeyi diziye çevirir",
                        "Objeyi dondurur (freeze)",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Object.freeze() ne yapar?",
                    secenekler: [
                        "Objeyi siler",
                        "Objenin özelliklerinin değiştirilmesini engeller",
                        "Objeyi kopyalar",
                        "Objeyi JSON'a çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Object.entries() ne döndürür?",
                    secenekler: [
                        "Sadece anahtarları",
                        "Sadece değerleri",
                        "[anahtar, değer] çiftlerinden oluşan dizi",
                        "Objenin uzunluğunu",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "this anahtar kelimesi bir objede neyi temsil eder?",
                    secenekler: [
                        "Global nesneyi",
                        "Fonksiyonun kendisini",
                        "Metodun çağrıldığı objeyi",
                        "Window nesnesini",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bir objeyi 'delete' anahtar kelimesi ile silmeye çalışmak neye sebep olur?",
                    secenekler: [
                        "Objeyi tamamen siler",
                        "Sadece belirtilen özelliği (property) siler",
                        "Objeyi null yapar",
                        "Belleği temizler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Shallow Copy (Sığ Kopyalama) yapıldığında iç içe (nested) objeler için hangisi doğrudur?",
                    secenekler: [
                        "Onlar da tamamen kopyalanır",
                        "Sadece referansları kopyalanır, derin kopya oluşmaz",
                        "Hata verir",
                        "undefined olurlar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'in' operatörü ne işe yarar?",
                    secenekler: [
                        "Objenin içindeki değerleri toplar",
                        "Belirtilen özelliğin objede olup olmadığını kontrol eder",
                        "Döngü başlatır",
                        "Objeyi diziye çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Object.seal() metodu ne yapar?",
                    secenekler: [
                        "Objeyi tamamen dondurur",
                        "Yeni özellik eklemeyi ve silmeyi engeller ama mevcut özellikler değiştirilebilir",
                        "Objeyi gizler",
                        "Objeyi JSON'a çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir objeyi JSON stringine dönüştürmek için ne kullanılır?",
                    secenekler: ["JSON.parse()", "JSON.stringify()", "toString()", "Object.toJSON()"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_8",
            tur: "js",
            ikon: "📝",
            isim: "String Metodları",
            sorular: [
                {
                    soru: "Template literal (şablon dize) hangi karakterle yazılır?",
                    secenekler: [
                        "Tek tırnak (')",
                        "Çift tırnak (\")",
                        "Ters tırnak (`)",
                        "Parantez (())",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "'Merhaba Dünya'.includes('Dünya') ne döner?",
                    secenekler: ["true", "false", "'Dünya'", "5"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "split() metodu ne yapar?",
                    secenekler: [
                        "Stringi birleştirir",
                        "Stringi belirtilen ayırıcıya göre diziye böler",
                        "Stringi siler",
                        "Stringi tersine çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "trim() metodu ne işe yarar?",
                    secenekler: [
                        "Stringi kısaltır",
                        "Stringin baş ve sonundaki boşlukları temizler",
                        "Stringi büyük harfe çevirir",
                        "Stringi sayıya çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "padStart() ve padEnd() ne işe yarar?",
                    secenekler: [
                        "Stringi şifreler",
                        "Stringin başına veya sonuna karakter ekleyerek istenen uzunluğa getirir",
                        "Stringi böler",
                        "Stringi sıkıştırır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "replaceAll() metodu replace()'ten nasıl farklıdır?",
                    secenekler: [
                        "Hiçbir farkı yoktur",
                        "replaceAll() tüm eşleşmeleri değiştirir, replace() sadece ilkini",
                        "replace() daha hızlıdır",
                        "replaceAll() sadece sayılarda çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "String.prototype.charAt(0) ile ne elde edilir?",
                    secenekler: ["Stringin ilk karakteri", "Stringin uzunluğu", "Stringin son karakteri", "ASCII kodu"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Bir stringi tamamen küçük harfe çevirmek için hangisi kullanılır?",
                    secenekler: [".toLower()", ".toLowerCase()", ".small()", ".formatLower()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'KOD'.indexOf('Z') arama sonucu ne olur?",
                    secenekler: ["0", "undefined", "-1", "false"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "'A,B,C'.split(',') ifadesi ne döndürür?",
                    secenekler: ["'ABC'", "['A', 'B', 'C']", "3", "Error"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Hi'.repeat(2) sonucu nedir?",
                    secenekler: ["'Hi'", "'Hi2'", "'HiHi'", "'Hi Hi'"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_9",
            tur: "js",
            ikon: "🌐",
            isim: "DOM İşlemleri",
            sorular: [
                {
                    soru: "CSS seçicisiyle birden fazla element seçmek için hangi metod kullanılır?",
                    secenekler: [
                        "document.getElementById()",
                        "document.querySelector()",
                        "document.querySelectorAll()",
                        "document.getElements()",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bir elementin HTML içeriğini değiştirmek için hangi özellik kullanılır?",
                    secenekler: ["textContent", "innerHTML", "innerText", "Hepsi kullanılabilir"],
                    dogruYanitSirasi: 3,
                },
                {
                    soru: "addEventListener() metodunun ikinci parametresi nedir?",
                    secenekler: [
                        "Olay türü (event type)",
                        "Callback fonksiyonu",
                        "HTML elementi",
                        "CSS seçicisi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "createElement() ne yapar?",
                    secenekler: [
                        "Mevcut bir elementi seçer",
                        "Yeni bir HTML elementi oluşturur (DOM'a eklemez)",
                        "Elementi siler",
                        "Elementin stilini değiştirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Event bubbling (olay kabarcıklanması) nedir?",
                    secenekler: [
                        "Olayın alt elementlerden üst elementlere doğru yayılması",
                        "Olayın iptal edilmesi",
                        "Birden fazla olay dinleyicisi eklenmesi",
                        "DOM ağacının yeniden oluşturulması",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "classList.toggle() ne yapar?",
                    secenekler: [
                        "Tüm sınıfları siler",
                        "Sınıf varsa kaldırır, yoksa ekler",
                        "Elementi gizler",
                        "Yeni element oluşturur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "event.preventDefault() metodu ne işe yarar?",
                    secenekler: [
                        "Olayı tamamen siler",
                        "Elementin varsayılan davranışını (örn: linke gitme) durdurur",
                        "Hata fırlatır",
                        "Sayfayı yeniler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir elementin özniteliğini (attribute) değiştirmek için ne kullanılır?",
                    secenekler: [".changeAttr()", ".setAttribute()", ".attr()", ".modify()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir HTML elementini DOM'dan tamamen kaldırmak için hangisi kullanılır?",
                    secenekler: [".delete()", ".remove()", ".hide()", ".clear()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Elemente yeni bir CSS sınıfı eklemek için hangisi doğrudur?",
                    secenekler: [".addClass()", ".classList.add()", ".style.class()", ".setClassName()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "DOMContentLoaded olayı ne zaman gerçekleşir?",
                    secenekler: [
                        "Sayfa tamamen yüklendiğinde (resimler dahil)",
                        "DOM ağacı oluşturulduğunda (HTML yüklendiğinde)",
                        "Fareye tıklandığında",
                        "Pencere kapatıldığında",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_10",
            tur: "js",
            ikon: "⏳",
            isim: "Asenkron JS",
            sorular: [
                {
                    soru: "Promise'in üç durumu (state) hangileridir?",
                    secenekler: [
                        "start, run, stop",
                        "pending, fulfilled, rejected",
                        "loading, success, error",
                        "open, closed, half-open",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "async fonksiyon her zaman ne döndürür?",
                    secenekler: ["undefined", "null", "Promise", "callback"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "fetch() API'si ne için kullanılır?",
                    secenekler: [
                        "Dosya okumak için",
                        "HTTP istekleri yapmak için",
                        "DOM manipülasyonu için",
                        "Veritabanı sorgusu için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Promise.all() ne yapar?",
                    secenekler: [
                        "Tek bir Promise oluşturur",
                        "Birden fazla Promise'i paralel çalıştırır, hepsi tamamlanınca sonuç döner",
                        "Promise'leri sıralar",
                        "Promise'leri iptal eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "setTimeout() ve setInterval() arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "setTimeout bir kez çalışır, setInterval tekrarlar",
                        "setInterval daha hızlıdır",
                        "setTimeout asenkron değildir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "async/await kullanırken hata yakalamak için ne kullanılır?",
                    secenekler: [
                        ".catch() metodu",
                        "try...catch bloğu",
                        "if...else bloğu",
                        "throw ifadesi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Promise.race() fonksiyonunun özelliği nedir?",
                    secenekler: [
                        "Tüm promise'lerin bitmesini bekler",
                        "En hızlı sonuçlanan (başarılı veya başarısız) promise'in sonucunu döner",
                        "Sadece hata verenleri döner",
                        "Promise'leri rastgele sıralar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir Promise nesnesindeki 'reject' parametresi ne işe yarar?",
                    secenekler: [
                        "İşlemi onaylar",
                        "İşlemin başarısız olduğunu ve bir hata döndürdüğünü belirtir",
                        "Promise'i duraklatır",
                        "Süreyi sıfırlar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Promise.resolve(5) ifadesi ne döndürür?",
                    secenekler: [
                        "5 değerini",
                        "5 değeriyle başarıyla tamamlanmış (fulfilled) bir Promise",
                        "Hata",
                        "undefined",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript event loop'ta Promise'ler hangi kuyruğa (queue) girer?",
                    secenekler: ["Macro-task queue", "Micro-task queue", "Render queue", "Priority queue"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Await ifadesi sadece hangi tür fonksiyonlar içinde kullanılabilir?",
                    secenekler: ["Ok fonksiyonları", "Async fonksiyonlar", "Generator fonksiyonlar", "Normal fonksiyonlar"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_11",
            tur: "js",
            ikon: "⚠️",
            isim: "Hata Yönetimi",
            sorular: [
                {
                    soru: "try...catch bloğunda 'finally' bloğu ne zaman çalışır?",
                    secenekler: [
                        "Sadece hata olduğunda",
                        "Sadece hata olmadığında",
                        "Her durumda (hata olsa da olmasa da)",
                        "Sadece catch çalışmadığında",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "throw new Error('mesaj') ne yapar?",
                    secenekler: [
                        "Konsola mesaj yazar",
                        "Özel bir hata fırlatır",
                        "Programı kapatır",
                        "Hata mesajını siler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'te kaç tür yerleşik hata (Error) türü vardır?",
                    secenekler: [
                        "1 (sadece Error)",
                        "3 (Error, Warning, Fatal)",
                        "7+ (TypeError, ReferenceError, SyntaxError, RangeError vb.)",
                        "Sınırsız",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "TypeError ne zaman oluşur?",
                    secenekler: [
                        "Tip dönüşümü başarılı olduğunda",
                        "Bir değer beklenen tipte olmadığında (örn: null.method())",
                        "Sözdizimi hatası olduğunda",
                        "Değişken bulunamadığında",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Özel (custom) hata sınıfı nasıl oluşturulur?",
                    secenekler: [
                        "function OzelHata() {}",
                        "class OzelHata extends Error { constructor(m) { super(m); } }",
                        "new CustomError()",
                        "Error.create('OzelHata')",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "RangeError hatası tipik olarak ne zaman meydana gelir?",
                    secenekler: [
                        "Bir değişken bulunamadığında",
                        "Sayısal bir değer izin verilen aralığın dışında olduğunda",
                        "Tip uyuşmazlığında",
                        "Sözdizimi hatasında",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ReferenceError ne zaman fırlatılır?",
                    secenekler: [
                        "Geçersiz bir tip kullanıldığında",
                        "Tanımlanmamış bir değişkene erişilmeye çalışıldığında",
                        "Dizi sınırları aşıldığında",
                        "API yanıt vermediğinde",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "try bloğu içerisinde hata oluşmazsa catch bloğu nasıl davranır?",
                    secenekler: ["Hata mesajı basar", "Atlanır ve çalıştırılmaz", "Yine de çalışır", "Programı durdurur"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Hata nesnesindeki 'name' özelliği neyi temsil eder?",
                    secenekler: ["Hatanın mesajını", "Hatanın türünü (örn: TypeError)", "Hatanın oluştuğu satırı", "Kullanıcı adını"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SyntaxError hatası ne zaman oluşur?",
                    secenekler: [
                        "Program çalışırken hata aldığında",
                        "Kodun yazım kuralları yanlış olduğunda",
                        "Bellek bittiğinde",
                        "İnternet koptuğunda",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_12",
            tur: "js",
            ikon: "📦",
            isim: "ES6+ Modüller",
            sorular: [
                {
                    soru: "Bir modülden birden fazla değer dışa aktarmak (named export) için ne kullanılır?",
                    secenekler: [
                        "export default",
                        "export { a, b }",
                        "module.exports",
                        "exports.default",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "import * as Modul from './dosya' ne anlama gelir?",
                    secenekler: [
                        "Sadece varsayılan export'u alır",
                        "Tüm export'ları 'Modul' adıyla alır",
                        "Dosyayı siler",
                        "Hata verir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "default export ve named export arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "default export dosya başına bir tane, named export birden fazla olabilir",
                        "named export sadece fonksiyonlarda kullanılır",
                        "default export daha hızlıdır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dynamic import (import()) ne sağlar?",
                    secenekler: [
                        "Derleme zamanında modül yükler",
                        "Çalışma zamanında modülü koşullu/gecikmeli (lazy) yükler",
                        "Modülü siler",
                        "CSS dosyası yükler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ES Modules ile CommonJS arasındaki temel fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "ES Modules statik analizi destekler, CommonJS dinamiktir",
                        "CommonJS daha yenidir",
                        "ES Modules sadece tarayıcıda çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "export default ile dışa aktarılan bir modül nasıl içe aktarılır?",
                    secenekler: [
                        "import { default } from ...",
                        "import HerhangiBirIsim from ...",
                        "import * from ...",
                        "require(...)",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CommonJS'de bir modülü içe aktarmak için hangi fonksiyon kullanılır?",
                    secenekler: ["import()", "get()", "require()", "load()"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Modüllerin 'strict mode' (katı mod) ile çalışması hakkında hangisi doğrudur?",
                    secenekler: [
                        "Kullanıcı isterse açar",
                        "ES Modülleri her zaman varsayılan olarak strict mode'dadır",
                        "Strict mode modülleri yavaşlatır",
                        "Modüllerde strict mode kullanılamaz",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sadece yan etkileri (side-effects) için bir dosyayı nasıl içe aktarırsınız?",
                    secenekler: ["import './dosya.js'", "import * from './dosya.js'", "require('./dosya.js')", "load('./dosya.js')"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "import.meta objesi ne sağlar?",
                    secenekler: [
                        "Sistem bilgilerini",
                        "Bulunulan modüle özgü meta verileri (örn: url)",
                        "Kullanıcı ayarlarını",
                        "Modülün boyutunu",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_13",
            tur: "js",
            ikon: "🗂️",
            isim: "Map & Set",
            sorular: [
                {
                    soru: "Map ve düz obje arasındaki temel fark nedir?",
                    secenekler: [
                        "Map daha yavaştır",
                        "Map'te anahtarlar herhangi bir tipte olabilir",
                        "Map sadece string tutar",
                        "Hiçbir farkı yoktur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Set veri yapısının özelliği nedir?",
                    secenekler: [
                        "Sıralı veri tutar",
                        "Anahtar-değer çifti tutar",
                        "Sadece benzersiz (unique) değerler tutar",
                        "Sadece sayı tutar",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Map'ten bir değer almak için hangi metod kullanılır?",
                    secenekler: ["map[key]", "map.get(key)", "map.find(key)", "map.value(key)"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir dizideki tekrar eden elemanları kaldırmak için Set nasıl kullanılır?",
                    secenekler: [
                        "dizi.unique()",
                        "[...new Set(dizi)]",
                        "Set.remove(dizi)",
                        "dizi.filter(Set)",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WeakMap ile Map arasındaki fark nedir?",
                    secenekler: [
                        "WeakMap daha hızlıdır",
                        "WeakMap anahtarları sadece obje olabilir ve garbage collection'a uygundur",
                        "WeakMap daha fazla veri tutar",
                        "Hiçbir farkı yoktur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Map'ten bir değeri anahtarı ile birlikte silmek için hangisi kullanılır?",
                    secenekler: ["map.remove(key)", "map.delete(key)", "map.pop(key)", "delete map[key]"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Map objesindeki eleman sayısını nasıl öğreniriz?",
                    secenekler: ["map.length", "map.size", "map.count", "map.elements"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Set veri yapısı elemanların sırasını korur mu?",
                    secenekler: ["Hayır, her zaman rastgeledir", "Evet, ekleme sırasını korur", "Sadece sayılarda korur", "Sadece JS motoruna bağlıdır"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Set içindeki tüm elemanları temizlemek için hangi metod kullanılır?",
                    secenekler: [".clear()", ".reset()", ".empty()", ".deleteAll()"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Map iterator'ü (map.entries()) her adımda ne döner?",
                    secenekler: ["Sadece değer", "Sadece anahtar", "[anahtar, değer] şeklinde bir dizi", "Objenin kendisini"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_14",
            tur: "js",
            ikon: "🔒",
            isim: "Closure & Scope",
            sorular: [
                {
                    soru: "Closure (kapanış) nedir?",
                    secenekler: [
                        "Bir döngü türü",
                        "İç fonksiyonun dış fonksiyonun değişkenlerine erişebilmesi",
                        "Bir dizi metodu",
                        "Tarayıcı API'si",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'te kaç tür scope (kapsam) vardır?",
                    secenekler: [
                        "1 — Global",
                        "2 — Global ve Local",
                        "3 — Global, Function ve Block",
                        "4 — Global, Local, Module ve Block",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Lexical scope (sözcüksel kapsam) ne demektir?",
                    secenekler: [
                        "Kapsam çalışma zamanında belirlenir",
                        "Kapsam fonksiyonun tanımlandığı yere göre belirlenir",
                        "Tüm değişkenler globaldir",
                        "Kapsam sadece blok içinde geçerlidir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Closure'ların yaygın bir kullanım alanı hangisidir?",
                    secenekler: [
                        "CSS stilleri oluşturma",
                        "Veri gizleme (data privacy) ve factory fonksiyonlar",
                        "HTML elementleri oluşturma",
                        "Dosya okuma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Temporal Dead Zone (TDZ) nedir?",
                    secenekler: [
                        "Saat dilimi farkı",
                        "let/const değişkeninin tanımlanmadan önce erişilemeyen alanı",
                        "Bellek taşması",
                        "Ağ bağlantı hatası",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Global scope'ta 'var' ile tanımlanan bir değişken 'window' nesnesine eklenir mi?",
                    secenekler: ["Evet", "Hayır", "Sadece strict mode'da", "Sadece fonksiyon içindeyse"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Closure sayesinde değişkenlerin bellekte tutulmasının sebebi nedir?",
                    secenekler: ["Bellek hatasıdır", "Değişkenin referansı bir iç fonksiyon tarafından tutulduğu için", "JavaScript çok bellek harcar", "Global oldukları için"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "İç kapsamdaki bir değişkenin dış kapsamdaki ile aynı isme sahip olmasına ne ad verilir?",
                    secenekler: ["Hoisting", "Shadowing (Gölgeleme)", "Cloning", "Overriding"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir fonksiyonun erişebildiği scope'lar tanımlandığı yere göre belirleniyorsa buna ne denir?",
                    secenekler: ["Dynamic Scope", "Lexical (Sözcüksel) Scope", "Global Scope", "Module Scope"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_15",
            tur: "js",
            ikon: "🏛️",
            isim: "Class Yapısı",
            sorular: [
                {
                    soru: "JavaScript'te class tanımlamak için hangi anahtar kelime kullanılır?",
                    secenekler: ["function", "class", "object", "struct"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "class içinde constructor metodu ne işe yarar?",
                    secenekler: [
                        "Sınıfı siler",
                        "Yeni bir örnek (instance) oluşturulduğunda başlangıç değerlerini ayarlar",
                        "Metod tanımlar",
                        "Sınıfı dışa aktarır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "extends anahtar kelimesi ne yapar?",
                    secenekler: [
                        "Sınıfı genişletir (kalıtım / inheritance)",
                        "Değişken uzunluğunu artırır",
                        "Diziyi genişletir",
                        "Dosya boyutunu artırır",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "super() ne için kullanılır?",
                    secenekler: [
                        "Süper güçlü fonksiyon çağırır",
                        "Üst (parent) sınıfın constructor'ını çağırır",
                        "Global değişken oluşturur",
                        "Performansı artırır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "static metod nedir?",
                    secenekler: [
                        "Değişmez metod",
                        "Instance olmadan, doğrudan sınıf üzerinden çağrılan metod",
                        "Sadece constructor'da kullanılan metod",
                        "Asenkron metod",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sınıf içinde # işareti ile başlayan özellikler neyi temsil eder?",
                    secenekler: ["Süper özellikleri", "Private (Özel) özellikleri", "Statik özellikleri", "Global özellikleri"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sınıf tanımları (Class declarations) hoist edilir mi?",
                    secenekler: ["Evet", "Hayır, tanımlanmadan önce kullanılamazlar", "Sadece extends varsa", "Sadece constructor varsa"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Getter ve Setter metodlarının temel amacı nedir?",
                    secenekler: [
                        "Sınıfı kopyalamak",
                        "Bir özelliğe erişirken veya değer atarken özel mantık/kontrol çalıştırmak",
                        "Dizileri sıralamak",
                        "Hata fırlatmak"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "class içindeki metodlar varsayılan olarak enumerable (listelenebilir) mıdır?",
                    secenekler: ["Evet", "Hayır", "Sadece statik olanlar", "Sadece constructor"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_16",
            tur: "js",
            ikon: "🔍",
            isim: "Regex",
            sorular: [
                {
                    soru: "Regular Expression (Regex) ne için kullanılır?",
                    secenekler: [
                        "Sayısal hesaplama",
                        "Metin içinde desen (pattern) eşleştirme",
                        "Dosya okuma",
                        "Ağ bağlantısı kurma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'te regex literal nasıl yazılır?",
                    secenekler: ["/desen/bayraklar", "'desen'", "regex(desen)", "#desen#"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "\\d regex deseni ne ile eşleşir?",
                    secenekler: ["Herhangi bir harf", "Herhangi bir rakam (0-9)", "Boşluk karakteri", "Herhangi bir karakter"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "test() metodu ne döndürür?",
                    secenekler: [
                        "Eşleşen metni",
                        "Eşleşme indeksini",
                        "true veya false",
                        "Yeni bir regex",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "g bayrağı (flag) ne anlama gelir?",
                    secenekler: [
                        "Büyük/küçük harf duyarsız arama",
                        "Global arama (tüm eşleşmeleri bulur)",
                        "Çok satırlı arama",
                        "Gruplama",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Regex deseni içinde '.' (nokta) neyi temsil eder?",
                    secenekler: [
                        "Gerçek bir nokta karakterini",
                        "Satır sonu hariç herhangi bir karakteri",
                        "Sadece boşlukları",
                        "Sadece rakamları",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Regex'te '+' operatörü nicelik (quantifier) olarak ne ifade eder?",
                    secenekler: [
                        "0 veya daha fazla (optional)",
                        "1 veya daha fazla",
                        "Tam olarak bir tane",
                        "Hiçbiri",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Metnin en başı ile eşleşmek için hangi karakter kullanılır?",
                    secenekler: ["$", "^", "*", "&"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Metnin en sonu ile eşleşmek için hangi karakter kullanılır?",
                    secenekler: ["^", "$", "?", "!"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'*' operatörü regex içinde neyi ifade eder?",
                    secenekler: ["Her şeyi", "0 veya daha fazla kez tekrarı", "En az bir kez tekrarı", "Çarpmayı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "\\w regex deseni ne ile eşleşir?",
                    secenekler: ["Boşluk karakteri", "Sadece rakamlar", "Alfanümerik karakterler (harf, rakam, alt çizgi)", "Sadece harfler"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "[abc] deseni ne anlama gelir?",
                    secenekler: ["'abc' stringi", "a, b veya c karakterlerinden herhangi biri", "a, b ve c karakterleri sırasıyla", "a'dan c'ye kadar tüm karakterler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "{n,m} nicelik belirteci ne anlama gelir?",
                    secenekler: ["En az n, en fazla m kez tekrar", "Tam olarak n kez tekrar", "n veya m kez tekrar", "n'den m'ye kadar olan sayılar"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "i bayrağı (flag) ne anlama gelir?",
                    secenekler: ["Global arama", "Büyük/küçük harf duyarsız arama", "Çok satırlı arama", "Tersine arama"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "String.prototype.match() metodu ne döndürür?",
                    secenekler: ["Boolean", "Eşleşen stringlerin dizisi veya null", "Eşleşen ilk string", "Eşleşme indeksi"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_17",
            tur: "js",
            ikon: "⚙️",
            isim: "Prototype",
            sorular: [
                {
                    soru: "JavaScript'te prototypal inheritance ne demektir?",
                    secenekler: [
                        "Sınıf tabanlı kalıtım",
                        "Nesnelerin diğer nesnelerden özellik ve metodları miras alması",
                        "Dosya kopyalama",
                        "Modül sistemi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "__proto__ ve prototype arasındaki fark nedir?",
                    secenekler: [
                        "Aynı şeylerdir",
                        "__proto__ instance'ın prototipi, prototype constructor fonksiyonun özelliği",
                        "prototype daha eskidir",
                        "__proto__ sadece dizilerde kullanılır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Object.create() ne yapar?",
                    secenekler: [
                        "Boş obje oluşturur",
                        "Belirtilen prototipe sahip yeni bir obje oluşturur",
                        "Objeyi kopyalar",
                        "Objeyi JSON'a çevirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "hasOwnProperty() ne kontrol eder?",
                    secenekler: [
                        "Özelliğin prototip zincirinde olup olmadığını",
                        "Özelliğin doğrudan nesnenin kendisine ait olup olmadığını",
                        "Nesnenin tipini",
                        "Nesnenin boyutunu",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Prototype chain (prototip zinciri) ne zaman sona erer?",
                    secenekler: [
                        "İlk nesnede",
                        "null'a ulaştığında (Object.prototype.__proto__ === null)",
                        "undefined döndüğünde",
                        "5. seviyeden sonra",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_18",
            tur: "js",
            ikon: "🌊",
            isim: "Iterator & Generator",
            sorular: [
                {
                    soru: "Generator fonksiyon nasıl tanımlanır?",
                    secenekler: [
                        "function gen() {}",
                        "function* gen() {}",
                        "async function gen() {}",
                        "generator gen() {}",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "yield anahtar kelimesi ne yapar?",
                    secenekler: [
                        "Fonksiyonu sonlandırır",
                        "Fonksiyonu duraklatır ve bir değer döndürür",
                        "Hata fırlatır",
                        "Değişken tanımlar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Iterator protokolü için hangi metod gereklidir?",
                    secenekler: ["next()", "iterate()", "loop()", "step()"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "next() metodu ne döndürür?",
                    secenekler: [
                        "Sadece değer",
                        "{ value, done } obje yapısı",
                        "Boolean",
                        "Array",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Symbol.iterator ne işe yarar?",
                    secenekler: [
                        "Sembol oluşturur",
                        "Bir nesneyi for...of ile yinelenebilir (iterable) yapar",
                        "Dizi oluşturur",
                        "Fonksiyon çağırır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "yield* ifadesi jeneratör içinde ne için kullanılır?",
                    secenekler: [
                        "İşlemi iptal etmek için",
                        "Başka bir jeneratöre veya iterable yapıya delegasyon yapmak için",
                        "Hata yakalamak için",
                        "Süreyi artırmak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Jeneratör fonksiyon içinde 'return' kullanılırsa ne olur?",
                    secenekler: [
                        "Done: true döner ve iterasyon biter",
                        "Hata fırlatır",
                        "İterasyon başa döner",
                        "Sonsuz döngü oluşur",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Jeneratörlerin sonsuz seriler (örn: fibonacci) üretmekte avantajı nedir?",
                    secenekler: [
                        "Daha hızlı çalışmaları",
                        "Verileri bellekte tutmadan, sadece istendiğinde (lazy evaluation) üretmeleri",
                        "Daha az kod yazılması",
                        "Şifreli olmaları",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Jeneratöre dışarıdan değer göndermek için hangi metod kullanılır?",
                    secenekler: ["send()", "push()", "next(değer)", "yield(değer)"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_19",
            tur: "js",
            ikon: "➕",
            isim: "Operatörler & Tip Dönüşümü",
            sorular: [
                {
                    soru: "'5' == 5 ifadesinin sonucu nedir?",
                    secenekler: ["true", "false", "TypeError", "undefined"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "'5' === 5 ifadesinin sonucu nedir?",
                    secenekler: ["true", "false", "TypeError", "undefined"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "== ve === arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "== tip dönüşümü yapar, === tip ve değer karşılaştırır",
                        "=== daha yavaştır",
                        "== sadece sayılarda çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Boolean('') sonucu nedir?",
                    secenekler: ["true", "false", "undefined", "Hata verir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Hangileri JavaScript'te falsy değerlerdir?",
                    secenekler: [
                        "0, '', null, undefined, NaN, false",
                        "0, '0', null, undefined",
                        "false, 0, []",
                        "null, undefined, 'false'",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "typeof NaN sonucu nedir?",
                    secenekler: ["'NaN'", "'number'", "'undefined'", "'object'"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Ternary operatör (? :) nasıl çalışır?",
                    secenekler: [
                        "Üç değişken tanımlar",
                        "koşul ? doğruysa : yanlışsa — kısa if-else alternatifi",
                        "Üç değeri toplar",
                        "Switch-case alternatifi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "null == undefined sonucu nedir?",
                    secenekler: ["false", "true", "TypeError", "NaN"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "null === undefined sonucu nedir?",
                    secenekler: ["true", "false (farklı tipler)", "TypeError", "NaN"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "|| (OR) ve && (AND) operatörleri kısa devre değerlendirme yapar. a || b ne döndürür?",
                    secenekler: [
                        "Her zaman boolean",
                        "a truthy ise a'yı, değilse b'yi döndürür",
                        "Her zaman b'yi döndürür",
                        "a ve b'yi birleştirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Nullish Coalescing (??) operatörü '||' operatöründen hangi durumda farklı davranır?",
                    secenekler: [
                        "null durumlarında",
                        "0 (sıfır) veya '' (boş string) gibi falsy değerlerin korunması istendiğinde",
                        "Hata olduğunda",
                        "Fark yok",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Virgül (,) operatörü bir ifade grubunda neyi döndürür?",
                    secenekler: ["İlk ifadeyi", "Tüm ifadeleri", "Gruptaki son ifadenin değerini", "Hiçbir şey"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "void operatörü ne için kullanılır?",
                    secenekler: ["Değeri silmek için", "İfadeyi değerlendirip daima 'undefined' döndürmek için", "Tip kontrolü için", "Obje dondurmak için"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "delete operatörü hangisini silebilir?",
                    secenekler: ["Sıradan bir değişkeni (var/let/const)", "Obje özelliklerini (configurable ise)", "Tüm sayfayı", "Belleği"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_20",
            tur: "js",
            ikon: "🔄",
            isim: "Event Loop",
            sorular: [
                {
                    soru: "JavaScript Event Loop ne işe yarar?",
                    secenekler: [
                        "DOM elementlerini döngüye sokar",
                        "Call stack boşaldığında callback queue'deki görevleri çalıştırır",
                        "Sonsuz döngü oluşturur",
                        "Event listener'ları yönetir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Call Stack (çağrı yığını) nedir?",
                    secenekler: [
                        "Telefon arama listesi",
                        "Fonksiyon çağrılarının sıralı olarak tutulduğu yapı (LIFO)",
                        "Dizi türü",
                        "Olay dinleyicisi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Microtask ve Macrotask arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "Microtask (Promise.then) macrotask'tan (setTimeout) önce çalışır",
                        "Macrotask daha hızlıdır",
                        "Microtask sadece Node.js'te çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "setTimeout(fn, 0) hemen çalışır mı?",
                    secenekler: [
                        "Evet, 0ms bekler ve hemen çalışır",
                        "Hayır, callback queue'ye eklenir ve call stack boşaldıktan sonra çalışır",
                        "Hata verir",
                        "Fonksiyonu iptal eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript neden single-threaded (tek iş parçacıklı)?",
                    secenekler: [
                        "Çünkü çok thread desteklemez",
                        "DOM manipülasyonunda race condition'ları önlemek için tasarlanmıştır",
                        "Tarayıcı kısıtlaması",
                        "Performans için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Web APIs (fetch, setTimeout, DOM) tarayıcıda nerede çalışır?",
                    secenekler: [
                        "Call Stack içinde",
                        "Tarayıcının arka plan thread'lerinde, tamamlanınca callback queue'ye gönderilir",
                        "Microtask Queue'da",
                        "JavaScript motoru içinde",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "console.log(1); Promise.resolve().then(() => console.log(2)); console.log(3); — çıktı sırası nedir?",
                    secenekler: ["1, 2, 3", "1, 3, 2", "3, 1, 2", "2, 1, 3"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Callback Queue (Task Queue) ve Microtask Queue hangisi önce işlenir?",
                    secenekler: [
                        "Callback Queue önce",
                        "Microtask Queue her zaman önce işlenir (Promise.then, queueMicrotask)",
                        "Eşit öncelik",
                        "Sırayla dönüşümlü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "queueMicrotask() fonksiyonunun amacı nedir?",
                    secenekler: [
                        "Görevi macrotask kuyruğuna atmak",
                        "Görevi doğrudan microtask kuyruğuna eklemek",
                        "Sayfayı yenilemek",
                        "Hata fırlatmak",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Modern tarayıcılarda UI güncellemeleri (rendering) genellikle ne zaman gerçekleşir?",
                    secenekler: [
                        "Her fonksiyon sonrasında",
                        "Microtask kuyruğu tamamen boşaldıktan sonra",
                        "Call stack dolduğunda",
                        "Sadece butona basıldığında",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'te uzun süren bir for döngüsü (örn: 10 saniye) Event Loop'u nasıl etkiler?",
                    secenekler: [
                        "Hiç etkilemez, paralel çalışır",
                        "Main thread'i bloklar, sayfa donar ve olaylar işlenemez",
                        "Döngü arka plana atılır",
                        "Hata fırlatır",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_29",
            tur: "js",
            ikon: "🏗️",
            isim: "Execution Context",
            sorular: [
                {
                    soru: "Execution Context (yürütme bağlamı) nedir?",
                    secenekler: [
                        "Bir dosya türü",
                        "JavaScript kodunun çalıştığı ortam: değişkenler, this, scope chain bilgisi",
                        "CSS bağlamı",
                        "HTML yapısı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Global Execution Context ne zaman oluşturulur?",
                    secenekler: [
                        "Fonksiyon çağrıldığında",
                        "JavaScript dosyası yüklendiğinde otomatik olarak (ilk oluşturulan context)",
                        "import yapıldığında",
                        "Event tetiklendiğinde",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Function Execution Context ne zaman oluşturulur?",
                    secenekler: [
                        "Fonksiyon tanımlandığında",
                        "Fonksiyon her çağrıldığında yeni bir context oluşturulur",
                        "Sadece arrow function'larda",
                        "Sadece async fonksiyonlarda",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Hoisting nedir?",
                    secenekler: [
                        "Değişkeni silme",
                        "var ve function tanımlarının creation phase'da scope'un başına taşınması",
                        "Değişkeni kopyalama",
                        "Değişkeni dondurma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "let ve const hoisting yapılır mı?",
                    secenekler: [
                        "Hayır, hiç yapılmaz",
                        "Evet yapılır ama Temporal Dead Zone'da olduğu için erişilemez (ReferenceError)",
                        "Sadece const yapılır",
                        "Sadece let yapılır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Scope Chain nedir?",
                    secenekler: [
                        "Zincir veri yapısı",
                        "İç scope'tan dış scope'a doğru değişken arama mekanizması",
                        "CSS cascade",
                        "DOM ağacı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Variable Environment nedir?",
                    secenekler: [
                        "Ortam değişkeni (process.env)",
                        "Execution context'in var, let, const ve fonksiyon tanımlarını sakladığı kayıt alanı",
                        "Tarayıcı ayarları",
                        "Node.js modülü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Global Execution Context (GEC) hakkında hangisi doğrudur?",
                    secenekler: [
                        "Her fonksiyon için bir tane oluşur",
                        "Her JavaScript sayfası için sadece bir tane oluşur",
                        "Sadece Node.js'de vardır",
                        "Hataları yakalar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Context'in 'Creation Phase'inde (Yaratım Aşaması) ne yapılır?",
                    secenekler: [
                        "Kod satır satır çalıştırılır",
                        "Bellekte yer ayrılır (Hoisting) ve Scope Chain kurulur",
                        "Veritabanına bağlanılır",
                        "Sayfa render edilir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Strict mode kullanımı execution context'i nasıl etkiler?",
                    secenekler: [
                        "Hızı artırır",
                        "this bağlamının global nesne yerine varsayılan olarak undefined olmasını sağlar",
                        "Belleği temizler",
                        "Import işlemlerini engeller",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_21",
            tur: "js",
            ikon: "👆",
            isim: "this Bağlamı",
            sorular: [
                {
                    soru: "Global scope'ta 'this' neyi işaret eder (tarayıcıda)?",
                    secenekler: ["undefined", "null", "window nesnesi", "document nesnesi"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "call() metodu ne yapar?",
                    secenekler: [
                        "Fonksiyonu çağırır",
                        "Fonksiyonu belirtilen this bağlamıyla çağırır (argümanlar virgülle)",
                        "Fonksiyonu kopyalar",
                        "Fonksiyonu siler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "apply() ile call() arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "apply() argümanları dizi olarak alır, call() virgülle alır",
                        "call() daha hızlıdır",
                        "apply() sadece objelerde çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "bind() metodu ne döndürür?",
                    secenekler: [
                        "Fonksiyonun sonucunu",
                        "this bağlamı sabitlenmiş yeni bir fonksiyon",
                        "Boolean değer",
                        "undefined",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Arrow function'da 'this' nasıl belirlenir?",
                    secenekler: [
                        "Çağrıldığı yere göre",
                        "Tanımlandığı yerdeki (lexical) this'i kullanir",
                        "Her zaman window'dur",
                        "Her zaman undefined'dır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'use strict' modu bir fonksiyon içindeki varsayılan 'this' bağlamını nasıl etkiler?",
                    secenekler: ["window nesnesi yapar", "undefined yapar", "null yapar", "Değiştirmez"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir HTML elementine eklenen inline event listener içinde 'this' neyi işaret eder?",
                    secenekler: ["window nesnesi", "document nesnesi", "Olayın eklendiği HTML elementini", "undefined"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Constructor (yapıcı) fonksiyonlarda 'this' neyi temsil eder?",
                    secenekler: ["Fonksiyonun kendisini", "Yeni oluşturulan nesne örneğini (instance)", "window nesnesini", "Prototipi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "bind() metoduna ilk argüman olarak 'null' geçilirse (non-strict modda) this ne olur?",
                    secenekler: ["null", "undefined", "Global nesne (window)", "Hata verir"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_22",
            tur: "js",
            ikon: "📋",
            isim: "JSON İşlemleri",
            sorular: [
                {
                    soru: "JSON.stringify() ne yapar?",
                    secenekler: [
                        "JSON'u objeye çevirir",
                        "JavaScript değerini JSON string'ine çevirir",
                        "Dosya oluşturur",
                        "Veri siler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSON.parse() ne yapar?",
                    secenekler: [
                        "JSON string'ini JavaScript objesine çevirir",
                        "Objeyi string'e çevirir",
                        "HTML'i ayrıştırır",
                        "RegEx ayrıştırır",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "JSON formatında hangi veri tipleri desteklenir?",
                    secenekler: [
                        "Sadece string ve number",
                        "string, number, boolean, null, array, object",
                        "Tüm JavaScript tipleri",
                        "Sadece string",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSON.stringify() ile derin kopyalama (deep clone) nasıl yapılır?",
                    secenekler: [
                        "JSON.copy(obje)",
                        "JSON.parse(JSON.stringify(obje))",
                        "JSON.clone(obje)",
                        "JSON.deep(obje)",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSON formatında hangi değer TÜRLERİ desteklenmez?",
                    secenekler: [
                        "null ve boolean",
                        "function, undefined, Symbol ve Date objeleri (olduğu gibi)",
                        "number ve string",
                        "array ve object",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSON.stringify() metodunun ikinci parametresi (replacer) ne işe yarar?",
                    secenekler: [
                        "Çıktıyı güzelleştirir",
                        "Hangi özelliklerin serileştirileceğini seçmeyi veya değerleri dönüştürmeyi sağlar",
                        "Hataları gizler",
                        "Dosya adını belirler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSON.stringify() metodunun üçüncü parametresi (space) ne için kullanılır?",
                    secenekler: ["Belleği artırır", "Okunabilirliği artırmak için çıktıya boşluk veya tab ekler", "Veriyi şifreler", "Sıralama yapar"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir nesnede 'toJSON' metodu tanımlanmışsa JSON.stringify() nasıl davranır?",
                    secenekler: ["Metodu yok sayar", "toJSON metodunun döndürdüğü değeri serileştirir", "Hata fırlatır", "Metodu siler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSON neden 'undefined' değerini desteklemez?",
                    secenekler: [
                        "Sadece rakam odaklıdır",
                        "JSON dile özgü olmayan genel bir format olduğu için (JS'e özgü undefined standartta yoktur)",
                        "Modern değildir",
                        "Çok yer kaplar",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_23",
            tur: "js",
            ikon: "📅",
            isim: "Date & Intl API",
            sorular: [
                {
                    soru: "new Date() ne döndürür?",
                    secenekler: [
                        "Bugünün tarihini string olarak",
                        "Şu anki tarih ve saati temsil eden Date objesi",
                        "Unix timestamp",
                        "Sadece tarihi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Date.now() ne döndürür?",
                    secenekler: [
                        "Tarih objesi",
                        "Milisaniye cinsinden Unix timestamp",
                        "String tarih",
                        "Saniye cinsinden zaman",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Intl.DateTimeFormat ne işe yarar?",
                    secenekler: [
                        "Tarih hesaplama",
                        "Tarihi yerel (locale) formata göre biçimlendirme",
                        "Tarih oluşturma",
                        "Zaman dilimi değiştirme",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "getMonth() metodu Ocak ayı için ne döndürür?",
                    secenekler: ["1", "0 (aylar 0'dan başlar)", "'Ocak'", "undefined"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Intl.NumberFormat ne için kullanılır?",
                    secenekler: [
                        "Sayıyı string'e çevirme",
                        "Sayıyı para birimi / yüzde gibi yerel formatta gösterme",
                        "Matematiksel hesaplama",
                        "Rastgele sayı üretme",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "new Date(2023, 0, 1) ifadesi hangi tarihi oluşturur?",
                    secenekler: ["1 Ocak 2023", "20 Eylül 2023", "1 Aralık 2023", "Hatalı tarih"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "UTC zamanı ile yerel zaman arasındaki farkı (dakika cinsinden) hangi metod verir?",
                    secenekler: ["getOffset()", "getTimezoneOffset()", "getDiff()", "getUTCDelta()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Intl.RelativeTimeFormat API'sinin görevi nedir?",
                    secenekler: [
                        "Tarihleri toplamak",
                        "'2 gün önce', 'gelecek hafta' gibi ifadeleri dile göre biçimlendirmek",
                        "Takvim oluşturmak",
                        "Hava durumunu çekmek",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir Date nesnesinin sadece yıl bilgisini güncellemek için hangisi kullanılır?",
                    secenekler: [".setYear()", ".setFullYear()", ".updateYear()", ".changeYear()"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_24",
            tur: "js",
            ikon: "🧩",
            isim: "Design Patterns",
            sorular: [
                {
                    soru: "Singleton pattern nedir?",
                    secenekler: [
                        "Her seferinde yeni obje oluşturma",
                        "Bir sınıftan yalnızca tek bir örnek (instance) oluşturulmasını sağlama",
                        "Objeleri birleştirme",
                        "Fonksiyonları zincirleme",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Observer pattern ne işe yarar?",
                    secenekler: [
                        "Nesneleri gözlemleme",
                        "Bir nesnedeki değişiklikten diğer nesneleri otomatik haberdar etme",
                        "Hata izleme",
                        "DOM gözlemleme",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Factory pattern ne sağlar?",
                    secenekler: [
                        "Fabrika uygulaması",
                        "Obje oluşturma mantığını soyutlayarak koşula göre farklı objeler üretme",
                        "Diziyi fabrikada işleme",
                        "Class oluşturma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Module pattern ne için kullanılır?",
                    secenekler: [
                        "ES6 modülleri yüklemek için",
                        "Özel (private) ve genel (public) alanlar oluşturarak kapsülleme sağlamak",
                        "Modül indirmek için",
                        "Dosya oluşturmak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Debounce ve Throttle ne için kullanılır?",
                    secenekler: [
                        "Animasyon oluşturmak için",
                        "Sık tetiklenen olayların performansını kontrol etmek için (arama, scroll)",
                        "Dosya sıkıştırma için",
                        "Veritabanı sorgusu için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Publish-Subscribe (Pub/Sub) modeli hangi tasarım desenine dayanır?",
                    secenekler: ["Singleton", "Observer", "Factory", "Decorator"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir fonksiyonun sonuçlarını girdi parametrelerine göre önbelleğe alma tekniğine ne denir?",
                    secenekler: ["Recursion", "Memoization", "Filtering", "Mapping"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Decorator Pattern'in temel amacı nedir?",
                    secenekler: [
                        "Sınıfı silmek",
                        "Bir nesneye çalışma zamanında (runtime) dinamik olarak yeni davranışlar eklemek",
                        "Sadece görsel tasarım yapmak",
                        "Dizileri sıralamak",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Command Pattern neyi hedefler?",
                    secenekler: [
                        "Komut satırı yazmayı",
                        "Bir isteği nesne olarak kapsülleyerek parametreleştirmeyi ve geri almayı (undo) kolaylaştırmayı",
                        "Programı hızlandırmayı",
                        "Dosya sistemine erişmeyi",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_25",
            tur: "js",
            ikon: "🔢",
            isim: "Sayılar & Math",
            sorular: [
                {
                    soru: "Math.random() ne döndürür?",
                    secenekler: ["1-100 arası rastgele sayı", "0-1 arası rastgele ondalık sayı (0 dahil, 1 hariç)", "Rastgele tam sayı", "NaN"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "parseInt('42px') sonucu nedir?",
                    secenekler: ["NaN", "42", "'42'", "Hata verir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "0.1 + 0.2 === 0.3 ifadesi neden false döner?",
                    secenekler: ["JavaScript hatası", "Kayan nokta (floating-point) hassasiyet sorunu", "Tip uyumsuzluğu", "Her zaman true döner"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Number.isNaN() ile global isNaN() arasındaki fark nedir?",
                    secenekler: ["Hiçbir fark yok", "Number.isNaN() sadece gerçek NaN için true döner, isNaN() tip dönüşümü yapar", "isNaN() daha güvenilir", "Number.isNaN() daha yavaş"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Math.floor(-4.7) sonucu nedir?",
                    secenekler: ["-4", "-5", "4", "-4.7"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Math.hypot(3, 4) sonucu nedir?",
                    secenekler: ["7", "12", "5 (karekök(3^2 + 4^2))", "0"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bir sayıyı en yakın tam sayıya yuvarlamak için hangisi kullanılır?",
                    secenekler: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "JavaScript'te güvenli bir şekilde temsil edilebilecek en büyük tam sayı sabiti nedir?",
                    secenekler: ["Number.MAX_VALUE", "Number.MAX_SAFE_INTEGER", "Infinity", "Number.EPSILON"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Math.sign(-10) ne döndürür?",
                    secenekler: ["-10", "1", "-1", "false"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Sayısal bir string'i (örn: '10.5') ondalıklı sayı tipine çevirmek için hangisi kullanılır?",
                    secenekler: ["parseInt()", "parseFloat()", "Math.toDecimal()", "String.toNumber()"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_26",
            tur: "js",
            ikon: "🪞",
            isim: "Proxy & Reflect",
            sorular: [
                {
                    soru: "Proxy nedir?",
                    secenekler: ["Ağ bağlantısı", "Bir objenin temel işlemlerini yakalayıp özelleştirmeyi sağlayan sarmalayıcı", "Fonksiyon türü", "Dizi metodu"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Proxy'de 'get' trap'i ne zaman tetiklenir?",
                    secenekler: ["Objeye yeni özellik eklendiğinde", "Objenin bir özelliği okunduğunda", "Obje silindiğinde", "Obje oluşturulduğunda"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Reflect API ne sağlar?",
                    secenekler: ["Ayna efekti", "Proxy handler'larıyla aynı isimlerde, varsayılan davranışı çağırmak için metotlar", "DOM manipülasyonu", "Stil yönetimi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Proxy hangi modern framework'lerin reaktivite sisteminde kullanılır?",
                    secenekler: ["React", "Vue 3", "Angular", "jQuery"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Proxy'de 'set' trap'i hangi parametreleri alır?",
                    secenekler: ["(value)", "(target, property, value, receiver)", "(key, value)", "(object, method)"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Proxy trap'leri içindeki 'receiver' parametresi tipik olarak neyi temsil eder?",
                    secenekler: ["Hedef nesneyi", "Veritabanını", "Proxy nesnesinin kendisini veya miras alan nesneyi", "Tarayıcıyı"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bir nesnenin bir özelliğinin silinmesini yakalamak için hangi Proxy trap'i kullanılır?",
                    secenekler: ["onDelete", "deleteProperty", "remove", "clear"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Reflect.has(obj, 'prop') ne ile aynı işlevi görür?",
                    secenekler: ["obj.hasOwnProperty('prop')", "'prop' in obj", "obj.includes('prop')", "obj.prop"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Proxy nesnesinin tipini 'typeof' ile kontrol edersek ne döner?",
                    secenekler: ["'proxy'", "Hedef nesnenin tipi (örn: 'object' veya 'function')", "'undefined'", "'class'"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_27",
            tur: "js",
            ikon: "👷",
            isim: "Web Workers",
            sorular: [
                {
                    soru: "Web Worker ne sağlar?",
                    secenekler: ["DOM manipülasyonu", "Ana thread'den bağımsız arka plan thread'inde kod çalıştırma", "CSS animasyonu", "LocalStorage erişimi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Web Worker ile ana thread arasında iletişim nasıl yapılır?",
                    secenekler: ["Global değişkenlerle", "postMessage() ve onmessage event'i ile", "localStorage ile", "Doğrudan fonksiyon çağrısı ile"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Web Worker içinde DOM'a erişilebilir mi?",
                    secenekler: ["Evet, normal şekilde", "Hayır, Worker'lar DOM'a erişemez", "Sadece okuma için", "Sadece body elementine"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Service Worker ne için kullanılır?",
                    secenekler: ["Veritabanı yönetimi", "Ağ isteklerini yakalama, offline destek ve push bildirim", "CSS işleme", "HTML render"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Worker.terminate() ne yapar?",
                    secenekler: ["Sayfayı kapatır", "Worker thread'ini anında sonlandırır", "Worker'ı duraklatır", "Mesaj gönderir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SharedWorker ile normal (Dedicated) Worker arasındaki fark nedir?",
                    secenekler: [
                        "Daha hızlıdır",
                        "Birden fazla sekme veya pencere tarafından paylaşılabilir",
                        "Sadece Node.js'de çalışır",
                        "Daha güvenlidir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Web Worker içinde dış kütüphaneleri/dosyaları yüklemek için ne kullanılır?",
                    secenekler: ["import ... from ...", "require()", "importScripts()", "load()"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Web Worker içinde 'this' veya 'self' neyi işaret eder?",
                    secenekler: ["window nesnesi", "document nesnesi", "Worker'ın kendi global kapsamını", "Ana thread'i"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Worker'a veri gönderirken kullanılan structured clone algoritması hangisini KOPYALAYAMAZ?",
                    secenekler: ["Diziler", "Objeler", "Fonksiyonlar ve DOM elemanları", "Sayılar"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_28",
            tur: "js",
            ikon: "⚡",
            isim: "Performans & Memory",
            sorular: [
                {
                    soru: "Memory leak (bellek sızıntısı) nedir?",
                    secenekler: ["Dosya kaybı", "Kullanılmayan belleğin serbest bırakılmaması", "Ağ bağlantı sorunu", "CPU aşırı kullanımı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Debounce ne yapar?",
                    secenekler: ["Fonksiyonu hemen çalıştırır", "Son tetiklemeden belirli süre geçtikten sonra fonksiyonu çalıştırır", "Fonksiyonu iptal eder", "Fonksiyonu kopyalar"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Throttle ne yapar?",
                    secenekler: ["Fonksiyonu engeller", "Fonksiyonu belirli aralıklarla en fazla bir kez çalıştırır", "Fonksiyonu hızlandırır", "Fonksiyonu geciktirir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "requestAnimationFrame() neden setTimeout'tan daha iyi?",
                    secenekler: ["Daha kolay sözdizimi", "Tarayıcı render döngüsüyle senkronize çalışır, 60fps garanti eder", "Daha hızlıdır", "Callback almaz"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Yaygın memory leak sebeplerinden biri hangisidir?",
                    secenekler: ["const kullanmak", "Kaldırılmayan event listener'lar ve temizlenmeyen timer'lar", "Arrow function kullanmak", "Template literal kullanmak"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Chrome DevTools'ta bellek analizi ve sızıntı tespiti için hangi sekme kullanılır?",
                    secenekler: ["Network", "Memory", "Application", "Security"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript Garbage Collector (Çöp Toplayıcı) temel olarak nasıl çalışır?",
                    secenekler: [
                        "Tüm değişkenleri siler",
                        "Erişilemeyen (unreachable) nesneleri tespit edip belleği serbest bırakır",
                        "Sadece sayfayı yeniler",
                        "CPU'yu hızlandırır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WeakMap/WeakSet kullanmanın bellek yönetimine katkısı nedir?",
                    secenekler: [
                        "Daha hızlı erişim sağlar",
                        "İçindeki nesneler başka referans kalmayınca otomatik silinebilir, sızıntıyı önler",
                        "Daha fazla veri tutar",
                        "Şifreleme sağlar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Resimlerin sadece ekranda göründüğünde yüklenmesi tekniğine ne denir?",
                    secenekler: ["Early Loading", "Lazy Loading", "Background Loading", "Pre-fetching"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_30",
            tur: "js",
            ikon: "📚",
            isim: "Execution Stack",
            sorular: [
                {
                    soru: "Execution Stack (Call Stack) ne işe yarar?",
                    secenekler: [
                        "Veritabanı bağlantılarını tutar",
                        "JavaScript'te fonksiyon çağrılarının sırasını (LIFO) takip eder",
                        "Asenkron işlemleri depolar",
                        "Değişkenlerin değerlerini şifreler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Call Stack sınırını aştığında (çok fazla iç içe fonksiyon çağrısı olduğunda) hangi hata alınır?",
                    secenekler: [
                        "TypeError",
                        "ReferenceError",
                        "Maximum call stack size exceeded",
                        "NetworkError"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Call Stack'in çalışma prensibi nedir?",
                    secenekler: [
                        "LIFO (Last In, First Out - Son Giren, İlk Çıkar)",
                        "FIFO (First In, First Out - İlk Giren, İlk Çıkar)",
                        "Rastgele çalışma",
                        "Alfabetik sıralama",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Stack'e yeni bir öğe eklenmesine ne ad verilir?",
                    secenekler: ["Push", "Pop", "Add", "Insert"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Stack'ten bir öğenin çıkarılmasına ne ad verilir?",
                    secenekler: ["Shift", "Unshift", "Pop", "Remove"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Recursion (özyineleme) hatasız nasıl çalışmalıdır?",
                    secenekler: [
                        "Her zaman sonsuz olmalıdır",
                        "Mutlaka bir sonlanma/durma (base case) koşulu olmalıdır",
                        "Sadece sayılarla çalışmalıdır",
                        "Daha yavaş olmalıdır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Asenkron bir fonksiyon (örn: fetch) stack'i nasıl kullanır?",
                    secenekler: [
                        "Tüm süreç boyunca stack'te kalır",
                        "Call stack'te sadece başlatılır, beklerken stack'ten çıkar, sonuçlanınca geri döner",
                        "Stack'i hiç kullanmaz",
                        "Stack'i yavaşlatır",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_31",
            tur: "js",
            ikon: "⏱️",
            isim: "Debounce & Throttle",
            sorular: [
                {
                    soru: "Debounce tekniği ne amaçla kullanılır?",
                    secenekler: [
                        "Fonksiyonun her çağrılışında çalıştırılmasını garanti eder",
                        "Kullanıcı hızlı bir şekilde bir olay tetikliyorsa, yalnızca işlem durduğunda veya belirli bir süre geçtiğinde fonksiyonu bir kez çalıştırır",
                        "Sayfadaki tüm animasyonları hızlandırır",
                        "API yanıtlarını önbelleğe alır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Throttle tekniğinin Debounce'tan farkı nedir?",
                    secenekler: [
                        "Hiçbir farkı yoktur",
                        "Throttle fonksiyonun belirtilen zaman diliminde en fazla bir kez çalışmasını garanti eder, Debounce ise bekleme süresi bitince çalıştırır",
                        "Throttle daha çok bellek tüketir",
                        "Debounce sadece React'ta çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Arama kutusuna (search input) her harf yazıldığında API isteği atmamak için hangi teknik daha uygundur?",
                    secenekler: [
                        "Throttle",
                        "Debounce",
                        "Memoization",
                        "Currying"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Debounce fonksiyonunda timer her yeni tetiklemede ne olur?",
                    secenekler: [
                        "Aynen devam eder",
                        "Eski timer temizlenir (clearTimeout) ve yeni bir süre başlatılır",
                        "Timer durur",
                        "Hızlanır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Yüksek frekanslı 'scroll' veya 'resize' olaylarında güncellemeyi sabit aralıklarla yapmak için hangisi uygundur?",
                    secenekler: ["Debounce", "Throttle", "setTimeout", "Promise"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Throttle fonksiyonunda 'leading' ayarı ne sağlar?",
                    secenekler: [
                        "Fonksiyonu sonlandırır",
                        "Olayın ilk tetiklendiği an fonksiyonun hemen çalışmasını sağlar",
                        "Süreyi uzatır",
                        "Hata kontrolü yapar",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_32",
            tur: "js",
            ikon: "🍛",
            isim: "Currying",
            sorular: [
                {
                    soru: "Currying nedir?",
                    secenekler: [
                        "Birden fazla parametre alan bir fonksiyonun, her seferinde bir parametre alan iç içe fonksiyonlar zincirine dönüştürülmesidir",
                        "Veritabanında veri sorgulama işlemidir",
                        "Dizideki elemanları filtreleme yöntemidir",
                        "DOM içerisindeki elementleri seçmektir"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Aşağıdaki kod Currying'e bir örnek midir?\nconst topla = a => b => a + b;\ntopla(5)(10);",
                    secenekler: [
                        "Hayır, bu bir closure'dır ama currying değildir",
                        "Evet, çoklu argüman alan fonksiyon tek argümanlı fonksiyonlara bölünmüştür",
                        "Hayır, syntax hatası verir",
                        "Evet, ancak sadece backend'de çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Currying'in temel avantajı nedir?",
                    secenekler: [
                        "Kodu daha hızlı çalıştırır",
                        "Kodun yeniden kullanılabilirliğini (reusability) ve fonksiyonların kompozisyonunu kolaylaştırır",
                        "Asenkron işlemleri senkron hale getirir",
                        "Tarayıcı belleğini temizler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Currying ile Partial Application benzer midir?",
                    secenekler: [
                        "Tamamen zıttır",
                        "Benzerdir, ancak Currying her adımda tek argüman alırken Partial Application birden fazla alabilir",
                        "Aynı şeyin farklı dillerdeki ismidir",
                        "Sadece backend'de benzerdir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Lodash veya Ramda gibi kütüphaneler currying için ne sağlar?",
                    secenekler: [
                        "Kod şifreleme",
                        "Girdi olarak verilen herhangi bir fonksiyonu otomatik olarak 'curried' hale getirebilirler",
                        "Sadece matematiksel hızlandırma",
                        "Görsel tasarım",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "const add = a => b => c => a + b + c; yapısı neyi ifade eder?",
                    secenekler: ["Dizi birleştirme", "3 parametreli bir Curried fonksiyonu", "Syntax hatası", "API isteği"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_33",
            tur: "js",
            ikon: "🧩",
            isim: "Partial Application",
            sorular: [
                {
                    soru: "Partial Application (Kısmi Uygulama) nedir?",
                    secenekler: [
                        "Fonksiyonun sadece yarısını çalıştırmaktır",
                        "Bir fonksiyonun bazı argümanlarını önceden sağlayarak, daha az argüman bekleyen yeni bir fonksiyon üretmektir",
                        "Uygulamayı parça parça sunucuya yüklemektir",
                        "Sayfadaki elementleri kısmi olarak render etmektir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "bind() metodu kullanılarak Partial Application yapılabilir mi?",
                    secenekler: [
                        "Hayır, bind sadece this bağlamını değiştirir",
                        "Evet, bind() ile varsayılan parametreler atanarak yeni bir fonksiyon elde edilebilir",
                        "Sadece ok fonksiyonlarında (arrow functions) yapılır",
                        "Evet ancak performansı çok düşürür"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Currying ve Partial Application arasındaki temel fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur, aynı şeydir",
                        "Currying her bir parametre için tek parametreli bir fonksiyon zinciri oluşturur. Partial Application ise rastgele sayıda argümanı sabitleyip geri kalanı bekleyen bir fonksiyon döner",
                        "Currying nesnelerde, Partial Application dizilerde kullanılır",
                        "Partial Application daha moderndir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'teki 'bind' metodu partial application yapmak için nasıl kullanılır?",
                    secenekler: [
                        "bind(thisArg, arg1, arg2...)",
                        "bind(arg1, arg2)",
                        "bind().apply()",
                        "Kullanılamaz"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Partial application fonksiyonun hangi özelliğini artırır?",
                    secenekler: ["Bellek tüketimini", "Özelleştirilebilirliğini ve esnekliğini", "Çalışma hızını", "Güvenliğini"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_34",
            tur: "js",
            ikon: "🧠",
            isim: "Memoization",
            sorular: [
                {
                    soru: "Memoization (Not Alma/Hatırlama) ne amaçla kullanılır?",
                    secenekler: [
                        "Kullanıcı şifrelerini tarayıcı hafızasına kaydetmek için",
                        "Maliyetli fonksiyon veya işlemlerin sonuçlarını önbelleğe (cache) alarak aynı girdilerle tekrar çağrıldığında işlemi yeniden yapmak yerine önbellekteki sonucu dönmek için",
                        "DOM elementlerine not eklemek için",
                        "JavaScript hata kayıtlarını tutmak için"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Aşağıdakilerden hangisi memoization'ın dezavantajı olabilir?",
                    secenekler: [
                        "Uygulamada bellek (memory) kullanımını artırması",
                        "İşlemci yorgunluğu yaratması",
                        "Sadece asenkron kodlarda çalışabilmesi",
                        "Kapseltme (encapsulation) hatasına yol açması"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Memoization hangi programlama paradigmasında çok sık karşılaşılan bir yapıdır?",
                    secenekler: [
                        "Nesne Yönelimli Programlama (OOP)",
                        "Fonksiyonel Programlama ve Dinamik Programlama",
                        "Olay Güdümlü Programlama (Event-Driven)",
                        "Prosedürel Programlama"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Memoization işlemi için sonuçlar genellikle nerede saklanır?",
                    secenekler: ["Veritabanında", "Dosya sisteminde", "Fonksiyonun kendi içindeki bir 'cache' objesinde veya closure'da", "Global window nesnesinde"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Hangi tür fonksiyonlar memoization için EN UYGUNDUR?",
                    secenekler: ["Yan etkili (side-effect) fonksiyonlar", "Saf (pure) fonksiyonlar (aynı girdiyle her zaman aynı çıktıyı veren)", "Asenkron fonksiyonlar", "Rastgele sayı üreten fonksiyonlar"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_35",
            tur: "js",
            ikon: "🪞",
            isim: "Deep vs Shallow Copy",
            sorular: [
                {
                    soru: "Shallow Copy (Sığ Kopya) ile Deep Copy (Derin Kopya) arasındaki en temel fark nedir?",
                    secenekler: [
                        "Shallow copy hızlı, Deep copy yavaştır",
                        "Shallow copy sadece ilk seviye özellikleri kopyalar iç içe objeler referans olarak kalır. Deep copy ise tüm iç içe geçmiş yapıları tamamen yeni nesneler olarak kopyalar",
                        "Deep copy sadece diziler için geçerlidir",
                        "İkisi de aynı amaca hizmet eder"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'te spread spread operatörü {...obj} ile kopyalama ne tür bir kopyalamadır?",
                    secenekler: [
                        "Deep Copy",
                        "Shallow Copy",
                        "Reference Copy",
                        "JSON Copy"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Modern JavaScript'te güvenli ve yerleşik bir Deep Copy yöntemi hangisidir?",
                    secenekler: [
                        "Object.assign()",
                        "JSON.parse(JSON.stringify(obj))",
                        "structuredClone()",
                        "Array.from()"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Shallow copy bir dizide iç içe geçmiş bir objeyi değiştirirseniz orijinal dizi ne olur?",
                    secenekler: ["Değişmez", "Orijinal dizi de etkilenir çünkü referans kopyalanmıştır", "Hata verir", "Sadece kopyalanan dizi değişir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dizi kopyalamada [ ...dizi ] kullanımı ne tür bir kopyalamadır?",
                    secenekler: ["Deep Copy", "Reference Copy", "Shallow Copy", "Direct Link"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_36",
            tur: "js",
            ikon: "💎",
            isim: "Immutable Data",
            sorular: [
                {
                    soru: "Immutable Data (Değiştirilemez Veri) ne anlama gelir?",
                    secenekler: [
                        "Oluşturulduktan sonra içeriği veya durumu değiştirilemeyen veri yapıları",
                        "Şifrelenmiş veri kalıpları",
                        "Silinemeyen veritabanı tabloları",
                        "İnternet bağlantısı koptuğunda kaybolmayan veriler"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Kodu immutable bir şekilde yazmanın en büyük faydası nedir?",
                    secenekler: [
                        "Uygulamayı hızlandırır",
                        "Beklenmedik yan etkileri (side effects) önler ve state yönetimini (ör. React state) çok daha öngörülebilir hale getirir",
                        "Tarayıcı önbelleğini azaltır",
                        "Kodun kısalmasını sağlar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JavaScript'te bir nesneyi tamamen immutable (değiştirilemez) hale getirmek için hangi yerleşik metod kullanılır?",
                    secenekler: [
                        "Object.seal()",
                        "Object.preventExtensions()",
                        "Object.freeze()",
                        "Object.lock()"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Object.freeze() uygulanan bir nesnede yeni özellik eklenebilir mi?",
                    secenekler: ["Evet", "Hayır, ne eklenebilir ne silinebilir ne de değiştirilebilir", "Sadece silinebilir", "Sadece değer değiştirilebilir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Object.seal() ile Object.freeze() arasındaki fark nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "Seal özellik silmeyi/eklemeyi engeller ama mevcut özellikler değiştirilebilir. Freeze her şeyi engeller",
                        "Freeze sadece dizilerde çalışır",
                        "Seal daha hızlıdır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_37",
            tur: "js",
            ikon: "❓",
            isim: "Optional Chaining",
            sorular: [
                {
                    soru: "Optional Chaining (?.) operatörü kodda ne tür bir sorunu çözer?",
                    secenekler: [
                        "Null veya undefined olabilecek iç içe özelliklere (nested properties) erişirken 'TypeError' hatası fırlamadan güvenli okuma yapmayı sağlar",
                        "Değişkenlerin tipini kontrol eder",
                        "Birden fazla asenkron isteği zincirler",
                        "Dizileri objeye dönüştürür"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "user?.profile?.address ifadesinde 'profile' undefined ise sonuç ne döner?",
                    secenekler: [
                        "TypeError hatası fırlatır",
                        "null",
                        "undefined",
                        "Boş string ('')"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Optional chaining fonksiyon çağrılarında (örn. obj.func?.()) kullanılabilir mi?",
                    secenekler: [
                        "Hayır, sadece obje özellikleri için geçerlidir",
                        "Evet, eğer fonksiyon tanımlıysa onu çağırır, yoksa undefined döner",
                        "Evet, ancak bu kullanım performans kayıplarına yol açar",
                        "Fonksiyonlarda ?? operatörü kullanılır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dizi elemanlarına erişirken optional chaining kullanılabilir mi? (örn: dizi?.[0])",
                    secenekler: ["Hayır", "Sadece string dizilerinde", "Evet, dizi null/undefined ise hata vermez", "Sadece React'ta"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Optional chaining operatörü (?.) hangi operatörün daha güvenli bir alternatifidir?",
                    secenekler: ["+", "&&", "||", "!"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_38",
            tur: "js",
            ikon: "⁉️",
            isim: "Nullish Coalescing",
            sorular: [
                {
                    soru: "Nullish Coalescing (??) operatörü HANGİ değerleri kontrol eder?",
                    secenekler: [
                        "Tüm falsy değerleri (0, '', false, null, undefined)",
                        "Sadece null ve undefined değerleri kontrol eder",
                        "Sadece NaN ve undefined değerlerini kontrol eder",
                        "Sadece boş dizileri"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "const count = 0 ?? 10; ifadesinin sonucu ne olur?",
                    secenekler: [
                        "10",
                        "0 (Çünkü 0, null veya undefined değildir)",
                        "undefined",
                        "TypeError"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Neden Mantıksal VEYA (||) yerine Nullish Coalescing (??) tercih edilebilir?",
                    secenekler: [
                        "Çünkü ?? operatörü 0, false veya boş string('') gibi geçerli falsy verileri ezmez, bunlara varsayılan değerler atamaz",
                        "|| operatörü sadece sayılarda çalışır",
                        "?? daha kısa yazılır",
                        "|| eski tarayıcılarda çalışmaz"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "NaN ?? 10 işleminin sonucu nedir?",
                    secenekler: ["10", "NaN", "undefined", "TypeError"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "?? operatörü hangi operatörlerle parantez kullanmadan aynı ifadede yer alamaz?",
                    secenekler: ["+ ve -", "/ ve *", "&& ve ||", "== ve !="],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Değişken null/undefined ise atama yapan mantıksal atama operatörü hangisidir?",
                    secenekler: ["||=", "&&=", "??=", "**="],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "js_39",
            tur: "js",
            ikon: "📥",
            isim: "Dynamic import()",
            sorular: [
                {
                    soru: "Dynamic import() (Dinamik İçe Aktarma) bize ne sağlar?",
                    secenekler: [
                        "Modülleri sayfa yüklenirken en başta (senkron) indirmeyi zorunlu kılar",
                        "Modüllerin kodun herhangi bir yerinde ve ihtiyaç anında asenkron (Promise olarak) yüklenmesini sağlar",
                        "Dışarıdan CSS dosyası almayı engeller",
                        "React'ta prop doğrulaması yapar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dinamik yüklenen bir modülü kullanmanın doğru yolu hangisidir?",
                    secenekler: [
                        "import { Utils } from './utils.js'",
                        "const Utils = require('./utils.js')",
                        "import('./utils.js').then(module => { module.yapIslem() })",
                        "fetch('./utils.js')"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bu özelliğin performans açısından en büyük artısı nedir?",
                    secenekler: [
                        "Daha fazla CPU kullanımı ile hızı artırır",
                        "Modülü bellekte sıkıştırır",
                        "Kullanılmayan kodların (Code Splitting / Lazy Loading) ilk yüklemede indirilmesini engelleyerek sayfanın daha hızlı açılmasını sağlar",
                        "JavaScript dosyasını HTML'e dönüştürür"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Dinamik import() fonksiyonu ne döndürür?",
                    secenekler: ["Obje", "Dizi", "Promise", "String"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Dinamik yüklenen bir modülün 'default export'una nasıl erişilir?",
                    secenekler: ["module.main", "module.default", "module.get()", "module['*']"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_40",
            tur: "js",
            ikon: "🌳",
            isim: "Tree Shaking",
            sorular: [
                {
                    soru: "Tree Shaking (Ağaç Sallama) terimi JavaScript'te ne ifade eder?",
                    secenekler: [
                        "Projedeki ölü/kullanılmayan (dead code) kodların, derleme (build) sırasında bundle dosyasından çıkarılması (silinmesi) sürecidir",
                        "Klasör yapısının ağaç gibi tasarlanmasıdır",
                        "Bileşenleri hiyerarşik sıraya koymaktır",
                        "Tarayıcının gereksiz sekmeleri kapatmasıdır"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Tree Shaking'in başarılı olabilmesi için kodun hangi modül sistemini kullanıyor olması gerekir?",
                    secenekler: [
                        "CommonJS (require)",
                        "AMD",
                        "UMD",
                        "ES6 Modülleri (import/export)"
                    ],
                    dogruYanitSirasi: 3,
                },
                {
                    soru: "Tree Shaking'den yararlanmak için genellikle hangi araçlar (bundler) tercih edilir?",
                    secenekler: [
                        "Babel, ESLint",
                        "Webpack, Rollup, Vite",
                        "NPM, Yarn",
                        "Jest, Mocha"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir kütüphanenin tree shaking ile uyumlu olduğunu belirtmek için package.json'da ne kullanılır?",
                    secenekler: ["'compatible': true", "'sideEffects': false", "'shaking': 'on'", "'bundle': 'tree'"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Minifier araçları (Terser, esbuild vb.) tree shaking sürecine nasıl katkıda bulunur?",
                    secenekler: ["Kodu şifrelerler", "Kullanılmayan kodları tespit edip dosyadan kalıcı olarak çıkarırlar", "Dosya adını değiştirirler", "Hızlandırırlar"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_41",
            tur: "js",
            ikon: "📦",
            isim: "Module Bundling",
            sorular: [
                {
                    soru: "Module Bundler (Modül Paketleyici) temel olarak ne yapar?",
                    secenekler: [
                        "Uygulamadaki tüm farklı dosya ve modülleri, tarayıcının kolayca okuyabileceği az sayıda dosya haline getirir (bundle eder)",
                        "Kodu sunucuya yükler",
                        "CSS kodlarını JavaScript'e çevirir",
                        "Veritabanı optimizasyonu sağlar"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Aşağıdakilerden hangisi bir Module Bundler DEĞİLDİR?",
                    secenekler: [
                        "Webpack",
                        "Rollup",
                        "Express",
                        "Parcel"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Gelişmiş paketleyiciler JavaScript dışındaki dosyaları (CSS, resim, font) nasıl yönetir?",
                    secenekler: [
                        "Yok sayarlar",
                        "Özel yükleyiciler (loaders) veya eklentiler (plugins) aracılığıyla js import mantığına dâhil ederler",
                        "Hepsini veritabanına kaydederler",
                        "Asla yönetemezler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Hot Module Replacement (HMR) ne sağlar?",
                    secenekler: ["Tüm sayfayı yeniler", "Sayfayı yenilemeden sadece değişen modülün anlık güncellenmesini sağlar", "CPU'yu soğutur", "Kodları gizler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sourcemap dosyaları neden önemlidir?",
                    secenekler: ["Görsel tasarım için", "Optimize edilmiş kodda hata oluştuğunda hatanın orijinal koddaki yerini bulmamızı sağlar", "DoS saldırılarını önler", "Yükleme hızını artırır"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_42",
            tur: "js",
            ikon: "💾",
            isim: "Storage API",
            sorular: [
                {
                    soru: "LocalStorage ile SessionStorage arasındaki temel fark nedir?",
                    secenekler: [
                        "Veri tipleri farklıdır",
                        "LocalStorage verileri tarayıcı/sekme kapansa bile kalıcıdır; SessionStorage sadece sekmeye özeldir ve sekme kapanınca silinir",
                        "SessionStorage daha hızlı çalışır",
                        "LocalStorage sadece sunucu tarafında çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Storage API (LocalStorage) veri tutarken kapasitesi yaklaşık ne kadardır?",
                    secenekler: [
                        "1 MB",
                        "5-10 MB",
                        "200 MB",
                        "Sınırsız"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "LocalStorage'a bir obje (object) kaydetmek istersek hangi metodu kullanmalıyız?",
                    secenekler: [
                        "Doğrudan objeyi setItem metodu ile (örn. setItem('key', obj))",
                        "JSON.stringify() metoduyla metne (string'e) çevirerek",
                        "Object.assign() metodu ile",
                        "toString() fonksiyonu ile"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "LocalStorage'daki tüm verileri bir kerede temizlemek için hangisi kullanılır?",
                    secenekler: ["removeItem('all')", "clear()", "reset()", "delete()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Aynı domain (köken) üzerindeki farklı sekmelerde veri değiştiğinde hangi olay tetiklenir?",
                    secenekler: ["change", "storage", "update", "refresh"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_43",
            tur: "js",
            ikon: "🍪",
            isim: "Cookies",
            sorular: [
                {
                    soru: "Çerezlerin (Cookies) Local/Session Storage'dan diğerlerinden ayrıştıran en büyük özelliği nedir?",
                    secenekler: [
                        "Daha fazla veri saklayabilmeleri",
                        "Sonsuza dek tutulmaları",
                        "Her ağ (HTTP) isteğinde başlıkta (header) otomatik olarak sunucuya gönderilmeleri",
                        "Sadece JavaScript ile erişilebilmeleri"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Çerez kullanımında 'HttpOnly' (yalnızca HTTP) işareti ne anlama gelir?",
                    secenekler: [
                        "Çerezin yalnızca şifresiz ağlardan iletileceğini belirtir",
                        "Çerezin JavaScript (document.cookie) tarafından okunmasını engeller (XSS saldırılarını zorlaştırmak için)",
                        "Sunucunun çerezleri silebileceği anlamına gelir",
                        "Tüm sunucu isteklerinde şifreleneceğini ifade eder"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir çerezi programatik olarak nasıl sileriz?",
                    secenekler: [
                        "document.cookie.delete('isim')",
                        "Süresini dolmuş eski bir tatile (Expires) ayarlayarak (örn. Expires=Thu, 01 Jan 1970 00:00:00 GMT)",
                        "Tarayıcı önbelleğini temizleyerek",
                        "localStorage.removeItem() kullanarak"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Çerezlerde 'SameSite' parametresi neyi korumaya yöneliktir?",
                    secenekler: ["XSS saldırılarını", "CSRF (Sitelere Arası İstek Sahteciliği) saldırılarını", "DoS saldırılarını", "SQL Injection"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Çerezlerin (Cookies) tekil dosya boyutu sınırı yaklaşık nedir?",
                    secenekler: ["4 KB", "1 MB", "10 MB", "Sınırsız"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "js_44",
            tur: "js",
            ikon: "🐕",
            isim: "Fetch API",
            sorular: [
                {
                    soru: "Fetch API ile axios/XMLHttpRequest arasındaki önemli farklılıklardan biri nedir?",
                    secenekler: [
                        "Fetch, sunucudan hata kodları (404, 500) geldiğinde bile Promise'i reddetmez (reject etmez), sadece 'ok' özelliğini false yapar",
                        "Fetch callback kullanır, axios Promise kullanır",
                        "Fetch sadece GET isteklerini destekler",
                        "Fetch sadece resimleri getirmek için kullanılır"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Bir JSON verisini API'ye POST etmek için fetch() ile hangi ayarı yapmalısınız?",
                    secenekler: [
                        "method: 'POST' ve data: json formatlı nesne",
                        "method: 'POST', headers: { 'Content-Type': 'application/json' } ve gövdeye body: JSON.stringify(veri) eklenerek",
                        "Doğrudan fetch('url', veri) yazarak",
                        "GET metodunu POST komutuyla sarmalayarak"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sunucudan gelen fetch cevabında (response) gelen nesneyi Javascript objesine dönüştürmek için hangi metot çağrılır?",
                    secenekler: [
                        "response.toObject()",
                        "response.json() (bir promise döner)",
                        "JSON.parse(response)",
                        "response.text()"
                    ],
                    dogruYanitSirasi: 1,
                }
            ],
        },
        {
            id: "js_45",
            tur: "js",
            ikon: "🛑",
            isim: "AbortController",
            sorular: [
                {
                    soru: "AbortController temel olarak ne işe yarar?",
                    secenekler: [
                        "Gereksiz değişken tanımlamalarını engeller",
                        "Gerektiğinde veya istendiğinde Fetch isteklerini veya event listener dizilerini yarıda iptal etmemize olanak tanır",
                        "CSS geçişlerini (transition) iptal eder",
                        "Uygulamadan güvenli çıkış sağlar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "AbortController kullanarak bir isteği nasıl iptal edersiniz?",
                    secenekler: [
                        "fetch('url').cancel() komutunu çağırarak",
                        "Controller üzerinden abort() fonksiyonunu çağırarak (controller.abort())",
                        "sayfayı yenileyerek",
                        "null değeri dönerek"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir fetch() işlemi başarıyla iptal edildiğinde (abort) tarayıcıda ne tür bir hata fırlatılır?",
                    secenekler: [
                        "TypeError",
                        "ReferenceError",
                        "AbortError (veya DOMException: The user aborted a request.)",
                        "NetworkError"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "AbortController'ın 'signal' özelliği ne için kullanılır?",
                    secenekler: [
                        "İptal sinyalini dinlemek için",
                        "İsteğin durumunu kontrol etmek için",
                        "İsteği başlatmak için",
                        "Sunucuya veri göndermek için"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Birden fazla Fetch isteğini tek bir AbortController ile iptal etmek mümkün müdür?",
                    secenekler: [
                        "Hayır, her istek için ayrı bir controller gerekir",
                        "Evet, aynı signal nesnesini birden fazla fetch isteğine ileterek",
                        "Sadece aynı URL'e yapılan istekler için",
                        "Sadece GET istekleri için"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_46",
            tur: "js",
            ikon: "👷",
            isim: "Service Workers",
            sorular: [
                {
                    soru: "Service Worker nedir ve en büyük görevi nedir?",
                    secenekler: [
                        "Sunucudaki veritabanı işlemlerini yürüten bir bileşendir",
                        "Tarayıcı ve ağ arasında proxy (vekil) gibi davranan, arka planda çalışıp PWA'lara (offline çalışma, push notifications vb) güç veren bağımsız bir işlemdir",
                        "Frontend bileşenlerini test eder",
                        "İmaj optimizasyonu yapan bir eklentidir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Service Worker'ların DOM (Document Object Model) elementlerine doğrudan erişimi var mıdır?",
                    secenekler: [
                        "Evet, document üzerinden erişebilirler",
                        "Hayır, tamamen bağımsız (window nesnesine sahip olmayan) bir iş parçacığında çalışırlar. İletişim mesajlaşma (postMessage) yoluyla olur",
                        "Sadece Canvas veya SVG elementlerine erişirler",
                        "Sadece React bileşenlerine erişebilirler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Ağ bağlantısı koptuğunda (Offline olma durumu) Service Worker ne yapabilir?",
                    secenekler: [
                        "Mevcut sayfayı kapatır",
                        "Ağ isteklerini dinleyerek, daha önceden Cache Storage'a aldığı sayfaları ve içerikleri kullanıcıya gösterip 'çevrimdışı deneyim' sağlayabilir",
                        "Hemen sunucu veritabanına yedek alır",
                        "Tarayıcıda bir pop-up açıp 'internete bağlan' diyebilir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Service Worker'lar hangi protokoller üzerinden çalışabilir?",
                    secenekler: [
                        "Sadece HTTP",
                        "Sadece HTTPS",
                        "HTTP ve HTTPS",
                        "Sadece FTP"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Service Worker'ın yaşam döngüsündeki 'install' olayı ne zaman tetiklenir?",
                    secenekler: [
                        "Her sayfa yüklendiğinde",
                        "Service Worker ilk kez kaydedildiğinde ve yüklendiğinde",
                        "Ağ bağlantısı koptuğunda",
                        "Push bildirimi geldiğinde"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "js_47",
            tur: "js",
            ikon: "🔌",
            isim: "WebSockets",
            sorular: [
                {
                    soru: "WebSockets bağlantılarının standart HTTP bağlantılarından en belirgin farkı nedir?",
                    secenekler: [
                        "Sadece düz metin gönderilebilmesi",
                        "WebSocket, sunucu ve istemci arasında gerçek zamanlı, çift yönlü ve sürekli (TCP temelli) bir bağlantı sağlar. (HTTP ise tek yönlü İstek-Cevap şeklindedir)",
                        "Sadece şifrelenmiş ağlarda hizmet vermesi",
                        "Daha yavaş olması"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Javascript'te yeni bir WebSocket bağlantısı başlatmak için kullanılan komut hangisidir?",
                    secenekler: [
                        "fetch('ws:// server')",
                        "new WebSocket('ws:// adres.com/path')",
                        "document.startSocket()",
                        "socket.connect()"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WebSocket üzerinden bir olay / mesaj geldiği nasıl anlanabilir?",
                    secenekler: [
                        "socket.onmessage olayı (veya addEventListener('message')) ile",
                        ".then() veya .catch() ile promise beklemesi yapılarak",
                        "Sürekli setTimeout kurup sunucu kontrol edildiğinde",
                        "Tarayıcı sekme ismine bakılarak"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "WebSocket bağlantısı kurulurken hangi protokol kullanılır?",
                    secenekler: [
                        "HTTP",
                        "HTTPS",
                        "WS (WebSocket Protocol)",
                        "FTP"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "WebSocket bağlantısı kapatıldığında hangi olay tetiklenir?",
                    secenekler: [
                        "onclose",
                        "ondisconnect",
                        "onend",
                        "onfinish"
                    ],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "js_48",
            tur: "js",
            ikon: "🌊",
            isim: "Streams API",
            sorular: [
                {
                    soru: "Streams API (Akışlar API'si) büyük verilerle çalışırken bize nasıl bir yöntem sunar?",
                    secenekler: [
                        "Verileri küçülterek boyuttan tasarruf eder",
                        "Veriyi bütünüyle belleğe yüklemek yerine, parçalar (chunks) halinde indirip/okuyup anında işlememizi olanaklı kılar",
                        "Tüm verileri sıkıştırma formatı olarak gönderir",
                        "Tüm dosyayı JSON dosyasına dönüştürür"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Web Stream API içindeki temel üç yapı (Stream Tipleri) hangileridir?",
                    secenekler: [
                        "LoadStream, RunStream, StopStream",
                        "ReadableStream, WritableStream, TransformStream",
                        "ObjectStream, ArrayStream, NumberStream",
                        "GetStream, PostStream, DeleteStream"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir ReadableStream içeriği nasıl okunur?",
                    secenekler: [
                        "Bütün dosyayı fetch ederek ve text() çağırılarak (senkron)",
                        "Ondan bir okuyucu (reader) alınarak (ör. stream.getReader()) ve reader.read() ile parça parça okunarak",
                        "Sadece DOM manipülasyonları ile",
                        "LocalStorage'a kopyalanarak"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Streams API'nin temel faydalarından biri nedir?",
                    secenekler: [
                        "Sadece küçük dosyaları işlemek için kullanılır",
                        "Bellek kullanımını optimize eder ve büyük veri setlerinin işlenmesini kolaylaştırır",
                        "Sadece sunucu tarafında çalışır",
                        "Veri şifrelemesi sağlar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir ReadableStream'den veri okuma işlemi tamamlandığında veya hata oluştuğunda hangi metot kullanılır?",
                    secenekler: [
                        "reader.close()",
                        "reader.releaseLock()",
                        "reader.cancel()",
                        "reader.done()"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
    ],

    react: [
        {
            id: "react_1",
            tur: "react",
            ikon: "⚛️",
            isim: "React Giriş",
            sorular: [
                {
                    soru: "React'te 'Bileşen Tabanlı' (Component-Based) mimari ne anlama gelir?",
                    secenekler: ["Veritabanı bazlı çalışma", "UI'ın küçük, bağımsız ve yeniden kullanılabilir parçalara bölünmesi", "Sadece sınıflarla kod yazma", "Sunucu tarafında render yapma"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Babel'in React ekosistemindeki görevi nedir?",
                    secenekler: [
                        "Kodları şifrelemek",
                        "JSX ve modern JS kodunu tarayıcıların anlayabileceği eski JS versiyonlarına dönüştürmek",
                        "Resimleri sıkıştırmak",
                        "Sunucu bağlantısı kurmak"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React'in 'Declarative' (Bildirimsel) olması ne ifade eder?",
                    secenekler: [
                        "Kodun 'nasıl' yapılacağından ziyade 'ne' yapılacağını tarif etmesi",
                        "Her şeyin manuel yapılması",
                        "Sadece HTML kullanılması",
                        "Hataların otomatik düzelmesi"
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "React tek sayfa uygulamaları (SPA) geliştirmek için mi kullanılır?",
                    secenekler: ["Evet", "Hayır, sadece mobil için", "Sadece statik siteler için", "Sadece backend için"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "React'in 'Unidirectional Data Flow' (Tek Yönlü Veri Akışı) ilkesi nedir?",
                    secenekler: ["Verinin aşağıdan yukarı akması", "Verinin yukarıdan aşağıya (parent to child) doğru akması", "Verinin rastgele akması", "Verinin akmaması"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_2",
            tur: "react",
            ikon: "📝",
            isim: "JSX",
            sorular: [
                {
                    soru: "JSX zorunlu mudur?",
                    secenekler: [
                        "Evet, React onsuz çalışmaz",
                        "Hayır, React.createElement ile de yazılabilir ama JSX daha okunabilirdir",
                        "Sadece Next.js'de zorunludur",
                        "Sadece class bileşenlerde zorunludur"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSX içinde yorum satırı nasıl yazılır?",
                    secenekler: ["// yorum", "/* yorum */", "{/* yorum */}", "<!-- yorum -->"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "JSX'te bir elementin stilini dinamik olarak değiştirmek için ne yapılır?",
                    secenekler: [
                        "style='color: red' şeklinde yazılır",
                        "style={{ color: 'red' }} şeklinde bir obje geçilir",
                        "css='color: red' kullanılır",
                        "Değiştirilemez"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JSX'te boolean 'true' değerini bir prop olarak geçmek için kısa yol nedir?",
                    secenekler: ["isVisible='true'", "isVisible={1}", "<Bilesen isVisible /> (değer belirtilmezse true kabul edilir)", "isVisible={T}"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "react_3",
            tur: "react",
            ikon: "🧩",
            isim: "Bileşenler",
            sorular: [
                {
                    soru: "Bileşen (Component) isimleri hangi kurala göre başlamalıdır?",
                    secenekler: ["Küçük harf", "Büyük harf (PascalCase)", "Sayı ile", "Alt çizgi ile"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir bileşenin 'key' prop'u değişirse React ne yapar?",
                    secenekler: [
                        "Hiçbir şey yapmaz",
                        "Bileşeni günceller",
                        "Bileşeni tamamen unmount eder (kaldırır) ve yeni bir instance olarak tekrar mount eder",
                        "Hata fırlatır"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Hangi bileşen türü React Hook'larını (useState, useEffect vb.) kullanabilir?",
                    secenekler: ["Sadece Class Bileşenler", "Sadece Fonksiyonel Bileşenler", "Her ikisi de", "Hiçbiri"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bileşenler içinde başka bileşenler kullanılabilir mi?",
                    secenekler: ["Evet", "Hayır", "Sadece aynı dosyadaysa", "Sadece index.js içindeyse"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "react_4",
            tur: "react",
            ikon: "📮",
            isim: "Props",
            sorular: [
                {
                    soru: "'props.children' neyi ifade eder?",
                    secenekler: [
                        "Bileşenin çocuklarını",
                        "Bileşen etiketleri arasına yazılan içeriği",
                        "Bileşenin state'ini",
                        "Bileşenin id'sini"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Props olarak fonksiyon geçilebilir mi?",
                    secenekler: ["Hayır", "Sadece string geçilir", "Evet, olayları üst bileşene iletmek için sıkça kullanılır", "Sadece sayılar geçilir"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "'Prop Drilling' problemi nedir?",
                    secenekler: [
                        "Props'ların çok hızlı yüklenmesi",
                        "Verinin aradaki ilgisiz bileşenlerden geçirilerek en alttaki bileşene iletilmesi zorunluluğu",
                        "Props'ların silinmesi",
                        "Yanlış prop ismi kullanılması"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Props'ların tipini doğrulamak için hangi kütüphane yaygın kullanılır?",
                    secenekler: ["ReactCheck", "PropTypes", "TypeVerify", "CheckProps"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_5",
            tur: "react",
            ikon: "🔄",
            isim: "useState",
            sorular: [
                {
                    soru: "useState hook'undan dönen ikinci parametre (updater function) hakkında hangisi doğrudur?",
                    secenekler: [
                        "Sadece sayıları günceller",
                        "Bir önceki state değerine güvenli erişim için bir callback fonksiyonu alabilir (prev => prev + 1)",
                        "Senkron olarak çalışır",
                        "DOM'u doğrudan manipüle eder"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "State güncellenirken önceki değere bağımlıysak ne yapılmalı?",
                    secenekler: [
                        "Doğrudan atama yapılmalı",
                        "setState(prev => prev + 1) şeklinde callback kullanılmalı",
                        "useEffect kullanılmalı",
                        "ref kullanılmalı"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir state'i array olarak tutuyorsak yeni eleman eklemek için hangisi önerilir?",
                    secenekler: [
                        "state.push(item)",
                        "setState([...state, newItem])",
                        "state[0] = item",
                        "setState(state + item)"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useState(() => pahaliHesaplama()) kullanımı ne işe yarar?",
                    secenekler: [
                        "Hızı artırır",
                        "Başlangıç değerinin sadece ilk render'da hesaplanmasını sağlar (Lazy Initialization)",
                        "Hata önler",
                        "Belleği temizler"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_6",
            tur: "react",
            ikon: "⚡",
            isim: "useEffect",
            sorular: [
                {
                    soru: "useEffect hook'u ne için kullanılır?",
                    secenekler: [
                        "State tanımlamak için",
                        "Yan etkileri (side effects) yönetmek için",
                        "Props aktarmak için",
                        "Bileşen oluşturmak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useEffect'in bağımlılık dizisi (dependency array) boş olursa ne olur?",
                    secenekler: [
                        "Her render'da çalışır",
                        "Sadece ilk mount'ta çalışır",
                        "Hiç çalışmaz",
                        "Hata verir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useEffect'in cleanup (temizlik) fonksiyonu ne zaman çalışır?",
                    secenekler: [
                        "Bileşen mount olduğunda",
                        "Bileşen unmount olduğunda veya efekt yeniden çalışmadan önce",
                        "Sadece hata olduğunda",
                        "Her state değişiminde",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useEffect içindeki 'cleanup' fonksiyonu ne zaman çalışır?",
                    secenekler: ["Sayfa yüklendiğinde", "Bileşen unmount edildiğinde veya effect tekrar çalışmadan hemen önce", "Her render'dan sonra", "Sadece hata durumunda"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useEffect bağımlılık dizisinin boş ([]) olması neyi ifade eder?",
                    secenekler: ["Effect'in hiç çalışmayacağını", "Effect'in her render'da çalışacağını", "Effect'in sadece bileşen ilk mount edildiğinde bir kez çalışacağını", "Effect'in sadece state değişince çalışacağını"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "useEffect'te bağımlılık dizisi (dependency array) hiç verilmezse ne olur?",
                    secenekler: ["Sadece bir kez çalışır", "Her render'dan sonra tekrar çalışır", "Hata verir", "Hiç çalışmaz"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Birden fazla useEffect tek bir bileşende kullanılabilir mi?",
                    secenekler: ["Evet, farklı sorumlulukları ayırmak için önerilir", "Hayır, sadece bir tane olabilir", "Sadece biri dependency alabilir", "Sadece if içinde kullanılabilirse evet"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "useEffect içinde state güncellerken sonsuz döngüden kaçınmak için neye dikkat edilmelidir?",
                    secenekler: [
                        "State hiç güncellenmemeli",
                        "Güncellenen state, bağımlılık dizisinde (dependency array) yer alıyorsa dikkatli olunmalı veya koşula bağlanmalı",
                        "Sadece setTimeout kullanılmalı",
                        "useRef kullanılmalı"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_7",
            tur: "react",
            ikon: "🌍",
            isim: "useContext",
            sorular: [
                {
                    soru: "useContext ne için kullanılır?",
                    secenekler: [
                        "HTTP istekleri yapmak için",
                        "Prop drilling olmadan veri paylaşmak için",
                        "Animasyon eklemek için",
                        "Route yönetimi için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Context Provider içindeki 'value' değiştiğinde ne olur?",
                    secenekler: [
                        "Hiçbir şey olmaz",
                        "O Context'i kullanan (consume eden) tüm bileşenler yeniden render edilir",
                        "Sadece üst bileşen render edilir",
                        "Uygulama çöker"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Context oluştururken default value ne zaman kullanılır?",
                    secenekler: [
                        "Her zaman",
                        "Tüketen bileşen bir Provider sarmalayıcısı içinde değilse",
                        "Sadece hata durumunda",
                        "Hiçbir zaman"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir bileşen içinde birden fazla Context kullanılabilir mi?",
                    secenekler: ["Evet, çoklu useContext çağrısı ile", "Hayır, sadece bir tane", "Sadece sınıflarda", "Sadece reducer ile"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "react_8",
            tur: "react",
            ikon: "📋",
            isim: "Listeler & Key",
            sorular: [
                {
                    soru: "React'te bir diziyi listelemek için hangi dizi metodu kullanılır?",
                    secenekler: ["forEach()", "map()", "filter()", "reduce()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Neden 'index' değerini 'key' olarak kullanmak genellikle önerilmez?",
                    secenekler: [
                        "Daha yavaştır",
                        "Liste sıralaması değiştiğinde beklenmedik state hatalarına ve performans sorunlarına yol açabilir",
                        "React yasaklamıştır",
                        "Çalışmaz"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'key' prop'una bileşen içinden props.key şeklinde erişilebilir mi?",
                    secenekler: ["Evet", "Hayır, key React'in dahili kullanımı içindir ve bileşene prop olarak aktarılmaz", "Sadece ref ile", "Sadece sınıflarda"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Listenin her bir elemanının 'key' değeri nerede benzersiz olmalıdır?",
                    secenekler: ["Tüm uygulamada", "Sadece o listenin (kardeş elemanlar) içinde", "Tüm sayfada", "Sunucuda"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_9",
            tur: "react",
            ikon: "🔀",
            isim: "Koşullu Render",
            sorular: [
                {
                    soru: "JSX içinde koşullu render için en yaygın kullanılan yöntem hangisidir?",
                    secenekler: [
                        "if...else",
                        "Ternary operatörü (? :) ve && operatörü",
                        "switch...case",
                        "for döngüsü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "{condition && <Component />} ifadesinde condition 0 (sıfır) ise ekranda ne görünür?",
                    secenekler: ["Hiçbir şey", "null", "0 (sıfır rakamı doğrudan render edilir)", "Hata"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "if/else bloklarını JSX (return) içinde doğrudan yazabilir miyiz?",
                    secenekler: ["Evet", "Hayır, süslü parantez içinde sadece ifadeler (expressions) yer alabilir", "Sadece buttonlarda", "Sadece fragmentlarda"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Karmaşık koşullu render mantığı nerede tutulmalıdır?",
                    secenekler: ["JSX içinde mümkün olduğunca iç içe", "Ayrı bir değişken veya yardımcı fonksiyon/bileşen içinde", "CSS içinde", "LocalStorage'da"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_10",
            tur: "react",
            ikon: "📝",
            isim: "Form Yönetimi",
            sorular: [
                {
                    soru: "Controlled component (kontrollü bileşen) nedir?",
                    secenekler: [
                        "State tarafından yönetilen form elemanı",
                        "DOM tarafından yönetilen form elemanı",
                        "Otomatik submit olan form",
                        "Sadece button içeren bileşen",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Uncontrolled component'lerde (kontrolsüz bileşen) form verisine nasıl erişilir?",
                    secenekler: ["useState ile", "useRef veya doğrudan DOM üzerinden", "props ile", "Context ile"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Büyük ve karmaşık formları yönetmek için hangi kütüphane yaygın kullanılır?",
                    secenekler: ["Redux", "Formik veya React Hook Form", "Axios", "Babel"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_11",
            tur: "react",
            ikon: "🛣️",
            isim: "React Router",
            sorular: [
                {
                    soru: "React Router'da sayfa yenilenmeden navigasyon yapmak için ne kullanılır?",
                    secenekler: [
                        "<a> etiketi",
                        "<Link> bileşeni",
                        "window.location",
                        "<redirect> etiketi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "URL değişimlerini dinlemek veya o anki yolu (path) almak için hangi hook kullanılır?",
                    secenekler: ["useParams", "useLocation", "useNavigate", "useRoute"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sayfa bulunamadı (404) rotası nasıl tanımlanır?",
                    secenekler: [
                        "<Route path='/404' ...>",
                        "<Route path='*' element={<NotFound />} />",
                        "<Route error />",
                        "Tanımlanamaz"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_12",
            tur: "react",
            ikon: "🪝",
            isim: "Custom Hooks",
            sorular: [
                {
                    soru: "Özel (custom) hook'ların isimlendirme kuralı nedir?",
                    secenekler: [
                        "'hook' ile başlamalı",
                        "'use' ile başlamalı",
                        "'custom' ile başlamalı",
                        "Herhangi bir isim olabilir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Custom hook'lar UI (JSX) döndürebilir mi?",
                    secenekler: ["Hayır, yasaktır", "Evet, ancak genellikle sadece veri ve fonksiyon (logic) döndürmek için tercih edilirler", "Sadece modal'larda", "Sadece listelerde"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useLocalStorage gibi bir hook yazarken veriyi neden state'te de tutmalıyız?",
                    secenekler: [
                        "UI'ın anlık güncellenmesi için",
                        "Gereksizdir",
                        "Hızlandırmak için",
                        "React zorunlu tutar"
                    ],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "react_13",
            tur: "react",
            ikon: "🚀",
            isim: "Performans",
            sorular: [
                {
                    soru: "React.memo() ne işe yarar?",
                    secenekler: [
                        "State'i hafızaya alır",
                        "Bileşenin gereksiz yeniden render'larını önler",
                        "Veri tabanına kayıt yapar",
                        "Dosya okur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useMemo hook'u ne için kullanılır?",
                    secenekler: [
                        "DOM referansı almak için",
                        "Pahalı hesaplamaların sonucunu cache'lemek için",
                        "State tanımlamak için",
                        "Efekt çalıştırmak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useCallback hook'u ne için kullanılır?",
                    secenekler: [
                        "API çağrısı yapmak için",
                        "Fonksiyon referansını cache'leyerek gereksiz render'ları önlemek için",
                        "State güncellemek için",
                        "Routing yapmak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React DevTools'ta hangi bilgiyi göremezsiniz?",
                    secenekler: [
                        "Bileşen ağacı",
                        "Props ve state değerleri",
                        "Render süreleri (Profiler)",
                        "Sunucu veritabanı sorguları",
                    ],
                    dogruYanitSirasi: 3,
                },
                {
                    soru: "Bir bileşenin neden render olduğunu analiz etmek için hangi React DevTools sekmesi kullanılır?",
                    secenekler: ["Components", "Profiler", "Console", "Network"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sanallaştırma (Virtualization) tekniği (örn: react-window) ne zaman kullanılır?",
                    secenekler: [
                        "Basit formlarda",
                        "Binlerce eleman içeren çok uzun listeleri verimli render etmek için",
                        "Sayfa geçişlerinde",
                        "Resim yüklerken"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Web Workers React uygulamalarında hangi amaçla kullanılabilir?",
                    secenekler: [
                        "Stil düzenlemek için",
                        "Ağır hesaplamaları ana thread'den ayırıp UI donmasını önlemek için",
                        "API isteği yapmak için",
                        "LocalStorage yönetmek için"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_14",
            tur: "react",
            ikon: "🔧",
            isim: "useReducer",
            sorular: [
                {
                    soru: "useReducer ne zaman useState'e tercih edilir?",
                    secenekler: [
                        "Basit state yönetiminde",
                        "Karmaşık state mantığı veya birbirine bağlı state'ler olduğunda",
                        "Sadece boolean değerler için",
                        "Her zaman useReducer tercih edilir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useReducer'ın aldığı iki parametre nedir?",
                    secenekler: [
                        "state ve props",
                        "reducer fonksiyonu ve başlangıç state'i",
                        "action ve dispatch",
                        "key ve value",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "dispatch fonksiyonu ne yapar?",
                    secenekler: [
                        "State'i direkt günceller",
                        "Reducer'a bir action göndererek state güncellemesini tetikler",
                        "Bileşeni kaldırır",
                        "API çağrısı yapar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Reducer fonksiyonunda action.type ne işe yarar?",
                    secenekler: [
                        "Veri tipini belirler",
                        "Hangi state güncellemesinin yapılacağını belirler",
                        "Hata türünü belirler",
                        "Bileşen tipini belirler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Reducer fonksiyonu neden genellikle bileşen dışında tanımlanır?",
                    secenekler: [
                        "Yalnızca orada çalışır",
                        "Bileşen her render olduğunda fonksiyonun yeniden oluşturulmasını önlemek için",
                        "React kuralıdır",
                        "Daha yavaştır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Reducer içindeki 'action' nesnesi genellikle hangi alanları içerir?",
                    secenekler: ["id ve name", "type ve payload", "key ve value", "start ve end"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useReducer'ın üçüncü parametresi olan 'init' fonksiyonu ne işe yarar?",
                    secenekler: ["Belleği temizler", "Başlangıç state'ini hesaplamalı/gecikmeli (lazy) oluşturmayı sağlar", "Hata yakalar", "API çağırır"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_15",
            tur: "react",
            ikon: "📌",
            isim: "useRef",
            sorular: [
                {
                    soru: "useRef hook'u ne için kullanılır?",
                    secenekler: [
                        "State yönetimi için",
                        "DOM elementlerine referans almak veya render'lar arası değer tutmak için",
                        "Routing için",
                        "API çağrıları için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useRef ile useState arasındaki temel fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "useRef değiştiğinde yeniden render tetiklemez",
                        "useState daha hızlıdır",
                        "useRef sadece sayılarla çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ref.current ne ifade eder?",
                    secenekler: [
                        "Ref'in oluşturulma zamanı",
                        "Ref'in tuttuğu mevcut değer",
                        "Bileşenin durumu",
                        "DOM ağacının kökü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "forwardRef ne için kullanılır?",
                    secenekler: [
                        "Ref'i alt bileşene iletmek için",
                        "Ref'i silmek için",
                        "Yeni ref oluşturmak için",
                        "Ref'i global yapmak için",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "useRef ile oluşturulan değerler ne zamana kadar bellekte tutulur?",
                    secenekler: ["Süresizce", "Bileşenin yaşam döngüsü boyunca (unmount olana kadar)", "Sadece 1 saniye", "Sayfa yenilenene kadar"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useRef sadece DOM elementleri için mi kullanılır?",
                    secenekler: [
                        "Evet, sadece DOM içindir",
                        "Hayır, render'lar arası saklanması gereken (timer ID, önceki prop vb.) her türlü veri için kullanılabilir",
                        "Sadece sınıflarla kullanılır",
                        "Sadece inputlar için"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ref nesnesi (current) neden doğrudan JSX içinde (ekranda) gösterilmemelidir?",
                    secenekler: [
                        "Gizlidir",
                        "Çünkü ref güncellendiğinde bileşen render olmaz, ekrandaki değer güncel kalmayabilir",
                        "Hata verir",
                        "Daha yavaştır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_16",
            tur: "react",
            ikon: "🛡️",
            isim: "Error Boundaries",
            sorular: [
                {
                    soru: "Error Boundary ne için kullanılır?",
                    secenekler: [
                        "CSS hatalarını yakalamak için",
                        "Bileşen ağacındaki JavaScript hatalarını yakalayıp yedek UI göstermek için",
                        "API hatalarını önlemek için",
                        "Form doğrulaması için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Error Boundary hangi tür bileşen olarak yazılır?",
                    secenekler: [
                        "Fonksiyonel bileşen",
                        "Sınıf bileşen (class component)",
                        "Hook olarak",
                        "Fragment olarak",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "componentDidCatch ne zaman çalışır?",
                    secenekler: [
                        "Her render'da",
                        "Alt bileşende bir hata oluştuğunda",
                        "Bileşen mount olduğunda",
                        "State değiştiğinde",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Error Boundary hangi hataları YAKALAYAMAZ?",
                    secenekler: [
                        "Render sırasındaki hataları",
                        "Event handler'lardaki hataları",
                        "Yaşam döngüsü metodlarındaki hataları",
                        "Alt bileşenlerdeki hataları",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Error Boundary kendi içindeki (kendi render metodundaki) hataları yakalayabilir mi?",
                    secenekler: ["Evet", "Hayır, sadece alt bileşen ağacındaki (children) hataları yakalar", "Sadece geliştirme modunda", "Sadece build modunda"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Neden try/catch bloğu JSX içindeki render hatalarını yakalamak için yetersizdir?",
                    secenekler: [
                        "Try/catch eskidir",
                        "Try/catch imperatif kodda çalışır, bildirimsel (declarative) JSX render sürecini kapsamaz",
                        "Yetersiz değildir",
                        "Sadece sunucuda çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_17",
            tur: "react",
            ikon: "⏳",
            isim: "Suspense & Lazy",
            sorular: [
                {
                    soru: "React.lazy() ne için kullanılır?",
                    secenekler: [
                        "Bileşeni yavaşlatmak için",
                        "Bileşeni dinamik olarak (lazy load) yüklemek için",
                        "Bileşeni silmek için",
                        "Animasyon eklemek için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Suspense bileşeninin fallback prop'u ne gösterir?",
                    secenekler: [
                        "Hata mesajı",
                        "Yükleme bittikten sonra gösterilecek içerik",
                        "Bileşen yüklenene kadar gösterilecek ara içerik (loading)",
                        "Yedek veri",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Lazy loading performansa nasıl katkı sağlar?",
                    secenekler: [
                        "Kodun derlenmesini hızlandırır",
                        "Başlangıçta yüklenen JavaScript miktarını azaltarak sayfa açılışını hızlandırır",
                        "Sunucu maliyetini düşürür",
                        "Veritabanı sorgularını optimize eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React.lazy() ile hangi import şekli kullanılır?",
                    secenekler: [
                        "import Bilesen from './Bilesen'",
                        "const Bilesen = React.lazy(() => import('./Bilesen'))",
                        "require('./Bilesen')",
                        "include('./Bilesen')",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Suspense bileşeni ağaçta birden fazla lazy bileşeni sarmalayabilir mi?",
                    secenekler: [
                        "Hayır, her biri için ayrı Suspense gerekir",
                        "Evet, hepsinin yüklenmesini bekleyip tek seferde veya sırayla gösterebilir",
                        "Sadece iki tanesini",
                        "Sadece aynı tiptekileri"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React.lazy default export olmayan (named export) bileşenleri doğrudan destekler mi?",
                    secenekler: ["Evet", "Doğrudan desteklemez, bir wrapper veya ara modül gerektirir", "Sadece TypeScript ile", "Sadece Next.js ile"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_18",
            tur: "react",
            ikon: "🖱️",
            isim: "Olay Yönetimi",
            sorular: [
                {
                    soru: "React'te olay (event) isimleri nasıl yazılır?",
                    secenekler: ["onclick", "on-click", "onClick (camelCase)", "ONCLICK"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "e.preventDefault() ne yapar?",
                    secenekler: [
                        "Bileşeni siler",
                        "Olayın varsayılan davranışını (form submit, link yönlendirme) engeller",
                        "Olayı iptal eder",
                        "State'i sıfırlar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React'te SyntheticEvent nedir?",
                    secenekler: [
                        "Sahte olay",
                        "React'ın tarayıcı olaylarını saran, cross-browser uyumlu olay nesnesi",
                        "Yapay zekâ olayı",
                        "Test olayı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Event handler'a parametre geçmek için doğru yöntem hangisi?",
                    secenekler: [
                        "onClick={islem(id)}",
                        "onClick={() => islem(id)}",
                        "onClick=islem(id)",
                        "click={islem(id)}",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "e.stopPropagation() ne yapar?",
                    secenekler: [
                        "Olayı durdurur",
                        "Olayın üst bileşenlere yayılmasını (bubbling) engeller",
                        "Sayfayı yeniler",
                        "Bileşeni kaldırır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Event propagation (olay yayılımı) aşamaları nelerdir?",
                    secenekler: [
                        "Sadece bubbling",
                        "Capturing (yakalama, kökten hedefe) ve Bubbling (kabarcma, hedeften köke)",
                        "Sadece capturing",
                        "Yayılmaz",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "onSubmit event'i genellikle hangi elementte kullanılır?",
                    secenekler: ["<button>", "<form> elementinde (form gönderme olayı)", "<input>", "<div>"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Capture phase' (yakalama) için React'te olay ismi nasıl yazılır?",
                    secenekler: ["onClick:capture", "onClickCapture", "onCaptureClick", "clickCapture"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Olay nesnesi (e) içindeki 'nativeEvent' ne sağlar?",
                    secenekler: [
                        "Sahte bir event",
                        "Tarayıcının orijinal (native) event nesnesine erişim sağlar",
                        "Yeni bir event oluşturur",
                        "Eventi siler"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_19",
            tur: "react",
            ikon: "⬆️",
            isim: "State Kaldırma",
            sorular: [
                {
                    soru: "State kaldırma (lifting state up) nedir?",
                    secenekler: [
                        "State'i silme",
                        "Paylaşılan state'i ortak üst bileşene taşıma",
                        "State'i localStorage'a kaydetme",
                        "State'i global yapma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "İki kardeş bileşen aynı veriye ihtiyaç duyduğunda ne yapılmalı?",
                    secenekler: [
                        "Her birinde ayrı state tutma",
                        "State'i ortak üst bileşende tanımlayıp props ile geçme",
                        "DOM ile doğrudan erişme",
                        "Global değişken kullanma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "State kaldırma pattern'inde alt bileşen state'i nasıl günceller?",
                    secenekler: [
                        "Doğrudan üst state'e erişir",
                        "Üst bileşenden gelen callback fonksiyonunu çağırır",
                        "DOM manipülasyonu ile",
                        "Redux kullanarak",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Tek yönlü veri akışı (one-way data flow) ne demektir?",
                    secenekler: [
                        "Veri sadece sol tarafa akar",
                        "Veriler üst bileşenden alt bileşene props ile akar",
                        "Veri sadece sunucudan gelir",
                        "Veri asla değişmez",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "State yukarı kaldırıldığında (lift up), veriyi tüketen alt bileşen nerede değişiklik yapar?",
                    secenekler: [
                        "State'ini yerelde tutmaya devam eder",
                        "Kendi state'i yerine props kullanmaya başlar (Controlled Component)",
                        "Değişiklik yapmaz",
                        "LocalStorage kullanır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "State kaldırmak yerine 'bileşen kompozisyonu' (composition) kullanmanın avantajı nedir?",
                    secenekler: [
                        "Daha yavaştır",
                        "Prop drilling'i önleyebilir ve bileşenleri daha bağımsız tutabilir",
                        "Daha fazla state gerekir",
                        "Sadece ana sayfada çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_20",
            tur: "react",
            ikon: "📝",
            isim: "Controlled vs Uncontrolled",
            sorular: [
                {
                    soru: "Controlled input nedir?",
                    secenekler: [
                        "Kilitli input",
                        "Değeri React state tarafından kontrol edilen input",
                        "Sadece okunabilir input",
                        "Disabled input",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Uncontrolled input nedir?",
                    secenekler: [
                        "Değeri DOM tarafından yönetilen, ref ile erişilen input",
                        "Bozuk input",
                        "Gizli input",
                        "Otomatik doldurulan input",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Controlled input için hangi iki prop gereklidir?",
                    secenekler: [
                        "id ve name",
                        "value ve onChange",
                        "type ve placeholder",
                        "ref ve defaultValue",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "defaultValue prop'u ne zaman kullanılır?",
                    secenekler: [
                        "Controlled input'larda",
                        "Uncontrolled input'larda başlangıç değeri atamak için",
                        "Her input'ta",
                        "Select elemanlarında",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dosya yükleme (input type='file') işlemi React'te genellikle neden uncontrolled (ref ile) yapılır?",
                    secenekler: [
                        "Daha güvenli olduğu için",
                        "Dosya değeri (value) güvenlik nedeniyle salt okunurdur ve React state ile doğrudan senkronize edilemez",
                        "Daha hızlıdır",
                        "React state dosya desteklemez"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Çok karmaşık ve çok fazla input içeren bir formda 'controlled' yöntemi ne gibi bir sorun çıkarabilir?",
                    secenekler: [
                        "Veri kaybı",
                        "Her karakter değişiminde tüm formu yeniden render ettiği için performans sorunları",
                        "Hatalı veri gönderimi",
                        "CSS bozulmaları"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_21",
            tur: "react",
            ikon: "🚪",
            isim: "Portals & Fragments",
            sorular: [
                {
                    soru: "React Portal ne için kullanılır?",
                    secenekler: [
                        "Sayfa yönlendirme",
                        "Bileşeni DOM ağacının farklı bir noktasına render etme (modal, tooltip)",
                        "API çağrısı",
                        "State yönetimi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Portal oluşturmak için hangi metod kullanılır?",
                    secenekler: [
                        "React.createPortal(child, container)",
                        "ReactDOM.createPortal(child, container)",
                        "Portal.create(child)",
                        "usePortal(child)",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React.Fragment ne işe yarar?",
                    secenekler: [
                        "Bileşeni parçalar",
                        "Gereksiz DOM elementi olmadan çoklu eleman döndürmeyi sağlar",
                        "Bileşeni siler",
                        "Stil ekler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Fragment kısa sözdizimi nedir?",
                    secenekler: ["<Fragment>", "<>...</>", "<Frag>", "[]"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React.Fragment bileşenine 'key' prop'u eklenebilir mi?",
                    secenekler: [
                        "Hayır, eklenemez",
                        "Evet, ancak <React.Fragment key={...}> şeklinde açıkça yazılmalıdır",
                        "Sadece kısa sözdiziminde (<></>) eklenebilir",
                        "Sadece sayısal key alır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Portal'da render edilen bir modal'ın dışına tıklanması (event bubbling) nasıl çalışır?",
                    secenekler: [
                        "DOM dışı olduğu için olaylar üst bileşene iletilmez",
                        "Bileşen DOM'da farklı bir yerde olsa da React ağacında içeride olduğu için olaylar üst sarmalayıcıya (parent) ulaşır",
                        "Sadece window seviyesinde dinlenebilir",
                        "Hata fırlatır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_22",
            tur: "react",
            ikon: "🎨",
            isim: "Stil Yönetimi",
            sorular: [
                {
                    soru: "React'te inline stil nasıl yazılır?",
                    secenekler: [
                        "style='color: red'",
                        "style={{ color: 'red' }} (obje olarak)",
                        "css='color: red'",
                        "className='color-red'",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CSS Modules ne sağlar?",
                    secenekler: [
                        "Global CSS yazar",
                        "CSS sınıf adlarını otomatik benzersiz yaparak çakışmayı önler",
                        "CSS'i siler",
                        "Sadece Tailwind ile çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "styled-components ne tür bir yaklaşımdır?",
                    secenekler: [
                        "Geleneksel CSS",
                        "CSS-in-JS (CSS'i JavaScript içinde yazma)",
                        "SASS preprocessor",
                        "Inline stil",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React'te className neden class yerine kullanılır?",
                    secenekler: [
                        "Daha kısa olduğu için",
                        "class, JavaScript'te reserved (ayrılmış) bir kelime olduğu için",
                        "HTML standardı böyle istediği için",
                        "Performans için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "React 'style' objesinde CSS özellikleri hangi formatta yazılır?",
                    secenekler: ["kebab-case (background-color)", "camelCase (backgroundColor)", "PascalCase (BackgroundColor)", "UPPERCASE"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Tailwind CSS sınıflarını dinamik olarak birleştirmek için hangi kütüphane yaygın olarak önerilir?",
                    secenekler: ["jQuery", "clsx veya tailwind-merge", "Axios", "Moment.js"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_23",
            tur: "react",
            ikon: "🧪",
            isim: "React Testing",
            sorular: [
                {
                    soru: "React Testing Library'nin felsefesi nedir?",
                    secenekler: [
                        "İmplementasyon detaylarını test et",
                        "Kullanıcının gördüğü ve etkileştiği şeyleri test et",
                        "Sadece snapshot test yaz",
                        "Sadece unit test yaz",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "render() fonksiyonu ne yapar?",
                    secenekler: [
                        "Bileşeni tarayıcıda gösterir",
                        "Bileşeni sanal DOM'da oluşturur (test için)",
                        "Bileşeni siler",
                        "CSS render eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "screen.getByText('Merhaba') ne yapar?",
                    secenekler: [
                        "Metni siler",
                        "Ekranda 'Merhaba' metnini içeren elementi bulur",
                        "Metin oluşturur",
                        "Konsola yazar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "fireEvent ne için kullanılır?",
                    secenekler: [
                        "Animasyon başlatmak",
                        "Test içinde kullanıcı etkileşimlerini simüle etmek (click, change)",
                        "Hata fırlatmak",
                        "Event listener eklemek",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Testlerde asenkron olarak bir elementin ekranda görünmesini beklemek için hangi metod tercih edilir?",
                    secenekler: ["getByText", "queryByText", "findByText (veya wait metotları)", "searchText"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Mocking (sahteleştirme) işlemi testlerde neden önemlidir?",
                    secenekler: [
                        "Kodu gizlemek için",
                        "API çağrılarını veya karmaşık bağımlılıkları test ortamından izole edip testi hızlandırmak ve tutarlı kılmak için",
                        "CSS test etmek için",
                        "Daha az kod yazmak için"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_24",
            tur: "react",
            ikon: "⚡",
            isim: "Concurrent Features",
            sorular: [
                {
                    soru: "useTransition hook'u ne yapar?",
                    secenekler: [
                        "Animasyon ekler",
                        "State güncellemesini düşük öncelikli olarak işaretler (UI'ın donmamasını sağlar)",
                        "Sayfa geçişi yapar",
                        "CSS transition ekler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useDeferredValue ne işe yarar?",
                    secenekler: [
                        "Değeri siler",
                        "Bir değerin düşük öncelikli kopyasını tutarak ağır render'ları ertelemeyi sağlar",
                        "Değeri geciktirir",
                        "Değeri cache'ler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Concurrent rendering'in amacı nedir?",
                    secenekler: [
                        "Daha fazla bellek kullanmak",
                        "Büyük güncellemeler sırasında UI'ın yanıt vermeye devam etmesini sağlamak",
                        "Server-side rendering yapmak",
                        "Hızlı internet gerektirmek",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "isPending (useTransition'dan) ne gösterir?",
                    secenekler: [
                        "Hata durumunu",
                        "Düşük öncelikli güncellemenin hâlâ devam edip etmediğini",
                        "Bileşenin mount durumunu",
                        "Network durumunu",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Suspense for Data Fetching ile klasik useEffect veri çekme arasındaki fark nedir?",
                    secenekler: [
                        "useEffect daha yenidir",
                        "Suspense, veri yüklenirken tüm bileşen ağacının render'ını yönetebilir ve daha temiz bir yapı sunar",
                        "Suspense daha yavaştır",
                        "Fark yoktur"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_25",
            tur: "react",
            ikon: "🔄",
            isim: "Bileşen Yaşam Döngüsü",
            sorular: [
                {
                    soru: "React bileşeninin yaşam döngüsü aşamaları nelerdir?",
                    secenekler: ["Başlatma ve kapatma", "Mounting, Updating, Unmounting", "Oluşturma ve silme", "Render ve display"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useEffect(() => { ... }, []) hangi yaşam döngüsü aşamasına karşılık gelir?",
                    secenekler: ["componentDidUpdate", "componentDidMount (sadece mount'ta çalışır)", "componentWillUnmount", "shouldComponentUpdate"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useEffect cleanup fonksiyonu (return) ne zaman çalışır?",
                    secenekler: ["Mount sırasında", "Bileşen unmount olduğunda veya dependency değiştiğinde", "Her render'da", "Sadece ilk render'da"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "StrictMode'da useEffect neden iki kez çalışır?",
                    secenekler: ["Bug", "Geliştirme modunda cleanup fonksiyonlarının doğru çalıştığını test etmek için", "Performans ölçümü", "Hata ayıklama"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "shouldComponentUpdate (Class) veya React.memo (Functional) neyi kontrol eder?",
                    secenekler: ["CSS yüklenmesini", "Bileşenin gereksiz olup olmadığını", "Bileşenin gerçekten render olup olmaması gerektiğini", "Sayfa başlığını"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "getDerivedStateFromProps metodu ne zaman kullanılır?",
                    secenekler: ["Her zaman", "Nadiren, props değişimine bağlı olarak yerel state'i güncellemek gerektiğinde", "Sadece hataları yakalamak için", "Sayfa açılırken"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_26",
            tur: "react",
            ikon: "📐",
            isim: "useLayoutEffect",
            sorular: [
                {
                    soru: "useLayoutEffect ile useEffect arasındaki fark nedir?",
                    secenekler: ["Hiçbir fark yoktur", "useLayoutEffect DOM paint'ten ÖNCE, useEffect paint'ten SONRA çalışır", "useLayoutEffect daha yavaştır", "useEffect daha önce çalışır"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useLayoutEffect ne zaman kullanılmalı?",
                    secenekler: ["Her zaman", "DOM ölçümleri veya görsel güncellemeler (titreme önleme) gerektiğinde", "API çağrılarında", "State güncellemelerinde"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "useLayoutEffect'in performans etkisi nedir?",
                    secenekler: ["Performansı iyileştirir", "Render'ı bloklar (senkron çalışır), gereksiz kullanılmamalı", "Etkisi yoktur", "Render'ı hızlandırır"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir element boyutunu ölçmek için hangi hook tercih edilmeli?",
                    secenekler: ["useEffect", "useLayoutEffect (ölçüm sonrası boyut değişikliğinde titreme olmaz)", "useState", "useCallback"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Neden API istekleri useLayoutEffect içinde yapılmamalıdır?",
                    secenekler: [
                        "Güvenli değildir",
                        "Çünkü senkron çalışması render'ı bloklayarak sayfanın/UI'ın donmasına neden olabilir",
                        "useEffect daha hızlıdır",
                        "Sunucu hata verir"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_27",
            tur: "react",
            ikon: "🧱",
            isim: "Composition vs Inheritance",
            sorular: [
                {
                    soru: "React neden inheritance (kalıtım) yerine composition (bileşim) önerir?",
                    secenekler: ["Kalıtım yoktur", "Composition daha esnek, yeniden kullanılabilir ve okunabilirdir", "Kalıtım daha yavaştır", "React class desteklemez"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "children prop ne sağlar?",
                    secenekler: ["Alt bileşenleri listeler", "Bileşenin açılış-kapanış etiketleri arasına yerleştirilen içeriği alır", "State paylaşır", "Olay yakalar"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Render props pattern nedir?",
                    secenekler: ["Props'u render etme", "Bir bileşene fonksiyon prop'u geçerek ne render edileceğini belirleme", "CSS ile render", "Otomatik render"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Slot pattern (named children) nasıl uygulanır?",
                    secenekler: ["<slot> elementi ile", "Farklı isimlerle bileşenleri prop olarak geçirme (header, footer gibi)", "CSS slot ile", "useSlot hook ile"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Higher-Order Component (HOC) nedir?",
                    secenekler: ["Üst bileşen", "Bir bileşeni alıp geliştirilmiş yeni bileşen döndüren fonksiyon", "Context Provider", "Root bileşen"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_28",
            tur: "react",
            ikon: "📦",
            isim: "State Management Libs",
            sorular: [
                {
                    soru: "Redux Toolkit'in temel yapı taşları nelerdir?",
                    secenekler: ["Component ve props", "Store, slice, reducer ve action", "State ve effect", "Router ve link"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Zustand'ın Redux'a göre avantajı nedir?",
                    secenekler: ["Daha eski", "Minimal boilerplate, basit API, provider gerektirmez", "Daha güçlü", "Daha fazla topluluk desteği"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Ne zaman harici state yönetim kütüphanesi gerekir?",
                    secenekler: ["Her zaman", "Birçok bileşenin paylaştığı karmaşık state, Context'in yetersiz kaldığı durumlar", "Asla gerekmez", "Sadece büyük takımlarda"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Redux'ta useSelector ne yapar?",
                    secenekler: ["DOM elementi seçer", "Store'dan state okur ve değişiklikte bileşeni yeniden render eder", "CSS seçicisi", "Eleman filtreler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Redux Toolkit'te 'Immer' kütüphanesi ne sağlar?",
                    secenekler: [
                        "Animasyon ekler",
                        "Mutable (değiştirilebilir) gibi görünen kod yazarak otomatik olarak immutable güncellemeler yapılmasını sağlar",
                        "Hata ayıklamayı zorlaştırır",
                        "Sadece büyük verilerde çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Context providers' genellikle nerede tanımlanmalıdır?",
                    secenekler: ["Her bileşenin içinde", "Tüm ihtiyacı olan bileşenleri sarmalayacak şekilde en yüksek seviyede (App veya index)", "Sadece footer'da", "Ayarlar klasöründe"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_29",
            tur: "react",
            ikon: "▲",
            isim: "Next.js Giriş",
            sorular: [
                {
                    soru: "Next.js nedir?",
                    secenekler: ["JavaScript kütüphanesi", "React tabanlı full-stack framework (SSR, SSG, API routes)", "CSS framework", "Test framework"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SSR (Server-Side Rendering) ne demektir?",
                    secenekler: ["Tarayıcıda render", "Sayfanın sunucuda HTML olarak oluşturulup gönderilmesi", "Statik dosya sunma", "CDN kullanımı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SSG (Static Site Generation) ile SSR arasındaki fark nedir?",
                    secenekler: ["Hiçbir fark yoktur", "SSG build anında, SSR her istekte sayfa oluşturur", "SSG daha yavaştır", "SSR sadece React'ta çalışır"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Next.js'te dosya tabanlı routing nasıl çalışır?",
                    secenekler: ["react-router ile", "app/ veya pages/ klasöründeki dosya yapısı otomatik route oluşturur", "Manuel konfigürasyon", "JSON dosyası ile"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Next.js'te Link bileşeni kullanmanın 'prefetching' avantajı nedir?",
                    secenekler: [
                        "Kod kirliliğini önler",
                        "Kullanıcı linki görmeden sayfayı arka planda önceden yükleyerek anında geçiş sağlar",
                        "Gerekli değildir",
                        "Görseli iyileştirir"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "react_30",
            tur: "react",
            ikon: "♿",
            isim: "Erişilebilirlik (a11y)",
            sorular: [
                {
                    soru: "Web erişilebilirliği (accessibility) ne demektir?",
                    secenekler: ["Hızlı internet erişimi", "Engelli bireylerin de web uygulamalarını kullanabilmesi", "Mobil uyumluluk", "SEO optimizasyonu"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ARIA attributes ne için kullanılır?",
                    secenekler: ["Stil vermek", "Ekran okuyuculara ek bağlam bilgisi sağlamak", "Animasyon eklemek", "Performans artırmak"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "aria-label ne yapar?",
                    secenekler: ["Görsel etiket ekler", "Elemana ekran okuyucu için açıklayıcı metin sağlar (görsel değil)", "Link oluşturur", "Stil ekler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Semantik HTML neden erişilebilirlik için önemlidir?",
                    secenekler: ["Daha hızlıdır", "<button>, <nav>, <main> gibi etiketler ekran okuyuculara yapıyı anlatır", "SEO için gereklidir", "CSS'e yardımcı olur"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Görme engelli kullanıcılar için resimlerde (img) mutlaka bulunması gereken nitelik hangisidir?",
                    secenekler: ["id", "alt (alternative text)", "title", "loading"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir form alanına odaklanıldığında (focus) stilin (outline) tamamen kaldırılması neden hatadır?",
                    secenekler: [
                        "Görseli bozar",
                        "Klavye ile gezinen kullanıcıların hangi elemanda olduklarını görmelerini engellediği için",
                        "Hata değildir",
                        "Daha yavaştır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },



    ],

    nodejs: [
        {
            id: "node_1",
            tur: "node",
            ikon: "🟢",
            isim: "Node Giriş",
            sorular: [
                {
                    soru: "Node.js ortamında dahili bir modülü projenize dahil etmek için hangi fonksiyon kullanılır?",
                    secenekler: ["import()", "include()", "require()", "load()"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Node.js 'Single-threaded' (tek iş parçacıklı) olmasına rağmen nasıl yüksek performans sunar?",
                    secenekler: [
                        "Çoklu CPU çekirdeği kullanarak",
                        "Event Loop ve asenkron I/O (giriş/çıkış) işlemleri sayesinde",
                        "Kodu daha kısa yazarak",
                        "Sadece küçük dosyalarda çalıştığı için"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'CommonJS' modül sistemi (require) ile 'ES Modules' (import) arasındaki temel fark nedir?",
                    secenekler: [
                        " require daha hızlıdır",
                        "CommonJS senkron, ESM asenkron yapıdadır ve ESM tarayıcılarla daha uyumludur",
                        "Sadece isimleri farklıdır",
                        "Eski Node.js sadece ESM destekler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Node.js 'blocking' (engelleyici) kod yazmak neden tehlikelidir?",
                    secenekler: [
                        "Kodun boyutu büyür",
                        "Ana thread'i (Event Loop) durdurarak tüm kullanıcıların isteklerini bekletir/dondurur",
                        "Bilgisayarı kapatır",
                        "Belleği siler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "REPL (Read-Eval-Print Loop) nedir?",
                    secenekler: [
                        "Bir veritabanı türü",
                        "Komut satırından doğrudan JS kodu yazıp anlık sonuç almayı sağlayan interaktif ortam",
                        "Bir döngü (loop) yapısı",
                        "Hata ayıklama aracı"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'module.exports' ve 'exports' arasındaki fark hakkında hangisi doğrudur?",
                    secenekler: [
                        "Aynı şeydir",
                        "'module.exports' ana nesneyi döndürür, 'exports' ise ona bir referanstır",
                        "Sadece biri günceldir",
                        "Fark yoktur"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_2",
            tur: "node",
            ikon: "📁",
            isim: "Dosya Sistemi",
            sorular: [
                {
                    soru: "Node.js'te dosya okuma/yazma işlemleri için hangi dahili modül kullanılır?",
                    secenekler: ["http", "path", "fs", "url"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "fs.readFileSync() ve fs.readFile() arasındaki fark nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "Sync olan kodun akışını bekletir (blocking), asenkron olan callback fırlatır ve akış devam eder (non-blocking)",
                        "Birisi sadece resim okur",
                        "Birisi daha güvenlidir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "fs.watch() ne amaçla kullanılır?",
                    secenekler: [
                        "Dosyayı silmek için",
                        "Bir dosya veya dizindeki değişiklikleri (yeni dosya, silme, güncelleme) anlık izlemek için",
                        "Dosyayı saniyede bir okumak için",
                        "Dosyayı kilitler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Buffer' nesnesi Node.js dosya işlemlerinde neden önemlidir?",
                    secenekler: [
                        "Dosyayı isimlendirir",
                        "İkili (binary) verileri bellekte ham (raw) olarak işlemek için kullanılır",
                        "Dosyayı siler",
                        "Hız artırır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_3",
            tur: "node",
            ikon: "📦",
            isim: "NPM",
            sorular: [
                {
                    soru: "NPM ne anlama gelir?",
                    secenekler: [
                        "Node Package Manager",
                        "New Programming Module",
                        "Node Process Manager",
                        "New Package Method",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "package.json dosyasını oluşturmak için hangi komut kullanılır?",
                    secenekler: ["npm create", "npm init", "npm start", "npm build"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'package-lock.json' dosyasının ana amacı nedir?",
                    secenekler: [
                        "Dosyayı kilitlemek",
                        "Yüklü paketlerin tam sürümlerini sabitleyerek tüm ortamlarda aynı bağımlılıkların kurulmasını garanti etmek",
                        "Paket ismini tutmak",
                        "Şifre saklamak"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "npm audit komutu ne işe yarar?",
                    secenekler: [
                        "Paketleri siler",
                        "Yüklü paketlerdeki bilinen güvenlik açıklarını tarar ve raporlar",
                        "Ses kontrolü yapar",
                        "Hız testi yapar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SemVer (Semantic Versioning) formatında '1.2.3' değerindeki '2' neyi ifade eder?",
                    secenekler: [
                        "Major versiyon",
                        "Minor versiyon (Geriye dönük uyumlu yeni özellikler)",
                        "Yama (Patch) versiyonu",
                        "Hata sayısı"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_4",
            tur: "node",
            ikon: "🌐",
            isim: "HTTP Sunucu",
            sorular: [
                {
                    soru: "Node.js'te basit bir HTTP sunucu oluşturmak için hangi modül kullanılır?",
                    secenekler: ["express", "http", "server", "net"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "res.write() ve res.end() arasındaki fark nedir?",
                    secenekler: [
                        "write hata verir",
                        "write veriyi parça parça gönderir, end ise gönderimi bitirip bağlantıyı sonlandırır",
                        "Fark yoktur",
                        "end sadece metin gönderir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sunucu oluştururken (http.createServer) gelen 'req' nesnesi hangi özelliktedir?",
                    secenekler: ["Sadece bir obje", "Readable Stream örneğidir", "Writable Stream'dir", "Promise yapısındadır"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_5",
            tur: "node",
            ikon: "🚂",
            isim: "Express.js",
            sorular: [
                {
                    soru: "Express.js nedir?",
                    secenekler: [
                        "Bir veritabanı",
                        "Node.js için minimal web framework",
                        "Bir programlama dili",
                        "Bir tarayıcı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Express'te bir GET route tanımlamak için ne kullanılır?",
                    secenekler: [
                        "app.route('/yol')",
                        "app.get('/yol', handler)",
                        "app.create('/yol')",
                        "app.listen('/yol')",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Express'te 'Route Parameters' (örn: /users/:id) nasıl okunur?",
                    secenekler: ["req.body", "req.params", "req.query", "req.id"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Statik dosyaları (resim, css vb.) sunmak için hangi dahili Express fonksiyonu kullanılır?",
                    secenekler: ["express.file", "express.static", "express.public", "express.assets"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "req.query ve req.params arasındaki fark nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "query URL'deki ?'den sonrasını, params ise tanımlı rotadaki dinamik kısımları tutar",
                        "params daha güvenlidir",
                        "query sadece sayılarda çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_6",
            tur: "node",
            ikon: "🔗",
            isim: "Middleware",
            sorular: [
                {
                    soru: "Middleware nedir?",
                    secenekler: [
                        "Bir veritabanı türü",
                        "İstek ve yanıt arasında çalışan fonksiyon",
                        "Bir HTML etiketi",
                        "Bir CSS özelliği",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Middleware fonksiyonu hangi üç parametreyi alır?",
                    secenekler: ["req, res, data", "req, res, next", "res, next, err", "app, req, res"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Application-level middleware' ve 'Router-level middleware' farkı nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "Uygulama seviyesi tüm uygulamada (app.use), Router seviyesi belirli bir rotada çalışır",
                        "Router seviyesi daha hızlıdır",
                        "Uygulama seviyesi eskidir"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_7",
            tur: "node",
            ikon: "🏗️",
            isim: "REST API",
            sorular: [
                {
                    soru: "REST API'de veri oluşturmak için hangi HTTP metodu kullanılır?",
                    secenekler: ["GET", "POST", "PUT", "DELETE"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "REST API'de veri silmek için hangi HTTP metodu kullanılır?",
                    secenekler: ["GET", "POST", "PUT", "DELETE"],
                    dogruYanitSirasi: 3,
                },
                {
                    soru: "Bir endpoint'te hem filtreleme hem de sıralama yapmak için genellikle hangi yapı kullanılır?",
                    secenekler: ["JSON body", "Query Parameters (örn: ?sort=desc)", "Path variables", "Headers"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Idempotent' (eşgüçlü) HTTP metodu ne demektir?",
                    secenekler: [
                        "Daha hızlı çalışan metod",
                        "Aynı isteğin birden fazla kez yapılması durumunda sonucun (yan etkinin) değişmemesi",
                        "Sadece POST metodudur",
                        "Hata veren metoddur"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "RESTful API'de sürümleme (versioning) için en yaygın URL yapısı hangisidir?",
                    secenekler: ["/api/resource/v1", "/v1/api/resource", "/api/v1/resource", "/resource?v=1"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "node_8",
            tur: "node",
            ikon: "🔑",
            isim: "Ortam Değişkenleri",
            sorular: [
                {
                    soru: "Ortam değişkenlerine (environment variables) erişmek için ne kullanılır?",
                    secenekler: [
                        "process.env",
                        "global.env",
                        "system.env",
                        "node.env",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "'.env' dosyası neden versiyon kontrol sistemine (Git vb.) yüklenmemelidir?",
                    secenekler: [
                        "Daha fazla yer kapladığı için",
                        "Zararlı kod içerdiği için",
                        "Hassas veriler (API key, şifre vb.) içerdiği ve güvenlik riski oluşturduğu için",
                        "Node.js bulamaz"
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Geliştirme (development) ve Üretim (production) ortamlarını ayırmak için hangi standart değişken kullanılır?",
                    secenekler: ["APP_MODE", "NODE_ENV", "SYSTEM_STATUS", "DEBUG_LEVEL"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.env üzerinden okunan değerlerin veri tipi her zaman nedir?",
                    secenekler: ["Number", "String", "Boolean", "Object"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_9",
            tur: "node",
            ikon: "⏱️",
            isim: "Asenkron Node",
            sorular: [
                {
                    soru: "Node.js'te Event Loop ne iş yapar?",
                    secenekler: [
                        "UI render eder",
                        "Asenkron callback'leri sırayla işler",
                        "Veritabanı bağlantısı kurar",
                        "Dosya sistemi yönetir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Node.js'te 'fs' modülünün Promise versiyonu nasıl import edilebilir?",
                    secenekler: [
                        "import fs from 'fs'",
                        "import fs from 'fs/promises'",
                        "import { promises } from 'file'",
                        "require('fs').promise()"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Unhandled Rejection' hatası ne zaman fırlatılır?",
                    secenekler: [
                        "Sürücü hatasında",
                        "Bir Promise reddedildiğinde (reject) ve yakalanacak bir .catch() veya try/catch bloğu bulunmadığında",
                        "Sadece async fonksiyonlarda",
                        "Node.js kapandığında"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_10",
            tur: "node",
            ikon: "🛡️",
            isim: "Güvenlik",
            sorular: [
                {
                    soru: "API güvenliği için kullanılan yaygın kimlik doğrulama yöntemi hangisidir?",
                    secenekler: ["CSS", "JWT (JSON Web Token)", "HTML", "XML"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Helmet' middleware'i Express uygulamalarında ne sağlar?",
                    secenekler: [
                        "Sayfayı hızlandırır",
                        "Güvenlikle ilgili HTTP başlıklarını (headers) otomatik ayarlayarak yaygın saldırılara karşı koruma sağlar",
                        "Görsellik ekler",
                        "Veritabanını şifreler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Rate Limiting' neden kritik bir güvenlik önlemidir?",
                    secenekler: [
                        "Daha az ram tüketimi için",
                        "DoS/DDoS saldırılarını ve brute-force girişimlerini engellemek için istek sayısını sınırladığı için",
                        "Dosya boyutunu küçülttüğü için",
                        "SEO için"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_11",
            tur: "node",
            ikon: "🌊",
            isim: "Streams",
            sorular: [
                {
                    soru: "Node.js'te Stream nedir?",
                    secenekler: [
                        "Veritabanı türü",
                        "Veriyi parça parça (chunk) işlemeyi sağlayan yapı",
                        "HTTP metodu",
                        "Dosya formatı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Node.js'te kaç tür Stream vardır?",
                    secenekler: [
                        "2 (Input, Output)",
                        "3 (Read, Write, Delete)",
                        "4 (Readable, Writable, Duplex, Transform)",
                        "1 (DataStream)",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "pipe() metodu ne yapar?",
                    secenekler: [
                        "Dosya oluşturur",
                        "Readable stream'i Writable stream'e bağlar",
                        "Veriyi siler",
                        "Sunucuyu kapatır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Stream'ler neden büyük dosyalar için idealdir?",
                    secenekler: [
                        "Dosyayı sıkıştırır",
                        "Dosyayı tamamını belleğe yüklemeden parça parça işler",
                        "Dosyayı şifreler",
                        "Dosyayı küçültür",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir Readable Stream'in sonunda hangi olay (event) tetiklenir?",
                    secenekler: ["finish", "end", "close", "data"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Stream'lerde 'drain' olayı ne zaman tetiklenir?",
                    secenekler: [
                        "Hata olduğunda",
                        "Writable stream'in tamponu (buffer) boşaldığında ve tekrar yazmaya hazır olduğunda",
                        "Veri bittiğinde",
                        "Dosya silindiğinde"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_12",
            tur: "node",
            ikon: "🔌",
            isim: "WebSocket",
            sorular: [
                {
                    soru: "WebSocket nedir?",
                    secenekler: [
                        "Tek yönlü HTTP bağlantısı",
                        "İstemci-sunucu arasında çift yönlü (full-duplex) gerçek zamanlı iletişim",
                        "Veritabanı protokolü",
                        "CSS özelliği",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WebSocket ile HTTP arasındaki temel fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "WebSocket bağlantı sürekli açık kalır, HTTP istek-cevap döngüsüdür",
                        "HTTP daha hızlıdır",
                        "WebSocket sadece dosya transferi için kullanılır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Node.js'te WebSocket için popüler kütüphane hangisidir?",
                    secenekler: ["express-ws", "ws veya socket.io", "http-socket", "net-ws"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WebSocket hangi tür uygulamalar için idealdir?",
                    secenekler: [
                        "Statik web sayfaları",
                        "Gerçek zamanlı sohbet, bildirim, canlı veri akışı",
                        "SEO optimizasyonu",
                        "Dosya depolama",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WebSocket bağlantısı hangi HTTP başlığı (header) ile başlatılır (Handshake)?",
                    secenekler: ["Accept: websocket", "Upgrade: websocket", "Connection: keep-alive", "Transfer-Encoding: chunked"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Sticky sessions' (yapışkan oturumlar) WebSocket ölçeklendirmesinde neden gereklidir?",
                    secenekler: [
                        "Veriyi saklamak için",
                        "İstemcinin aynı sunucu ile bağlantıda kalmasını garanti etmek için",
                        "Hız için",
                        "Sadece mobilde çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_13",
            tur: "node",
            ikon: "🧪",
            isim: "Test Yazma",
            sorular: [
                {
                    soru: "Node.js'te en popüler test framework'leri hangileridir?",
                    secenekler: [
                        "CSS Test ve HTML Test",
                        "Jest, Mocha ve Vitest",
                        "Node Test ve Express Test",
                        "TestJS ve RunTest",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Unit test (birim test) ne test eder?",
                    secenekler: [
                        "Tüm uygulamayı",
                        "Kullanıcı arayüzünü",
                        "Küçük, izole bir kod birimini (fonksiyon, metod)",
                        "Veritabanını",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "describe() ve it() fonksiyonları ne için kullanılır?",
                    secenekler: [
                        "Değişken tanımlamak için",
                        "Test gruplarını (describe) ve tekil testleri (it) organize etmek için",
                        "HTTP istekleri yapmak için",
                        "Dosya okumak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "expect().toBe() ne kontrol eder?",
                    secenekler: [
                        "Sadece tipi kontrol eder",
                        "Değerin beklenen değere tam eşit olup olmadığını (===)",
                        "Sadece uzunluğu kontrol eder",
                        "Dosya varlığını kontrol eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Spying' (gözlemleme) testlerde ne işe yarar?",
                    secenekler: [
                        "Casusluk yapar",
                        "Bir fonksiyonun kaç kez, hangi parametrelerle çağrıldığını takip etmek için",
                        "Hataları siler",
                        "Kodu şifreler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Integration Test' (entegrasyon testi) neyi doğrular?",
                    secenekler: [
                        "Sadece bir fonksiyonu",
                        "Birden fazla bileşenin veya servisin (örn: API + DB) birlikte doğru çalışıp çalışmadığını",
                        "Stilleri",
                        "Yazım hatalarını"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_14",
            tur: "node",
            ikon: "⚙️",
            isim: "Process & Global",
            sorular: [
                {
                    soru: "process.argv ne döndürür?",
                    secenekler: [
                        "Ortam değişkenlerini",
                        "Komut satırı argümanlarını dizi olarak",
                        "Dosya yolunu",
                        "Node.js sürümünü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.exit(1) ne yapar?",
                    secenekler: [
                        "Uygulamayı başlatır",
                        "Uygulamayı hata koduyla sonlandırır",
                        "Dosya siler",
                        "Portu kapatır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "__dirname ne döndürür?",
                    secenekler: [
                        "Ana dizin",
                        "Çalışan dosyanın bulunduğu dizinin mutlak yolunu",
                        "Proje kök dizinini",
                        "Node.js kurulum dizinini",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.env ne içerir?",
                    secenekler: [
                        "Dosya listesi",
                        "Ortam değişkenlerini (environment variables) içeren obje",
                        "Paket listesi",
                        "Hata listesi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.nextTick() ve setImmediate() arasındaki temel fark nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "nextTick o anki işlemin bitiminde hemen çalışır, setImmediate bir sonraki Event Loop turunda çalışır",
                        "setImmediate daha hızlıdır",
                        "nextTick sadece dosya sisteminde çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.on('uncaughtException') kullanımı neden son çare olarak görülmelidir?",
                    secenekler: [
                        "Çok yavaştır",
                        "Uygulamanın durumu belirsizleştiği için hata loglanıp uygulama restart edilmelidir",
                        "Hata yakalamaz",
                        "Belleği siler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "AbortController Node.js'te ne amaçla kullanılır?",
                    secenekler: ["Veri silmek", "Asenkron işlemleri (örn: fetch, fs) iptal etmek için", "Hata loglamak", "Sayfa yenilemek"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_15",
            tur: "node",
            ikon: "🗄️",
            isim: "Veritabanı",
            sorular: [
                {
                    soru: "ORM (Object-Relational Mapping) nedir?",
                    secenekler: [
                        "Bir veritabanı türü",
                        "Veritabanı tablolarını JavaScript nesnelerine eşleyen araç",
                        "Bir HTTP metodu",
                        "Dosya formatı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Mongoose ne için kullanılır?",
                    secenekler: [
                        "SQL veritabanları için",
                        "MongoDB ile çalışmak için (şema tanımlama, doğrulama)",
                        "Redis için",
                        "Dosya sistemi için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Connection pooling (bağlantı havuzu) ne sağlar?",
                    secenekler: [
                        "Daha fazla bellek kullanımı",
                        "Veritabanı bağlantılarını yeniden kullanarak performanz artışı",
                        "Veri şifreleme",
                        "Yedekleme",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Prisma ORM'un avantajı nedir?",
                    secenekler: [
                        "Sadece MongoDB destekler",
                        "Tip güvenli sorgular, otomatik migration ve görsel veritabanı istemcisi",
                        "Daha yavaştır",
                        "Sadece JavaScript destekler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SQL injection saldırısını önlemek için ne yapılmalı?",
                    secenekler: [
                        "Sorguları string birleştirme ile yazmak",
                        "Parametreli sorgular (prepared statements) kullanmak",
                        "Veritabanını kapatmak",
                        "Şifreleme kullanmak",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ORM vs Raw SQL — ORM'un avantajı nedir?",
                    secenekler: [
                        "Daha hızlıdır",
                        "Kod okunabilirliği, güvenlik (SQL injection koruma) ve veritabanı bağımsızlığı",
                        "Daha az bellek kullanır",
                        "Sadece NoSQL için çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Veritabanı transaction neden önemlidir?",
                    secenekler: [
                        "Hız için",
                        "Birden fazla işlemin ya hep ya hiç (atomik) şekilde çalışmasını garanti eder",
                        "Tablo oluşturmak için",
                        "Veri silmek için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'N+1 Query' problemi nedir?",
                    secenekler: [
                        "Daha hızlı sorgu",
                        "Bir ana kayıt için veritabanına gidip, alt kayıtlar için döngü içinde tekrar tekrar sorgu atılması sonucu performans kaybı",
                        "Veri kaybı",
                        "Yeni bir SQL özelliği"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Denormalization' (normalizasyonu bozma) ne zaman tercih edilir?",
                    secenekler: [
                        "Sadece hata durumunda",
                        "Okuma performansını artırmak için redundant veri saklamanın göze alındığı durumlarda (NoSQL'de yaygındır)",
                        "Hiçbir zaman",
                        "Veritabanı dolduğunda"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_16",
            tur: "node",
            ikon: "🔑",
            isim: "Auth & JWT",
            sorular: [
                {
                    soru: "JWT (JSON Web Token) kaç parçadan oluşur?",
                    secenekler: [
                        "1 (token)",
                        "2 (header, payload)",
                        "3 (header, payload, signature)",
                        "4 (header, payload, signature, footer)",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "bcrypt ne için kullanılır?",
                    secenekler: [
                        "JWT oluşturmak için",
                        "Şifreleri güvenli şekilde hashlemek için",
                        "Dosya şifrelemek için",
                        "SSL sertifikası oluşturmak için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Session-based auth ve token-based auth arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "Session sunucuda, token istemcide saklanır; token stateless'tır",
                        "Token daha yavaştır",
                        "Session daha güvenlidir her koşulda",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Refresh token ne için kullanılır?",
                    secenekler: [
                        "Sayfayı yenilemek",
                        "Süresi dolan access token'ı yenilemek için",
                        "Şifreyi sıfırlamak için",
                        "Veritabanını güncellemek için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "JWT'nin dezavantajı nedir?",
                    secenekler: [
                        "Çok yavaştır",
                        "Sunucu tarafında iptal edilmesi zordur (stateless olduğu için)",
                        "Sadece küçük veri taşır",
                        "Şifreleme desteklemez",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Authentication (kimlik doğrulama) akışı nasıl çalışır?",
                    secenekler: [
                        "Sadece şifre kontrolü",
                        "Login → şifre doğrulama → token üretme → istemciye gönderme → sonraki isteklerde token ile doğrulama",
                        "Sadece cookie ayarlama",
                        "IP kontrolü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Authorization (yetkilendirme) ve Authentication arasındaki fark nedir?",
                    secenekler: [
                        "Aynı şeydir",
                        "Authentication 'kim olduğunuzu', Authorization 'ne yapabileceğinizi' belirler",
                        "Authorization şifre kontrolüdür",
                        "Authentication rol kontrolüdür",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'JWT Secret Key' çalınırsa ne olur?",
                    secenekler: [
                        "Bir şey olmaz",
                        "Saldırgan istediği kullanıcı adına geçerli token'lar üreterek sisteme tam erişim sağlayabilir",
                        "Sadece sistem yavaşlar",
                        "Veritabanı silinir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Salting' (tuzlama) işlemi şifre hash'leme sürecinde neyi önler?",
                    secenekler: [
                        "Daha az ram kullanımını",
                        "Rainbow table (önceden hesaplanmış hash tablosu) saldırılarını engeller",
                        "Yanlış şifreyi",
                        "Hızlı girişi"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_17",
            tur: "node",
            ikon: "✅",
            isim: "Validation",
            sorular: [
                {
                    soru: "İstek (request) doğrulama neden önemlidir?",
                    secenekler: [
                        "Performans için",
                        "Geçersiz/zararlı verinin sunucuya ulaşmasını önlemek için",
                        "Görsel iyileştirme için",
                        "SEO için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Joi kütüphanesi ne için kullanılır?",
                    secenekler: [
                        "Test yazma",
                        "Veri şeması tanımlama ve doğrulama",
                        "Veritabanı bağlantısı",
                        "HTTP istekleri",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Zod'un Joi'ye göre avantajı nedir?",
                    secenekler: [
                        "Daha eski",
                        "TypeScript-first, otomatik tip çıkarımı (type inference)",
                        "Daha yavaş",
                        "Sadece Node.js'te çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Doğrulama hatası olduğunda HTTP hangi durum kodu döndürülmeli?",
                    secenekler: ["200 OK", "400 Bad Request", "500 Internal Server Error", "404 Not Found"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Veri doğrularken 'Fail-fast' prensibi ne demektir?",
                    secenekler: [
                        "Hızlı kod yazmak",
                        "Gelen veri hatalıysa işlemlere devam etmeden en başta hatayı döndürmek",
                        "Hata olana kadar beklemek",
                        "Hız testi"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Payload doğrulaması nerede yapılmalıdır?",
                    secenekler: ["Sadece istemcide", "Sadece sunucuda", "UX için istemcide, güvenlik için mutlaka sunucuda", "Sadece Firebase'de"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "node_18",
            tur: "node",
            ikon: "📤",
            isim: "Dosya Yükleme",
            sorular: [
                {
                    soru: "multer kütüphanesi ne için kullanılır?",
                    secenekler: [
                        "Veritabanı yönetimi",
                        "Express.js'te dosya yükleme (multipart/form-data) işlemi",
                        "E-posta gönderme",
                        "PDF oluşturma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "multipart/form-data ne tür veriler için kullanılır?",
                    secenekler: [
                        "JSON verisi",
                        "Dosya ve ikili (binary) veri içeren formlar",
                        "Sadece metin",
                        "URL parametreleri",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Büyük dosya yüklemelerinde hangi strateji önerilir?",
                    secenekler: [
                        "Tüm dosyayı belleğe yükle",
                        "Stream tabanlı yükleme ve boyut limiti koyma",
                        "Dosyayı Base64'e çevir",
                        "Dosyayı e-posta ile gönder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dosya depolama için hangi servisler yaygındır?",
                    secenekler: [
                        "Sadece yerel disk",
                        "AWS S3, Google Cloud Storage, Cloudinary",
                        "Sadece veritabanı",
                        "FTP",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Yüklenen dosyaları veritabanında 'Blob' olarak saklamanın ana dezavantajı nedir?",
                    secenekler: [
                        "Daha güvenli olması",
                        "Veritabanı boyutunu aşırı büyütür ve yedekleme/performans sorunları yaratır",
                        "Dosya silinmesi",
                        "Yavaş internet"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'MIME type' kontrolü neden güvenlik için tek başına yeterli değildir?",
                    secenekler: [
                        "Çok karmaşıktır",
                        "İstemci tarafından kolayca taklit edilebilir (Content sniffing/magic number kontrolü gereklidir)",
                        "Sadece resimlerde çalışır",
                        "Modern değildir"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_19",
            tur: "node",
            ikon: "💾",
            isim: "Caching",
            sorular: [
                {
                    soru: "Cache (önbellek) ne sağlar?",
                    secenekler: [
                        "Veri kaybı",
                        "Sık erişilen verileri hızlı erişim için geçici olarak saklar",
                        "Veri şifreleme",
                        "Dosya sıkıştırma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Redis nedir?",
                    secenekler: [
                        "İlişkisel veritabanı",
                        "Bellek içi (in-memory) anahtar-değer veri deposu",
                        "Dosya sistemi",
                        "Web framework",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Cache invalidation (geçersiz kılma) neden önemlidir?",
                    secenekler: [
                        "Performans için",
                        "Cache'deki eski verinin kullanıcıya gösterilmesini önlemek için",
                        "Bellek tasarrufu için",
                        "Güvenlik için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "TTL (Time To Live) ne demektir?",
                    secenekler: [
                        "Test kütüphanesi",
                        "Cache'deki verinin ne kadar süre geçerli olacağını belirleyen süre",
                        "HTTP başlığı",
                        "Veritabanı indeksi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Write-through' caching stratejisi nedir?",
                    secenekler: [
                        "Sadece okuma",
                        "Verinin hem cache'e hem de veritabanına aynı anda yazılması",
                        "Cache'in silinmesi",
                        "Daha hızlı arama"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Redis'te 'Pub/Sub' özelliği ne işe yarar?",
                    secenekler: ["Veri silme", "Bileşenler arası mesajlaşma ve gerçek zamanlı bildirim sistemleri kurmak için", "Yedekleme", "Dosya saklama"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_20",
            tur: "node",
            ikon: "🐳",
            isim: "Docker & Deployment",
            sorular: [
                {
                    soru: "Docker nedir?",
                    secenekler: [
                        "Programlama dili",
                        "Uygulamaları container (kapsayıcı) içinde paketleme ve çalıştırma platformu",
                        "Veritabanı",
                        "Web framework",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Dockerfile ne için kullanılır?",
                    secenekler: [
                        "Docker'ı indirmek",
                        "Container imajı oluşturmak için talimatları içeren dosya",
                        "Veritabanı yedeklemek",
                        "Log dosyası",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Docker Compose ne sağlar?",
                    secenekler: [
                        "Tek container çalıştırır",
                        "Birden fazla container'ı tanımlayıp birlikte yönetmeyi sağlar",
                        "Docker'ı günceller",
                        "Container'ı siler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Node.js uygulamasını deploy etmek için popüler platformlar hangileri?",
                    secenekler: [
                        "Sadece yerel sunucu",
                        "Vercel, Railway, Render, AWS, DigitalOcean",
                        "Sadece Heroku",
                        "Sadece GitHub",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CI/CD nedir?",
                    secenekler: [
                        "CSS ve JavaScript",
                        "Sürekli Entegrasyon / Sürekli Dağıtım (otomatik test ve deploy)",
                        "Container ID",
                        "Config dosyası",
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_21",
            tur: "node",
            ikon: "📁",
            isim: "Path & OS Modülleri",
            sorular: [
                {
                    soru: "path.join() ne yapar?",
                    secenekler: ["Dosya oluşturur", "Yol parçalarını platforma uygun şekilde birleştirir", "Dosya siler", "Klasör listeler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "path.resolve() ile path.join() arasındaki fark nedir?",
                    secenekler: ["Hiçbir fark yoktur", "resolve() mutlak yol döndürür, join() sadece birleştirir", "join() daha hızlıdır", "resolve() dosya oluşturur"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "path.extname('dosya.txt') ne döndürür?",
                    secenekler: ["'dosya'", "'.txt'", "'txt'", "'dosya.txt'"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "os.platform() ne döndürür?",
                    secenekler: ["Bilgisayar markası", "İşletim sistemi platformunu ('win32', 'linux', 'darwin')", "CPU hızı", "RAM miktarı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "os.cpus() ne bilgisi verir?",
                    secenekler: ["CPU fiyatı", "CPU çekirdeklerinin sayısı ve bilgisi", "Disk alanı", "Ağ bilgisi"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_22",
            tur: "node",
            ikon: "🚨",
            isim: "Hata Yönetimi (Node)",
            sorular: [
                {
                    soru: "Node.js'te custom Error sınıfı nasıl oluşturulur?",
                    secenekler: ["new Error()", "class OzelHata extends Error { ... }", "Error.create()", "throw new Hata()"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Express'te hata middleware'inin farkı nedir?",
                    secenekler: ["3 parametre alır", "4 parametre alır: (err, req, res, next)", "Parametre almaz", "2 parametre alır"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.on('uncaughtException') ne yapar?",
                    secenekler: ["Hata oluşturur", "Yakalanmamış hataları yakalar, uygulamanın çökmesini önler", "Portu kapatır", "Log dosyası oluşturur"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Async fonksiyonlardaki hataları yakalamak için ne kullanılır?",
                    secenekler: ["if-else", "try-catch bloğu veya .catch() metodu", "switch-case", "for döngüsü"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "process.on('unhandledRejection') ne zaman tetiklenir?",
                    secenekler: ["Dosya bulunamadığında", "Bir Promise reject olup hiçbir yerde yakalanmadığında", "Sunucu kapandığında", "Her hata oluştuğunda"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_23",
            tur: "node",
            ikon: "🔷",
            isim: "GraphQL",
            sorular: [
                {
                    soru: "GraphQL nedir?",
                    secenekler: ["Veritabanı", "İstemcinin ihtiyacı olan veriyi tam olarak sorgulamasına olanak sağlayan API sorgu dili", "CSS framework", "JavaScript kütüphanesi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "GraphQL'in REST'e göre avantajı nedir?",
                    secenekler: ["Daha hızlıdır", "Over-fetching ve under-fetching sorunlarını çözer", "Daha güvenlidir", "Daha eski teknoloji"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "GraphQL'de schema ne tanımlar?",
                    secenekler: ["CSS stillerini", "API'deki veri türlerini, sorguları ve mutasyonları", "Veritabanı tablolarını", "HTML yapısını"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Resolver ne işe yarar?",
                    secenekler: ["DNS çözümleme", "Schema'daki her alan için veriyi nereden getireceğini tanımlayan fonksiyon", "Hata çözme", "Bağımlılık çözme"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Mutation ne için kullanılır?",
                    secenekler: ["Sadece veri okuma", "Veri oluşturma, güncelleme veya silme işlemleri", "Schema tanımlama", "Tip tanımlama"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_24",
            tur: "node",
            ikon: "📋",
            isim: "Logging & Monitoring",
            sorular: [
                {
                    soru: "Winston ve Pino kütüphaneleri ne için kullanılır?",
                    secenekler: ["Test yazma", "Yapılandırılabilir log yönetimi (seviyeler, formatlar, hedefler)", "Veritabanı yönetimi", "API oluşturma"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Log seviyeleri (levels) neden önemlidir?",
                    secenekler: ["Performans için", "error, warn, info, debug gibi seviyeler ile logları filtreleme ve önceliklendirme", "Güvenlik için", "SEO için"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Morgan middleware'i ne yapar?",
                    secenekler: ["Kimlik doğrulama", "HTTP isteklerini otomatik loglar (method, url, status, süre)", "Dosya yükleme", "Cache yönetimi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Health check endpoint neden oluşturulur?",
                    secenekler: ["Kullanıcı sağlığı için", "Uygulamanın çalışıp çalışmadığını izleme araçlarının kontrol etmesi için", "Veritabanı sağlığı", "Dosya sağlığı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Structured logging (yapılandırılmış loglama) ne avantaj sağlar?",
                    secenekler: ["Daha güzel görünür", "JSON formatında log tutarak arama, filtreleme ve analiz kolaylığı", "Daha az yer kaplar", "Daha hızlıdır"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "node_25",
            tur: "node",
            ikon: "🛡️",
            isim: "Rate Limiting",
            sorular: [
                {
                    soru: "Rate limiting ne amaçla kullanılır?",
                    secenekler: ["Hız testi", "Belirli sürede yapılabilecek istek sayısını sınırlayarak DDoS ve brute force saldırılarını önleme", "Veri hızlandırma", "Cache yönetimi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "express-rate-limit paketi ne yapar?",
                    secenekler: ["İnternet hızını ölçer", "IP başına belirli zaman diliminde istek sayısını sınırlar", "CPU kullanımını sınırlar", "Dosya boyutunu sınırlar"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Rate limit aşıldığında hangi HTTP kodu döndürülür?",
                    secenekler: ["200 OK", "429 Too Many Requests", "500 Internal Server Error", "403 Forbidden"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sliding window rate limiting nedir?",
                    secenekler: ["Pencere açma", "İstekleri kayan zaman penceresinde sayarak daha adil sınırlandırma", "Sabit pencere", "Pencere kapatma"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Üretim ortamında rate limit verisi nerede tutulmalıdır?",
                    secenekler: ["Bellekte (memory)", "Redis gibi harici bir store'da (çoklu sunucu desteği için)", "Dosya sisteminde", "Veritabanında"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
    ],

    sql: [
        {
            id: "sql_1",
            tur: "sql",
            ikon: "DB",
            isim: "SQL Giriş",
            sorular: [
                {
                    soru: "SQL'de bir tablodan tüm verileri çekmek için hangi komut kullanılır?",
                    secenekler: ["GET * FROM tablo", "SELECT * FROM tablo", "FETCH * FROM tablo", "READ * FROM tablo"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SQL'de yeni bir kayıt eklemek için hangi komut kullanılır?",
                    secenekler: ["ADD INTO", "INSERT INTO", "CREATE INTO", "PUT INTO"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SQL'de bir kaydı silmek için hangi komut kullanılır?",
                    secenekler: ["REMOVE", "DELETE", "DROP", "ERASE"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'DML' (Data Manipulation Language) grubuna hangi komutlar dahildir?",
                    secenekler: ["CREATE, ALTER", "SELECT, INSERT, UPDATE, DELETE", "GRANT, REVOKE", "COMMIT, ROLLBACK"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir tablodaki benzersiz (tekrar etmeyen) kayıtları çekmek için ne kullanılır?",
                    secenekler: ["SELECT UNIQUE", "SELECT DISTINCT", "SELECT DIFFERENT", "SELECT SPECIAL"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_2",
            tur: "sql",
            ikon: "🔍",
            isim: "Veri Sorgulama",
            sorular: [
                {
                    soru: "SQL'de sonuçları belirli bir koşula göre filtrelemek için hangi anahtar kelime kullanılır?",
                    secenekler: ["FILTER", "WHERE", "HAVING", "WHEN"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SQL'de sonuçları sıralamak için hangi komut kullanılır?",
                    secenekler: ["SORT BY", "ARRANGE BY", "ORDER BY", "GROUP BY"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Birden fazla koşulu birleştirmek için hangi operatörler kullanılır?",
                    secenekler: ["AND / OR", "PLUS / MINUS", "WITH / ALSO", "TOGETHER"],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Bir değerin belirli bir aralıkta (örn: 10 ile 20 arası) olup olmadığını kontrol etmek için ne kullanılır?",
                    secenekler: ["AMONG", "BETWEEN", "INSIDE", "RANGE"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Sorgu sonucundan sadece ilk 5 kaydı almak için (MySQL/PostgreSQL) ne kullanılır?",
                    secenekler: ["TOP 5", "FIRST 5", "LIMIT 5", "FETCH 5"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "sql_3",
            tur: "sql",
            ikon: "📋",
            isim: "Tablo İşlemleri",
            sorular: [
                {
                    soru: "SQL'de yeni bir tablo oluşturmak için hangi komut kullanılır?",
                    secenekler: ["NEW TABLE", "CREATE TABLE", "ADD TABLE", "MAKE TABLE"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Mevcut bir tabloyu tamamen silmek (yapısıyla birlikte) için hangi komut kullanılır?",
                    secenekler: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Tablonun yapısını (sütunlar, tipler vb.) görmek için hangi komut kullanılır?",
                    secenekler: ["SHOW", "EXPLAIN / DESCRIBE", "STRUCT", "GET INFO"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_4",
            tur: "sql",
            ikon: "📊",
            isim: "Veri Tipleri",
            sorular: [
                {
                    soru: "Değişken uzunlukta metin saklamak için hangi veri tipi kullanılır?",
                    secenekler: ["CHAR", "VARCHAR", "TEXT", "VARCHAR veya TEXT"],
                    dogruYanitSirasi: 3,
                },
                {
                    soru: "Tarih ve saat bilgisini birlikte saklamak için hangi tip kullanılır?",
                    secenekler: ["TIME", "DATE", "DATETIME / TIMESTAMP", "CLOCK"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "'INT' ve 'BIGINT' arasındaki fark nedir?",
                    secenekler: ["Fark yoktur", "BIGINT daha geniş sayı aralığı saklayabilir", "INT daha büyüktür", "BIGINT sadece pozitif sayılar içindir"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_5",
            tur: "sql",
            ikon: "🔗",
            isim: "JOIN İşlemleri",
            sorular: [
                {
                    soru: "INNER JOIN ne yapar?",
                    secenekler: [
                        "Her iki tablodaki tüm kayıtları döndürür",
                        "Sadece eşleşen kayıtları döndürür",
                        "Sol tablodaki tüm kayıtları döndürür",
                        "Sağ tablodaki tüm kayıtları döndürür",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "LEFT JOIN ile INNER JOIN arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "LEFT JOIN sol tablodaki tüm kayıtları döndürür, eşleşme olmasa bile",
                        "INNER JOIN daha hızlıdır",
                        "LEFT JOIN sadece sayılarla çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'FULL OUTER JOIN' ne döndürür?",
                    secenekler: [
                        "Sadece eşleşenleri",
                        "Her iki tablodaki tüm kayıtları (eşleşme olsa da olmasa da)",
                        "Sadece sağdakileri",
                        "Hata verir"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir tabloyu kendisiyle birleştirmeye (sorgu içinde) ne ad verilir?",
                    secenekler: ["Double Join", "Self Join", "Auto Join", "Inner Join"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_6",
            tur: "sql",
            ikon: "📈",
            isim: "Gruplama",
            sorular: [
                {
                    soru: "GROUP BY ne için kullanılır?",
                    secenekler: [
                        "Verileri sıralamak için",
                        "Verileri gruplandırıp aggregate fonksiyon uygulamak için",
                        "Verileri silmek için",
                        "Tabloları birleştirmek için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Gruplandırılmış verileri filtrelemek için ne kullanılır?",
                    secenekler: ["WHERE", "HAVING", "FILTER", "GROUP FILTER"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir gruptaki en büyük veya en küçük değeri bulmak için hangi fonksiyonlar kullanılır?",
                    secenekler: ["UP / DOWN", "MAX / MIN", "TOP / BOTTOM", "HIGH / LOW"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'SUM()' fonksiyonu ne işe yarar?",
                    secenekler: ["Kayıtları sayar", "Belirli bir sütundaki değerlerin toplamını hesaplar", "En büyük değeri bulur", "Ortalama alır"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_7",
            tur: "sql",
            ikon: "🏷️",
            isim: "Kısıtlamalar",
            sorular: [
                {
                    soru: "PRIMARY KEY kısıtlaması ne sağlar?",
                    secenekler: [
                        "Sütunun NULL olabilmesini",
                        "Her satırın benzersiz olarak tanımlanmasını",
                        "Otomatik sıralama",
                        "Veri tipi kontrolü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "FOREIGN KEY ne yapar?",
                    secenekler: [
                        "Tabloyu şifreler",
                        "İki tablo arasında ilişki kurar",
                        "Verileri sıralar",
                        "Tabloyu kilitler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'CHECK' kısıtlaması (constraint) ne işe yarar?",
                    secenekler: [
                        "Veriyi kontrol eder",
                        "Sütuna girilecek değerlerin belirli bir koşulu (örn: yaş > 18) sağlamasını garanti eder",
                        "Tabloyu kilitler",
                        "Hataları siler"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'UNIQUE' ve 'PRIMARY KEY' arasındaki temel fark nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "PK boş (null) olamaz ve bir tabloda tekdir; UNIQUE boş olabilir ve birden fazla kullanılabilir",
                        "UNIQUE daha hızlıdır",
                        "PK sadece sayılardadır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'DEFAULT' kısıtlaması ne zaman devreye girer?",
                    secenekler: [
                        "Hata olduğunda",
                        "Kayıt eklenirken o sütun için bir değer belirtilmediğinde otomatik olarak atanacak değeri belirler",
                        "Her zaman",
                        "Sadece silme işleminde"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_8",
            tur: "sql",
            ikon: "📦",
            isim: "Alt Sorgular",
            sorular: [
                {
                    soru: "Alt sorgu (subquery) nedir?",
                    secenekler: [
                        "İç içe yerleştirilmiş SELECT sorgusu",
                        "İki tablonun birleşimi",
                        "Bir fonksiyon türü",
                        "Bir veri tipi",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "IN operatörü ne işe yarar?",
                    secenekler: [
                        "Değerin bir liste veya alt sorgu sonucunda olup olmadığını kontrol eder",
                        "İki değeri toplar",
                        "Tabloyu siler",
                        "Sütun ekler",
                    ],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "sql_9",
            tur: "sql",
            ikon: "⚡",
            isim: "İndeksler",
            sorular: [
                {
                    soru: "Veritabanında indeks (index) ne işe yarar?",
                    secenekler: [
                        "Veri ekler",
                        "Sorgu performansını artırır",
                        "Tabloyu siler",
                        "Veri tipini değiştirir",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Composite Index' (bileşik indeks) nedir?",
                    secenekler: [
                        "Birden fazla tabloyu kapsayan indeks",
                        "Birden fazla sütun üzerine kurulu tek bir indekstir",
                        "Renkli indeks",
                        "Hızlı bir veritabanı türü"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "İndekslerin dezavantajı nedir?",
                    secenekler: [
                        "Sorguları yavaşlatır",
                        "INSERT, UPDATE ve DELETE işlemlerini yavaşlatır ve diskte ek yer kaplar",
                        "Hata riskini artırır",
                        "Veri kaybı yapar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Unique Index' ne sağlar?",
                    secenekler: ["Sadece hız", "Hem sorguyu hızlandırır hem de o sütundaki verilerin benzersiz olmasını garanti eder", "Veriyi siler", "Tabloyu kilitler"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_10",
            tur: "sql",
            ikon: "🔄",
            isim: "UPDATE & DELETE",
            sorular: [
                {
                    soru: "UPDATE komutunda WHERE kullanmazsanız ne olur?",
                    secenekler: [
                        "Hata verir",
                        "Sadece ilk satır güncellenir",
                        "Tablodaki TÜM satırlar güncellenir",
                        "Hiçbir şey olmaz",
                    ],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Bir tablodaki tüm verileri silmek ama tablo yapısını korumak için hangi komut kullanılır?",
                    secenekler: ["DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE", "ERASE TABLE"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "Güncelleme (UPDATE) yaparken bir sütunun değerini kendi eski değerine göre (örn: maaş * 1.1) değiştirmek mümkün müdür?",
                    secenekler: ["Evet, mümkündür", "Hayır, sadece sabit değer atanır", "Sadece sayılarda mümkündür", "Sadece tetikleyicilerle (trigger) mümkündür"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "sql_11",
            tur: "sql",
            ikon: "👁️",
            isim: "Views",
            sorular: [
                {
                    soru: "SQL'de View (görünüm) nedir?",
                    secenekler: [
                        "Fiziksel bir tablo",
                        "Sanal bir tablo (bir sorgunun kaydedilmiş hali)",
                        "Bir veritabanı türü",
                        "Bir indeks türü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "View oluşturmak için hangi komut kullanılır?",
                    secenekler: ["MAKE VIEW", "CREATE VIEW", "NEW VIEW", "ADD VIEW"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "View'ların avantajı nedir?",
                    secenekler: [
                        "Veri depolama alanı kazandırır",
                        "Karmaşık sorguları basitleştirir ve veri güvenliği sağlar",
                        "Tabloları siler",
                        "Veritabanını hızlandırır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Materialized View ile normal View arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "Materialized View sonuçları fiziksel olarak saklar, normal View her seferinde sorguyu çalıştırır",
                        "Normal View daha hızlıdır",
                        "Materialized View sadece MySQL'de çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Normal bir View veritabanında fiziksel olarak yer kaplar mı?",
                    secenekler: [
                        "Evet, bir tablo kadar",
                        "Hayır, sadece sorgu tanımı saklanır; fiziksel alan kaplamaz",
                        "Sadece büyük viewlar",
                        "Sadece PostgreSQL'de kaplar"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Inline View' nedir?",
                    secenekler: ["Tek satırlık view", "FROM cümlesi içinde doğrudan yazılan alt sorguya denir", "Hızlı view", "Gizli view"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_12",
            tur: "sql",
            ikon: "🔐",
            isim: "Transactions",
            sorular: [
                {
                    soru: "Transaction (işlem) nedir?",
                    secenekler: [
                        "Tek bir SQL komutu",
                        "Birden fazla SQL komutunun atomik olarak çalıştırılması (ya hepsi ya hiçbiri)",
                        "Veritabanı yedekleme",
                        "Tablo oluşturma",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ACID prensiplerinde A ne anlama gelir?",
                    secenekler: [
                        "Availability (Erişilebilirlik)",
                        "Atomicity (Bölünmezlik)",
                        "Authentication (Kimlik doğrulama)",
                        "Abstraction (Soyutlama)",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "COMMIT komutu ne yapar?",
                    secenekler: [
                        "İşlemi geri alır",
                        "İşlemdeki tüm değişiklikleri kalıcı olarak kaydeder",
                        "Tabloyu siler",
                        "Veritabanını kapatır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ROLLBACK komutu ne yapar?",
                    secenekler: [
                        "İşlemi onaylar",
                        "İşlemdeki tüm değişiklikleri geri alır",
                        "Yeni tablo oluşturur",
                        "İndeks ekler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Dirty Read' problemi nedir?",
                    secenekler: [
                        "Yanlış veri okunması",
                        "Bir işlemin henüz tamamlanmamış (commit edilmemiş) verileri başka bir işlem tarafından okunabilmesi",
                        "Bellek hatası",
                        "Veri tabanının kilitlenmesi"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Transaction 'Isolation Levels' (izolasyon seviyeleri) neden kullanılır?",
                    secenekler: [
                        "Şifreleme için",
                        "Eş zamanlı işlemlerin birbirini nasıl etkileyeceğini (tutarlılık ve performans dengesi) belirlemek için",
                        "Hız için",
                        "Yedekleme için"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_13",
            tur: "sql",
            ikon: "📊",
            isim: "Window Functions",
            sorular: [
                {
                    soru: "Window Function nedir?",
                    secenekler: [
                        "Pencere açan fonksiyon",
                        "Satır grubuna göre hesaplama yapan ama satırları birleştirmeyen fonksiyon",
                        "Tablo oluşturan fonksiyon",
                        "Veritabanı bağlantı fonksiyonu",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ROW_NUMBER() ne döndürür?",
                    secenekler: [
                        "Tablodaki toplam satır sayısını",
                        "Her satıra sıralı bir numara atar",
                        "Satırı siler",
                        "Satırın boyutunu",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "OVER() clause'u ne için kullanılır?",
                    secenekler: [
                        "Sorguyu sonlandırmak için",
                        "Window function'ın hangi satırlar üzerinde çalışacağını belirlemek için",
                        "Tabloyu silmek için",
                        "Veri tipi değiştirmek için",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "RANK() ve DENSE_RANK() arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "RANK() eşit değerlerde boşluk bırakır, DENSE_RANK() bırakmaz",
                        "DENSE_RANK() daha yavaştır",
                        "RANK() sadece sayılarla çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Window function'lar satır sayılarını (GROUP BY gibi) azaltır mı?",
                    secenekler: [
                        "Evet, tek satıra indirger",
                        "Hayır, orijinal her satır korunur; hesaplama her satır için ayrı gösterilir",
                        "Sadece bazen",
                        "Sadece hatalarda"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'LEAD()' ve 'LAG()' fonksiyonları ne sağlar?",
                    secenekler: [
                        "Veri silme",
                        "Bulunulan satırdan sonraki (lead) veya önceki (lag) satırların verilerine erişim sağlar",
                        "Hız artışı",
                        "Tablo birleştirme"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_14",
            tur: "sql",
            ikon: "❓",
            isim: "NULL Handling",
            sorular: [
                {
                    soru: "SQL'de NULL ne anlama gelir?",
                    secenekler: [
                        "Sıfır değeri",
                        "Bilinmeyen veya eksik değer",
                        "Boş string",
                        "false",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "NULL = NULL ifadesinin sonucu nedir?",
                    secenekler: ["TRUE", "FALSE", "NULL (bilinmiyor)", "Hata verir"],
                    dogruYanitSirasi: 2,
                },
                {
                    soru: "NULL değerleri kontrol etmek için hangi ifade kullanılır?",
                    secenekler: [
                        "WHERE kolon = NULL",
                        "WHERE kolon IS NULL",
                        "WHERE kolon == NULL",
                        "WHERE kolon EQUALS NULL",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "COALESCE() fonksiyonu ne yapar?",
                    secenekler: [
                        "NULL değerleri siler",
                        "Verilen değerlerden NULL olmayan ilk değeri döndürür",
                        "Tüm değerleri birleştirir",
                        "Ortalama hesaplar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Bir sütunun boş olduğunu kontrol etmek için ne kullanılır?",
                    secenekler: ["= NULL", "IS NULL", "== NULL", "EMPTY"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Aggregate fonksiyonlar (SUM, AVG, COUNT) NULL değerleri nasıl işler?",
                    secenekler: ["Hata verirler", "Sıfır olarak kabul ederler", "Genellikle NULL değerleri yok sayarlar (COUNT(*) hariç)", "NULL görürlerse dururlar"],
                    dogruYanitSirasi: 2,
                },
            ],
        },
        {
            id: "sql_15",
            tur: "sql",
            ikon: "🔀",
            isim: "CASE WHEN",
            sorular: [
                {
                    soru: "CASE WHEN ifadesi ne için kullanılır?",
                    secenekler: [
                        "Tablo oluşturmak",
                        "Sorgu içinde koşullu değerler üretmek (if-else benzeri)",
                        "Veri silmek",
                        "İndeks oluşturmak",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CASE WHEN ifadesinin doğru sözdizimi hangisidir?",
                    secenekler: [
                        "CASE kolon WHEN ... END CASE",
                        "CASE WHEN koşul THEN değer ... ELSE varsayılan END",
                        "IF koşul THEN değer ENDIF",
                        "SWITCH kolon CASE ... ENDSWITCH",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CASE WHEN içinde ELSE belirtilmezse ne olur?",
                    secenekler: [
                        "Hata verir",
                        "Hiçbir koşul sağlanmazsa NULL döner",
                        "0 döner",
                        "Boş string döner",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CASE WHEN ile kategorilendirme örneği hangisidir?",
                    secenekler: [
                        "SELECT * FROM tablo",
                        "SELECT isim, CASE WHEN puan>=90 THEN 'A' WHEN puan>=70 THEN 'B' ELSE 'C' END AS not FROM ogrenciler",
                        "UPDATE tablo SET kolon = 5",
                        "DELETE FROM tablo",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Birden fazla koşulun olduğu bir CASE WHEN bloğunda sonuç nasıl döner?",
                    secenekler: [
                        "Tüm sonuçlar döner",
                        "İlk sağlanan koşulun sonucu döner ve blok biter",
                        "En son sağlanan koşulun sonucu döner",
                        "Alfabetik sırayla döner"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CASE WHEN yapısı hangi programlama mantığına benzer?",
                    secenekler: ["Döngüler (for/while)", "Koşullu ifadeler (if-else / switch)", "Fonksiyonlar", "Değişken tanımlama"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_16",
            tur: "sql",
            ikon: "🔗",
            isim: "UNION & Set İşlemleri",
            sorular: [
                {
                    soru: "UNION ne yapar?",
                    secenekler: [
                        "Tabloları birleştirir (JOIN)",
                        "İki sorgunun sonuçlarını birleştirir (tekrarları kaldırır)",
                        "Sütunları birleştirir",
                        "Tabloyu böler",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "UNION ALL ile UNION arasındaki fark nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "UNION ALL tekrar eden satırları da korur, UNION tekrarları kaldırır",
                        "UNION ALL daha yavaştır",
                        "UNION ALL sadece sayılarla çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "UNION kullanabilmek için sorguların hangi koşulu sağlaması gerekir?",
                    secenekler: [
                        "Aynı tablodan olmalı",
                        "Aynı sayıda ve uyumlu tipte sütuna sahip olmalı",
                        "Aynı WHERE koşuluna sahip olmalı",
                        "Aynı veritabanında olmalı",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "INTERSECT ne döndürür?",
                    secenekler: [
                        "Tüm sonuçları",
                        "Her iki sorguda da bulunan ortak satırları",
                        "Farklı satırları",
                        "İlk sorgunun sonucunu",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'MINUS' (veya EXCEPT) operatörü ne döndürür?",
                    secenekler: [
                        "İki sorgunun toplamını",
                        "Birinci sorguda olup ikinci sorguda olmayan kayıtları",
                        "Sadece negatif sayıları",
                        "Hatalı kayıtları"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "İki sorgunun UNION edilebilmesi için ne gereklidir?",
                    secenekler: [
                        "Aynı tablo olması",
                        "Sütun sayılarının ve veri tiplerinin uyumlu olması",
                        "Veritabanının boş olması",
                        "Şifre gerektirmesi"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_17",
            tur: "sql",
            ikon: "📝",
            isim: "String & Tarih Fonksiyonları",
            sorular: [
                {
                    soru: "CONCAT('Merhaba', ' ', 'Dünya') sonucu nedir?",
                    secenekler: [
                        "MerhabaDünya",
                        "Merhaba Dünya",
                        "Hata verir",
                        "NULL",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "UPPER() ve LOWER() fonksiyonları ne yapar?",
                    secenekler: [
                        "Sayıyı büyütür/küçültür",
                        "Metni büyük/küçük harfe dönüştürür",
                        "Sıralama yapar",
                        "Karakter sayar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SUBSTRING('JavaScript', 5, 6) ne döndürür?",
                    secenekler: ["'Java'", "'Script'", "'aScri'", "'aScrip'"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "NOW() fonksiyonu ne döndürür?",
                    secenekler: [
                        "Sadece bugünün tarihi",
                        "Şu anki tarih ve saati",
                        "Unix timestamp",
                        "Sadece saati",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'LENGTH()' (veya LEN()) fonksiyonu neyi döndürür?",
                    secenekler: ["Metnin boyutunu", "Metindeki karakter sayısını", "İlk harfi", "Metni siler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Tarihten sadece yılı çekmek için hangi fonksiyon kullanılabilir?",
                    secenekler: ["YEAR() veya EXTRACT(YEAR FROM ...)", "TIME()", "CALENDAR()", "DATEONLY()"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "sql_18",
            tur: "sql",
            ikon: "⚙️",
            isim: "Stored Procedures",
            sorular: [
                {
                    soru: "Stored Procedure nedir?",
                    secenekler: [
                        "Tablo türü",
                        "Veritabanında kaydedilen, tekrar kullanılabilir SQL kod blokları",
                        "İndeks türü",
                        "Yedekleme yöntemi",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Stored Procedure oluşturmak için hangi komut kullanılır?",
                    secenekler: [
                        "MAKE PROCEDURE",
                        "CREATE PROCEDURE",
                        "NEW PROCEDURE",
                        "ADD PROCEDURE",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Stored Procedure'ün avantajları nelerdir?",
                    secenekler: [
                        "Sadece hız kazandırır",
                        "Performans, güvenlik, kod tekrarını azaltma ve bakım kolaylığı",
                        "Sadece güvenlik sağlar",
                        "Herhangi bir avantajı yoktur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Stored Procedure'da IN, OUT ve INOUT parametreleri ne anlama gelir?",
                    secenekler: [
                        "Giriş, çıkış ve her ikisi yönünde veri aktarımı",
                        "İçeri, dışarı ve ortada",
                        "Evet, hayır ve belki",
                        "Oluştur, sil ve güncelle",
                    ],
                    dogruYanitSirasi: 0,
                },
                {
                    soru: "Stored Procedure'ler ağ trafiğini (network latency) nasıl azaltabilir?",
                    secenekler: [
                        "İnterneti hızlandırarak",
                        "Tek bir çağrı ile sunucuda birden fazla SQL işleminin yapılması sayesinde",
                        "Dosya boyutunu düşürerek",
                        "Sadece yerel diskte çalışarak"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Stored Procedure ve Function arasındaki temel farklardan biri nedir?",
                    secenekler: [
                        "Hiçbir fark yoktur",
                        "Function her zaman bir değer döndürmek zorundadır, Procedure zorunda değildir",
                        "Procedure daha yavaştır",
                        "Function sadece sayılarla çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_19",
            tur: "sql",
            ikon: "🔄",
            isim: "CTE (WITH)",
            sorular: [
                {
                    soru: "CTE (Common Table Expression) nedir?",
                    secenekler: [
                        "Tablo türü",
                        "Geçici adlandırılmış sonuç kümesi (WITH ifadesi ile tanımlanır)",
                        "İndeks türü",
                        "Trigger türü",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CTE'nin alt sorguya göre avantajı nedir?",
                    secenekler: [
                        "Daha hızlıdır",
                        "Okunabilirliği artırır, aynı CTE birden fazla kullanılabilir",
                        "Daha az bellek kullanır",
                        "Hiçbir avantajı yoktur",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Recursive CTE ne için kullanılır?",
                    secenekler: [
                        "Döngüsel silme",
                        "Hiyerarşik/ağaç yapısındaki verileri sorgulamak (çalışan-yönetici, kategori)",
                        "Tablo oluşturma",
                        "Yedekleme",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WITH ifadesinin doğru sözdizimi hangisidir?",
                    secenekler: [
                        "WITH cte AS SELECT * FROM tablo",
                        "WITH cte AS (SELECT * FROM tablo) SELECT * FROM cte",
                        "CTE WITH (SELECT * FROM tablo)",
                        "SELECT WITH cte FROM tablo",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Recursive CTE' (öz yinelemeli) kullanımının yaygın örneği nedir?",
                    secenekler: [
                        "Tablo silme",
                        "Hiyerarşik verileri (kategori ağacı, organizasyon şeması vb.) sorgulamak",
                        "Paralel sorgu",
                        "Yedekleme"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "CTE hangi anahtar kelime ile başlar?",
                    secenekler: ["START", "WITH", "BEGIN", "USING"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_20",
            tur: "sql",
            ikon: "🚀",
            isim: "Performans & EXPLAIN",
            sorular: [
                {
                    soru: "EXPLAIN komutu ne yapar?",
                    secenekler: [
                        "Sorguyu açıklar",
                        "Sorgunun yürütme planını (execution plan) gösterir",
                        "Sorguyu hızlandırır",
                        "Sorguyu iptal eder",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Full table scan neden kötüdür?",
                    secenekler: [
                        "Tabloyu siler",
                        "Tüm satırları tarar, büyük tablolarda çok yavaştır (indeks kullanılmaz)",
                        "Veri kaybına neden olur",
                        "Sadece küçük tablolarda çalışır",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WHERE sütununa indeks eklemenin etkisi nedir?",
                    secenekler: [
                        "Sorguyu yavaşlatır",
                        "Filtreleme hızını dramatik olarak artırır",
                        "Veriyi şifreler",
                        "Tabloyu küçültür",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SELECT * neden performans açısından kötüdür?",
                    secenekler: [
                        "Sözdizimi hatası",
                        "Gerekmeyen sütunları da getirir, ağ ve bellek israfı yapar",
                        "Tabloyu kilitler",
                        "İndeksleri bozar",
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'Index Scan' ile 'Index Seek' arasındaki fark nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "Seek bir ağaçta arama yaparak bulur (hızlıdır), Scan ise indeksin bir kısmını tarar (daha yavaştır)",
                        "Scan daha hızlıdır",
                        "Seek sadece sayılarda çalışır"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Veritabanına çok fazla indeks eklemenin zararı nedir?",
                    secenekler: ["Okumayı yavaşlatır", "Yazma (INSERT/UPDATE) işlemlerini yavaşlatır ve disk alanı tüketir", "Veriyi bozar", "SQL'i kapatır"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_21",
            tur: "sql",
            ikon: "🏷️",
            isim: "Alias (Takma Ad)",
            sorular: [
                {
                    soru: "SQL'de alias (AS) ne için kullanılır?",
                    secenekler: ["Tablo oluşturmak", "Sütun veya tabloya geçici takma ad vermek (okunabilirlik)", "Veri silmek", "İndeks oluşturmak"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SELECT isim AS ad FROM kullanicilar — burada 'ad' ne anlama gelir?",
                    secenekler: ["Yeni sütun", "isim sütununun sonuç setindeki takma adı", "Filtre", "Koşul"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Tablo alias'ı ne zaman faydalıdır?",
                    secenekler: ["Her zaman", "JOIN'lerde uzun tablo adlarını kısaltmak ve self-join yapmak için", "Asla gerekmez", "Sadece INSERT'te"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "AS anahtar kelimesi zorunlu mudur?",
                    secenekler: ["Evet, her zaman", "Hayır, isteğe bağlıdır (SELECT isim ad geçerlidir)", "Sadece sütunlarda zorunlu", "Sadece tablolarda zorunlu"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Tablo alias'ı (örn: SELECT * FROM tablo t) nerelerde zorunludur?",
                    secenekler: [
                        "Asla zorunlu değildir",
                        "Self-join gibi aynı tablonun sorgu içinde birden fazla kez kullanıldığı durumlarda",
                        "Her JOIN işleminde",
                        "Sadece PostgreSQL'de"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Alias verilen bir isim ORDER BY içinde kullanılabilir mi?",
                    secenekler: ["Evet, çoğu modern veritabanında kullanılabilir", "Hayır, asla", "Sadece sayılarda", "Sadece SELECT * varken"],
                    dogruYanitSirasi: 0,
                },
            ],
        },
        {
            id: "sql_22",
            tur: "sql",
            ikon: "🔍",
            isim: "LIKE & Wildcard",
            sorular: [
                {
                    soru: "LIKE operatörü ne için kullanılır?",
                    secenekler: ["Sayı karşılaştırma", "Metin arama ve desen eşleme", "Tablo birleştirme", "Sıralama"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "% wildcard'ı ne anlama gelir?",
                    secenekler: ["Tek karakter", "Sıfır veya daha fazla karakter (herhangi bir uzunlukta)", "Yüzde hesaplama", "Boşluk"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "_ (alt çizgi) wildcard'ı ne anlama gelir?",
                    secenekler: ["Herhangi sayıda karakter", "Tam olarak tek bir karakter", "Boşluk", "Alt çizgi karakteri"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WHERE isim LIKE 'A%' ne döndürür?",
                    secenekler: ["'A' ile biten isimleri", "'A' ile başlayan tüm isimleri", "İçinde 'A' geçen isimleri", "Sadece 'A' olan isimleri"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'ESCAPE' karakteri LIKE içinde ne amaçla kullanılır?",
                    secenekler: [
                        "Sorgudan çıkmak için",
                        "Wildcard olan % veya _ karakterlerini metin içinde düz metin olarak aramak için",
                        "Hız için",
                        "Şifreleme için"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "WHERE isim LIKE '_A%' neyi arar?",
                    secenekler: [
                        "'A' ile başlayan isimleri",
                        "İkinci harfi 'A' olan tüm isimleri",
                        "İçinde sadece 'A' geçenleri",
                        "Son harfi 'A' olanları"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_23",
            tur: "sql",
            ikon: "⚡",
            isim: "Triggers",
            sorular: [
                {
                    soru: "Trigger nedir?",
                    secenekler: ["Sorgu türü", "Belirli bir tablo olayında (INSERT/UPDATE/DELETE) otomatik çalışan kod bloğu", "İndeks türü", "View türü"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "BEFORE ve AFTER trigger arasındaki fark nedir?",
                    secenekler: ["Hiçbir fark yoktur", "BEFORE olay gerçekleşmeden önce, AFTER gerçekleştikten sonra çalışır", "BEFORE daha hızlıdır", "AFTER daha güvenlidir"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Trigger'lar hangi yaygın kullanım için idealdir?",
                    secenekler: ["Veri sorgulama", "Otomatik audit log tutma, veri doğrulama, tarihi güncelleme", "Tablo oluşturma", "İndeks yönetimi"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Triggerların ana kullanım amaçlarından biri nedir?",
                    secenekler: ["Veri silmek", "Audit Logging (yapılan tüm değişikliklerin tarihçesini tutmak)", "Hızlı sorgu", "Yedekleme"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Recursive trigger nedir?",
                    secenekler: ["Hızlı trigger", "Bir trigger'ın çalışırken başka bir trigger'ı (veya kendisini) tetiklemesi", "Silinmiş trigger", "Yavaş trigger"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_24",
            tur: "sql",
            ikon: "🔐",
            isim: "Yetkilendirme (GRANT/REVOKE)",
            sorular: [
                {
                    soru: "GRANT komutu ne yapar?",
                    secenekler: ["Tablo oluşturur", "Kullanıcıya belirli veritabanı yetkilerini verir", "Veri siler", "Sorgu çalıştırır"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "REVOKE komutu ne yapar?",
                    secenekler: ["Yetki verir", "Daha önce verilmiş yetkileri geri alır", "Kullanıcı oluşturur", "Tablo siler"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Veritabanı rolü (ROLE) ne sağlar?",
                    secenekler: ["Tablo türü", "Yetkileri gruplandırarak kullanıcılara toplu atanmasını sağlar", "View türü", "İndeks türü"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "GRANT SELECT ON tablo TO kullanici — bu komut ne yapar?",
                    secenekler: ["Tabloyu siler", "Kullanıcıya sadece o tabloyu sorgulama (SELECT) yetkisi verir", "Kullanıcıyı siler", "Tablo oluşturur"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "'WITH GRANT OPTION' ne sağlar?",
                    secenekler: [
                        "Yetkiyi siler",
                        "Yetki verilen kullanıcının, bu yetkiyi başkalarına da verebilmesini sağlar",
                        "Şifre değiştirir",
                        "Sadece okuma yetkisi"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "Public rolü ne anlama gelir?",
                    secenekler: ["Gizli rol", "Veritabanındaki tüm kullanıcılara varsayılan olarak atanan rol", "Sadece admin rolü", "Sadece misafir rolü"],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        {
            id: "sql_25",
            tur: "sql",
            ikon: "🔄",
            isim: "SQL vs NoSQL",
            sorular: [
                {
                    soru: "SQL veritabanları hangi yapıyı kullanır?",
                    secenekler: ["Doküman tabanlı", "İlişkisel (tablolar, satırlar, sütunlar, foreign key)", "Anahtar-değer", "Graf tabanlı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "NoSQL veritabanlarının avantajı nedir?",
                    secenekler: ["Daha güvenlidir", "Esnek şema, yatay ölçeklenme, büyük ve yapılandırılmamış veriler için uygun", "SQL'den hızlıdır her zaman", "Daha az yer kaplar"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "MongoDB hangi NoSQL veri modeline sahiptir?",
                    secenekler: ["Anahtar-değer", "Doküman tabanlı (JSON/BSON)", "Graf tabanlı", "Sütun tabanlı"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "ACID özellikleri hangi veritabanı türünde daha güçlüdür?",
                    secenekler: ["NoSQL", "SQL (ilişkisel) veritabanları", "Eşit derecede güçlü", "Hiçbirinde yok"],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "NoSQL veritabanlarında 'şema' (schema) durumu nasıldır?",
                    secenekler: [
                        "Çok katıdır",
                        "Genellikle 'schema-less' (şemasız) veya esnek şemalıdır",
                        "SQL ile aynıdır",
                        "Yoktur"
                    ],
                    dogruYanitSirasi: 1,
                },
                {
                    soru: "SQL ve NoSQL farkı özetle nedir?",
                    secenekler: [
                        "Fark yoktur",
                        "SQL ölçeklenebilirlik (dikey) ve ilişki (katı) odaklıdır; NoSQL hız (yatay) ve esneklik odaklıdır",
                        "SQL daha yenidir",
                        "NoSQL daha güvenlidir"
                    ],
                    dogruYanitSirasi: 1,
                },
            ],
        },
        ],
};