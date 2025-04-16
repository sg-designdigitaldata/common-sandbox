const BodyWrapper = () => {

    return (
        <div className="ds_wrapper">
            <div className="ds_layout__content">
                <fieldset>
                    <div className="ds_question">
                        <label className="ds_label" htmlFor="address-postcode">
                            Postcode lookup
                        </label>
                        <input className="ds_input  ds_input--fixed-10" type="text" name="address-postcode" id="address-postcode" autoComplete="postal-code" />
                    </div>
                    <button className="ds_button  ds_no-margin--top" type="submit">Find address</button>
                </fieldset>
                <p><button className="ds_link  ds_no-margin" type="button">Or type in your full address</button></p>
            </div>
        </div>
    )
}

export default BodyWrapper;