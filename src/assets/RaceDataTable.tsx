import "@aws-amplify/ui-react/styles.css";

import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useQuery } from "@tanstack/react-query";

import {
  Table,
  TableCell,
  TableRow,
} from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

function RaceDataTable() {
  const {
    data: races,
    isLoading,
    isSuccess,
    isError: isErrorQuery,
  } = useQuery({
    queryKey: ["races"],
    queryFn: async () => {
      const response = await client.models.Race.list();

      const allRaces = response.data;

      if (!allRaces) return null;

      console.log(isLoading, isSuccess, isErrorQuery)
      return allRaces;
    },
  });

  return (
    <Table>
      {races?.map((race) => (
        <TableRow key={race.id}>
          <TableCell>{race.raceName} </TableCell>
          <TableCell>{race.raceDay} </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default RaceDataTable;
