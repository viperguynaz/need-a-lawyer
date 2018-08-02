const MILES_TO_KILOMETER_CONVERSION = 1.60934;

export class NumberUtils {
  public static milesToKilometers(miles: number) {
    return miles * MILES_TO_KILOMETER_CONVERSION;
  }
}
