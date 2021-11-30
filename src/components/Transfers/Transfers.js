import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Transfers.module.css";
import { getTransfersInfo } from "../../store";
export default function Transfers() {
  const ticketsInfo = useSelector((state) => state.ticketsInfo.tickets);
  const transfersInfo = useSelector((state) => state.transfersFilter);
  const dispatch = useDispatch();

  // const fransfersRenove = transfersInfo.includes();
  // console.log(fransfersRenove);
  function addAndDeleteTransfersInfo() {}
  console.log(transfersInfo);
  return (
    <div className={styles.transfers_filter_box}>
      <form className={styles.transfers_filter_form}>
        <label htmlFor="all">
          <input
            id="all"
            type="checkbox"
            onChange={() =>
              dispatch(getTransfersInfo([...transfersInfo, "all"]))
            }
          ></input>
          Все
        </label>
        <label htmlFor="noTransfers">
          <input
            id="noTransfers"
            type="checkbox"
            onChange={() =>
              dispatch(getTransfersInfo([...transfersInfo, "noTransfers"]))
            }
          ></input>
          Без пересадок
        </label>
        <label htmlFor="oneTransfer">
          <input
            id="oneTransfer"
            type="checkbox"
            onChange={() =>
              dispatch(getTransfersInfo([...transfersInfo, "oneTransfer"]))
            }
          ></input>
          1 пересадка
        </label>
        <label htmlFor="twoTransfer">
          <input
            id="twoTransfer"
            type="checkbox"
            onChange={() =>
              dispatch(getTransfersInfo([...transfersInfo, "twoTransfer"]))
            }
          ></input>
          2 пересадки
        </label>
        <label htmlFor="threeTransfer">
          <input
            id="threeTransfer"
            type="checkbox"
            onChange={() =>
              dispatch(getTransfersInfo([...transfersInfo, "threeTransfer"]))
            }
          ></input>
          3 пересадки
        </label>
      </form>
    </div>
  );
}
