import React from "react";
import { useParams, Link } from "react-router-dom";
import "./musicians.jsx";

const musicUrl = "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3";
// musicians.js
const musicians = [
  {
    id: 1,
    name: "Jean Dupont",
    img: "https://www.rollingstone.com/wp-content/uploads/2021/02/DSF5585-1.jpg",
    bio: "A versatile musician known for his soulful voice.",
    genre: "Soul, Jazz",
    achievements: ["Winner of Paris Music Awards 2023", "Album: 'Lumière Intérieure' went platinum"],
    instruments: ["Vocals", "Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
  },
  {
    id: 2,
    name: "Marie Leclerc",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOAs3YDJ2D-ezommE2yHTAGuKHmWSKUKXw&s",
    bio: "An accomplished pianist with a passion for classical music.",
    genre: "Classical",
    achievements: ["Performed with Orchestre de Paris", "Released 5 solo albums"],
    instruments: ["Piano"],
    clip: "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3"
  },
  {
    id: 3,
    name: "Pierre Martin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJwb5LLZET7w2hvhmsvyiiIUpWo4XytV9Dw&s",
    bio: "A dynamic guitarist blending rock and jazz influences.",
    genre: "Rock, Jazz",
    achievements: ["Leader of Martin Trio", "JazzOn Festival headliner"],
    instruments: ["Guitar"]
  },
  {
    id: 4,
    name: "Sophie Dubois",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSEnJk0NHtbsXNiJKCSrd8kEyWmtfmDAgFQ&s",
    bio: "A captivating vocalist with a flair for pop and R&B.",
    genre: "Pop, R&B",
    achievements: ["Top 10 charts in France", "Collaborated with Luc Bernard"],
    instruments: ["Vocals"]
  },
  {
    id: 5,
    name: "Luc Bernard",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J4X-Cm9TPfagU34UQrVpiAa5J6eumpbC5Q&s",
    bio: "A skilled drummer known for his energetic performances.",
    genre: "Rock, Pop",
    achievements: ["International Drum Festival winner", "Session drummer for major artists"],
    instruments: ["Drums"]
  },
  {
    id: 6,
    name: "Claire Fontaine",
    img: "https://arts.aventuramall.com/_next/image?url=https%3A%2F%2Farts-walk.b-cdn.net%2FClaire_Fontaine_bios_f1aa4f4cd5.png&w=3840&q=75",
    bio: "A talented violinist with a passion for folk music.",
    genre: "Folk",
    achievements: ["Folk Music Award 2022", "Plays with 'Les Cordes Vagabondes'"],
    instruments: ["Violin"]
  },
  {
    id: 7,
    name: "Antoine Moreau",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGomZko3yjvGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693471919809?e=2147483647&v=beta&t=kEaItcG7eqkHx7VOUDeXy0RGTabtlFOIdmBSoMp_g8U",
    bio: "A charismatic saxophonist with a love for jazz.",
    genre: "Jazz",
    achievements: ["Montreux Jazz Festival featured artist", "Recorded with international jazz bands"],
    instruments: ["Saxophone"]
  },
  {
    id: 8,
    name: "Julien Lefevre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde_NUSe-kLDHRFg_zExtKSFH6wkYCQC4_IA&s",
    bio: "A bass guitarist who brings groove to every performance.",
    genre: "Funk, Jazz",
    achievements: ["Groove Award winner", "Started Lefevre Funk Collective"],
    instruments: ["Bass Guitar"]
  },
  {
    id: 9,
    name: "Emma Girard",
    img: "https://imgs.classicfm.com/images/85786?crop=16_9&width=660&relax=1&format=webp&signature=TOGyI2wibrfgCdF1jyJPh0Q5-Eg=",
    bio: "A classical singer with a powerful and emotive voice.",
    genre: "Opera, Classical",
    achievements: ["Sang at Opéra Garnier", "Grammy nominee"],
    instruments: ["Vocals"]
  },
  {
    id: 10,
    name: "Lucas Rousseau",
    img: "https://media.licdn.com/dms/image/v2/C4E03AQGbBJL-LI6M3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548081741079?e=2147483647&v=beta&t=tFidQwNtxcEsPaM6uAmzz9tqM4jK-LW5gMyznR8PgfI",
    bio: "An innovative electronic music producer and DJ.",
    genre: "Electronic",
    achievements: ["Remix of the Year 2024", "EDM World Tour"],
    instruments: ["DJ Controller", "Synth"]
  },
  {
    id: 11,
    name: "Chloé Mercier",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQF_27-aBpSRNw/profile-displayphoto-shrink_200_200/B4EZT6DKTIHUAY-/0/1739361921198?e=2147483647&v=beta&t=iY8YqE8lNF_VyxmluqnV9HXpd9lLExsSQ4AL_nZ7p_o",
    bio: "A folk singer-songwriter with heartfelt lyrics.",
    genre: "Folk",
    achievements: ["Festival du Chant award", "Album: 'Les Racines'"],
    instruments: ["Vocals", "Guitar"]
  },
  {
    id: 12,
    name: "Maxime Dupuis",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYgSWmkc3ituUkW0y4mt0ElyoruzN6VKu4A&s",
    bio: "A versatile trumpeter with a knack for improvisation.",
    genre: "Jazz, Funk",
    achievements: ["Jazz Magazine Artist of the Month", "Film soundtracks"],
    instruments: ["Trumpet"]
  },
  {
    id: 13,
    name: "Laura Simon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SyHAbryZY0RuwtuHnrs0YX9_sk4NkFNZ4w&s",
    bio: "A contemporary dancer and choreographer.",
    genre: "Contemporary Dance",
    achievements: ["Choreographer for Ballet National", "Modern dance innovator"],
    instruments: ["Dance"]
  },
  {
    id: 14,
    name: "Thomas Lambert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeIDa83YimwT8R6eFk0prrzcM79M9GU7GDQ&s",
    bio: "A skilled cellist with a passion for orchestral music.",
    genre: "Classical",
    achievements: ["Symphony Orchestra cellist", "Paris Young Talent award"],
    instruments: ["Cello"]
  },
  {
    id: 15,
    name: "Sarah Fontaine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu3G8bMR2RgfhiGsrXro9no_skD_EBt97RA&s",
    bio: "A jazz vocalist known for her smooth and sultry style.",
    genre: "Jazz",
    achievements: ["Jazz Vocal performance of 2023", "Collaborates with Antoine Moreau"],
    instruments: ["Vocals"]
  },
  {
    id: 16,
    name: "Nicolas Caron",
    img: "https://c8.alamy.com/comp/2H4C11E/nicolas-munoz-of-boy-pablo-during-the-outside-lands-music-festival-on-october-31-2021-in-san-francisco-california-photo-by-daniel-desloversipa-usa-2H4C11E.jpg",
    bio: "A talented bassist with a unique sound.",
    genre: "Indie, Rock",
    achievements: ["Played Outside Lands SF", "EP: 'Groove Nouveau'"],
    instruments: ["Bass Guitar"]
  },
  {
    id: 17,
    name: "Camille Dubois",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmFkjDjYdXgkPWFZiuceKDPyAO0m-XUCq7w&s",
    bio: "A classical guitarist with a passion for flamenco.",
    genre: "Classical, Flamenco",
    achievements: ["Flamenco Festival Spain", "Concours de Guitare winner"],
    instruments: ["Guitar"]
  },
  {
    id: 18,
    name: "Alexandre Morel",
    img: "https://www.musicbusinessworldwide.com/files/2023/06/fJ8wJXTwPtpd442OhwgHrdxup0iiRQOMnZfPCt39gM-Z-dnbhJmTs-6kvN3aGFvvclUFSRHzi1cyE_KimVtKlqx5v1NKVi87NRFkAl910ZdyGR6ZuFbCAPyGc_SLbxhh50NEjkZl4ScFjjIOww5qagw-e1686751680260.jpeg",
    bio: "An avant-garde composer and sound artist.",
    genre: "Electronic, Avant-garde",
    achievements: ["Festival Sonore featured composer", "Film scores"],
    instruments: ["Synth", "Electronics"]
  },
  {
    id: 19,
    name: "Manon Lefebvre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEzZ7eqadiS6TWKPncwDa8KJfAl2xR4O4Xg&s",
    bio: "A pop singer with catchy tunes and vibrant energy.",
    genre: "Pop",
    achievements: ["Paris Pop Awards", "Single: 'Danse ce soir!'"],
    instruments: ["Vocals"]
  },
  {
    id: 20,
    name: "Juliette Roux",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQE0eYJESKO3ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674904157994?e=2147483647&v=beta&t=WIYphOKUvfH-EapLnq9TfLse84wBp_8vNv3sDCjF4xM",
    bio: "A soulful R&B singer with a powerful voice.",
    genre: "R&B, Soul",
    achievements: ["Soul Voice award 2024", "Collab with Jean Dupont"],
    instruments: ["Vocals"]
  },
  {
    id: 21,
    name: "Hugo Fontaine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8-uhLBdSfD5BWDdQIE0q4dZrRHEa5-BvQA&s",
    bio: "A skilled drummer with a passion for rock music.",
    genre: "Rock",
    achievements: ["Drummer of the year 2022", "Plays in 'The Fontaine Project'"],
    instruments: ["Drums"]
  },
  {
    id: 22,
    name: "Léa Moreau",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM2iC5hj_BW1SS3IX8TZ361uoq6PH3LaA0A&s",
    bio: "A classical pianist known for her expressive performances.",
    genre: "Classical",
    achievements: ["Young Pianist Prize", "Concerts throughout Europe"],
    instruments: ["Piano"]
  },
  {
    id: 23,
    name: "Mathieu Garnier",
    img: "https://socialsellingforum.com/wp-content/uploads/2022/05/Matthieu-Garnier.jpg",
    bio: "A versatile violinist with a love for contemporary music.",
    genre: "Classical, Contemporary",
    achievements: ["Violin Concerto winner", "Plays with Paris Contemporary Ensemble"],
    instruments: ["Violin"]
  },
  {
    id: 24,
    name: "Inès Dupont",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR57rYmrr4Nh1XeGKrxTgTzFQBKyST19z4Sg&s",
    bio: "A pop singer with a vibrant stage presence.",
    genre: "Pop",
    achievements: ["Energetic Stage Award", "Debut Album: 'En Couleurs'"],
    instruments: ["Vocals"]
  },
  {
    id: 25,
    name: "Victor Lambert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-YiicSDxT2-X1tCbU7sCuKbCOA7yws-KCg&s",
    bio: "A talented guitarist blending blues and rock styles.",
    genre: "Blues, Rock",
    achievements: ["Blues Jam finalist", "Guitarist for 'Lambert Blues Band'"],
    instruments: ["Guitar"]
  },
  {
    id: 26,
    name: "Sarah Morel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPlyIGWKo8ORlsQfI24AGLQx6KFqk7fx5Vw&s",
    bio: "A jazz singer with a smooth and captivating voice.",
    genre: "Jazz",
    achievements: ["Jazz Award winner", "Tours across France"],
    instruments: ["Vocals"]
  },
  {
    id: 27,
    name: "Clémentine Rousseau",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clementine_of_Belgium.jpg/330px-Clementine_of_Belgium.jpg",
    bio: "A classical harpist with a delicate touch.",
    genre: "Classical",
    achievements: ["European Harp Competition", "Solo in National Orchestra"],
    instruments: ["Harp"]
  },
  {
    id: 28,
    name: "Adrien Caron",
    img: "https://i.ytimg.com/vi/h01oLtSGJQ8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTihKMA8=&rs=AOn4CLAMIQjB0is85bjYudjBmYigttNoyQ",
    bio: "A skilled trumpeter with a passion for jazz and funk.",
    genre: "Jazz, Funk",
    achievements: ["Jazz Trumpet prize", "Funky Brass Band"],
    instruments: ["Trumpet"]
  },
  {
    id: 29,
    name: "Océane Simon",
    img: "https://images.bangpremier.com/articleimage/2025_04_10__bsalscplg_1744281730cropped4645x3019.webp",
    bio: "A contemporary dancer known for her expressive movements.",
    genre: "Contemporary Dance",
    achievements: ["Dance Movement Award", "Original choreographies"],
    instruments: ["Dance"]
  },
  {
    id: 30,
    name: "Bastien Dubois",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/81/%C2%A9Sauve_qui_peut_le_court_m%C3%A9trage%2C_Anthonin_Robineau_-_Bastien_DUBOIS.jpg",
    bio: "A versatile bassist with a love for funk and soul.",
    genre: "Funk, Soul",
    achievements: ["Funk Bassist award", "Plays with Bastien Dubois Band"],
    instruments: ["Bass Guitar"]
  },
  {
    id: 31,
    name: "Léna Fontaine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToTMzK1YPQxczdCSNaFEB_1KFtnR85XSCCg&s",
    bio: "A pop singer with catchy melodies and vibrant energy.",
    genre: "Pop",
    achievements: ["Catchy Tune award", "Tours in France"],
    instruments: ["Vocals"]
  },
  {
    id: 32,
    name: "Gabriel Moreau",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZluG7urB_ZGXhTI_WrQy7rq0m97oz9VIcmA&s",
    bio: "A skilled drummer known for his dynamic style.",
    genre: "Rock, Jazz",
    achievements: ["Dynamic Performer prize", "Drummer for various bands"],
    instruments: ["Drums"]
  },
  {
    id: 33,
    name: "Anaïs Lefevre",
    img: "https://i1.sndcdn.com/avatars-000603459381-l1cnms-t240x240.jpg",
    bio: "A talented violinist with a passion for classical and contemporary music.",
    genre: "Classical, Contemporary",
    achievements: ["Violin star at festivals", "Classical music educator"],
    instruments: ["Violin"]
  }
];


export default function MusicianDetails() {
  const { id } = useParams();
  const musician = musicians.find((m) => m.id === parseInt(id));

  if (!musician) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Musician not found</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <img
        src={musician.img}
        alt={musician.name}
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "6px solid #FFD700",
          marginBottom: "20px",
        }}
      />
      <h1>{musician.name}</h1>
      <p style={{ fontSize: "1.1rem", margin: "20px auto", maxWidth: "600px" }}>
        {musician.bio}
      </p>
      <Link
        to="/musicians"
        style={{
          color: "#FFD700",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        ← Back to Musicians
      </Link>
    </div>
  );
}
