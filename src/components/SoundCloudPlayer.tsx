interface SoundCloudPlayerProps {
  src: string;
}

const SoundCloudPlayer = ({ src }: SoundCloudPlayerProps) => {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={src}
    ></iframe>
  );
};

export default SoundCloudPlayer;