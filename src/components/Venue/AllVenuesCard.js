import './AllVenues.css';
import { MdOutlineChair } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


const AllVenuesCard = ({data}) => {

  return (
    <div className='allVenuesContainer'>
      {data.map((venue) => (
        <div key={venue.id} className='venueCard'>
          <img src={venue.imageUrl} alt={venue.name} className='venueImage' />
          <div className='venueDetails'>
            <h2 className='venueName'>{venue.venueName.toUpperCase()}</h2>
            <p className='venueLocation'> <span><MdLocationOn /> </span> {venue.location}</p>
            <p className='venueCapacity'> <span> <MdOutlineChair /></span> {venue.capacity}</p>
            <p className='venueDescription'>{venue.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default AllVenuesCard