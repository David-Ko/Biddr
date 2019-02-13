import React from 'react';
import FormErrors from './FormErrors';

function NewAuctionForm (props) {
    const {errors = []} = props;
    function handleSubmit (event){
        event.preventDefault();

        const { currentTarget } = event;
        const formData = new FormData(currentTarget)

        props.onSubmit(
            {
                title: formData.get('title'),
                description: formData.get('description'),
                ends_at: formData.get('ends_at'),
                reserve_price: formData.get('reserve_price')
            }
        )
    };

    return (

        <div>
            <form className="AuctionForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label> <br />
                    <FormErrors noField forField="title" errors={errors} />
                    <input name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="description">description</label> <br />
                    <FormErrors noField forField="description" errors={errors} />
                    <textarea name="description" id="description" cols="60" rows="4" />
                </div>
                <div>
                    <label htmlFor="ends_at">ends_at</label> <br />
                    <FormErrors noField forField="ends_at" errors={errors} />
                    <textarea name="ends_at" id="ends_at" placeholder="e.g. 2019-12-12" cols="60" rows="4" />
                </div>
                <div>
                    <label htmlFor="reserve_price">reserve_price</label> <br />
                    <FormErrors noField forField="reserve_price" errors={errors} />
                    <textarea name="reserve_price" id="reserve_price" placeholder="e.g. 500 (no need to use $ sign)" cols="60" rows="4" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
        </form>
      </div>
    )
};
export default NewAuctionForm;