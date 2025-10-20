import { useParams, Link } from "react-router-dom";

const musicians = {
  1: { name: "Jean Dupont", bio: "A French jazz guitarist with 15 years of experience.", img: "https://i.ebayimg.com/images/g/DqYAAMXQNo5TZPmu/s-l1600.jpg" },
  2: { name: "Marie Leclerc", bio: "An amazing vocalist known for her soulful performances.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOAs3YDJ2D-ezommE2yHTAGuKHmWSKUKXw&s" },
  3: { name: "Pierre Martin", bio: "A talented violinist blending classical and modern styles.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJwb5LLZET7w2hvhmsvyiiIUpWo4XytV9Dw&s" },
  4: { name: "Sophie Dubois", bio: "A dynamic cellist with a passion for contemporary music.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSEnJk0NHtbsXNiJKCSrd8kEyWmtfmDAgFQ&s" },
  5: { name: "Luc Bernard", bio: "A versatile pianist known for his improvisational skills.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J4X-Cm9TPfagU34UQrVpiAa5J6eumpbC5Q&s" },
  6: { name: "Claire Fontaine", bio: "A rising star in the world of classical music.", img: "https://arts.aventuramall.com/_next/image?url=https%3A%2F%2Farts-walk.b-cdn.net%2FClaire_Fontaine_bios_f1aa4f4cd5.png&w=3840&q=75" },
  7: { name: "Antoine Moreau", bio: "A skilled drummer with a knack for rhythm and beats.", img: "https://media.licdn.com/dms/image/v2/D4E03AQGomZko3yjvGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693471919809?e=2147483647&v=beta&t=kEaItcG7eqkHx7VOUDeXy0RGTabtlFOIdmBSoMp_g8U" },
  8: { name: "Julien Lefevre", bio: "An innovative saxophonist pushing the boundaries of jazz.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde_NUSe-kLDHRFg_zExtKSFH6wkYCQC4_IA&s" },
  9: { name: "Emma Girard", bio: "A captivating flutist with a unique sound.", img: "https://imgs.classicfm.com/images/85786?crop=16_9&width=660&relax=1&format=webp&signature=TOGyI2wibrfgCdF1jyJPh0Q5-Eg=" },
  10: { name: "Lucas Rousseau", bio: "A brilliant trumpeter known for his energetic performances.", img: "https://media.licdn.com/dms/image/v2/C4E03AQGbBJL-LI6M3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548081741079?e=2147483647&v=beta&t=tFidQwNtxcEsPaM6uAmzz9tqM4jK-LW5gMyznR8PgfI" },
  11: { name: "Chloé Mercier", bio: "A soulful singer-songwriter with a powerful voice.", img: "https://media.licdn.com/dms/image/v2/D4E03AQF_27-aBpSRNw/profile-displayphoto-shrink_200_200/B4EZT6DKTIHUAY-/0/1739361921198?e=2147483647&v=beta&t=iY8YqE8lNF_VyxmluqnV9HXpd9lLExsSQ4AL_nZ7p_o" },
  12: { name: "Maxime Dupuis", bio: "A gifted bassist with a deep understanding of groove.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYgSWmkc3ituUkW0y4mt0ElyoruzN6VKu4A&s" },
  13: { name: "Laura Simon", bio: "A talented harpist bringing elegance to every performance.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SyHAbryZY0RuwtuHnrs0YX9_sk4NkFNZ4w&s" },
  14: { name: "Thomas Lambert", bio: "An accomplished guitarist with a passion for rock music.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeIDa83YimwT8R6eFk0prrzcM79M9GU7GDQ&s" },
  15: { name: "Sarah Fontaine", bio: "A charismatic vocalist known for her stage presence.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu3G8bMR2RgfhiGsrXro9no_skD_EBt97RA&s" },
  16: { name: "Nicolas Caron", bio: "A skilled keyboardist with a flair for electronic music.", img: "https://yt3.googleusercontent.com/tOnhQ96FkL-m2EKB2GOgOgBK_GF-t-_3VXVmxuA1GHrGl9cFxx3BGE2PM2XUQPkfa4VfTRWXHZA=s900-c-k-c0x00ffffff-no-rj" },
  17: { name: "Camille Dubois", bio: "A passionate violinist with a love for folk music.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmFkjDjYdXgkPWFZiuceKDPyAO0m-XUCq7w&s" },
  18: { name: "Alexandre Morel", bio: "A dynamic percussionist bringing energy to every show.", img: "https://www.musicbusinessworldwide.com/files/2023/06/fJ8wJXTwPtpd442OhwgHrdxup0iiRQOMnZfPCt39gM-Z-dnbhJmTs-6kvN3aGFvvclUFSRHzi1cyE_KimVtKlqx5v1NKVi87NRFkAl910ZdyGR6ZuFbCAPyGc_SLbxhh50NEjkZl4ScFjjIOww5qagw-e1686751680260.jpeg" },
  19: { name: "Manon Lefebvre", bio: "A rising star in the pop music scene.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEzZ7eqadiS6TWKPncwDa8KJfAl2xR4O4Xg&s" },
  20: { name: "Juliette Roux", bio: "A gifted flutist with a passion for classical and contemporary music.", img: "https://media.licdn.com/dms/image/v2/D4E03AQE0eYJESKO3ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674904157994?e=2147483647&v=beta&t=WIYphOKUvfH-EapLnq9TfLse84wBp_8vNv3sDCjF4xM" },
  21: { name: "Hugo Fontaine", bio: "A talented drummer known for his versatility across genres.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8-uhLBdSfD5BWDdQIE0q4dZrRHEa5-BvQA&s" },
  22: { name: "Léa Moreau", bio: "A captivating vocalist with a unique blend of styles.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM2iC5hj_BW1SS3IX8TZ361uoq6PH3LaA0A&s" },
  23: { name: "Mathieu Garnier", bio: "A skilled guitarist with a passion for blues music.", img: "https://socialsellingforum.com/wp-content/uploads/2022/05/Matthieu-Garnier.jpg" },
  24: { name: "Inès Dupont", bio: "A talented cellist known for her emotive performances.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR57rYmrr4Nh1XeGKrxTgTzFQBKyST19z4Sg&s" },
  25: { name: "Victor Lambert", bio: "A dynamic bassist with a deep groove.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-YiicSDxT2-X1tCbU7sCuKbCOA7yws-KCg&s" },
  26: { name: "Sarah Morel", bio: "A charismatic singer with a powerful voice.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPlyIGWKo8ORlsQfI24AGLQx6KFqk7fx5Vw&s" },
  27: { name: "Clémentine Rousseau", bio: "A gifted violinist with a passion for chamber music.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clementine_of_Belgium.jpg/330px-Clementine_of_Belgium.jpg" },
  28: { name: "Adrien Caron", bio: "A skilled trumpeter known for his vibrant sound.", img: "https://i.ytimg.com/vi/h01oLtSGJQ8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTihKMA8=&rs=AOn4CLAMIQjB0is85bjYudjBmYigttNoyQ" },
  29: { name: "Océane Simon", bio: "A rising star in the world of contemporary music.", img: "https://images.bangpremier.com/articleimage/2025_04_10__bsalscplg_1744281730cropped4645x3019.webp" },
  30: { name: "Bastien Dubois", bio: "A talented guitarist with a passion for rock and blues.", img: "https://upload.wikimedia.org/wikipedia/commons/8/81/%C2%A9Sauve_qui_peut_le_court_m%C3%A9trage%2C_Anthonin_Robineau_-_Bastien_DUBOIS.jpg" },
  31: { name: "Léna Fontaine", bio: "A gifted pianist known for her expressive playing.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToTMzK1YPQxczdCSNaFEB_1KFtnR85XSCCg&s" },
  32: { name: "Gabriel Moreau", bio: "A skilled violinist with a passion for jazz fusion.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZluG7urB_ZGXhTI_WrQy7rq0m97oz9VIcmA&s" },
  33: { name: "Anaïs Lefevre", bio: "A talented vocalist with a unique blend of pop and soul.", img: "https://i1.sndcdn.com/avatars-000603459381-l1cnms-t240x240.jpg" }
};

export default function MusicianDetail() {
  const { id } = useParams();
  const musician = musicians[id];

  if (!musician) return <h2>Musician not found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
      <img 
        src={musician.img} 
        alt={musician.name} 
        style={{ width: "250px", height: "250px", borderRadius: "50%", objectFit: "cover" }}
      />
      <h1 style={{ marginTop: "20px" }}>{musician.name}</h1>
      <p style={{ fontSize: "18px", marginTop: "15px" }}>{musician.bio}</p>

      <Link to="/musicians">
        <button style={{ marginTop: "30px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          ⬅ Back to Musicians
        </button>
      </Link>
    </div>
  );
}
