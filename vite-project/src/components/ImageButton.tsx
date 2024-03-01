type ImageButtonProps = {
  image: string;
  onClick: () => void;
};

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={image} alt="image" width="100px" height="100px" />
    </button>
  );
}
