import React from "react";
import { Link } from "react-router-dom";


const musicians = [
  { id: 1, name: "Jean Dupont", img: "https://www.rollingstone.com/wp-content/uploads/2021/02/DSF5585-1.jpg", bio: "A versatile musician known for his soulful voice." },
  { id: 2, name: "Marie Leclerc", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOAs3YDJ2D-ezommE2yHTAGuKHmWSKUKXw&s", bio: "An accomplished pianist with a passion for classical music." },
  { id: 3, name: "Pierre Martin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJwb5LLZET7w2hvhmsvyiiIUpWo4XytV9Dw&s", bio: "A dynamic guitarist blending rock and jazz influences." },
  { id: 4, name: "Sophie Dubois", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSEnJk0NHtbsXNiJKCSrd8kEyWmtfmDAgFQ&s", bio: "A captivating vocalist with a flair for pop and R&B." },
  { id: 5, name: "Luc Bernard", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J4X-Cm9TPfagU34UQrVpiAa5J6eumpbC5Q&s", bio: "A skilled drummer known for his energetic performances." },
  { id: 6, name: "Claire Fontaine", img: "https://arts.aventuramall.com/_next/image?url=https%3A%2F%2Farts-walk.b-cdn.net%2FClaire_Fontaine_bios_f1aa4f4cd5.png&w=3840&q=75", bio: "A talented violinist with a passion for folk music." },
  { id: 7, name: "Antoine Moreau", img: "https://media.licdn.com/dms/image/v2/D4E03AQGomZko3yjvGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693471919809?e=2147483647&v=beta&t=kEaItcG7eqkHx7VOUDeXy0RGTabtlFOIdmBSoMp_g8U", bio: "A charismatic saxophonist with a love for jazz." },
  { id: 8, name: "Julien Lefevre", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde_NUSe-kLDHRFg_zExtKSFH6wkYCQC4_IA&s", bio: "A bass guitarist who brings groove to every performance." },
  { id: 9, name: "Emma Girard", img: "https://imgs.classicfm.com/images/85786?crop=16_9&width=660&relax=1&format=webp&signature=TOGyI2wibrfgCdF1jyJPh0Q5-Eg=", bio: "A classical singer with a powerful and emotive voice." },
  { id: 10, name: "Lucas Rousseau", img: "https://media.licdn.com/dms/image/v2/C4E03AQGbBJL-LI6M3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548081741079?e=2147483647&v=beta&t=tFidQwNtxcEsPaM6uAmzz9tqM4jK-LW5gMyznR8PgfI", bio: "An innovative electronic music producer and DJ." },
  { id: 11, name: "Chloé Mercier", img: "https://media.licdn.com/dms/image/v2/D4E03AQF_27-aBpSRNw/profile-displayphoto-shrink_200_200/B4EZT6DKTIHUAY-/0/1739361921198?e=2147483647&v=beta&t=iY8YqE8lNF_VyxmluqnV9HXpd9lLExsSQ4AL_nZ7p_o", bio: "A folk singer-songwriter with heartfelt lyrics." },
  { id: 12, name: "Maxime Dupuis", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYgSWmkc3ituUkW0y4mt0ElyoruzN6VKu4A&s", bio: "A versatile trumpeter with a knack for improvisation." },
  { id: 13, name: "Laura Simon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SyHAbryZY0RuwtuHnrs0YX9_sk4NkFNZ4w&s", bio: "A contemporary dancer and choreographer." },
  { id: 14, name: "Thomas Lambert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeIDa83YimwT8R6eFk0prrzcM79M9GU7GDQ&s", bio: "A skilled cellist with a passion for orchestral music." },
  { id: 15, name: "Sarah Fontaine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu3G8bMR2RgfhiGsrXro9no_skD_EBt97RA&s", bio: "A jazz vocalist known for her smooth and sultry style." },
  { id: 16, name: "Nicolas Caron", img: "https://c8.alamy.com/comp/2H4C11E/nicolas-munoz-of-boy-pablo-during-the-outside-lands-music-festival-on-october-31-2021-in-san-francisco-california-photo-by-daniel-desloversipa-usa-2H4C11E.jpg", bio: "A talented bassist with a unique sound." },
  { id: 17, name: "Camille Dubois", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmFkjDjYdXgkPWFZiuceKDPyAO0m-XUCq7w&s", bio: "A classical guitarist with a passion for flamenco." },
  { id: 18, name: "Alexandre Morel", img: "https://www.musicbusinessworldwide.com/files/2023/06/fJ8wJXTwPtpd442OhwgHrdxup0iiRQOMnZfPCt39gM-Z-dnbhJmTs-6kvN3aGFvvclUFSRHzi1cyE_KimVtKlqx5v1NKVi87NRFkAl910ZdyGR6ZuFbCAPyGc_SLbxhh50NEjkZl4ScFjjIOww5qagw-e1686751680260.jpeg", bio: "An avant-garde composer and sound artist." },
  { id: 19, name: "Manon Lefebvre", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEzZ7eqadiS6TWKPncwDa8KJfAl2xR4O4Xg&s", bio: "A pop singer with catchy tunes and vibrant energy." },
  { id: 20, name: "Juliette Roux", img: "https://media.licdn.com/dms/image/v2/D4E03AQE0eYJESKO3ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674904157994?e=2147483647&v=beta&t=WIYphOKUvfH-EapLnq9TfLse84wBp_8vNv3sDCjF4xM", bio: "A soulful R&B singer with a powerful voice." },
  { id: 21, name: "Hugo Fontaine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8-uhLBdSfD5BWDdQIE0q4dZrRHEa5-BvQA&s", bio: "A skilled drummer with a passion for rock music." },
  { id: 22, name: "Léa Moreau", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM2iC5hj_BW1SS3IX8TZ361uoq6PH3LaA0A&s", bio: "A classical pianist known for her expressive performances." },
  { id: 23, name: "Mathieu Garnier", img: "https://socialsellingforum.com/wp-content/uploads/2022/05/Matthieu-Garnier.jpg", bio: "A versatile violinist with a love for contemporary music." },
  { id: 24, name: "Inès Dupont", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR57rYmrr4Nh1XeGKrxTgTzFQBKyST19z4Sg&s", bio: "A pop singer with a vibrant stage presence." },
  { id: 25, name: "Victor Lambert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-YiicSDxT2-X1tCbU7sCuKbCOA7yws-KCg&s", bio: "A talented guitarist blending blues and rock styles." },
  { id: 26, name: "Sarah Morel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPlyIGWKo8ORlsQfI24AGLQx6KFqk7fx5Vw&s", bio: "A jazz singer with a smooth and captivating voice." },
  { id: 27, name: "Clémentine Rousseau", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clementine_of_Belgium.jpg/330px-Clementine_of_Belgium.jpg", bio: "A classical harpist with a delicate touch." },
  { id: 28, name: "Adrien Caron", img: "https://i.ytimg.com/vi/h01oLtSGJQ8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTihKMA8=&rs=AOn4CLAMIQjB0is85bjYudjBmYigttNoyQ", bio: "A skilled trumpeter with a passion for jazz and funk." },
  { id: 29, name: "Océane Simon", img: "https://images.bangpremier.com/articleimage/2025_04_10__bsalscplg_1744281730cropped4645x3019.webp", bio: "A contemporary dancer known for her expressive movements." },
  { id: 30, name: "Bastien Dubois", img: "https://upload.wikimedia.org/wikipedia/commons/8/81/%C2%A9Sauve_qui_peut_le_court_m%C3%A9trage%2C_Anthonin_Robineau_-_Bastien_DUBOIS.jpg", bio: "A versatile bassist with a love for funk and soul." },
  { id: 31, name: "Léna Fontaine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToTMzK1YPQxczdCSNaFEB_1KFtnR85XSCCg&s", bio: "A pop singer with catchy melodies and vibrant energy." },
  { id: 32, name: "Gabriel Moreau", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZluG7urB_ZGXhTI_WrQy7rq0m97oz9VIcmA&s", bio: "A skilled drummer known for his dynamic style." },
  { id: 33, name: "Anaïs Lefevre", img: "https://i1.sndcdn.com/avatars-000603459381-l1cnms-t240x240.jpg", bio: "A talented violinist with a passion for classical and contemporary music." }  
];

export default function Musicians() {
  return (
    <div style={{ textAlign: "center", padding: "40px", color: "white" }}>
      <h1>🎤 Meet Our Musicians</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {musicians.map((musician) => (
          <Link
            key={musician.id}
            to={`/musicians/${musician.id}`}
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "center",
              transition: "transform 0.3s ease",
            }}
          >
            <div
              style={{
                width: "200px",
                padding: "20px",
                borderRadius: "15px",
                background: "rgba(255,255,255,0.1)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "rgba(255,215,0,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              <img
                src={musician.img}
                alt={musician.name}
                genre={musician.genre}

                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "12px",
                  border: "4px solid #FFD700",
                }}
              />
              <h3>{musician.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#FFD700" }}>{musician.genre}</p>
              
              <p style={{ fontSize: "0.9rem" }}>{musician.bio}</p>
              <p style={{ color: "#FFD700", textDecoration: "underline" }}>
                View Details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
