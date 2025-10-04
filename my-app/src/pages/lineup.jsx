export default function Lineup() {
  const artists = [
    { title: "🎸 Rock Bands", desc: "High-energy performances from local & global rock legends." },
    { title: "🎤 Pop & Jazz", desc: "Groovy rhythms and smooth jazz under the stars." },
    { title: "🎻 Classical", desc: "Timeless melodies with orchestras and soloists." },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Lineup 2025</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {artists.map((artist, i) => (
          <div key={i} className="p-6 bg-white/20 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">{artist.title}</h3>
            <p>{artist.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
