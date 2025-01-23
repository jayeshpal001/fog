function HomeRangeCards({ image, title = "Dining" }) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="w-full max-w-xs h-auto object-cover rounded-lg shadow-md"
        />
        <p className="mt-2 text-lg font-medium text-gray-700">{title}</p>
      </div>
    );
  }
  
  export default HomeRangeCards;
  