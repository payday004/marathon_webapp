import { Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useQuery } from "@tanstack/react-query";

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


      return allRaces;
    },
  });

  return <Button onClick={() => console.log({ races })}>Click me</Button>;
}

export default RaceDataTable;
