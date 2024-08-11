export const Events=()=>{
    const ChangeName=()=>{
       console.log("charitha")
    }
    return (
        <>
            <button onClick={ChangeName}>Click me</button>
            <button onClickCapture={ChangeName}>Click me</button>
        </>
    )
}