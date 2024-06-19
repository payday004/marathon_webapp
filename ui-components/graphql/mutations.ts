/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRace = /* GraphQL */ `
  mutation CreateRace(
    $condition: ModelRaceConditionInput
    $input: CreateRaceInput!
  ) {
    createRace(condition: $condition, input: $input) {
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
export const createRun = /* GraphQL */ `
  mutation CreateRun(
    $condition: ModelRunConditionInput
    $input: CreateRunInput!
  ) {
    createRun(condition: $condition, input: $input) {
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
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $condition: ModelRaceConditionInput
    $input: DeleteRaceInput!
  ) {
    deleteRace(condition: $condition, input: $input) {
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
export const deleteRun = /* GraphQL */ `
  mutation DeleteRun(
    $condition: ModelRunConditionInput
    $input: DeleteRunInput!
  ) {
    deleteRun(condition: $condition, input: $input) {
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
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $condition: ModelRaceConditionInput
    $input: UpdateRaceInput!
  ) {
    updateRace(condition: $condition, input: $input) {
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
export const updateRun = /* GraphQL */ `
  mutation UpdateRun(
    $condition: ModelRunConditionInput
    $input: UpdateRunInput!
  ) {
    updateRun(condition: $condition, input: $input) {
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
