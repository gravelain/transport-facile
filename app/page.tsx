// Root page — middleware in proxy.ts always redirects / to /fr or /en before this runs
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/fr");
}
