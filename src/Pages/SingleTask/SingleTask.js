import React from 'react'
import Header from '../../Components/Header'
import { initialValue, useSmartContext } from '../../state/state'

export default function SingleTask() {
  const {state, dispatch} =  useSmartContext();


  return (
    <>
      <Header />
      <div className="main">
        {initialValue.tasks.map((item) => {
          <div className="singleTask" key={item.id}>
            {
              item.description
            }
          </div>;
        })}
      </div>
    </>
  );
}
