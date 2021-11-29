import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicketsInfo } from "../../store";
// import styles from "../Ticket/Ticket.module.css";
import TicketInfo from "../TicketInfo";
export default function Ticket() {
  const searchId = useSelector((state) => state.searchId.searchId);
  const ticketsInfo = useSelector((state) => state.ticketsInfo.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((ticketsInfo) => dispatch(getTicketsInfo(ticketsInfo)));
  }, [dispatch, searchId]);

  return (
    <div>
      <TicketInfo ticketsInfo={ticketsInfo} />
    </div>
  );
}
