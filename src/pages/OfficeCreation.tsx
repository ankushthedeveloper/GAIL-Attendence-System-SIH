import axios from "axios"; 
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from "react";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; 
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { LatLngExpression, Map } from "leaflet";
// import "leaflet-control-geocoder"; 
import './styles/OficeCreation.scss'; 

/*

import axios from "axios";
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';  // Corrected import for Geocoder
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // CSS for the geocoder
import { useEffect, useState, useRef } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { LatLngExpression, Map } from "leaflet";
import './styles/OfficeCreation.scss'; // Correct file path for styles

// Rest of your OfficeCreation component...


*/ 

interface OfficeState {
  name: string;
  Address: string;
  distance: string;
  latitude: string;
  longitude: string;
}

interface Suggestion {
  lat: string;
  lon: string;
  display_name: string;
}

const LocationMarker = ({ setOffice }: { setOffice: React.Dispatch<React.SetStateAction<OfficeState>> }) => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setOffice(prevOffice => ({
        ...prevOffice,
        latitude: e.latlng.lat.toString(),
        longitude: e.latlng.lng.toString(),
      }));
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
};

const OfficeCreation = () => {
  const [office, setOffice] = useState<OfficeState>({
    name: "",
    Address: "",
    distance: "",
    latitude: "",
    longitude: "",
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]); // Store location suggestions
  const [showSuggestions, setShowSuggestions] = useState(false); // To toggle the suggestion dropdown
  const mapRef = useRef<Map | null>(null); // Reference to access the map instance
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 2) {
      // Fetch location suggestions based on the search query using Nominatim API
      axios
        .get<Suggestion[]>(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`)
        .then((response) => {
          setSuggestions(response.data);
          setShowSuggestions(true); // Show the suggestions dropdown
        })
        .catch((error) => {
          console.error("Error fetching location suggestions:", error);
        });
    } else {
      setShowSuggestions(false); // Hide suggestions if query length is short
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion: Suggestion) => {
    const lat = suggestion.lat;
    const lon = suggestion.lon;
    const displayName = suggestion.display_name;

    setOffice((prevOffice) => ({
      ...prevOffice,
      latitude: lat,
      longitude: lon,
      Address: displayName,
    }));

    if (mapRef.current) {
      mapRef.current.setView([parseFloat(lat), parseFloat(lon)], 13); // Center the map on the selected suggestion
    }
    
    // Hide suggestions and set the search query to the selected suggestion
    setShowSuggestions(false);
    setSearchQuery(displayName); // Set the selected value as the search query
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    setShowSuggestions(true); // Ensure that suggestions are shown again on typing
  };

  const handleBlur = () => {
    // Delay the hiding of suggestions to allow click event to trigger
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOffice(prevOffice => ({
      ...prevOffice,
      [name]: value,
    }));
  };

  const handleCreation = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(
        'https://alpha-one-server.vercel.app/api/office/createOffice',
        {
          name: office.name,
          Address: office.Address,
          distance: office.distance,
          latitude: office.latitude,
          longitude: office.longitude,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      .then((response) => {
        console.log('Office created:', response.data);
        navigate('/dept-creation', { state: { officeName: office.name } });
      })
      .catch((error) => {
        console.error('Error creating office:', error.message);
      });
  };

  const handleClear = () => {
    setSearchQuery('');
    setShowSuggestions(false);
    setOffice({
      name: '',
      Address: '',
      distance: '',
      latitude: '',
      longitude: '',
    });
  }

  const center: LatLngExpression = [30.7526, 76.760]; // Default center coordinates

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main>
        <h2>Create New Office</h2>

        {/* Search Input */}
        <div className="search-section">
          <label>Search Location:</label>
          <input
            className="searchInput"
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onBlur={handleBlur} // Hide suggestions after a slight delay
            placeholder="Search for a location"
          />
          <button className="searchButton" onClick={handleClear}>Clear</button>
          {showSuggestions && (
            <div className="suggestions">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onMouseDown={() => handleSuggestionClick(suggestion)} // Use onMouseDown to prevent losing focus before the click event
                >
                  {suggestion.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="map-section">
          <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            ref={mapRef} // Assign the map reference
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setOffice={setOffice} />
          </MapContainer>
        </div>

        <form onSubmit={handleCreation}>
          <div>
            <label>Office Name:</label>
            <input
              type="text"
              name="name"
              value={office.name}
              onChange={handleFormInputChange}
              required
            />
          </div>

          <div>
            <label>Office Address:</label>
            <input
              type="text"
              name="Address"
              value={office.Address}
              onChange={handleFormInputChange}
              required
            />
          </div>

          <div>
            <label>Office Radius (in meters):</label>
            <input
              type="number"
              name="distance"
              value={office.distance}
              onChange={handleFormInputChange}
              required
            />
          </div>

          <div>
            <label>Latitude:</label>
            <input
              type="text"
              name="latitude"
              value={office.latitude}
              readOnly
            />
          </div>

          <div>
            <label>Longitude:</label>
            <input
              type="text"
              name="longitude"
              value={office.longitude}
              readOnly
            />
          </div>

          <button type="submit">Create Office</button>
        </form>
      </main>
    </div>
  );
};

export default OfficeCreation;

