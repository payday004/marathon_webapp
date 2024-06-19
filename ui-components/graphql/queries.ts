/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
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
export const getRun = /* GraphQL */ `
  query GetRun($id: ID!) {
    getRun(id: $id) {
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
export const listRaces = /* GraphQL */ `
  query ListRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        raceDay
        raceName
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listRuns = /* GraphQL */ `
  query ListRuns(
    $filter: ModelRunFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRuns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        actualDistance
        createdAt
        id
        pace
        plannedDistance
        raceID
        runDate
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
