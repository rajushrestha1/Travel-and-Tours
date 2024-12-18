// import { useState } from "react";

const PopularDestination = () => {
    // const [expanded, setExpanded]=useState(false);
    const destinations=[
        {
            id:'1',
            image:'/Images/pokhara.png',
            title : 'Pokhara,Nepal',
            description:'Pokhara, Nepal is a popular tourist destination known for its natural beauty, adventure sports, and rich cultural heritage: Phewa Lake: The second-largest lake in Nepal, Phewa Lake is a major tourist attraction and is surrounded by mountains. The lake offers a reflection of the Annapurna, Dhaulagiri, and Mt. Machhapuchhre mountains. Sarangkot: A small village with views of the Annapurna, Dhaulagiri, and Manaslu mountain ranges, as well as the Pokhara Valley. Sarangkot is a popular paragliding and zip lining destination. Himalayan view points: Pokhara has many Himalayan view points, including Dhampus, Sarangkot, Kahun Hill, World Peace Stupa, and Pumdikot Hill. Temples: Pokhara has many temples, including Bindhyabasini, Bhadrakali, Sitaldevi, Gita Mandir, and Bhimsen. Museums: Pokhara has several museums, including the Pokhara Regional Museum and the International Mountain Museum. Basundhara Park: A park in Pokhara thats surrounded by greenery. Old Pokhara Bazaar: A bustling bazaar in Pokhara. Mahendraphul and Pritiviti Chowk: A shopping area with thousands of shops. Pokhara is also a gateway to the Annapurna Circuit trek and other Himalayan tracks. '
        },
        {
            id:'2',
            image:'/Images/gal2.jpg',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'3',
            image:'/Images/gal3.jpg',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'4',
            image:'/Images/gal4.jpg',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'5',
            image:'/Images/gal5.webp',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'6',
            image:'/Images/gal6.webp',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
    ];
  return (
    <div className="py-12 bg-gray-200">
      <div className="mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
        Populat Destination
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 sm:px-0">
            {destinations.map(({id,image,title,description})=>
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                <img src={image} className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"/>
                <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p /*onClick={()=> setExpanded(!expanded)}*/ /*{`${expanded ? "":"line-clamp-6"} transition-all cursor-pointer`}title="click to*/
                className= "relative line-clamp-6  top-0 bg-white overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-gray-300">{description}</p>
                </div>
            </div>
        
        )}
        </div>
      </div>
    </div>
  )
}

export default PopularDestination
