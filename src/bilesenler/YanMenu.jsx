// simgeler (svg bileşenleri)
const EvIkonu = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const KitapIkonu = () => (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const GithubIkonu = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

// gezinti düğme bilgileri
const gezintiButonlari = [
    { id: "ogren", etiket: "Öğren", Ikon: EvIkonu, renk: "text-blue-400" },
    { id: "bilgi-javascript", etiket: "JS", Ikon: KitapIkonu, renk: "text-yellow-400" },
    { id: "bilgi-react", etiket: "React", Ikon: KitapIkonu, renk: "text-sky-400" },
    { id: "bilgi-nodejs", etiket: "Node", Ikon: KitapIkonu, renk: "text-green-400" },
    { id: "bilgi-sql", etiket: "SQL", Ikon: KitapIkonu, renk: "text-purple-400" },
];

export default function YanMenu({ aktifSayfa, sayfaDegistir }) {
    return (
        <>
            {/* mobil üst gezinti (sadece mobilde) */}
            <header className="md:hidden bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center z-10">
                <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 tracking-wider">
                    GLOSSA
                </h1>
                <a
                    href="https://github.com/erensogutlu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
                >
                    <GithubIkonu />
                </a>
            </header>

            {/* masaüstü sol yan menüsü / mobil alt çubuk */}
            <nav className="bg-gray-900 border-t md:border-t-0 md:border-r border-gray-800 w-full md:w-64 flex md:flex-col justify-around md:justify-start px-2 py-3 md:p-6 fixed bottom-0 md:relative z-10">
                {/* logo (sadece masaüstünde) */}
                <div className="hidden md:flex flex-col items-center mb-10">
                    <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 tracking-wider mb-2">
                        GLOSSA
                    </h1>
                    <p className="text-xs text-gray-500 font-bold tracking-widest">
                        KODLAMA ÖĞREN
                    </p>
                </div>

                {/* menü düğmeleri */}
                {gezintiButonlari.map((buton) => {
                    const aktifMi = aktifSayfa === buton.id;
                    return (
                        <button
                            key={buton.id}
                            onClick={() => sayfaDegistir(buton.id)}
                            className={`flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-4 ${aktifMi ? buton.renk : "text-gray-400"
                                } hover:bg-gray-800/60 p-1 md:p-3 md:px-5 rounded-xl transition-all duration-300 w-full mt-0 md:mt-2 min-h-[50px]`}
                        >
                            <div className={`transition-transform duration-300 ${aktifMi ? "scale-110" : "scale-100"}`}>
                                <buton.Ikon />
                            </div>
                            <span className={`text-[10px] md:text-base font-black mt-1 md:mt-0 uppercase tracking-tighter md:tracking-wide transition-all ${aktifMi ? "opacity-100" : "opacity-70"}`}>
                                {buton.etiket}
                            </span>
                        </button>
                    );
                })}

                {/* github bağlantısı (sadece masaüstünde) */}
                <a
                    href="https://github.com/erensogutlu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex mt-auto bg-gray-800 p-4 rounded-xl items-center space-x-3 border border-gray-700 hover:border-gray-500 transition-colors duration-300"
                >
                    <GithubIkonu />
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-300 text-sm">erensogutlu</span>
                        <span className="text-xs text-gray-500">GitHub</span>
                    </div>
                </a>
            </nav>
        </>
    );
}
