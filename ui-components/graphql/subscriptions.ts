/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace($filter: ModelSubscriptionRaceFilterInput) {
    onCreateRace(filter: $filter) {
      createdAt
      id
      raceDay
      raceName
      runs {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateRun = /* GraphQL */ `
  subscription OnCreateRun($filter: ModelSubscriptionRunFilterInput) {
    onCreateRun(filter: $filter) {
      actualDistance
      createdAt
      id
      pace
      plannedDistance
      race {
        createdAt
        id
        raceDay
        raceName
        updatedAt
        __typename
      }
      raceID
      runDate
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace($filter: ModelSubscriptionRaceFilterInput) {
    onDeleteRace(filter: $filter) {
      createdAt
      id
      raceDay
      raceName
      runs {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRun = /* GraphQL */ `
  subscription OnDeleteRun($filter: ModelSubscriptionRunFilterInput) {
    onDeleteRun(filter: $filter) {
      actualDistance
      createdAt
      id
      pace
      plannedDistance
      race {
        createdAt
        id
        raceDay
        raceName
        updatedAt
        __typename
      }
      raceID
      runDate
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace($filter: ModelSubscriptionRaceFilterInput) {
    onUpdateRace(filter: $filter) {
      createdAt
      id
      raceDay
      raceName
      runs {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRun = /* GraphQL */ `
  subscription OnUpdateRun($filter: ModelSubscriptionRunFilterInput) {
    onUpdateRun(filter: $filter) {
      actualDistance
      createdAt
      id
      pace
      plannedDistance
      race {
        createdAt
        id
        raceDay
        raceName
        updatedAt
        __typename
      }
      raceID
      runDate
      updatedAt
      __typename
    }
  }
`;
