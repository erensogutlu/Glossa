export default function DersSonuEkrani({ kapat }) {
    return (
        <div className="fixed inset-0 bg-gray-900 z-[60] flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-yellow-400 mb-4 animate-bounce">
                Dersi Tamamladın!
            </h1>

            <button
                onClick={kapat}
                className="btn-3d bg-green-500 border-b-4 border-green-700 text-white font-bold py-4 px-12 rounded-2xl text-xl uppercase"
            >
                Devam Et
            </button>
        </div>
    );
}
