const PhotoCard = ({ photo }) => {
    return (
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={photo.src.medium}
          alt={photo.alt || photo.photographer}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-sm text-gray-600">By {photo.photographer}</p>
        </div>
      </div>
    );
  };
  
  export default PhotoCard;