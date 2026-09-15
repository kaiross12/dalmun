import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://jyispqvveedxjsfkjsuc.supabase.co';
const supabaseKey = 'sb_publishable_TEF36XIfs12u-MH0EKmk9A_In2Y333H';

export const supabase = createClient(supabaseUrl, supabaseKey);