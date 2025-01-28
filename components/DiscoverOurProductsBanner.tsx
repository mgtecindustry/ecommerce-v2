function DiscoverOurProductsBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-black text-white px-4 py-10  mt-2  shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-left mb-4">
            Explorează produsele noastre și găsește ce ai nevoie!
          </h2>

          <div className="flex">
            <div className="bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
              <span className="font-bold text-base sm:text-xl">
                Începe căutarea acum și inspiră-te din colecțiile noastre!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverOurProductsBanner;
