// yerel depolama ile kullanıcı verisi yönetimi

const DEPOLAMA_ANAHTARI = "glossa-kullanici-verisi";

// varsayılan kullanıcı verisi
export const varsayilanVeri = {
    tamamlananDersler: [],
    tp: 0,
};

// yerel depolamadan kullanıcı verisini yükle
export const verileriYukle = () => {
    try {
        const kaydedilmisVeri = localStorage.getItem(DEPOLAMA_ANAHTARI);
        if (kaydedilmisVeri) {
            return JSON.parse(kaydedilmisVeri);
        }
        return { ...varsayilanVeri };
    } catch (hata) {
        console.error("veri okuma hatası:", hata);
        return { ...varsayilanVeri };
    }
};

// yerel depolamaya kullanıcı verisini kaydet
export const verileriKaydet = (veri) => {
    try {
        localStorage.setItem(DEPOLAMA_ANAHTARI, JSON.stringify(veri));
    } catch (hata) {
        console.error("veri kayıt hatası:", hata);
    }
};

// tüm verileri sıfırla (çıkış yap yerine)
export const verileriSifirla = () => {
    try {
        localStorage.removeItem(DEPOLAMA_ANAHTARI);
    } catch (hata) {
        console.error("veri silme hatası:", hata);
    }
};
