import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function Home() {
  async function submitForm(formData: FormData) {
    "use server";
    // Upload image to blob storage
    const imageFile = formData.get("image") as File;
    const blob = await put(imageFile.name, imageFile, {
      access: "public",
    });
    revalidatePath("/");

    // Add DB entry with image URL and form data
    const receivingWallet = formData.get("wallet") as string;
    const price = formData.get("price") as string;
    const frameInsertionResult =
      await sql`INSERT INTO FRAMES (imageurl, receivingwallet, price) VALUES (${blob.url}, ${receivingWallet}, ${price}) RETURNING *;`;
    console.log(frameInsertionResult.rows[0]);
  }

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl font-bold pb-5">Create Shop Frame</h1>
      <div className="bg-[#705ADC] p-3 w-[70rem] rounded-lg text-white">
        <div className="outline-dashed outline-1 rounded-lg">
          <form action={submitForm}>
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg font-semibold pt-10 pb-">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <input type="file" id="image" name="image" required />
              <h1>Set Wallet Address</h1>
              <input type="text" id="wallet" name="wallet"></input>
              <h1>Set Product Price in ETH</h1>
              <input type="text" id="price" name="price"></input>
              <br />
              <br />
              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
