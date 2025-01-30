import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '~/libs/supabase/schema'
import { getMyselfAdapter } from './adapters'

export default (client: SupabaseClient<Database>) => ({
  async getMyself(id: string) {
    const response = await client.from('profiles').select('*').eq('id', id).limit(1).single()
    const user = getMyselfAdapter(response.data)
    return user
  },

})