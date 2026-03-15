import { useState, useEffect } from "react";
import { verileriYukle, verileriKaydet, varsayilanVeri } from "../veri/depolama";

import YanMenu from "./YanMenu";
import OgrenSayfasi from "./OgrenSayfasi";
import BilgiSayfasi from "./BilgiSayfasi";
import DersEkrani from "./DersEkrani";
import DersSonuEkrani from "./DersSonuEkrani";

export default function AnaUygulama() {
    // uygulama durumları
    const [aktifSayfa, aktifSayfaAyarla] = useState("ogren");
    const [kullaniciVerisi, kullaniciVerisiAyarla] = useState(varsayilanVeri);
    const [dersEkraniAcik, dersEkraniAcikAyarla] = useState(false);
    const [dersSonuAcik, dersSonuAcikAyarla] = useState(false);
    const [aktifDers, aktifDersAyarla] = useState({ kursAdi: "", dersSirasi: 0 });

    // sayfa yüklendiğinde verileri oku
    useEffect(() => {
        const kaydedilmisVeri = verileriYukle();
        kullaniciVerisiAyarla(kaydedilmisVeri);
    }, []);

    // veri değiştiğinde yerel depolamaya kaydet
    useEffect(() => {
        verileriKaydet(kullaniciVerisi);
    }, [kullaniciVerisi]);

    // sayfa değiştiğinde sayfa başına gel
    useEffect(() => {
        const anaIcerik = document.querySelector('main');
        if (anaIcerik) anaIcerik.scrollTo(0, 0);
    }, [aktifSayfa]);

    // ders başlat
    const dersiBaslat = (kursAdi, dersSirasi) => {
        aktifDersAyarla({ kursAdi, dersSirasi });
        dersEkraniAcikAyarla(true);
    };

    // ders tamamlandı geri bildirimi
    const dersiTamamla = (dersKimligi) => {
        dersEkraniAcikAyarla(false);

        if (!kullaniciVerisi.tamamlananDersler.includes(dersKimligi)) {
            const yeniVeri = {
                ...kullaniciVerisi,
                tamamlananDersler: [...kullaniciVerisi.tamamlananDersler, dersKimligi],
                tp: kullaniciVerisi.tp + 10,
            };
            kullaniciVerisiAyarla(yeniVeri);
        }

        // titreşim efekti
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

        dersSonuAcikAyarla(true);
    };

    // aktif sayfa içeriği
    const sayfaIcerigiTetikle = () => {
        // öğrenme sayfası
        if (aktifSayfa === "ogren") {
            return (
                <OgrenSayfasi
                    kullaniciVerisi={kullaniciVerisi}
                    dersiBaslat={dersiBaslat}
                />
            );
        }

        // bilgi sayfaları (bilgi-javascript, bilgi-react, bilgi-nodejs, bilgi-sql)
        if (aktifSayfa.startsWith("bilgi-")) {
            const konuAdi = aktifSayfa.replace("bilgi-", "");
            return <BilgiSayfasi konuAdi={konuAdi} />;
        }

        return null;
    };

    return (
        <div className="h-screen flex flex-col md:flex-row overflow-hidden">
            {/* yan menü */}
            <YanMenu
                aktifSayfa={aktifSayfa}
                sayfaDegistir={aktifSayfaAyarla}
            />

            {/* ana içerik bölgesi */}
            <main className="flex-1 overflow-y-auto pb-24 md:pb-0 relative flex flex-col items-center bg-[#111827]">
                {/* arka plan deseni */}
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                />

                {sayfaIcerigiTetikle()}
            </main>

            {/* ders ekranı katmanı */}
            {dersEkraniAcik && (
                <DersEkrani
                    kursAdi={aktifDers.kursAdi}
                    dersSirasi={aktifDers.dersSirasi}
                    kapat={() => dersEkraniAcikAyarla(false)}
                    dersiTamamla={dersiTamamla}
                />
            )}

            {/* ders sonu ekranı katmanı */}
            {dersSonuAcik && (
                <DersSonuEkrani kapat={() => dersSonuAcikAyarla(false)} />
            )}
        </div>
    );
}
