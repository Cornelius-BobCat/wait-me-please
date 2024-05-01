import { v4 as uuidv4 } from "uuid";

/**
 * Generates a selected number of personas based on the provided persona object.
 * @param personna - The persona object containing key-value pairs of persona attributes.
 * @param number - The number of personas to generate.
 * @param timeout - The timeout duration in seconds before generating the personas.
 * @returns A promise that resolves to an array of generated personas.
 */
export async function selectedPersonna(
  personna: any,
  number: number,
  timeout: number
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const people = [];
      const keys = Object.keys(personna);
      for (let i = 0; i < number; i++) {
        const person: any = {};
        keys.forEach((key) => {
          const values = personna[key];
          const randomIndex = Math.floor(Math.random() * values.length);
          const value = values[randomIndex];
          person[key] = value;
        });
        people.push(person);
      }
      resolve(people);
    }, timeout * 1000);
  });
}

/**
 * Generates an array of unique IDs.
 *
 * @param number The number of IDs to generate.
 * @param timeout The timeout in seconds before generating the IDs.
 * @returns A promise that resolves to an array of generated IDs.
 */
export async function generationId(number: number, timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const generationId = [];
      for (let i = 0; i < number; i++) {
        generationId.push(uuidv4());
      }
      resolve(generationId);
    }, timeout * 1000);
  });
}

/**
 * Generates an array of timestamps with a delay between each timestamp.
 * @param number - The number of timestamps to generate.
 * @param timeout - The delay in seconds before generating the timestamps.
 * @returns A promise that resolves to an array of timestamps.
 */
export async function selectedTime(number: number, timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const generationTime: Number[] = [];
      for (let i = 0; i < number; i++) {
        setTimeout(() => {
          generationTime.push(Date.now());
          if (generationTime.length === number) {
            resolve(generationTime);
          }
        }, i * 5);
      }
    }, timeout * 1000);
  });
}

/**
 * Selects random products from an array within a specified timeout.
 * @param products - The array of products to select from.
 * @param number - The number of products to select.
 * @param timeout - The timeout in seconds before the selection is made.
 * @returns A promise that resolves with an array of randomly selected products.
 */
export async function selectRandomProducts(
  products: any[],
  number: number,
  timeout: number
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const selectedProducts = [];
      const productCount = products.length;
      for (let i = 0; i < number; i++) {
        const randomIndex = Math.floor(Math.random() * productCount);
        selectedProducts.push(products[randomIndex]);
      }
      resolve(selectedProducts);
    }, timeout * 1000);
  });
}
