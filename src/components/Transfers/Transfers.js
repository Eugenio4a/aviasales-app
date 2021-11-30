import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Transfers.module.css";
import { getTransfersInfo } from "../../store";
export default function Transfers() {
  const ticketsInfo = useSelector((state) => state.ticketsInfo.tickets);
  const transfersInfo = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fransfersRenove = transfersInfo.includes();
  // console.log(fransfersRenove);
  console.log(transfersInfo);
  return (
    <div className={styles.transfers_filter_box}>
      <form className={styles.transfers_filter_form}>
        <label htmlFor="all">
          <input
            id="all"
            type="checkbox"
            onChange={() => dispatch(getTransfersInfo("all"))}
          ></input>
          Все
        </label>
        <label htmlFor="noTransfers">
          <input
            id="noTransfers"
            type="checkbox"
            onChange={() => dispatch(getTransfersInfo("noTransfers"))}
          ></input>
          Без пересадок
        </label>
        <label htmlFor="oneTransfer">
          <input
            id="oneTransfer"
            type="checkbox"
            onChange={() => dispatch(getTransfersInfo("oneTransfer"))}
          ></input>
          1 пересадка
        </label>
        <label htmlFor="twoTransfer">
          <input
            id="twoTransfer"
            type="checkbox"
            onChange={() => dispatch(getTransfersInfo("twoTransfer"))}
          ></input>
          2 пересадки
        </label>
        <label htmlFor="threeTransfer">
          <input
            id="threeTransfer"
            type="checkbox"
            onChange={() => dispatch(getTransfersInfo("threeTransfer"))}
          ></input>
          3 пересадки
        </label>
      </form>
    </div>
  );
}
