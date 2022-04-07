import React from 'react'
import Header from '../../Components/Header'
import { initialValue, useSmartContext } from '../../state/state'

export default function SingleTask() {
  const {state, dispatch} =  useSmartContext();


  return (
    <>
      <Header />
     
    </>
  );
}
