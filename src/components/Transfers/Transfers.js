import React from "react";
import { useSelector } from "react-redux";
import styles from "./Transfers.module.css";
export default function Transfers() {
  const ticketsInfo = useSelector((state) => state.ticketsInfo.tickets);

  return (
    <div className={styles.transfers_filter_box}>
      <form className={styles.transfers_filter_form}>
        <label htmlFor="all">
          <input id="all" type="checkbox"></input>
          Все
        </label>
        <label htmlFor="noTransfers">
          <input id="noTransfers" type="checkbox"></input>
          Без пересадок
        </label>
        <label htmlFor="oneTransfer">
          <input id="oneTransfer" type="checkbox"></input>1 пересадка
        </label>
        <label htmlFor="twoTransfer">
          <input id="twoTransfer" type="checkbox"></input>2 пересадки
        </label>
        <label htmlFor="threeTransfer">
          <input id="threeTransfer" type="checkbox"></input>3 пересадки
        </label>
      </form>
    </div>
  );
}
