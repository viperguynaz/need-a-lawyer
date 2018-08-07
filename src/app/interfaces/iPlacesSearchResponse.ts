///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

export interface IPlacesSearchResponse {
    results: google.maps.places.PlaceResult[], 
    status: google.maps.places.PlacesServiceStatus, 
    pagination: google.maps.places.PlaceSearchPagination
}