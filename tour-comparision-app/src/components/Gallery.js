import { tourList } from "./tourList";
import TourDisplay from "./TourDisplay";
import ToursAPI from "./ToursAPI";

export default function Gallery() {

    const tours = ToursAPI();
    return (
        <div>
        {tours.map(tour => (
          <div >
            {tour.name}
            {tour.info}
            {tour.image}
            
            
          </div>
        ))}
      </div> 
      
    );


}