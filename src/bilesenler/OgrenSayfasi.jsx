import { useState } from "react";
import { mufredat } from "../veri/mufredat";

// tik ikonu svg
const TikIkonu = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
);

export default function OgrenSayfasi({ kullaniciVerisi, dersiBaslat }) {
    const [seciliKurs, seciliKursuAyarla] = useState("javascript");

    // kurs sekme bilgileri
    const kurslar = [
        { id: "javascript", etiket: "JavaScript", renk: "text-yellow-400" },
        { id: "react", etiket: "React", renk: "text-sky-400" },
        { id: "nodejs", etiket: "Node.js", renk: "text-green-400" },
        { id: "sql", etiket: "SQL", renk: "text-purple-400" },
    ];

    // seçilen kurstaki dersleri al
    const guncelDersler = mufredat[seciliKurs];

    return (
        <div id="sayfa-ogren" className="w-full flex flex-col items-center relative z-0">
            {/* kurs seçim sekmeleri */}
            <div className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 w-full flex justify-center pt-4 pb-0">
                <div className="flex space-x-2 md:space-x-8 px-4 w-full max-w-lg">
                    {kurslar.map((kurs) => (
                        <button
                            key={kurs.id}
                            className={`kurs-tab flex-1 pb-3 text-sm md:text-base font-bold uppercase tracking-wider hover:opacity-80 ${kurs.renk} ${seciliKurs === kurs.id ? "aktif-tab" : ""
                                }`}
                            onClick={() => {
                                seciliKursuAyarla(kurs.id);
                                const anaIcerik = document.querySelector('main');
                                if (anaIcerik) anaIcerik.scrollTo(0, 0);
                            }}
                        >
                            {kurs.etiket}
                        </button>
                    ))}
                </div>
            </div>

            {/* öğrenim yolu haritası */}
            <div className="w-full max-w-lg py-10 px-4 flex flex-col items-center relative z-0">
                {guncelDersler.map((ders, dersSirasi) => {
                    const tamamlandiMi = kullaniciVerisi.tamamlananDersler.includes(ders.id);

                    // zigzag pozisyonu (mobilde daha dar, masaüstünde daha geniş)
                    const kaydirmaSinifi = dersSirasi % 2 === 0 ? "-ml-8 md:-ml-20" : "ml-8 md:ml-20";

                    // stil sınıflarını belirle
                    let dugumSiniflari = "btn-3d ders-dugumu my-4 ";
                    if (tamamlandiMi) {
                        if (ders.tur === "js") dugumSiniflari += "ders-js-tamam";
                        else if (ders.tur === "react") dugumSiniflari += "ders-react-tamam";
                        else if (ders.tur === "sql") dugumSiniflari += "ders-sql-tamam";
                        else dugumSiniflari += "ders-node-tamam";
                    } else {
                        dugumSiniflari += "ders-aktif";
                    }

                    return (
                        <div
                            key={ders.id}
                            className={`flex flex-col items-center w-full ${kaydirmaSinifi}`}
                        >
                            <button
                                className={dugumSiniflari}
                                onClick={() => dersiBaslat(seciliKurs, dersSirasi)}
                            >
                                {tamamlandiMi ? (
                                    <TikIkonu />
                                ) : (
                                    <span className="font-bold text-2xl">{ders.ikon}</span>
                                )}
                            </button>
                            <span
                                className="text-sm font-bold mt-2 text-gray-300"
                            >
                                {ders.isim}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
