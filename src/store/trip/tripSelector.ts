import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ITravelState } from './tripSlice'

const selectCartReducer = (state: RootState): ITravelState => state.trip

export const selectTripLists = createSelector(
  [selectCartReducer],
  trip => trip.tripList
)

export const selectPriceRange = createSelector(
  [selectCartReducer],
  trip => trip.priceRange
)

export const selectSelectedTripList = createSelector(
  [selectCartReducer],
  trip => trip.selectedtripList
)

export const searchTravelSpaceLists = createSelector(
  [selectCartReducer],
  trips => {
    const spaceList = trips.tripList.map(trip => trip.spaceCategory)
    return [...new Set(spaceList)]
  }
)

export const searchedTripLists = createSelector([selectCartReducer], travel => {
  const { searchCategory, tripList } = travel
  const { priceRange, selectSpace } = searchCategory

  const spacesortedTripList = tripList.filter(trip => {
    return selectSpace.length ? selectSpace.includes(trip.spaceCategory) : trip
  })

  return spacesortedTripList.filter(
    list => list.price >= priceRange[0] && list.price <= priceRange[1]
  )
})

// export const searchedTripListByPrice = createSelector(
//   [selectCartReducer],
//   trips => {
//     const { travelList, priceRange } = trips
//     const priceSortedTripList = travelList.filter(
//       list => list.price >= priceRange[0] && list.price <= priceRange[1]
//     )
//     return priceSortedTripList
//   }
// )

// export const searchedTripListBySpace = createSelector(
//   [selectCartReducer],
//   trips => {
//     const { travelList, selectSpace } = trips
//     const spacesortedTripList = travelList.filter(trip => {
//       return selectSpace.length
//         ? selectSpace.includes(trip.spaceCategory)
//         : trip
//     })
//     return spacesortedTripList
//   }
// )
