import { Box } from "@mui/material";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";
import RequestCard from "../RequestCard/RequestCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  UserCreateRequestData,
  UserRequestData,
} from "../../interfaces/UserInterfaces";
import { fetchUserRequests } from "../../store/request/request-slice";
import { ReduxInterface } from "../../store";
import Loader from "../UI/Loader";

interface linkPath {
  linkPath: string;
}
export default function RequestsView({ linkPath }: linkPath) {
  const dispatchReq: ThunkDispatch<UserRequestData, undefined, AnyAction> =
    useDispatch();
  const [requests, setRequests] = useState([{}]);

  const fetching = useSelector(
    (state: ReduxInterface) => state.requests.fetching
  );
  const error = useSelector((state: ReduxInterface) => state.requests.error);

  useEffect(() => {
    const getRequests = async () => {
      const userId = String(localStorage.getItem("USER_ID"));
      const response = await dispatchReq(fetchUserRequests(userId));
      if (response) {
        // setRequests()
      }
      console.log(response);
    };

    getRequests();
  }, []);
  return (
    <>
      <Loader open={fetching} />
      {fetching ? "" : error ? <Box>{error}</Box> : ""}
      <Box>
        {testData.map((card) => (
          <Link key={card.id} to={`${linkPath}${card.id}`}>
            <RequestCard
              id={card.id}
              name={card.name}
              surname={card.surname}
              email={card.email}
              phone={card.phone}
              title={card.title}
              address={card.address}
              date={card.date}
              tag={card.tag}
              description={card.description}
              state={card.state}
            />
          </Link>
        ))}
      </Box>
    </>
  );
}
