
const PopularDestination = () => {
    const destinations=[
        {
            id:'1',
            image:'/Images/gal1.jpg',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
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
                <p className="text-gray-600">{description}</p>
                </div>
            </div>
        
        )}
        </div>
      </div>
    </div>
  )
}

export default PopularDestination
