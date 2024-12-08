
const Clients = () => {
    const client=[
        {
            id:'1',
            name :'saroj',
            image:'/Images/saroj.png',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'2',
            name :'Rupesh',
            image:'/Images/rupesh.png',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'3',
            name :'Aashish',
            image:'/Images/aashish.png',
            title : 'Paris,France',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
       
               
    ];
  return (
    <div className="py-12 bg-gray-200">
      <div className="mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
        What our client says
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0">
            {client.map(({id,name,image,title,description})=>
            <div key={id} className="bg-white rounded-lg shadow-md p-4 overflow-hidden taxt-center cursor-pointer transform transition duration-300 hover:scale-110">
                <img src={image} className=" h-28 w-28 mx-auto my-3 items-center justify-center flex  "/>
                <div className="">
                <h1 className="text-xl font-bold mb-2 text-center">{name}</h1>
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

export default Clients
