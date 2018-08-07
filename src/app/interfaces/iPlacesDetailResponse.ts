///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

export interface IPlacesDetailResponse {
    result: google.maps.places.PlaceResult, 
    status: google.maps.places.PlacesServiceStatus
}