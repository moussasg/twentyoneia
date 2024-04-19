import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Outcome() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const outcomeId = router.query.outcomeId;
  useEffect(() => {
    axios.get(`https://api-dev.twenty-one-ai.com/api/products/getproduct/${outcomeId}`) /*Second Api*/
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.data);
          console.log(outcomeId)
        }
      })  
.catch((error) => {
        console.log("Error:", error);
      })
  }, [outcomeId])

  return <div>{data?.id}</div>;
};
