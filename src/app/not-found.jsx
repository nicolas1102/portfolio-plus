import Link from "next/link";
import { rokkitt } from "@/app/styles/fonts";

export default function NotFound() {
  return (
    <div >
      <h1 >404 Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
