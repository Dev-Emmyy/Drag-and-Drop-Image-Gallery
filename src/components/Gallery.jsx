import React, { useState } from 'react';
import "../Styles/gallery.css";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

 const imagesList = [
    {
      id: "winter",
      title: "Winter",
      image_path: "https://images.pexels.com/photos/6617778/pexels-photo-6617778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "people",
      title: "People",
      image_path: "https://images.pexels.com/photos/16671959/pexels-photo-16671959/free-photo-of-people-walking-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "black&white",
      title: "Black&White",
      image_path: "https://images.pexels.com/photos/3048527/pexels-photo-3048527.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    },  {
      id: "summer",
      title: "Summer",
      image_path: "https://images.pexels.com/photos/1576955/pexels-photo-1576955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    },{
      id: "travel",
      title: "Travel",
      image_path: "https://images.pexels.com/photos/119777/pexels-photo-119777.jpeg?auto=compress&cs=tinysrgb&w=800",

    }, {
      id: "coding",
      title: "Coding",
      image_path: "https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "adventure",
      title: "Adventure",
      image_path: "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "nature",
      title: "Nature",
      image_path: "https://images.pexels.com/photos/17676464/pexels-photo-17676464/free-photo-of-a-house-on-a-hill-between-trees-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "love",
      title: "Love",
      image_path: "https://images.pexels.com/photos/3692609/pexels-photo-3692609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "forest",
      title: "Forest",
      image_path: "https://images.pexels.com/photos/1366921/pexels-photo-1366921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "flower",
      title: "Flower",
      image_path: "https://images.pexels.com/photos/1390433/pexels-photo-1390433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    }, {
      id: "smile",
      title: "Smile",
      image_path: "https://images.pexels.com/photos/3845492/pexels-photo-3845492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    },
  ]


const Gallery = () => {
  const [imgcontainer, updateImageContainer] = useState(imagesList);
  const [searchQuery, setSearchQuery] = useState('');

  function handleDragEnd(result) {
    const items = Array.from(imgcontainer);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateImageContainer(items);
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter images based on the search query
  const filteredImages = imgcontainer.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='main_container'>
      <div className='input_content'>
        <input
          type="text"
          placeholder='Search for an image'
          value={searchQuery}
          onChange={handleSearch}
        />
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ cursor: 'pointer' }}>
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='img_container'>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className='img_container'>
              {filteredImages.map(({ id, title, image_path }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <img src={image_path} alt={`${title} Image_path`} />
                        <h4>{title}</h4>
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

       <div className="profile_link">
        <div className="terms">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>

        <div className="copyright">
          <p>© 2023 MovieBox Clone by Emmanuel Ugochukwu</p>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
