export default function Lineup() {
  const artists = [
    { title: "🎸 Groupes de rock", desc: "Des performances énergiques de légendes locales et internationales du rock." },
    { title: "🎤 Pop & Jazz", desc: "Des rythmes entraînants et un jazz doux sous les étoiles." },
    { title: "🎻 Classique", desc: "Mélodies intemporelles avec orchestres et solistes." },
  ];

  return (
    <div className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Programmation 2025</h2>
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
