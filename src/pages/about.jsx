import { useEffect, useRef, useState } from "react";

// Highlight content for popups
const highlights = [
  {
    title: "Concerts gratuits",
    desc: "Des performances live pour tous les âges tout au long du festival.",
    icon: "🎶",
    extended: "Des scènes sont installées dans les rues, les parcs et les places de chaque ville participante. Des artistes variés, groupes locaux et internationaux jouent gratuitement pour tous !",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Spectacles lumineux",
    desc: "Des shows visuels interactifs qui illuminent chaque soirée.",
    icon: "✨",
    extended: "Chaque soir une grande parade lumineuse, lasers et projections vidéo transforment l’ambiance. Laissez-vous inspirer par des jeux de lumières et des performances uniques.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Gastronomie locale",
    desc: "Des stands culinaires pour savourer des spécialités françaises.",
    icon: "🍷",
    extended: "Dégustez du fromage, du vin, des pâtisseries et des spécialités régionales dans chaque ville. Rencontrez des producteurs locaux et partagez des expériences gourmandes authentiques.",
    img: "https://images.unsplash.com/photo-1519864600265-abb25953db11?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ateliers et rencontres",
    desc: "Partagez un moment privilégié avec les musiciens et les passionnés.",
    icon: "🤝",
    extended: "Participez à des masterclasses, des rencontres privées, des conférences et des ateliers pour apprendre, découvrir et partager la passion de la musique.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ambiance festive",
    desc: "Dansez, chantez et célébrez dans une atmosphère conviviale.",
    icon: "🎉",
    extended: "Des DJ sets, karaokés, flashmobs et animations vous attendent chaque soir pour vivre le festival à fond avec des milliers de festivaliers.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80"
  }
];

function FloatingNotes() {
  const notes = ['🎵', '🎶', '🎷', '🎺', '🎸', '🎻', '🥁'];
  const [noteElems, setNoteElems] = useState([]);
  useEffect(() => {
    const elems = Array.from({ length: 12 }).map((_, i) => ({
      left: Math.random() * 92 + "%",
      size: Math.floor(Math.random() * 36 + 26),
      delay: Math.random() * 0.6,
      duration: Math.random() * 8 + 7,
      note: notes[Math.floor(Math.random() * notes.length)]
    }));
    setNoteElems(elems);
  }, []);
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
      {noteElems.map((n, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: n.left,
            bottom: "-60px",
            fontSize: `${n.size}px`,
            opacity: 0.45,
            animation: `floatUp ${n.duration}s linear ${n.delay}s infinite`
          }}
        >
          {n.note}
        </span>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.45; }
          80% { opacity: 0.97;}
          100% { transform: translateY(-98vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function About() {
  const headingRef = useRef();
  const [parallax, setParallax] = useState(0);
  const [active, setActive] = useState(null);

  useEffect(() => {
    function handleScroll() {
      if (headingRef.current) setParallax(window.scrollY / 2);
      document.querySelectorAll(".fade-in").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) el.style.opacity = 1;
      });
    }
    window.addEventListener("scroll", handleScroll);
    document.querySelectorAll(".fade-in").forEach(el => { el.style.opacity = 0; });
    setTimeout(() => document.querySelectorAll(".fade-in").forEach(el => { el.style.opacity = 1; }), 280);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal popup (close on overlay click or ESC)
  useEffect(() => {
    function escClose(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", escClose);
    return () => window.removeEventListener("keydown", escClose);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Video Background Header */}
      <video
        src="/festival-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw", height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          filter: "brightness(0.5)"
        }}
      />
      <FloatingNotes />
      {active !== null && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.72)",
            zIndex: 998,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => setActive(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fff",
              color: "#222",
              borderRadius: "20px",
              padding: "34px 24px",
              maxWidth: "340px",
              boxShadow: "0 0 32px #2223",
              textAlign: "center",
              zIndex: 999
            }}>
            <div style={{ fontSize: "2.5rem" }}>{highlights[active].icon}</div>
            <h3 style={{ margin: "18px 0 10px 0", color: "#30DEA2" }}>{highlights[active].title}</h3>
            <img src={highlights[active].img} alt="" style={{ width: "100%", borderRadius: "16px", marginBottom: "20px" }} />
            <div style={{ fontSize: "1.05rem" }}>{highlights[active].extended}</div>
            <button
              onClick={() => setActive(null)}
              style={{
                background: "#FFD700",
                color: "#222",
                borderRadius: "18px",
                fontWeight: "bold",
                padding: "13px 28px",
                marginTop: "26px",
                fontSize: "1.1rem",
                border: "none",
                cursor: "pointer"
              }}
            >Fermer</button>
          </div>
        </div>
      )}

      <div
        className="fade-in"
        style={{
          background: "rgba(0,0,0,0.65)",
          borderRadius: "24px",
          maxWidth: "830px",
          width: "96%",
          margin: "100px auto 48px auto",
          padding: "54px 32px 36px 32px",
          boxShadow: "0 0 55px rgba(0, 0, 0, 0.4)",
          position: "relative",
          zIndex: 3
        }}
      >
        <h2
          ref={headingRef}
          style={{
            color: "#30DEA2",
            marginBottom: "30px",
            transform: `translateY(${parallax}px)`,
            transition: "transform 0.2s",
            fontSize: "2.7rem",
            fontWeight: "bold",
            letterSpacing: "1px"
          }}
        >
          À propos du festival
        </h2>
        <p style={{ color: "#FFD700", fontWeight: "600", fontSize: "1.3rem", marginBottom: "26px" }}>
          Le Festival français de la musique (Fête de la Musique) transforme toute la France en une scène géante à ciel ouvert, unissant passionnés et curieux pour célébrer la musique dans toute sa diversité.
        </p>
        <p style={{ fontSize: "19px", marginBottom: "16px" }}>
          Fondé pour partager la joie de vivre et l'harmonie, cet événement réunit chaque année des milliers d'artistes et de visiteurs dans les rues, places et parcs, de Paris jusqu'aux plus petits villages.
        </p>
        <p style={{ fontSize: "19px", marginBottom: "18px" }}>
          L'édition <b>2025</b> aura lieu du <b>21 juin au 5 août</b> et vous promet émotions, découvertes et convivialité :
        </p>

        {/* Interactive Highlights Cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", margin: "40px 0 12px 0" }}>
          {highlights.map((h, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                background: "#fff",
                color: "#222",
                boxShadow: "0 2px 16px #FFD70033",
                borderRadius: "20px",
                padding: "22px 16px",
                minWidth: "170px",
                maxWidth: "210px",
                cursor: "pointer",
                fontWeight: "bold",
                border: "2px solid #FFD700"
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{h.icon}</div>
              <div style={{ fontSize: "1.1rem", marginBottom: "8px" }}>{h.title}</div>
              <div style={{ fontWeight: "400", fontSize: "1rem" }}>{h.desc}</div>
            </div>
          ))}
        </div>

        {/* Google Map Embed */}
        <div style={{
          margin: "40px auto 8px auto",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 2px 22px #2224"
        }}>
          <iframe
            title="Paris Festival Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9997646663826!2d2.2922926156742107!3d48.8583730792874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdb989a2fa5%3A0x564b623218f618d!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1699354413911!5m2!1sfr!2sfr"
            width="100%"
            height="240"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Weather Widget Demo */}
        <div style={{
          margin: "30px 0 0 0",
          textAlign: "center",
          display: "flex",
          justifyContent: "center"
        }}>
          <iframe
            title="Paris Weather"
            src="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=48.85&lon=2.35&zoom=10"
            width="350"
            height="180"
            frameBorder="0"
            style={{ borderRadius: "12px", boxShadow: "0 2px 12px #2223" }}
          ></iframe>
        </div>

        <p style={{ fontSize: "17px", color: "#eee", marginBottom: "18px", marginTop: "34px" }}>
          Venez célébrer avec nous l'harmonie, la créativité et la joie de vivre à travers la musique et la fête !
        </p>
        <p style={{ fontSize: "17px", fontStyle: "italic", color: "#ccc" }}>
          Le festival, c'est bien plus que des concerts… c'est un mouvement qui inspire et rassemble toute la France !
        </p>
      </div>
    </div>
  );
}
