import FlightLandIcon from '@mui/icons-material/FlightLand';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import RoomServiceIcon from '@mui/icons-material/RoomService';
const Services = () => {
    const service=[
        {
            id:'1',
            icon:<FlightLandIcon className='text-4xl text-blue-600' fontSize='100px'/>,
            title : 'Flight Booking',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'2',
            icon : <ApartmentIcon className='text-4xl text-blue-600' fontSize='100px'/>,
            title : 'Hotel Booking',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'3',
            icon : <BeachAccessIcon className='text-4xl text-blue-600' fontSize='100px'/>,
            title : 'Beach Tour',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        {
            id:'4',
            icon : <RoomServiceIcon className='text-4xl text-blue-600'fontSize='100px'/>,
            title : 'Concierge Services',
            description:'beautiful city Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane,'
        },
        
        
    ];
  return (
    <div className="py-12 bg-gray-200">
      <div className="mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
        Our Services
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12 sm:px-0">
            {service.map(({id,icon,title,description})=>
            <div key={id} className="bg-white rounded-lg shadow-md flex flex-col p-6 items-center 
            cursor-pointer transform transition duration-300 hover:scale-110">
                <div className=''>{icon}</div>
                <div className="p-3">
                <h1 className="text-xl font-bold mb-2  text-center ">{title}</h1>
                <p className="text-gray-600">{description}</p>
                </div>
            </div>
        
        )}
        </div>
      </div>
    </div>
  )
}

export default Services
