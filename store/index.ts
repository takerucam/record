/* eslint-disable no-unused-vars */
import { Database } from '@/libs/database.types'
import { create } from 'zustand'



type EditedRecord =
  Database['public']['Tables']['CustomerRecordInformation']['Row']

type EditedCustomer = Database['public']['Tables']['CustomerList']['Row']

type LoginUser = {
  id: string | undefined
  email: string | undefined
}

type State = {
  editedRecord: EditedRecord
  updateEditedRecord: (payload: EditedRecord) => void
  resetEditedRecord: () => void
  editedCustomer: EditedCustomer
  updateEditedCustomer: (payload: EditedCustomer) => void
  resetEditedCustomer: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}

const defaultCustomer: EditedCustomer = {
  address: '',
  birthday: '',
  created_at: '',
  id: '',
  memo: '',
  name: '',
  phone_number: '',
  customer_id: 0,
  user_id: '',
}

const defaultRecord: EditedRecord = {
  conversation_content: '',
  created_at: '',
  customer_id: '',
  cycle: 0,
  design_fee: 0,
  desired_design: '',
  elapsed_time: 0,
  fill: 0,
  id: '',
  others: '',
  previous_condition: '',
  primer: false,
  target: '',
  total_fee: 0,
  treatment_content: '',
  used_coupon: false,
  user_id: '',
  visit_date: '',
}

const useStore = create<State>((set) => ({
  editedRecord: defaultRecord,
  updateEditedRecord: (payload) => set({ editedRecord: payload }),
  resetEditedRecord: () => set({ editedRecord: defaultRecord }),
  editedCustomer: defaultCustomer,
  updateEditedCustomer: (payload) => set({ editedCustomer: payload }),
  resetEditedCustomer: () => set({ editedCustomer: defaultCustomer }),
  loginUser: { id: '', email: '' },
  updateLoginUser: (payload) => set({ loginUser: payload }),
  resetLoginUser: () => set({ loginUser: { id: '', email: '' } }),
}))

export default useStore

