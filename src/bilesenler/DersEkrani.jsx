import { useState } from "react";
import { mufredat } from "../veri/mufredat";

// tık simgesi
const TikSvg = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
);

// çarpı simgesi
const CarpiSvg = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// kapatma simgesi
const KapatSvg = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function DersEkrani({ kursAdi, dersSirasi, kapat, dersiTamamla }) {
    const [guncelSoruSirasi, guncelSoruSirasiAyarla] = useState(0);
    const [secilenYanitSirasi, secilenYanitSirasiAyarla] = useState(null);
    const [soruYanitlandi, soruYanitlandiAyarla] = useState(false);
    const [dogruMu, dogruMuAyarla] = useState(false);

    const ders = mufredat[kursAdi][dersSirasi];
    const soru = ders.sorular[guncelSoruSirasi];
    const ilerlemeYuzdesi = (guncelSoruSirasi / ders.sorular.length) * 100;

    // seçenek seçildiğinde
    const secenekSec = (dersSirasi) => {
        if (soruYanitlandi) return;
        secilenYanitSirasiAyarla(dersSirasi);
    };

    // kontrol et veya devam et tıklandığında
    const cevabiIsle = () => {
        if (!soruYanitlandi) {
            // kontrol etme aşaması
            soruYanitlandiAyarla(true);
            dogruMuAyarla(secilenYanitSirasi === soru.dogruYanitSirasi);
        } else {
            // devam etme aşaması
            if (guncelSoruSirasi < ders.sorular.length - 1) {
                // sıradaki soru
                guncelSoruSirasiAyarla(guncelSoruSirasi + 1);
                secilenYanitSirasiAyarla(null);
                soruYanitlandiAyarla(false);
                dogruMuAyarla(false);
            } else {
                // ders tamamlandı
                dersiTamamla(ders.id);
            }
        }
    };

    // seçenek düğme stili hesapla
    const secenekStili = (sirasi) => {
        const temelStil =
            "w-full p-4 border-2 rounded-xl text-left text-lg font-semibold transition-all";

        if (!soruYanitlandi) {
            // cevap verilmeden önce
            if (secilenYanitSirasi === sirasi) {
                return `${temelStil} border-blue-500 bg-blue-900/30 text-blue-400 transform scale-[1.01]`;
            }
            return `${temelStil} border-gray-700 bg-gray-800 hover:bg-gray-700 hover:border-blue-500 text-gray-200`;
        }

        // cevap verildikten sonra
        if (sirasi === soru.dogruYanitSirasi) {
            return `${temelStil} border-green-500 ${secilenYanitSirasi === sirasi ? "bg-green-900/30" : "bg-transparent"} text-green-400`;
        }
        if (sirasi === secilenYanitSirasi && !dogruMu) {
            return `${temelStil} border-red-500 bg-red-900/30 text-red-400`;
        }
        return `${temelStil} border-gray-700 bg-gray-800 text-gray-200 opacity-50`;
    };

    // alt kontrol çubuğu stili
    const altBarStili = soruYanitlandi
        ? dogruMu
            ? "sonuc-cubugu bg-green-900/40 border-t border-green-800 p-4 md:p-6 absolute bottom-0 w-full"
            : "sonuc-cubugu bg-red-900/40 border-t border-red-800 p-4 md:p-6 absolute bottom-0 w-full"
        : "border-t border-gray-700 bg-gray-900 p-4 md:p-6 absolute bottom-0 w-full transition-colors duration-300";

    // kontrol düğmesi stili
    const kontrolDugmeStili = () => {
        if (!soruYanitlandi) {
            if (secilenYanitSirasi === null) {
                return "btn-3d bg-gray-600 border-b-4 border-gray-700 text-gray-400 font-bold py-3 px-8 rounded-xl text-lg uppercase w-full md:w-auto transition-all disabled:opacity-50";
            }
            return "btn-3d bg-green-500 border-b-4 border-green-700 text-white font-bold py-3 px-8 rounded-xl text-lg uppercase w-full md:w-auto transition-all";
        }
        if (dogruMu) {
            return "btn-3d bg-green-500 border-b-4 border-green-700 text-white font-bold py-3 px-8 rounded-xl text-lg uppercase w-full md:w-auto";
        }
        return "btn-3d bg-red-500 border-b-4 border-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg uppercase w-full md:w-auto";
    };

    return (
        <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col">
            {/* üst ilerleme çubuğu */}
            <div className="p-3 md:p-6 flex items-center space-x-4 max-w-4xl mx-auto w-full">
                <button
                    onClick={kapat}
                    className="text-gray-400 hover:text-white transition p-1"
                >
                    <KapatSvg />
                </button>
                <div className="flex-1 bg-gray-800 h-3 md:h-4 rounded-full overflow-hidden">
                    <div
                        className="bg-green-500 h-full transition-all duration-300 rounded-full"
                        style={{ width: `${ilerlemeYuzdesi}%` }}
                    />
                </div>
            </div>

            {/* soru içeriği */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-2xl mx-auto w-full overflow-y-auto pb-40 md:pb-32">
                <h2
                    className="text-xl md:text-3xl font-black mb-6 md:mb-10 text-center text-white leading-tight"
                    dangerouslySetInnerHTML={{
                        __html: soru.soru.replace(/\n/g, "<br>"),
                    }}
                />

                <div className="w-full flex flex-col space-y-3">
                    {soru.secenekler.map((yanit, sirasi) => (
                        <button
                            key={sirasi}
                            className={`${secenekStili(sirasi)} min-h-[56px] py-3 px-5`}
                            onClick={() => secenekSec(sirasi)}
                        >
                            {yanit}
                        </button>
                    ))}
                </div>
            </div>

            <div className={altBarStili}>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 min-h-[80px] md:h-16">
                    {/* geri bildirim mesajı */}
                    {soruYanitlandi ? (
                        <div className="flex items-center space-x-3 w-full md:w-auto">
                            {dogruMu ? (
                                <>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-green-500 flex-shrink-0">
                                        <TikSvg />
                                    </div>
                                    <div className="font-black text-xl md:text-2xl text-green-400">
                                        Harika!
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500 flex items-center justify-center text-white flex-shrink-0">
                                        <CarpiSvg />
                                    </div>
                                    <div className="font-black text-base md:text-lg text-red-400 flex flex-col">
                                        <span className="text-xs opacity-80">doğru cevap:</span>
                                        <span className="text-white text-sm md:text-base font-bold">
                                            {soru.secenekler[soru.dogruYanitSirasi]}
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="hidden md:block" />
                    )}

                    <button
                        disabled={secilenYanitSirasi === null && !soruYanitlandi}
                        className={`${kontrolDugmeStili()} w-full md:w-auto py-4 md:py-3`}
                        onClick={cevabiIsle}
                    >
                        {soruYanitlandi ? "Devam Et" : "Kontrol Et"}
                    </button>
                </div>
            </div>
        </div>
    );
}
