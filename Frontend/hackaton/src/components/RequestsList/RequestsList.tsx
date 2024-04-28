import { Box } from "@mui/material";
import { testData } from "../../pages/UserWorkTable/UserWorkTable";
import RequestCard from "../RequestCard/RequestCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  UserCreateRequestData,
  UserRequestData,
} from "../../interfaces/UserInterfaces";
import { fetchUserRequests } from "../../store/request/request-slice";

interface linkPath {
  linkPath: string;
}
export default function RequestsView({ linkPath }: linkPath) {
  const dispatchReq: ThunkDispatch<UserRequestData, undefined, AnyAction> =
    useDispatch();

  useEffect(() => {
    dispatchReq(fetchUserRequests())
  }, []);
  return (
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
  );
}
