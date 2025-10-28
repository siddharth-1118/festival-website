import { Link } from "react-router-dom";

const musicians = [
  { id: 1, name: "Jean Dupont", img: "https://www.rollingstone.com/wp-content/uploads/2021/02/DSF5585-1.jpg" },
  { id: 2, name: "Marie Leclerc", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOAs3YDJ2D-ezommE2yHTAGuKHmWSKUKXw&s" },
  { id: 3, name: "Pierre Martin", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJwb5LLZET7w2hvhmsvyiiIUpWo4XytV9Dw&s" },
  { id: 4, name: "Sophie Dubois", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSEnJk0NHtbsXNiJKCSrd8kEyWmtfmDAgFQ&s" },
  { id: 5, name: "Luc Bernard", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J4X-Cm9TPfagU34UQrVpiAa5J6eumpbC5Q&s" },
  { id: 6, name: "Claire Fontaine", img: "https://arts.aventuramall.com/_next/image?url=https%3A%2F%2Farts-walk.b-cdn.net%2FClaire_Fontaine_bios_f1aa4f4cd5.png&w=3840&q=75" },
  { id: 7, name: "Antoine Moreau", img: "https://media.licdn.com/dms/image/v2/D4E03AQGomZko3yjvGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693471919809?e=2147483647&v=beta&t=kEaItcG7eqkHx7VOUDeXy0RGTabtlFOIdmBSoMp_g8U" },
  { id: 8, name: "Julien Lefevre", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde_NUSe-kLDHRFg_zExtKSFH6wkYCQC4_IA&s" },
  { id: 9, name: "Emma Girard", img: "https://imgs.classicfm.com/images/85786?crop=16_9&width=660&relax=1&format=webp&signature=TOGyI2wibrfgCdF1jyJPh0Q5-Eg=" },
  { id: 10, name: "Lucas Rousseau", img: "https://media.licdn.com/dms/image/v2/C4E03AQGbBJL-LI6M3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548081741079?e=2147483647&v=beta&t=tFidQwNtxcEsPaM6uAmzz9tqM4jK-LW5gMyznR8PgfI" },
  { id: 11, name: "Chloé Mercier", img: "https://media.licdn.com/dms/image/v2/D4E03AQF_27-aBpSRNw/profile-displayphoto-shrink_200_200/B4EZT6DKTIHUAY-/0/1739361921198?e=2147483647&v=beta&t=iY8YqE8lNF_VyxmluqnV9HXpd9lLExsSQ4AL_nZ7p_o" },
  { id: 12, name: "Maxime Dupuis", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYgSWmkc3ituUkW0y4mt0ElyoruzN6VKu4A&s" },
  { id: 13, name: "Laura Simon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SyHAbryZY0RuwtuHnrs0YX9_sk4NkFNZ4w&s" },
  { id: 14, name: "Thomas Lambert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeIDa83YimwT8R6eFk0prrzcM79M9GU7GDQ&s" },
  { id: 15, name: "Sarah Fontaine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu3G8bMR2RgfhiGsrXro9no_skD_EBt97RA&s" },
  { id: 16, name: "Nicolas Caron", img: "https://c8.alamy.com/comp/2H4C11E/nicolas-munoz-of-boy-pablo-during-the-outside-lands-music-festival-on-october-31-2021-in-san-francisco-california-photo-by-daniel-desloversipa-usa-2H4C11E.jpg" },
  { id: 17, name: "Camille Dubois", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmFkjDjYdXgkPWFZiuceKDPyAO0m-XUCq7w&s" },
  { id: 18, name: "Alexandre Morel", img: "https://www.musicbusinessworldwide.com/files/2023/06/fJ8wJXTwPtpd442OhwgHrdxup0iiRQOMnZfPCt39gM-Z-dnbhJmTs-6kvN3aGFvvclUFSRHzi1cyE_KimVtKlqx5v1NKVi87NRFkAl910ZdyGR6ZuFbCAPyGc_SLbxhh50NEjkZl4ScFjjIOww5qagw-e1686751680260.jpeg" },
  { id: 19, name: "Manon Lefebvre", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEzZ7eqadiS6TWKPncwDa8KJfAl2xR4O4Xg&s" },
  { id: 20, name: "Juliette Roux", img: "https://media.licdn.com/dms/image/v2/D4E03AQE0eYJESKO3ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674904157994?e=2147483647&v=beta&t=WIYphOKUvfH-EapLnq9TfLse84wBp_8vNv3sDCjF4xM" },
  { id: 21, name: "Hugo Fontaine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8-uhLBdSfD5BWDdQIE0q4dZrRHEa5-BvQA&s" },
  { id: 22, name: "Léa Moreau", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM2iC5hj_BW1SS3IX8TZ361uoq6PH3LaA0A&s" },
  { id: 23, name: "Mathieu Garnier", img: "https://socialsellingforum.com/wp-content/uploads/2022/05/Matthieu-Garnier.jpg" },
  { id: 24, name: "Inès Dupont", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR57rYmrr4Nh1XeGKrxTgTzFQBKyST19z4Sg&s" },
  { id: 25, name: "Victor Lambert", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-YiicSDxT2-X1tCbU7sCuKbCOA7yws-KCg&s" },
  { id: 26, name: "Sarah Morel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPlyIGWKo8ORlsQfI24AGLQx6KFqk7fx5Vw&s" },
  { id: 27, name: "Clémentine Rousseau", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clementine_of_Belgium.jpg/330px-Clementine_of_Belgium.jpg" },
  { id: 28, name: "Adrien Caron", img: "https://i.ytimg.com/vi/h01oLtSGJQ8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTihKMA8=&rs=AOn4CLAMIQjB0is85bjYudjBmYigttNoyQ" },
  { id: 29, name: "Océane Simon", img: "https://images.bangpremier.com/articleimage/2025_04_10__bsalscplg_1744281730cropped4645x3019.webp" },
  { id: 30, name: "Bastien Dubois", img: "https://upload.wikimedia.org/wikipedia/commons/8/81/%C2%A9Sauve_qui_peut_le_court_m%C3%A9trage%2C_Anthonin_Robineau_-_Bastien_DUBOIS.jpg" },
  { id: 31, name: "Léna Fontaine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToTMzK1YPQxczdCSNaFEB_1KFtnR85XSCCg&s" },
  { id: 32, name: "Gabriel Moreau", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZluG7urB_ZGXhTI_WrQy7rq0m97oz9VIcmA&s" },
  { id: 33, name: "Anaïs Lefevre", img: "https://i1.sndcdn.com/avatars-000603459381-l1cnms-t240x240.jpg" }
];

export default function Musicians() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🎤 Découvrez nos musiciens</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {musicians.map((musician) => (
          <Link key={musician.id} to={`/musicians/${musician.id}`} style={{ textDecoration: "none" }}>
            <div>
              <img 
                src={musician.img} 
                alt={musician.name} 
                style={{
                  width: "200px", 
                  height: "200px", 
                  borderRadius: "50%", 
                  objectFit: "cover", 
                  cursor: "pointer"
                }} 
              />
              <p style={{ color: "white", marginTop: "10px" }}>{musician.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
