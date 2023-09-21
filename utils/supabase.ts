import { Database } from "@/libs/database.types";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export default createPagesBrowserClient<Database>()

