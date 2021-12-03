import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../TicketInfo/TicketInfo.module.css";
import { ticketsFilter } from "../../store";

export default function TicketInfo({ ticketsInfo }) {
  const transfersInfo = useSelector((state) => state.transfersFilter);
  const ticketsFilterFromStore = useSelector((state) => state.ticketsFilter);
  const dispatch = useDispatch();

  function filterByStops(ticket) {
    if (transfersInfo.includes("noTransfers")) {
      return (
        ticket.segments[0].stops.length === 0 &&
        ticket.segments[1].stops.length === 0
      );
    } else if (transfersInfo.includes("oneTransfer")) {
      return (
        ticket.segments[0].stops.length === 1 &&
        ticket.segments[1].stops.length === 1
      );
    } else if (transfersInfo.includes("twoTransfer")) {
      return (
        ticket.segments[0].stops.length === 2 &&
        ticket.segments[1].stops.length === 2
      );
    } else if (transfersInfo.includes("threeTransfer")) {
      return (
        ticket.segments[0].stops.length === 3 &&
        ticket.segments[1].stops.length === 3
      );
    } else return true;
  }

  function filterTickets(a, b) {
    if (ticketsFilterFromStore === "cheap") {
      return a.price - b.price;
    } else if (ticketsFilterFromStore === "fast") {
      return (
        a.segments[0].duration - b.segments[0].duration ||
        a.segments[1].duration - b.segments[1].duration
      );
    } else if (ticketsFilterFromStore === "opti") {
      return (
        a.segments[0].stops.length - b.segments[0].stops.length ||
        a.segments[1].stops.length - b.segments[1].stops.length
      );
    }
  }

  return (
    <div className={styles.ticket_box_sort_optimal}>
      <div className={styles.ticket_sort_optimal}>
        <button onClick={() => dispatch(ticketsFilter("cheap"))}>
          Самый дешевый
        </button>
        <button onClick={() => dispatch(ticketsFilter("fast"))}>
          Самый быстрый
        </button>
        <button onClick={() => dispatch(ticketsFilter("opti"))}>
          Оптимальный
        </button>
      </div>
      {ticketsInfo !== undefined
        ? ticketsInfo
            // .slice(0, 1)
            .filter((ticket) => filterByStops(ticket))
            .sort((a, b) => filterTickets(a, b))
            .map((ticket) => {
              function price() {
                const priceFull = String(ticket.price);
                const separator = " ";
                return priceFull.replace(
                  /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                  "$1" + separator
                );
              }
              function getTimeDuration(mins) {
                let hours = Math.trunc(mins / 60);
                let minutes = mins % 60;
                return hours + "ч " + minutes + "м";
              }
              function getFlightTime(flight) {
                const date = new Date(flight.date);
                let hours = date.getHours();
                let minutes = date.getMinutes();
                if (hours < 10 && minutes < 10) {
                  return "0" + hours + ":" + "0" + minutes;
                } else return date.getHours() + ":" + date.getMinutes();
              }
              return (
                <div className={styles.ticket_box}>
                  <div className={styles.ticket_box_header_info}>
                    <div className={styles.price}>{price()} P</div>
                    <div>
                      <img
                        src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
                        alt="compaly-logo"
                      />
                    </div>
                  </div>
                  <div className={styles.flight_info_box}>
                    {ticket.segments.map((flight) => {
                      return (
                        <section className={styles.flightInfo_airports}>
                          <div className={styles.info_direction}>
                            <span className={styles.info_flight_top}>
                              {flight.origin}—{flight.destination}
                            </span>
                            <div className={styles.info_flight_bottom}>
                              {getFlightTime(flight)}
                            </div>
                          </div>
                          <div className={styles.time_at_road}>
                            <span className={styles.info_flight_top}>
                              В пути:
                            </span>
                            <span className={styles.info_flight_bottom}>
                              {getTimeDuration(flight.duration)}
                            </span>
                          </div>
                          <div className={styles.stops}>
                            <span className={styles.info_flight_top}>
                              {flight.stops.length !== 0
                                ? flight.stops.length === 1
                                  ? `${flight.stops.length} Пересадка`
                                  : `${flight.stops.length} Пересадки`
                                : "Прямой рейс"}
                            </span>
                            <span className={styles.transfers}>
                              {!flight.stops.length
                                ? "DIRECT"
                                : flight.stops + "  "}
                            </span>
                          </div>
                        </section>
                      );
                    })}
                  </div>
                </div>
              );
            })
        : "Wait a little, or try again !"}
    </div>
  );
}
