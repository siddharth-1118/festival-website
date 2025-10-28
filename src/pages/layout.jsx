// Layout.jsx
import FloatingNotes from './home'; // Put your notes function/component in a separate file, or copy here

export default function Layout({ children }) {
  // Paste FloatingNotes here or import
  return (
    <div style={{ minHeight: "100vh", width: "100vw", position: "relative", overflow: "hidden" }}>
      {/* Shared video background for all pages */}
      <video
        src="/festival-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0, left: 0, width: "100vw", height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.5)",
          zIndex: 1
        }}
      />
      <FloatingNotes />
      {/* All pages will be rendered here */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
