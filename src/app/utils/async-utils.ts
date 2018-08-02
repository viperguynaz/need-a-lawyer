import {CommonExpressions as cmp} from './common-expressions';

export class AsyncUtils {

    /**
     * Method applies a handler function to each item in collection. The handler is called with
     * an item from the list, and returns a reject or resolved promise when it has finished.
     *
     * NOTE: that since this function applies setTimeout there is no guarantee that the
     * item functions will complete in order.
     *
     * @param array - any type of array
     * @param handler  - function called to handle each item in the collection
     * @returns {Promise<any>}
     */
    public static forEach(array: any[],  handler: (item: any) => void): Promise<any> {
        if (cmp.isUndefinedOrNull(handler)) {
            return Promise.resolve(); // do nothing
        }

        return new Promise<any>((resolve, reject) => {
            if (cmp.isEmpty(array)) {
                resolve(); // isEmpty do nothing
            }

            // do some async stuff
            let total = array.length, count = 0;
            let hasResolved = false, hasRejected = false;
            array.forEach((item: any) => {
                setTimeout(() => {
                    if (hasResolved || hasRejected) {
                        return; // do nothing
                    }
                    try {
                        handler(item);
                    } catch (error) {
                        hasRejected = true;
                        reject(error); // If async handler fails
                        return;
                    }
                    count++;
                    // the array loop has completed
                    if (total === count) {
                        hasResolved = true;
                        resolve(); // If async forEach successful
                    }
                }, 0);
            });
        });
    }

    /**
     * Method will move a function call to the back of the event loop
     * NOTE: there is no need to try-catch on an await for this use because it will never reject.
     * @returns {Promise<void>}
     */
    public static nextTick(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 0);
        });
    }
}