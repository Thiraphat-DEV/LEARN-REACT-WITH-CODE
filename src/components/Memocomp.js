
import React from 'react'

function Memocomp({age}) {
    console.log(20)
    return (
        <div>
            {age}
        </div>
    )
}

//react.memo  ถ้าค่านั้นมีการเปลี่ยนบ่อยมากๆถึงจะสามารถดึง performant ของ react.memo ได้เต็มที่
export default React.memo(Memocomp)
