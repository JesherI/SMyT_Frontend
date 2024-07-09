import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Importar el CSS de Leaflet

function Footer() {
  const position = [51.505, -0.09];
  return (
    <div>
      <center>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101977.8920213724!2d-46.74426191484199!3d-23.544371565597537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb1eb771f%3A0xe904f6a669744da1!2sMuseu%20de%20Arte%20de%20Sao%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1ses-419!2smx!4v1720547671548!5m2!1ses-419!2smx"
        width="60%" 
        height="300"
        style={{border:0}} 
        loading="lazy" >
        </iframe>
          </center>
      </div>
   );
}

export default Footer;
