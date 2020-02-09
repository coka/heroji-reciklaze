interface Pickup {
  id: string
  address: Address
  code: string
  pickupDate: string

  // 1 created
  // 2 matched
  // 3 successful
  // 4 failed
  status: number
}
