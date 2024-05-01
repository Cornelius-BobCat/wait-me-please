import data from "@/data/data.json";
import {
  generationId,
  selectRandomProducts,
  selectedPersonna,
  selectedTime,
} from "@/utils/functions";
import { NextResponse } from "next/server";
import { incrementPingTable } from "@/utils/incrementation";

/**
 * The context object contains the parameters of the request.
 * In this case, the slug parameter is extracted from the context.
 * The slug parameter is expected to be in the format: {number}{letters}{timeout}
 * where number is the number of items to generate, letters are the type of items to generate,
 * and timeout is the delay in seconds before generating the items.
 * For example, a valid slug could be: 5ps10
 * This would generate 5 personas with a 10-second delay.
 * The letters correspond to the following:
 * ps - personas
 * pr - products
 * ts - timestamps
 * id - unique IDs
 * ra - random array
 * The function then parses the slug to extract the number, letters, and timeout values.
 * It then validates the values and calls the appropriate function to generate the items.
 * The generated items are returned as a JSON response.
 * If the slug is invalid or the generation fails, an appropriate error response is returned.
 * @param request - The request object.
 * @param context - The context object.
 * @returns A NextResponse object with the result of the request.
 */
export async function GET(request: Request, context: any) {
  const { incrementRequestCount, isRateLimited } = require("@/utils/cache.ts");
  const clientIP =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for") ||
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("remote-addr") ||
    request.headers.get("fastly-client-ip") ||
    request.headers.get("x-cluster-client-ip") ||
    request.headers.get("x-forwarded-host") ||
    request.headers.get("x-forwarded-server") ||
    request.headers.get("x-host") ||
    request.headers.get("x-originating-ip") ||
    request.headers.get("x-proxy-user-ip");

  if (isRateLimited(clientIP)) {
    return NextResponse.json(
      { result: "Ma,ny requests ! limited 10/sec" },
      { status: 429 }
    );
  }
  incrementRequestCount(clientIP);
  await incrementPingTable();
  const { params } = context;
  const { slug } = params;
  const regex = /^(\d{1,2})([a-z]|[a-z]\d{3})(\d{1,2})$/;

  const matches = slug.match(regex);

  if (!matches || matches.length < 4) {
    return NextResponse.json({ result: "Invalid tag !" }, { status: 400 });
  }

  const number = parseInt(matches[1]);
  const letters = matches[2];
  const timeout = parseInt(matches[3]);

  if (!number || number < 1 || number > 99 || !letters || timeout > 60) {
    return NextResponse.json(
      {
        result: "What ? check tag (1 -99)(product persona time id)(0,60)",
      },
      { status: 400 }
    );
  }

  const validLetters = [
    "persona",
    "product",
    "time",
    "id",
    "e404",
    "e400",
    "e200",
    "e300",
    "e500",
  ];

  // Check if the letters are valid
  if (!validLetters.includes(letters)) {
    return NextResponse.json(
      { result: "Invalid tag letters" },
      { status: 400 }
    );
  }

  // Check if the letter is pr (products)
  if (letters === "product") {
    try {
      const products = data.products;
      const selectedProducts = await selectRandomProducts(
        products,
        number,
        timeout
      );
      return NextResponse.json({ result: selectedProducts }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ result: "error" }, { status: 500 });
    }
  }

  // Check if the letter is id (uuid)
  if (letters === "id") {
    try {
      const selectedtId = await generationId(number, timeout);
      return NextResponse.json({ result: selectedtId }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ result: "error" }, { status: 500 });
    }
  }

  // Check if the letter is ps (personna)
  if (letters === "persona") {
    try {
      const personna = data.personna;
      const selectedPs = await selectedPersonna(personna, number, timeout);
      return NextResponse.json({ result: selectedPs }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ result: "error" }, { status: 500 });
    }
  }

  // Check if the letter is ts (time)
  if (letters === "time") {
    try {
      const selectedTs = await selectedTime(number, timeout);
      return NextResponse.json({ result: selectedTs }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ result: "error" }, { status: 500 });
    }
  }

  // check EROOR
  if (/^e\d{3}$/.test(letters)) {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          switch (letters) {
            case "e404":
              resolve(NextResponse.json({ status: 404 }));
              break;
            case "e400":
              resolve(NextResponse.json({ status: 400 }));
              break;
            case "e200":
              resolve(NextResponse.json({ status: 200 }));
              break;
            case "e300":
              resolve(NextResponse.json({ status: 300 }));
              break;
            case "e500":
              resolve(NextResponse.json({ status: 500 }));
              break;
            default:
              resolve(NextResponse.json({ result: "error" }, { status: 500 }));
              break;
          }
        }, timeout * 1000);
      });
    } catch (e) {
      return NextResponse.json({ result: "error" }, { status: 500 });
    }
  }

  // oups
  return NextResponse.json({ result: "error" }, { status: 500 });
}
