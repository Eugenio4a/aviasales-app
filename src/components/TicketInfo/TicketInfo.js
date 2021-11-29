import React from "react";
import styles from "../TicketInfo/TicketInfo.module.css";
export default function TicketInfo({ ticketsInfo }) {
  return (
    <div className={styles.ticket_box_sort_optimal}>
      <div className={styles.ticket_sort_optimal}>
        <button>Самый дешевый</button>
        <button>Самый быстрый</button>
        <button>Оптимальный</button>
      </div>
      {ticketsInfo !== undefined
        ? ticketsInfo.slice(0, 10).map((ticket) => {
            function price() {
              const priceFull = String(ticket.price);
              const separator = " ";
              return priceFull.replace(
                /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                "$1" + separator
              );
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
                    // console.log("DATE1 =====>", date1, "DATE2 =====>", date2);
                    // const date1 = new Date(`${ticket.segments[0].date}`);
                    // const date2 = new Date(`${ticket.segments[1].date}`);
                    function getFlightTime(timesFlight) {
                      return timesFlight.map((time) => {
                        const date = new Date(time.date);
                        if (date.getHours() < 10 && date.getMinutes() < 10) {
                          let hours = "0" + date.getHours();
                          let minutes = "0" + date.getMinutes();
                          return hours + ":" + minutes;
                        } else return date.getHours() + ":" + date.getMinutes();
                      });
                    }

                    function getTimeDuration(mins) {
                      let hours = Math.trunc(mins / 60);
                      let minutes = mins % 60;
                      return hours + "ч " + minutes + "м";
                    }

                    return (
                      <section className={styles.flightInfo_airports}>
                        <div className={styles.info_direction}>
                          <span className={styles.info_flight_top}>
                            {flight.origin}—{flight.destination}
                          </span>
                          <div className={styles.info_flight_bottom}>
                            {getFlightTime(ticket.segments)}
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
                            {flight.stops.length} Пересадок
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
