import React,{ useState }  from 'react'


const events = [
    {
      date: 'FEB 5, 2023',
      title: 'Wine Tasting Evening',
      description: 'Join for an evening of wine tasting and great company.',
      imageUrl: '../src/assets/facilities/Rectangle 10.png',
    },
    {
      date: 'FEB 6, 2023',
      title: 'Live Music Night',
      description: 'Enjoy live performances from local artists.',
      imageUrl: '../src/assets/facilities/Rectangle 7.png',
    },
    {
        date: 'FEB 6, 2023',
        title: 'Live Music Night',
        description: 'Enjoy live performances from local artists.',
        imageUrl: '../src/assets/facilities/Image (7).png',
      },
     
  ];

const Facilities = () => {

    const [visibleEventsCount, setVisibleEventsCount] = useState(4);

    const showMoreEvents = () => {
      setVisibleEventsCount((prevCount) => prevCount + 4);
    };



  return (
    <div className="bg-gray-900 text-white py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Facilities</h1>
      <p className="text-center mb-12">
        XYZ is the ideal venue for hosting a variety of events.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {events.slice(0, visibleEventsCount).map((event, index) => (
          <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-gray-600 mb-2">{event.date}</div>
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleEventsCount < events.length && (
          <div className="text-center">
            <button
              className="bg-transparent border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
              onClick={showMoreEvents}
            >
              Next
            </button>
          </div>
        )}
    </div>
  </div>
  )
}

export default Facilities