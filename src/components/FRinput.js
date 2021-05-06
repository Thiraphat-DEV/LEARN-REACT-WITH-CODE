import React from 'react'

//แบบfunction 
// function FRinput() {
//     return (
//         <div>

//             <input type="text" />
//         </div>
//     )
// }

//เเบบตัวแปร
    //สร้าง เพื่อส่งต่อให้กับ component ตัวอื่น
const FRinput = React.forwardRef((props, ref)=>{
    // ref = เพื่อรับการอ้างอิงจาก FRparentinput
    //props = ไว้รับค่าที่โยนมาจาก FRparentinput
    return (
        <div>
            <input type="text" ref={ref}/>

        </div>
    )
})


export default FRinput
