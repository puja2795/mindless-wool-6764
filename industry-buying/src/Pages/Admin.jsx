
export const Admin = () => {

    return (

        <div>
            <form >
                <h1>Add products</h1>
                _______________________________________________________

                <br />
                <br />

                <label>Image</label>
                <input style={{border:"2px solid red"}} type="url" />

                <label>Brand</label>
                <input type="text" />

                <label>price</label>
                <input type="number" />

                <label>Description</label>
                <input type="text" />



                <div >
                    <button type="submit" >Submit</button>

                </div>
            </form>
        </div>
    )
}

