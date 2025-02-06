import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '~/libs/supabase/schema'
import { getMyselfAdapter, searchAddressByZipCodeAdapter } from './adapters'
import type { AxiosInstance } from 'axios'
import type { SearchAddressResponse } from './types'

export default (client: SupabaseClient<Database>, httpClient: AxiosInstance) => ({
  async searchAddressByZipCode(zipCode: string) {
    const url = `https://viacep.com.br/ws/${zipCode}/json/`
    const response = await httpClient.get<SearchAddressResponse>(url);
    const address = searchAddressByZipCodeAdapter(response.data)
    return {
      data: address
    }
  },

  async getMyself(id: string) {
    const response = await client.from('profiles').select('*').eq('id', id).limit(1).single()
    const user = getMyselfAdapter(response.data)
    return user
  },

})