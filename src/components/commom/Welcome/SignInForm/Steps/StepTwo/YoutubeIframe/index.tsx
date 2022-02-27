const IframeLuanGameplay: React.FC = () => {
  return (
    <div style={{ opacity: '0' }}>
      <iframe
        width="1"
        height="1"
        src="https://www.youtube.com/embed/qYsJ9KX877Y?controls=1&autoplay=1&loop=1&playlist=qYsJ9KX877Y"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default IframeLuanGameplay;
