import React from "react";
import { useParams, Link } from "react-router-dom";
import "./musicians.jsx";
import "./about.jsx";
// About.jsx
const musicUrl = "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3";

// Musicians array (all 33 entries)
const musicians = [
  {
    id: 1,
    name: "Jean Dupont",
    img: "https://www.rollingstone.com/wp-content/uploads/2021/02/DSF5585-1.jpg",
    bio: "A versatile musician known for his soulful voice.",
    genre: "Soul, Jazz",
    achievements: ["Winner of Paris Music Awards 2023", "Album: 'Lumière Intérieure' went platinum"],
    instruments: ["Vocals", "Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    about: "Jean Dupont is a celebrated French musician whose work spans multiple genres. With a rich, soulful voice and masterful guitar skills, he has captivated audiences worldwide. His album 'Lumière Intérieure' showcases his ability to blend traditional jazz elements with contemporary sounds, earning him critical acclaim and commercial success."
  },
  {
    id: 2,
    name: "Marie Leclerc",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwOAs3YDJ2D-ezommE2yHTAGuKHmWSKUKXw&s",
    bio: "An accomplished pianist with a passion for classical music.",
    genre: "Classical",
    achievements: ["Performed with Orchestre de Paris", "Released 5 solo albums"],
    instruments: ["Piano"],
    clip: "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3",
    about: "Marie Leclerc is a renowned classical pianist known for her emotive performances and technical prowess. Having performed with the prestigious Orchestre de Paris, she has established herself as a leading figure in the classical music scene. Her five solo albums feature a mix of classical masterpieces and contemporary compositions, reflecting her deep understanding and appreciation of the genre."
  },
  {
    id: 3,
    name: "Pierre Martin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJwb5LLZET7w2hvhmsvyiiIUpWo4XytV9Dw&s",
    bio: "A dynamic guitarist blending rock and jazz influences.",
    genre: "Rock, Jazz",
    achievements: ["Leader of Martin Trio", "JazzOn Festival headliner"],
    instruments: ["Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    about: "Pierre Martin is a dynamic guitarist whose innovative style fuses rock and jazz influences. As the leader of the acclaimed Martin Trio, he has captivated audiences with his electrifying performances and intricate compositions. A headliner at the JazzOn Festival, Pierre continues to push the boundaries of guitar music, earning him a dedicated following and critical praise."
  },
  {
    id: 4,
    name: "Sophie Dubois",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSEnJk0NHtbsXNiJKCSrd8kEyWmtfmDAgFQ&s",
    bio: "A captivating vocalist with a flair for pop and R&B.",
    genre: "Pop, R&B",
    achievements: ["Top 10 charts in France", "Collaborated with Luc Bernard"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    about: "Sophie Dubois is a captivating vocalist known for her powerful voice and emotive delivery. With a flair for pop and R&B, she has achieved significant success, with several of her singles reaching the Top 10 charts in France. Sophie's collaborations with other prominent artists, including Luc Bernard, have further solidified her position in the music industry as a rising star."
  },
  {
    id: 5,
    name: "Luc Bernard",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J4X-Cm9TPfagU34UQrVpiAa5J6eumpbC5Q&s",
    bio: "A skilled drummer known for his energetic performances.",
    genre: "Rock, Pop",
    achievements: ["International Drum Festival winner", "Session drummer for major artists"],
    instruments: ["Drums"],
    clip: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
    about: "Luc Bernard is a skilled drummer celebrated for his energetic and precise performances. Having won the International Drum Festival, Luc has established himself as a sought-after session drummer, contributing to recordings for numerous major artists. His versatility across rock and pop genres showcases his ability to adapt and enhance any musical setting with his dynamic drumming style."
  },
  {
    id: 6,
    name: "Claire Fontaine",
    img: "https://arts.aventuramall.com/_next/image?url=https%3A%2F%2Farts-walk.b-cdn.net%2FClaire_Fontaine_bios_f1aa4f4cd5.png&w=3840&q=75",
    bio: "A talented violinist with a passion for folk music.",
    genre: "Folk",
    achievements: ["Folk Music Award 2022", "Plays with 'Les Cordes Vagabondes'"],
    instruments: ["Violin"],
    clip: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    about: "Claire Fontaine is a talented violinist whose passion for folk music shines through in her heartfelt performances. Winner of the Folk Music Award in 2022, Claire is a key member of the ensemble 'Les Cordes Vagabondes,' where she brings traditional folk tunes to life with her expressive playing. Her dedication to preserving and innovating within the folk genre has earned her recognition and admiration from audiences and peers alike."
  },
  {
    id: 7,
    name: "Antoine Moreau",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGomZko3yjvGA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693471919809?e=2147483647&v=beta&t=kEaItcG7eqkHx7VOUDeXy0RGTabtlFOIdmBSoMp_g8U",
    bio: "A charismatic saxophonist with a love for jazz.",
    genre: "Jazz",
    achievements: ["Montreux Jazz Festival featured artist", "Recorded with international jazz bands"],
    instruments: ["Saxophone"],
    clip: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
    about: "Antoine Moreau is a charismatic saxophonist renowned for his soulful jazz performances. Featured at the prestigious Montreux Jazz Festival, Antoine has captivated audiences with his expressive playing and improvisational skills. His collaborations with international jazz bands have further showcased his versatility and deep understanding of jazz music, solidifying his reputation as a leading figure in the contemporary jazz scene."
  },
  {
    id: 8,
    name: "Julien Lefevre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde_NUSe-kLDHRFg_zExtKSFH6wkYCQC4_IA&s",
    bio: "A bass guitarist who brings groove to every performance.",
    genre: "Funk, Jazz",
    achievements: ["Groove Award winner", "Started Lefevre Funk Collective"],
    instruments: ["Bass Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-funkyelement.mp3",
    about: "Julien Lefevre is a bass guitarist celebrated for his infectious grooves and dynamic performances. As the founder of the Lefevre Funk Collective, Julien has made a significant impact on the funk and jazz scenes, earning him the Groove Award for his contributions to music. His ability to seamlessly blend rhythm and melody on the bass guitar has made him a sought-after musician for collaborations and live performances."
  },
  {
    id: 9,
    name: "Emma Girard",
    img: "https://imgs.classicfm.com/images/85786?crop=16_9&width=660&relax=1&format=webp&signature=TOGyI2wibrfgCdF1jyJPh0Q5-Eg=",
    bio: "A classical singer with a powerful and emotive voice.",
    genre: "Opera, Classical",
    achievements: ["Sang at Opéra Garnier", "Grammy nominee"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Emma Girard is a distinguished classical singer known for her powerful and emotive voice. Having performed at the iconic Opéra Garnier, Emma has captivated audiences with her operatic prowess and expressive interpretations of classical repertoire. Her talent has been recognized with a Grammy nomination, highlighting her status as one of the leading voices in contemporary classical music."
  },
  {
    id: 10,
    name: "Lucas Rousseau",
    img: "https://media.licdn.com/dms/image/v2/C4E03AQGbBJL-LI6M3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548081741079?e=2147483647&v=beta&t=tFidQwNtxcEsPaM6uAmzz9tqM4jK-LW5gMyznR8PgfI",
    bio: "An innovative electronic music producer and DJ.",
    genre: "Electronic",
    achievements: ["Remix of the Year 2024", "EDM World Tour"],
    instruments: ["DJ Controller", "Synth"],
    clip: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
    about: "Lucas Rousseau is an innovative electronic music producer and DJ known for his cutting-edge sound and dynamic performances. With a background in music technology, Lucas has quickly risen to prominence in the electronic music scene, earning accolades such as 'Remix of the Year 2024' and completing a successful EDM World Tour. His ability to blend various electronic genres has made him a sought-after artist in festivals and clubs worldwide."
  },
  {
    id: 11,
    name: "Chloé Mercier",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQF_27-aBpSRNw/profile-displayphoto-shrink_200_200/B4EZT6DKTIHUAY-/0/1739361921198?e=2147483647&v=beta&t=iY8YqE8lNF_VyxmluqnV9HXpd9lLExsSQ4AL_nZ7p_o",
    bio: "A folk singer-songwriter with heartfelt lyrics.",
    genre: "Folk",
    achievements: ["Festival du Chant award", "Album: 'Les Racines'"],
    instruments: ["Vocals", "Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    about: "Chloé Mercier is a talented folk singer-songwriter known for her heartfelt lyrics and captivating melodies. With a deep connection to her roots, Chloé's music often explores themes of nature, love, and personal growth. Her debut album, 'Les Racines,' received critical acclaim and won the Festival du Chant award, solidifying her place in the contemporary folk scene."
  },
  {
    id: 12,
    name: "Maxime Dupuis",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYgSWmkc3ituUkW0y4mt0ElyoruzN6VKu4A&s",
    bio: "A versatile trumpeter with a knack for improvisation.",
    genre: "Jazz, Funk",
    achievements: ["Jazz Magazine Artist of the Month", "Film soundtracks"],
    instruments: ["Trumpet"],
    clip: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
    about: "Maxime Dupuis is a versatile trumpeter with a knack for improvisation. His unique sound blends elements of jazz and funk, making him a sought-after musician in various ensembles. Maxime's contributions to film soundtracks have further showcased his talent, earning him recognition as 'Jazz Magazine Artist of the Month.' With a passion for pushing musical boundaries, he continues to captivate audiences worldwide."
  },
  {
    id: 13,
    name: "Laura Simon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SyHAbryZY0RuwtuHnrs0YX9_sk4NkFNZ4w&s",
    bio: "A contemporary dancer and choreographer.",
    genre: "Contemporary Dance",
    achievements: ["Choreographer for Ballet National", "Modern dance innovator"],
    instruments: ["Dance"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Laura Simon is a contemporary dancer and choreographer known for her innovative approach to movement. With a background in classical ballet and modern dance, Laura has developed a unique style that blends various dance forms. Her work as a choreographer for the Ballet National has garnered critical acclaim, and she is recognized as a leading figure in the contemporary dance scene."
  },
  {
    id: 14,
    name: "Thomas Lambert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeIDa83YimwT8R6eFk0prrzcM79M9GU7GDQ&s",
    bio: "A skilled cellist with a passion for orchestral music.",
    genre: "Classical",
    achievements: ["Symphony Orchestra cellist", "Paris Young Talent award"],
    instruments: ["Cello"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Thomas Lambert is a skilled cellist with a passion for orchestral music. His dedication to his craft has led him to perform with prestigious ensembles, earning accolades such as the 'Paris Young Talent award.' With a deep understanding of classical repertoire, Thomas continues to inspire audiences with his emotive playing and commitment to musical excellence."
  },
  {
    id: 15,
    name: "Sarah Fontaine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu3G8bMR2RgfhiGsrXro9no_skD_EBt97RA&s",
    bio: "A jazz vocalist known for her smooth and sultry style.",
    genre: "Jazz",
    achievements: ["Jazz Vocal performance of 2023", "Collaborates with Antoine Moreau"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
    about: "Sarah Fontaine is a jazz vocalist known for her smooth and sultry style. With a rich, emotive voice, she captivates audiences and brings a fresh perspective to classic jazz standards. Her recent recognition as the 'Jazz Vocal performance of 2023' highlights her growing influence in the genre, and her collaborations with renowned musicians like Antoine Moreau showcase her versatility and artistic vision."
  },
  {
    id: 16,
    name: "Nicolas Caron",
    img: "https://c8.alamy.com/comp/2H4C11E/nicolas-munoz-of-boy-pablo-during-the-outside-lands-music-festival-on-october-31-2021-in-san-francisco-california-photo-by-daniel-desloversipa-usa-2H4C11E.jpg",
    bio: "A talented bassist with a unique sound.",
    genre: "Indie, Rock",
    achievements: ["Played Outside Lands SF", "EP: 'Groove Nouveau'"],
    instruments: ["Bass Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Nicolas Caron is a talented bassist with a unique sound. His ability to blend various musical styles has made him a sought-after collaborator in the indie and rock scenes. With a focus on groove and rhythm, Nicolas's performances are known for their energy and creativity."
  },
  {
    id: 17,
    name: "Camille Dubois",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmFkjDjYdXgkPWFZiuceKDPyAO0m-XUCq7w&s",
    bio: "A classical guitarist with a passion for flamenco.",
    genre: "Classical, Flamenco",
    achievements: ["Flamenco Festival Spain", "Concours de Guitare winner"],
    instruments: ["Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Camille Dubois is a classical guitarist with a passion for flamenco. Her performances are characterized by a deep emotional connection to the music, and she has been recognized for her ability to blend traditional classical techniques with the vibrant rhythms of flamenco. Camille's dedication to her craft has made her a prominent figure in both genres."
  },
  {
    id: 18,
    name: "Alexandre Morel",
    img: "https://www.musicbusinessworldwide.com/files/2023/06/fJ8wJXTwPtpd442OhwgHrdxup0iiRQOMnZfPCt39gM-Z-dnbhJmTs-6kvN3aGFvvclUFSRHzi1cyE_KimVtKlqx5v1NKVi87NRFkAl910ZdyGR6ZuFbCAPyGc_SLbxhh50NEjkZl4ScFjjIOww5qagw-e1686751680260.jpeg",
    bio: "An avant-garde composer and sound artist.",
    genre: "Electronic, Avant-garde",
    achievements: ["Festival Sonore featured composer", "Film scores"],
    instruments: ["Synth", "Electronics"],  
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Alexandre Morel is an avant-garde composer and sound artist known for his innovative approach to music. His work often blurs the lines between genres, incorporating elements of electronic and acoustic soundscapes. With a focus on experimentation and collaboration, Alexandre has made a name for himself in the contemporary music scene."
  },
  {
    id: 19,
    name: "Manon Lefebvre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEzZ7eqadiS6TWKPncwDa8KJfAl2xR4O4Xg&s",
    bio: "A pop singer with catchy tunes and vibrant energy.",
    genre: "Pop",
    achievements: ["Paris Pop Awards", "Single: 'Danse ce soir!'"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    about: "Manon Lefebvre is a pop singer known for her catchy tunes and vibrant energy. With a unique blend of modern pop and traditional French influences, she has quickly risen to fame in the music scene. Her recent single, 'Danse ce soir!', has topped the charts and showcases her infectious enthusiasm and talent."
  },
  {
    id: 20,
    name: "Juliette Roux",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQE0eYJESKO3ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1674904157994?e=2147483647&v=beta&t=WIYphOKUvfH-EapLnq9TfLse84wBp_8vNv3sDCjF4xM",
    bio: "A soulful R&B singer with a powerful voice.",
    genre: "R&B, Soul",
    achievements: ["Soul Voice award 2024", "Collab with Jean Dupont"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    about: "Juliette Roux is a soulful R&B singer with a powerful voice. Her music blends traditional soul elements with modern influences, creating a sound that resonates with a wide audience. Juliette's recent collaborations and performances have solidified her status as a rising star in the French music scene."
  },
  {
    id: 21,
    name: "Hugo Fontaine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8-uhLBdSfD5BWDdQIE0q4dZrRHEa5-BvQA&s",
    bio: "A skilled drummer with a passion for rock music.",
    genre: "Rock",
    achievements: ["Drummer of the year 2022", "Plays in 'The Fontaine Project'"],
    instruments: ["Drums"],
    clip: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    about: "Hugo Fontaine is a skilled drummer known for his energetic performances and technical proficiency. With a deep passion for rock music, Hugo has become a key member of 'The Fontaine Project,' where his dynamic drumming style drives the band's powerful sound. His dedication to his craft has earned him recognition as 'Drummer of the year 2022,' highlighting his impact on the music scene."
  },
  {
    id: 22,
    name: "Léa Moreau",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM2iC5hj_BW1SS3IX8TZ361uoq6PH3LaA0A&s",
    bio: "A classical pianist known for her expressive performances.",
    genre: "Classical",
    achievements: ["Young Pianist Prize", "Concerts throughout Europe"],
    instruments: ["Piano"],
    clip: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    about: "Léa Moreau is a classical pianist celebrated for her expressive performances and technical mastery. Having won the Young Pianist Prize, Léa has toured extensively throughout Europe, captivating audiences with her interpretations of classical masterpieces. Her dedication to her art and ability to convey deep emotion through her playing have established her as a prominent figure in the classical music world."
  },
  {
    id: 23,
    name: "Mathieu Garnier",
    img: "https://socialsellingforum.com/wp-content/uploads/2022/05/Matthieu-Garnier.jpg",
    bio: "A versatile violinist with a love for contemporary music.",
    genre: "Classical, Contemporary",
    achievements: ["Violin Concerto winner", "Plays with Paris Contemporary Ensemble"],
    instruments: ["Violin"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Mathieu Garnier is a versatile violinist known for his passion for contemporary music. With a background in classical training, Mathieu has successfully bridged the gap between traditional and modern styles. As a member of the Paris Contemporary Ensemble, he has performed numerous premieres and innovative works, earning recognition for his technical skill and artistic vision."
  },
  {
    id: 24,
    name: "Inès Dupont",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR57rYmrr4Nh1XeGKrxTgTzFQBKyST19z4Sg&s",
    bio: "A pop singer with a vibrant stage presence.",
    genre: "Pop",
    achievements: ["Energetic Stage Award", "Debut Album: 'En Couleurs'"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    about: "Inès Dupont is a pop singer with a vibrant stage presence. Known for her catchy melodies and engaging performances, Inès has quickly become a favorite in the French pop scene. Her debut album, 'En Couleurs,' showcases her unique style and artistic vision."
  },
  {
    id: 25,
    name: "Victor Lambert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-YiicSDxT2-X1tCbU7sCuKbCOA7yws-KCg&s",
    bio: "A talented guitarist blending blues and rock styles.",
    genre: "Blues, Rock",
    achievements: ["Blues Jam finalist", "Guitarist for 'Lambert Blues Band'"],
    instruments: ["Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    about: "Victor Lambert is a talented guitarist known for his ability to blend blues and rock styles seamlessly. As a finalist in the Blues Jam competition, Victor has demonstrated his exceptional skill and passion for music. He is the lead guitarist for the 'Lambert Blues Band,' where his soulful playing and dynamic performances have earned him a dedicated following."
  },
  {
    id: 26,
    name: "Sarah Morel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPlyIGWKo8ORlsQfI24AGLQx6KFqk7fx5Vw&s",
    bio: "A jazz singer with a smooth and captivating voice.",
    genre: "Jazz",
    achievements: ["Jazz Award winner", "Tours across France"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
    about: "Sarah Morel is a jazz singer known for her smooth and captivating voice. With a deep appreciation for jazz traditions, Sarah has developed a unique style that resonates with audiences. Her recent recognition as a Jazz Award winner highlights her talent and dedication to the genre, and she continues to tour across France, sharing her love of jazz music."
  },
  {
    id: 27,
    name: "Clémentine Rousseau",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clementine_of_Belgium.jpg/330px-Clementine_of_Belgium.jpg",
    bio: "A classical harpist with a delicate touch.",
    genre: "Classical",
    achievements: ["European Harp Competition", "Solo in National Orchestra"],
    instruments: ["Harp"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Clémentine Rousseau is a classical harpist known for her delicate touch and expressive performances. With a background in both solo and orchestral settings, Clémentine has captivated audiences with her interpretations of classical masterpieces. She has participated in prestigious competitions, including the European Harp Competition, and has performed as a soloist with national orchestras."
  },
  {
    id: 28,
    name: "Adrien Caron",
    img: "https://i.ytimg.com/vi/h01oLtSGJQ8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTihKMA8=&rs=AOn4CLAMIQjB0is85bjYudjBmYigttNoyQ",
    bio: "A skilled trumpeter with a passion for jazz and funk.",
    genre: "Jazz, Funk",
    achievements: ["Jazz Trumpet prize", "Funky Brass Band"],
    instruments: ["Trumpet"],
    clip: "https://www.bensound.com/bensound-music/bensound-funky.mp3",
    about: "Adrien Caron is a skilled trumpeter with a passion for jazz and funk. His dynamic playing style and ability to improvise have made him a sought-after musician in the French jazz scene. As a member of the 'Funky Brass Band,' Adrien showcases his versatility and love for blending genres, captivating audiences with his energetic performances."
  },
  {
    id: 29,
    name: "Océane Simon",
    img: "https://images.bangpremier.com/articleimage/2025_04_10__bsalscplg_1744281730cropped4645x3019.webp",
    bio: "A contemporary dancer known for her expressive movements.",
    genre: "Contemporary Dance",
    achievements: ["Dance Movement Award", "Original choreographies"],
    instruments: ["Dance"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Océane Simon is a contemporary dancer celebrated for her expressive movements and innovative choreographies. With a background in various dance styles, Océane has developed a unique approach to contemporary dance that emphasizes emotional storytelling through movement. Her work has been recognized with the Dance Movement Award, highlighting her contributions to the art form."
  },
  {
    id: 30,
    name: "Bastien Dubois",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/81/%C2%A9Sauve_qui_peut_le_court_m%C3%A9trage%2C_Anthonin_Robineau_-_Bastien_DUBOIS.jpg",
    bio: "A versatile bassist with a love for funk and soul.",
    genre: "Funk, Soul",
    achievements: ["Funk Bassist award", "Plays with Bastien Dubois Band"],
    instruments: ["Bass Guitar"],
    clip: "https://www.bensound.com/bensound-music/bensound-funkyelement.mp3",
    about: "Bastien Dubois is a versatile bassist known for his deep grooves and soulful playing style. With a passion for funk and soul music, Bastien has become a key figure in the French music scene. As the leader of the Bastien Dubois Band, he has captivated audiences with his dynamic performances and infectious rhythms, earning him recognition as a top funk bassist."
  },
  {
    id: 31,
    name: "Léna Fontaine",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToTMzK1YPQxczdCSNaFEB_1KFtnR85XSCCg&s",
    bio: "A pop singer with catchy melodies and vibrant energy.",
    genre: "Pop",
    achievements: ["Catchy Tune award", "Tours in France"],
    instruments: ["Vocals"],
    clip: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    about: "Léna Fontaine is a pop singer known for her catchy melodies and vibrant energy. With a unique blend of modern pop and traditional French influences, she has quickly risen to fame in the music scene. Her infectious enthusiasm and engaging performances have made her a favorite among fans, and she continues to tour across France, sharing her love of pop music."
  },
  {
    id: 32,
    name: "Gabriel Moreau",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZluG7urB_ZGXhTI_WrQy7rq0m97oz9VIcmA&s",
    bio: "A skilled drummer known for his dynamic style.",
    genre: "Rock, Jazz",
    achievements: ["Dynamic Performer prize", "Drummer for various bands"],
    instruments: ["Drums"],
    clip: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    about: "Gabriel Moreau is a skilled drummer celebrated for his dynamic style and technical proficiency. With a deep passion for both rock and jazz music, Gabriel has become a sought-after musician in various ensembles. His ability to adapt to different musical settings and deliver energetic performances has earned him recognition as a top drummer in the French music scene."
  },
  {
    id: 33,
    name: "Anaïs Lefevre",
    img: "https://i1.sndcdn.com/avatars-000603459381-l1cnms-t240x240.jpg",
    bio: "A talented violinist with a passion for classical and contemporary music.",
    genre: "Classical, Contemporary",
    achievements: ["Violin star at festivals", "Classical music educator"],
    instruments: ["Violin"],
    clip: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    about: "Anaïs Lefevre is a talented violinist known for her passion for both classical and contemporary music. With a background in classical training, Anaïs has successfully bridged the gap between traditional and modern styles. She has performed at numerous festivals, earning recognition as a violin star, and is also dedicated to educating the next generation of classical musicians."
  }
];

export default function MusicianDetails() {
  const { id } = useParams();
  const musician = musicians.find((m) => m.id === parseInt(id));

  if (!musician) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #28243C 0%, #43C6AC 80%)",
      }}>
        <span className="note" style={{ left: "8%", top: "10%" }}>🎵</span>
        <span className="note" style={{ right: "12%", top: "21%" }}>🎶</span>
        <span className="note" style={{ left: "3%", bottom: "19%" }}>🎷</span>
        <span className="note" style={{ right: "6%", bottom: "18%" }}>🎸</span>

        <h2 style={{
          color: "#FFD700",
          textAlign: "center",
          fontSize: "2.2rem",
          background: "rgba(0,0,0,0.45)",
          borderRadius: "16px",
          padding: "36px 64px",
          boxShadow: "0 4px 24px 0 rgba(67,198,172,0.35)",
          backdropFilter: "blur(3px)"
        }}>
          Musicien introuvable
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #191654 20%, #43C6AC 80%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Montserrat, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating music notes as background decoration */}
      <div style={{
        position: "absolute",
        top: "9%",
        left: "11%",
        width: 70,
        height: 70,
        background: "rgba(255,215,0,0.11)",
        borderRadius: "50%",
        filter: "blur(8px)",
        zIndex: 1
      }} />
      <div style={{
        position: "absolute",
        bottom: "8%",
        right: "16%",
        width: 124,
        height: 124,
        background: "rgba(67,198,172,0.12)",
        borderRadius: "50%",
        filter: "blur(18px)",
        zIndex: 1
      }} />

      <div
        style={{
          zIndex: 10,
          width: "calc(100vw - 40px)",
          maxWidth: "600px",
          background: "rgba(255,255,255,0.17)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.28)",
          backdropFilter: "blur(20px)",
          borderRadius: "38px",
          padding: "58px 30px",
          margin: "8vh auto",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      >
        <img
          src={musician.img}
          alt={musician.name}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "6px solid #FFD700",
            marginBottom: "16px",
            marginTop: "-40px",
            boxShadow: "0 5px 22px rgba(67,198,172,0.16)",
            transition: "transform 0.5s cubic-bezier(.45,1.36,.46,1)",
          }}
        />
        <h1 style={{
          fontSize: "2.7rem",
          color: "#FFD700",
          marginTop: "12px",
          textShadow: "2px 4px 44px #19165488",
          fontWeight: 700,
          letterSpacing: "0.04em"
        }}>
          {musician.name}
        </h1>
        <p style={{
          fontSize: "1.18rem",
          margin: "20px auto 20px auto",
          color: "#191654",
          background: "rgba(67,198,172,0.08)",
          borderRadius: "13px",
          padding: "14px",
          maxWidth: "500px",
          boxShadow: "0 2px 10px rgba(31,38,135,0.09)"
        }}>
          {musician.bio}
        </p>
        <h3 style={{
          fontSize: "1.3rem",
          color: "#43C6AC",
          fontWeight: "700",
          marginTop: "16px"
        }}>
          Genre : <span style={{ color: "#FFD700" }}>{musician.genre}</span>
        </h3>
        <h3 style={{
          fontSize: "1.2rem",
          color: "#43C6AC",
          fontWeight: "700",
          margin: "12px 0"
        }}>
          Instruments : <span style={{ color: "#FFD700" }}>{musician.instruments.join(", ")}</span>
        </h3>
        {musician.achievements && musician.achievements.length > 0 && (
          <div style={{
            background: "rgba(255,215,0,0.12)",
            borderRadius: "15px",
            padding: "17px 13px",
            margin: "18px 0 6px 0",
            textAlign: "left",
            boxShadow: "0 1px 5px rgba(67,198,172,0.06)"
          }}>
            <h3 style={{
              color: "#191654",
              margin: "0 0 10px 0",
              fontWeight: "700",
              fontSize: "1.1rem"
            }}>
              Distinctions :
            </h3>
            <ul style={{
              listStyle: "none",
              padding: 0,
              fontSize: "1.08rem",
              color: "#43C6AC",
              fontWeight: 500
            }}>
              {musician.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  style={{
                    background: "rgba(67,198,172,0.10)",
                    borderRadius: "10px",
                    margin: "4px 0",
                    padding: "6px 0 6px 10px",
                  }}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div style={{
          margin: "28px 0 0 0",
          textAlign: "center"
        }}>
          <audio
            controls
            src={musician.clip}
            style={{
              width: "85%",
              margin: "0 auto",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(31,38,135,0.14)"
            }}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
        {musician.about && (
          <div
            style={{
              marginTop: "32px",
              maxWidth: "580px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left",
              padding: "17px",
              background: "rgba(255,255,255,0.22)",
              borderRadius: "19px",
              boxShadow: "0 3px 18px rgba(67,198,172,0.13)",
              color: "#191654"
            }}
          >
            <h3 style={{
              color: "#43C6AC",
              marginBottom: "10px",
              fontSize: "1.11rem",
              fontWeight: 700
            }}>
              À propos de {musician.name} :
            </h3>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: "1.58"
            }}>{musician.about}</p>
          </div>
        )}
        <Link
          to="/musicians"
          style={{
            color: "#FFD700",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.08rem",
            background: "linear-gradient(90deg,#191654 0%,#43C6AC 70%)",
            padding: "10px 26px",
            borderRadius: "18px",
            display: "inline-block",
            marginTop: "36px",
            marginBottom: "12px",
            boxShadow: "0 2px 9px rgba(67,198,172,0.07)",
            transition: "background 0.27s"
          }}
        >
          ← Retour aux musiciens
        </Link>
      </div>
    </div>
  );
}
