
import { DateTime } from 'luxon';


/**
 * Returns the default qualified locale code
 * (language-REGION) for the given locale.
 *
 * @param lng - The language code.
 * @returns The qualified locale code, 
*  including region.
 */
function qualifiedLngFor(lng){
    switch (lng) {
      // Use Egypt as the default formatting
      // region for Arabic.
      case "ar":
        return "ar-EG"; 
      // Use USA as the default formatting
      // region for English.
      case "en":
        return "en-US";
      default:
        return lng;
    }
  }
  
  /**
   * Formats a number.
   *
   * @param value - The number to format.
   * @param lng - The language to format the number in.
   * @param options - passed to Intl.NumberFormat.
   * @returns The formatted number.
   */
  export function NumberFormatter(value, lng, options) {
    return new Intl.NumberFormat(
      qualifiedLngFor(lng),
      options,
    ).format(value);
  }


  export function CurrencyFormatter(value, lng, options) {
    // Use the number formatter above...
    return NumberFormatter(value, lng, {
        // ...but ensure we're formatting
        // as currency.
        style: "currency",
        ...options
    });
}


/**
* Formats a datetime.
*
* @param value - The datetime to format.
* @param lng - The language to format the number in.
* @param options - passed to Intl.DateTimeFormat.
* @returns The formatted datetime.
*/
export function DateFormatter(value, lng, options){
    return new Intl.DateTimeFormat(
    qualifiedLngFor(lng),
    options,
    ).format(value);
}