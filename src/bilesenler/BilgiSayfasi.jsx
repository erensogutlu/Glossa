import { bilgiIcerikleri } from "../veri/bilgiIcerikleri";

export default function BilgiSayfasi({ konuAdi }) {
    const konu = bilgiIcerikleri[konuAdi];

    if (!konu) {
        return <div className="text-white p-10">Konu içeriği bulunamadı.</div>;
    }

    return (
        <div className="w-full max-w-3xl py-4 md:py-8 px-3 md:px-4 flex flex-col items-center relative z-0">
            {/* başlık alanı */}
            <div
                className={`w-full bg-gradient-to-br ${konu.arkaPlan} border ${konu.kenarRenk} rounded-2xl p-5 md:p-8 mb-6 md:mb-8 shadow-xl`}
            >
                <div className="flex items-center space-x-3 md:space-x-4 mb-2 md:mb-3">
                    <div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-xl md:text-2xl font-black ${konu.tapinak} bg-gray-800/60 border border-gray-700`}
                    >
                        {konu.ikon}
                    </div>
                    <div>
                        <h1 className={`text-2xl md:text-4xl font-black ${konu.tapinak}`}>
                            {konu.baslik}
                        </h1>
                        <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-wide">
                            {konu.altBaslik}
                        </p>
                    </div>
                </div>
            </div>

            {/* içerik bölümleri */}
            <div className="w-full space-y-6 md:space-y-8">
                {konu.bolumler.map((bolum, sirasi) => (
                    <div
                        key={sirasi}
                        className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5 md:p-6 shadow-lg hover:border-gray-600 transition-colors duration-300"
                    >
                        {/* bölüm başlığı */}
                        <div className="flex items-center space-x-3 mb-3 md:mb-4">
                            <div
                                className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs md:text-sm font-black text-white"
                                style={{ backgroundColor: konu.renkKodu + "40" }}
                            >
                                {sirasi + 1}
                            </div>
                            <h2 className="text-lg md:text-2xl font-black text-white">
                                {bolum.baslik}
                            </h2>
                        </div>

                        {/* açıklama metni */}
                        {bolum.icerik && !bolum.kod && (
                            <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                                {bolum.icerik}
                            </p>
                        )}

                        {/* açıklama metni + kod örneği olan bölümler */}
                        {bolum.icerik && bolum.kod && (
                            <>
                                {bolum.kodIcerigi ? (
                                    <>
                                        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
                                            {bolum.icerik}
                                        </p>
                                        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 overflow-x-auto">
                                            <pre className="text-sm md:text-base text-gray-300 font-mono whitespace-pre">
                                                <code>{bolum.kodIcerigi}</code>
                                            </pre>
                                        </div>
                                    </>
                                ) : (
                                    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 overflow-x-auto">
                                        <pre className="text-sm md:text-base text-gray-300 font-mono whitespace-pre">
                                            <code>{bolum.icerik}</code>
                                        </pre>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* alt boşluk (mobil gezinti için) */}
            <div className="h-8" />
        </div>
    );
}
