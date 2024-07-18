//U46368100
import TourDisplay from "./TourDisplay";
import ToursAPI from "./ToursAPI";

export default function Gallery() {

    const tours = ToursAPI();
    return (
        <div>
        {tours.map(tour => (
          <div >
            <TourDisplay
            key={tour.id}
            name={tour.name}
            info={tour.info}
            image={tour.image}
            price={tour.price}
          />
            
          </div>
        ))}
      </div> 
      
    );


}