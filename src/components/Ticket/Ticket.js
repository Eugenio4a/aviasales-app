import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicketsInfo } from "../../store";
import styles from "../Ticket/Ticket.module.css";

export default function Ticket() {
  const searchId = useSelector((state) => state.searchId.searchId);
  const ticketsInfo = useSelector((state) => state.ticketsInfo.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then((response) => response.json())
      .then((ticketsInfo) => dispatch(getTicketsInfo(ticketsInfo)));
  }, [dispatch, searchId]);
  console.log(ticketsInfo);

  return (
    <div>
      {ticketsInfo !== undefined
        ? ticketsInfo.map((ticket) => {
            return (
              <div className={styles.ticket_box}>
                <div>
                  <div>{ticket.price}</div>
                  <div>
                    <img
                      src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
                      alt="compaly-logo"
                    />
                  </div>
                </div>
                {ticket.segments.map((flight) => {
                  const date1 = new Date(`${ticket.segments[0].date}`);
                  const date2 = new Date(`${ticket.segments[1].date}`);
                  console.log("DATE1", date1, "DATE2", date2);
                  // if (date.getHours() < 10 && date.getMinutes() < 10) {
                  //   let hours = "0" + date.getHours();
                  //   let minutes = "0" + date.getMinutes();
                  //   return hours - 2 + ":" + (minutes - 2);
                  // } else
                  //   return (
                  //     date.getHours() - 2 + ":" + (date.getMinutes() - 2)
                  //   );

                  return (
                    <section className={styles.flightInfo}>
                      <div>
                        <div>
                          <span>
                            {flight.origin}—{flight.destination}
                          </span>
                        </div>
                        {/* <div>{getFightTime()}</div> */}
                        <div></div>
                      </div>
                    </section>
                  );
                })}
              </div>
            );
          })
        : "try again"}
    </div>
  );
}
