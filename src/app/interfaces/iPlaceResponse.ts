///<reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

export interface IPlaceResponse {
    HtmlAttributions: string[],
    Place: google.maps.places.PlaceResult
}