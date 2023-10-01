import React from 'react'
import SATabStyle from "./SalesActivityTab.module.css"
type Props = {}

const SalesActivityTab = (props: Props) => {
  return (
    <div className={SATabStyle.satContainer}>
      <div className={SATabStyle.headerTitleContainer}>
        <p className={SATabStyle.satTitle}>General Sales Activity</p>
      </div>
      <div className={SATabStyle.tabSATContainer}>
        <p className={SATabStyle.tabSAT}>All Time</p>
        <p className={SATabStyle.tabSAT1}>1Month</p>
        <p className={SATabStyle.tabSAT}>54 Days</p>
      </div>
    </div>
  );
}

export default SalesActivityTab