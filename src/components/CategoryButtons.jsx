const CategoryButtons = ({ categories, onSelect, activeCategory }) => {
    return (
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 rounded-md ${
              activeCategory === category.toLowerCase()
                ? 'bg-black text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryButtons;