import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const GutterCounter = () => {
    const dispatch = useDispatch();
    const { isMath, isCount } = useSelector((state) => state)

    const onMath = () => dispatch({ type: 'RANDOM_NUMBER', payload: isMath})
    const inMath = () => dispatch({ type: 'NEGATIVE_RAN_NUMBER', payload: (isMath) * (-1) })
  return (
    <div>
        <h2>{isCount}</h2>
        <button onClick={onMath}>Random INC</button>
        <button onClick={inMath}>Random DEC</button>
    </div>
  )
}

export default GutterCounter