// src/pages/CityDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "./cities.jsx";
import "./about.jsx";
import Confetti from "react-confetti";

const cityFestivals = {
  paris: {
    name: "Festival d'été de la musique à Paris",
    date: "21 juillet",
    musicians: ["Jean Dupont", "Léa Rousseau", "DJ Lumière"],
    image: "https://i.ytimg.com/vi/jIbcr3UBBt8/maxresdefault.jpg",
    about: `Le festival français de musique, appelé "Fête de la Musique" ou Journée Mondiale de la Musique, est une célébration annuelle organisée chaque 21 juin, coïncidant avec le solstice d'été et la nuit la plus courte de l'année dans l'hémisphère nord. Il a été créé en France en 1982 par le ministre de la Culture de l'époque, Jack Lang, pour honorer la musique sous toutes ses formes et offrir aux musiciens amateurs et professionnels la possibilité de jouer gratuitement dans les espaces publics.`,
    music: "https://www.bensound.com/bensound-music/bensound-buddy.mp3"
  },
  lyon: {
    name: "Nuits de Jazz à Lyon",
    date: "22 juillet",
    musicians: ["Camille Moreau", "The Sound Trio", "Noir Beats"],
    image: "https://applications-media.feverup.com/image/upload/f_auto,w_720,h_720/fever2/plan/photo/9cb8efd6-10a0-11f0-9924-cac999f17aa5.png",
    about: `Les Nuits de Jazz à Lyon sont un événement annuel très attendu qui célèbre la scène jazz dynamique de la ville. Des musiciens talentueux transforment les places et les salles de concert en espaces d'improvisation, d'innovation et d'expériences musicales inoubliables. Le festival accueille des artistes locaux et internationaux, réunissant les amateurs de jazz pour des nuits estivales magiques.`,
    music: "https://www.bensound.com/bensound-music/bensound-dubstep.mp3"
  },
  marseille: {
    name: "Rythmes Océaniques de Marseille",
    date: "23 juillet",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnwfBCg-bCvUq5Tr4jvpBC6NFzMS63-WNGQ&s",
    about: `Rythmes Océaniques de Marseille invite les amateurs de musique à découvrir des sons et des rythmes inspirés de l'océan au cœur de cette ville portuaire historique. Le festival met en avant la diversité culturelle de Marseille et son esprit méditerranéen, avec des rythmes dansants et des spectacles qui évoquent les vagues et l'énergie du littoral.`,
    music: "https://www.bensound.com/bensound-music/bensound-energy.mp3"
  },
  toulouse: {
    name: "Fête de l'Harmonie à Toulouse",
    date: "24 juillet",
    musicians: ["Luc Garnier", "Élodie", "Orchestre Rouge"],
    image: "https://offloadmedia.feverup.com/bordeauxsecret.com/wp-content/uploads/2022/03/21134539/Initial_Festival_2023-9247_vh9pw9-1024x683.jpg",
    about: `La Fête de l'Harmonie à Toulouse rend hommage aux liens profonds de la ville avec la musique orchestrale et l'harmonie vocale. Les visiteurs profitent de concerts en plein air, de chorales et de prestations instrumentales dans une ambiance unique et positive au sein des places anciennes de la ville.`,
    music: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3"
  },
  avignon: {
    name: "Festival d'Avignon",
    date: "25 juillet",
    musicians: ["Sophie Dubois", "Julien Lefevre", "Les Harmonies"],
    image: "https://www.europavox.com/wp-content/uploads/2022/12/EVX-Clermont-2023-c-YannCabello.jpg",
    about: `Le Festival d'Avignon est réputé pour son mélange de théâtre, de musique et d'art au centre historique de la ville. Les musiciens se produisent aux côtés d'acteurs et de danseurs, faisant de chaque soirée une célébration de la créativité et du talent multidisciplinaire, portée par l'ambiance médiévale d'Avignon.`,
    music: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
  },
  cannes: {
    name: "Festival du film de Cannes",
    date: "26 juillet",
    musicians: ["DJ Lumière", "Camille Moreau", "The Sound Trio"],
    image: "https://www.palaisdesfestivals.com/app/uploads/cannes-palais/2023/07/thumbs/Plages-electro-Cannes-2022-c-SEMEC-Gilles-Traverso-640x360.jpg",
    about: `Cannes accueille l'un des festivals de cinéma les plus prestigieux au monde, mais son gala musical de juillet est aussi très attendu. Il rassemble des DJ célèbres et des groupes pour des concerts inoubliables en bord de mer, alliant l'énergie du cinéma et celle de la musique live dans une célébration d'excellence artistique.`,
    music: "https://www.bensound.com/bensound-music/bensound-funkyelement.mp3"
  },
  menton: {
    name: "Gala musical de Menton",
    date: "27 juillet",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtNULkt0ucF9bE3MBPmW-JsHC_G1p9FhD2Q&s",
    about: `Le Gala musical de Menton offre une atmosphère élégante sur la Côte d'Azur, réputée pour ses styles musicaux mêlant musique classique et électronique. Les décors pittoresques et les artistes de haut niveau attirent des passionnés de musique de toute la France et d'Europe.`,
    music: "https://www.bensound.com/bensound-music/bensound-moose.mp3"
  },
  nice: {
    name: "Festival de Jazz de Nice",
    date: "28 juillet",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Iu-lGzG69gEGze8FQrwz8R9Qqhxw48wu0Q&s",
    about: `Le Festival de Jazz de Nice est l'un des plus anciens festivals de jazz d'Europe, attirant des légendes et de nouveaux talents. Il anime les places et jardins de la ville avec des improvisations libres et une passion pour l'expérimentation musicale.`,
    music: "https://www.bensound.com/bensound-music/bensound-love.mp3"
  },
  bordeaux: {
    name: "Festival de musique de Bordeaux",
    date: "29 juillet",
    musicians: ["DJ Bleu", "Léa Rousseau", "The Sound Trio"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFjatNCdvmg9UayRcMmcwNRKqPYpcoKajJw&s",
    about: `Le festival d'été de Bordeaux propose une grande variété de genres musicaux, du pop au classique, dans le cadre de l'architecture magnifique de la ville. L'accent mis sur l'innovation et la collaboration fait de chaque nuit une vitrine de talent créatif et d'exploration musicale.`,
    music: "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3"
  },
  strasbourg: {
    name: "Rythmes d'été de Strasbourg",
    date: "30 juillet",
    musicians: ["Camille Moreau", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEnwvwH7WdNL3DM_H6jQus2ECnZQCmrmm2Q&s",
    about: `Célébrant le carrefour des traditions musicales françaises et allemandes, le festival d'été de Strasbourg met en avant la diversité rythmique et des artistes internationaux. Son ambiance évoque à la fois la fête populaire et l'expression artistique réfléchie.`,
    music: "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3"
  },
  nantes: {
    name: "Fête musicale de Nantes",
    date: "31 juillet",
    musicians: ["Jean Dupont", "Luc Garnier", "Orchestre Rouge"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s",
    about: `Nantes se transforme en scène pour les musiciens émergents et établis pendant la fête musicale, favorisant la musique expérimentale, les spectacles de rue et les projets collaboratifs dans un environnement urbain vibrant.`,
    music: "https://www.bensound.com/bensound-music/bensound-relaxing.mp3"
  },
  montpellier: {
    name: "Festival de musique de Montpellier",
    date: "1 août",
    musicians: ["DJ Bleu", "Sophie Dubois", "The Sound Trio"],
    image: "https://uploads.lebonbon.fr/source/2025/june/2079335/f-te-de-la-musique-de-montpellier-1-1-_1_2000.jpg",
    about: `Le festival d'été de Montpellier est connu pour ses concerts dynamiques dans des lieux historiques, mêlant des sons contemporains aux traditions musicales locales. C'est une destination idéale pour découvrir de nouvelles voix et des ensembles innovants.`,
    music: "https://www.bensound.com/bensound-music/bensound-retrosoul.mp3"
  },
  rennes: {
    name: "Fête des rythmes de Rennes",
    date: "2 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28UOMuzhfQxGtlmhRbCCt-mCAs_bS0Zgb2w&s",
    about: `La Fête des rythmes de Rennes rassemble des performances énergétiques et des projets musicaux créatifs, promouvant la réputation de la ville comme pôle de la musique de pointe et de l'esprit de jeunesse.`,
    music: "https://www.bensound.com/bensound-music/bensound-allthat.mp3"
  },
  lille: {
    name: "Gala musical de Lille",
    date: "3 août",
    musicians: ["Camille Moreau", "Léa Rousseau", "Orchestre Rouge"],
    image: "https://cdn.evbstatic.com/s3-build/fe/build/images/8906a0b4fbb9e815319ce59db23cae02-djdance.webp",
    about: `Le gala de Lille met l'accent sur la musique orchestrale et les styles de fusion contemporaine, transformant ses grandes places et ses salles de concert en lieux de performances mémorables et de rencontres conviviales pour les communautés locales.`,
    music: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3"
  },
  grenoble: {
    name: "Sonorités d'été de Grenoble",
    date: "4 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://www.europavox.com/wp-content/uploads/2022/12/EVX-Clermont-2023-c-YannCabello.jpg",
    about: `Le festival de Grenoble propose un mélange de musique folk, électronique et du monde, avec des concerts en plein air au cœur des paysages alpins de la ville—une parfaite harmonie entre nature et dynamisme culturel.`,
    music: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
  },
  dijon: {
    name: "Fête musicale de Dijon",
    date: "5 août",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
    image: "https://jaimedijon.com/wp-content/uploads/2024/12/golden-coast-annonce-2025-1024x576.jpg",
    about: `La fête musicale d'été de Dijon célèbre la musique française traditionnelle et moderne, en mettant l'accent sur l'esprit communautaire, les ateliers créatifs et des spectacles en direct variés.`,
    music: "https://www.bensound.com/bensound-music/bensound-jazzcomedy.mp3"
  },
  angers: {
    name: "Festival de l'harmonie à Angers",
    date: "6 août",
    musicians: ["Jean Dupont", "Luc Garnier", "Orchestre Rouge"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s",
    about: `Angers célèbre l'harmonie et l'art collectif lors de son festival d'été, proposant des chœurs, des orchestres et des collaborations contemporaines dans des lieux historiques à travers la ville.`,
    music: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"
  },
  nimes: {
    name: "Nuits musicales de Nîmes",
    date: "7 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s",
    about: `Les nuits musicales de Nîmes réunissent des artistes de flamenco, de jazz et de pop sous les étoiles, dans des arènes romaines qui créent une expérience culturelle unique et magique.`,
    music: "https://www.bensound.com/bensound-music/bensound-clearday.mp3"
  },
  saintetienne: {
    name: "Fête d'été de Saint-Étienne",
    date: "8 août",
    musicians: ["DJ Bleu", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5Rb4w6TbHv-8LW7_dBJmjnkZ1qVNRpRIaA&s",
    about: `La fête d'été de Saint-Étienne est un lieu de rencontre pour les artistes expérimentaux et les publics avides de sons nouveaux, avec des ateliers interactifs et des collaborations artistiques.`,
    music: "https://www.bensound.com/bensound-music/bensound-summer.mp3"
  },
  tours: {
    name: "Gala musical de Tours",
    date: "9 août",
    musicians: ["Camille Moreau", "Léa Rousseau", "Orchestre Rouge"],
    image: "https://in.eventfaqs.com/wp-content/uploads/sites/2/2025/01/aditya-chinchure-zhqczjr9fho-unsplash-1-1024x7681-1.jpg",
    about: `Le gala musical de Tours réunit des ensembles classiques, des groupes contemporains et des collectifs de danse, transformant la ville en un lieu animé où la tradition et l'innovation se rencontrent.`,
    music: "https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3"
  },
  clermontferrand: {
    name: "Fête des rythmes de Clermont-Ferrand",
    date: "10 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://www.europavox.com/wp-content/uploads/2022/12/EVX-Clermont-2023-c-YannCabello.jpg",
    about: `Clermont-Ferrand célèbre la musique avec des concerts en plein air et une programmation centrée sur le rythme, mettant en valeur la diversité dynamique et l'esprit créatif de ses artistes locaux.`,
    music: "https://www.bensound.com/bensound-music/bensound-thelounge.mp3"
  },
  amiens: {
    name: "Festival de musique d'Amiens",
    date: "11 août",
    musicians: ["Jean Dupont", "Léa Rousseau", "Orchestre Rouge"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s",
    about: `Le festival d'Amiens propose des spectacles allant de la musique de chambre à la pop, dans de beaux parcs et espaces culturels. Il est apprécié pour son ambiance familiale et son ouverture artistique.`,
    music: "https://www.bensound.com/bensound-music/bensound-funkyretro.mp3"
  },
  besancon: {
    name: "Rythmes d'été de Besançon",
    date: "12 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28UOMuzhfQxGtlmhRbCCt-mCAs_bS0Zgb2w&s",
    about: `Le festival de Besançon met en avant des genres musicaux éclectiques et des partenariats créatifs, avec des ateliers pour tous les âges et des concerts nocturnes dans des lieux historiques.`,
    music: "https://www.bensound.com/bensound-music/bensound-brazilianfields.mp3"
  },
  metz: {
    name: "Fête musicale de Metz",
    date: "13 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://explore-grandest.com/app/uploads/2021/06/festival-decibulles-2017-laurent-khram-longvixay-1440x800.jpg",
    about: `Le festival musical de Metz réunit des artistes classiques et électroniques, avec un accent sur l'innovation et des célébrations festives dans le centre-ville.`,
    music: "https://www.bensound.com/bensound-music/bensound-inspire.mp3"
  },
  perpignan: {
    name: "Gala musical de Perpignan",
    date: "14 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3l4oVki3NXYgcRLQheNIwODzwfBeeH_0Bg&s",
    about: `Le gala de Perpignan met en avant des influences méditerranéennes et des artistes français modernes, favorisant les échanges culturels et des spectacles énergiques sous le soleil du Midi.`,
    music: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
  },
  orleans: {
    name: "Sonorités d'été d'Orléans",
    date: "15 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
    image: "https://static01.nyt.com/images/2019/04/24/arts/24jazzfest-walkup10/merlin_153884196_6ac2e392-a7a1-4e85-be3c-3ad2940fa0fc-superJumbo.jpg",
    about: `Orléans célèbre l'été avec un festival de sonorités, allant des spectacles acoustiques aux ensembles expérimentaux. Les concerts investissent la rue et accueillent un public de tous âges.`,
    music: "https://www.bensound.com/bensound-music/bensound-romantic.mp3"
  },
  caen: {
    name: "Festival de musique de Caen",
    date: "16 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://www.choosenormandy.com/app/uploads/iris-images/1062/Festival-Beauregard-caen-calvados-530x0.jpg",
    about: `Le festival de Caen propose des concerts en plein air, des spectacles intimistes et des ateliers interactifs, mettant en avant la vitalité de la scène musicale normande.`,
    music: "https://www.bensound.com/bensound-music/bensound-scifi.mp3"
  },
  nancy: {
    name: "Fête des rythmes de Nancy",
    date: "17 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://woody.cloudly.space/app/uploads/nancy/2023/05/thumbs/nancyphonies-2023-bandeau-640x360.jpg",
    about: `Le festival de Nancy rassemble des traditions musicales diverses dans une ambiance festive et conviviale, avec des projets collaboratifs et de grands rassemblements publics.`,
    music: "https://www.bensound.com/bensound-music/bensound-littleidea.mp3"
  },
  rouen: {
    name: "Gala musical de Rouen",
    date: "18 août",
    musicians: ["DJ Lumière", "Marie Fontaine", "Les Rythmes"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGskGnVK5ORtKeGVRHiG1LY1r-DjbNiMsrw&s",
    about: `Le gala de Rouen favorise les rencontres créatives entre performers classiques et modernes, soutenant la participation communautaire et les échanges culturels lors de chaque concert.`,
    music: "https://www.bensound.com/bensound-music/bensound-pop.mp3"
  },
  arles: {
    name: "Rythmes d'été d'Arles",
    date: "19 août",
    musicians: ["DJ Lumière", "Sophie Dubois", "The Sound Trio"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhbJiwIR8NnH4QeNeyryhY2xyAXoadGQPpA&s",
    about: `Arles s'anime au rythme de la musique et de la danse estivales, mettant en avant les talents régionaux et invitant les visiteurs à découvrir le patrimoine artistique de la ville.`,
    music: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
  }
};

export default function CityDetails() {
  const { id } = useParams();
  const city = cityFestivals[id];

  if (!city) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "radial-gradient(ellipse at top left, #E96443 0%, #904E95 100%)",
        }}
      >
        <div style={{
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.30)",
          padding: "60px",
          textAlign: "center",
          color: "#fff",
          backdropFilter: "blur(8px)",
        }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "40px", fontWeight: 700, fontFamily: "Montserrat, sans-serif" }}>
            Ville introuvable
          </h2>
          <Link to="/cities">
            <button
              style={{
                background: "linear-gradient(90deg, #F7971E 0%, #FFD200 100%)",
                color: "#000",
                fontWeight: 600,
                border: "none",
                borderRadius: "12px",
                padding: "18px 36px",
                fontSize: "1.2rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                cursor: "pointer",
                transition: "box-shadow 0.3s",
              }}
            >
              Retour aux villes
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #43C6AC 25%, #191654 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Montserrat, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated circles for background decoration */}
      <div style={{
        position: "absolute", top: "10%", left: "5%", width: 140, height: 140,
        background: "rgba(233,100,67,0.3)", borderRadius: "50%", filter: "blur(16px)", zIndex: 1 
      }} />
      <div style={{
        position: "absolute", bottom: "6%", right: "8%", width: 195, height: 195,
        background: "rgba(67,198,172,0.23)", borderRadius: "50%", filter: "blur(26px)", zIndex: 1 
      }} />
      <div
        style={{
          zIndex: 10,
          width: "calc(100vw - 40px)",
          maxWidth: "650px",
          background: "rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.35)",
          backdropFilter: "blur(18px)",
          borderRadius: "35px",
          padding: "60px 32px",
          margin: "8vh auto",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      >
        {/* City Image with extra style */}
        <img
          src={city.image}
          alt={city.name}
          style={{
            width: "100%",
            maxHeight: 320,
            objectFit: "cover",
            borderRadius: "22px",
            boxShadow: "0 2px 32px 0 rgba(30,18,69,0.17)",
            marginTop: "-55px",
            marginBottom: "24px",
            transition: "transform 0.4s",
            transform: "scale(1)",
          }}
        />
        {city.music && (
          <audio
            controls
            src={city.music}
            style={{
              width: "90%",
              margin: "20px auto 0 auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(31,38,135,0.14)"
            }}
          >
            Votre navigateur ne supporte pas l'audio.
          </audio>
        )}

        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 700,
            color: "#191654",
            marginBottom: "22px",
            textShadow: "2px 2px 26px #fff7"
          }}
        >🎵 {city.name}</h2>
        <p
          style={{
            fontSize: "1.7rem",
            fontWeight: 600,
            background: "linear-gradient(90deg, #F7971E 0%, #FFD200 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "18px 0 28px 0",
            letterSpacing: "0.04em"
          }}
        >Date : {city.date}</p>
        <h3
          style={{
            fontSize: "2rem",
            color: "#43c6ac",
            fontWeight: 700,
            marginBottom: "12px",
            letterSpacing: "0.03em"
          }}
        >
          Musiciens à l'affiche :
        </h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "16px",
            fontSize: "1.45rem",
            color: "#191654",
            fontWeight: 500,
            textAlign: "center",
            letterSpacing: "0.03em"
          }}
        >
          {city.musicians.map((m) => (
            <li
              key={m}
              style={{
                background: "rgba(67,198,172,0.09)",
                borderRadius: "10px",
                margin: "8px 0",
                padding: "6px 0",
                width: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                transition: "background 0.3s",
              }}
            >
              {m}
            </li>
          ))}
        </ul>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#191654",
            background: "rgba(255,255,255,0.13)",
            padding: "18px",
            borderRadius: "14px",
            boxShadow: "0 2px 14px rgba(31,38,135,0.12)",
            margin: "18px 0 16px 0",
          }}
        >
          {city.about}
        </p>
        <Link to="/cities">
          <button
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              marginTop: "30px",
              color: "#fff",
              background: "linear-gradient(90deg,#904E95 20%,#E96443 80%)",
              border: "none",
              borderRadius: "17px",
              padding: "14px 42px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              cursor: "pointer",
              letterSpacing: "0.1em",
              transition: "background 0.25s",
            }}
          >
            ← Retour aux villes
          </button>
        </Link>
      </div>
      <Confetti width={window.innerWidth} height={window.innerHeight} colors={["#cf3487", "#ffff79"]} />
    </div>
  );
}
